export const trackEvent = async (event: string, data: Record<string, any> = {}) => {
  if (typeof window === "undefined") return;

  try {
    // Generate or retrieve Session ID
    let sessionId = sessionStorage.getItem("analytics_session_id");
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      sessionStorage.setItem("analytics_session_id", sessionId);
    }

    const searchParams = new URLSearchParams(window.location.search);
    
    const payload = {
      event,
      data: {
        sessionId,
        url: window.location.pathname,
        referrer: document.referrer || "",
        language: navigator.language || "unknown",
        screenWidth: window.innerWidth,
        userAgent: navigator.userAgent,
        utmSource: searchParams.get("utm_source") || "",
        utmMedium: searchParams.get("utm_medium") || "",
        utmCampaign: searchParams.get("utm_campaign") || "",
        utmContent: searchParams.get("utm_content") || "",
        ...data // specific data overrides
      }
    };

    await fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
  } catch (error) {
    console.error("Analytics Error:", error);
  }
};
