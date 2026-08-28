type DataLayerEntry = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: DataLayerEntry[];
  }
}

export function track(event: string, details: DataLayerEntry = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer ??= [];
  window.dataLayer.push({ event, ...details });
}
