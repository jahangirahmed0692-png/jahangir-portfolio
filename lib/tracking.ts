declare global { interface Window { dataLayer?: Record<string, unknown>[] } }
export function track(event:string, details:Record<string, unknown> = {}) {
  if (typeof window !== "undefined" && Array.isArray(window.dataLayer)) window.dataLayer.push({ event, ...details });
}
