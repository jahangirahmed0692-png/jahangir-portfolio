/**
 * Receives the homepage contact form and emails it to Jahangir via Resend.
 *
 * Vercel environment variables:
 * - RESEND_API_KEY   (required) API key from resend.com
 * - LEAD_TO_EMAIL    (optional) inbox for new leads; defaults to the site email
 * - LEAD_FROM_EMAIL  (optional) verified sender; defaults to Resend's shared test sender,
 *                    which can only deliver to the Resend account owner's own email.
 *
 * Without RESEND_API_KEY the route answers 503 and the form shows the email address instead.
 */

const fallbackTo = "jahangirahmed0692@gmail.com";
const fallbackFrom = "Website leads <onboarding@resend.dev>";

const fields = ["name", "email", "website", "spend", "platform", "problem", "snapshot", "path"] as const;
type Lead = Record<(typeof fields)[number], string>;

const limits: Record<keyof Lead, number> = {
  name: 120, email: 200, website: 300, spend: 60, platform: 60, problem: 3000, snapshot: 1200, path: 60,
};

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field.
  if (typeof body.company_url === "string" && body.company_url.trim()) {
    return Response.json({ ok: true });
  }

  const lead = Object.fromEntries(
    fields.map((key) => [key, typeof body[key] === "string" ? (body[key] as string).trim().slice(0, limits[key]) : ""]),
  ) as Lead;

  if (!lead.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email) || !lead.problem) {
    return Response.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const rows: [string, string][] = [
    ["Name", lead.name],
    ["Email", lead.email],
    ["Website", lead.website || "-"],
    ["Monthly ad spend", lead.spend || "-"],
    ["Platforms", lead.platform || "-"],
    ["Business type", lead.path || "-"],
    ["What's going on", lead.problem],
    ["Lead Leak Check snapshot", lead.snapshot || "-"],
  ];

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n\n");
  const html = `<h2 style="font-family:sans-serif">New enquiry from jahangirahmed.com</h2><table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">${rows
    .map(([k, v]) => `<tr><td style="padding:8px 14px 8px 0;vertical-align:top;color:#555;white-space:nowrap">${k}</td><td style="padding:8px 0;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`)
    .join("")}</table>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.LEAD_FROM_EMAIL || fallbackFrom,
      to: [process.env.LEAD_TO_EMAIL || fallbackTo],
      reply_to: lead.email,
      subject: `New website enquiry: ${lead.name}${lead.spend ? ` (${lead.spend}/mo)` : ""}`,
      text,
      html,
    }),
  });

  if (!res.ok) {
    console.error("Lead email failed", res.status, await res.text().catch(() => ""));
    return Response.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
