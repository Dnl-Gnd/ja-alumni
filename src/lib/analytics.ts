/* Analytics utility — swap console.log for GA4/Segment/Amplitude in production */

type CTALabel = string;

export function trackCTA(label: CTALabel) {
  if (typeof window === "undefined") return;
  // TODO: replace with real provider e.g. gtag("event", "cta_click", { label })
  console.log(`[Analytics] CTA click: ${label}`, { ts: Date.now() });
}

export function trackScrollDepth(sectionId: string) {
  if (typeof window === "undefined") return;
  console.log(`[Analytics] Section visible: ${sectionId}`, { ts: Date.now() });
}

export function trackRegistration(step: "start" | "complete") {
  if (typeof window === "undefined") return;
  console.log(`[Analytics] Registration ${step}`, { ts: Date.now() });
}

export function setupScrollTracking() {
  if (typeof window === "undefined") return;
  const sectionIds = ["hero", "valor", "soy-ja", "participa", "global", "segmentacion", "final-cta"];
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          trackScrollDepth(entry.target.id);
        }
      });
    },
    { threshold: 0.4 }
  );
  sectionIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
  return () => observer.disconnect();
}
