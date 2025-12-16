"use client";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function AnalyticsProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sentScroll = useRef<Set<number>>(new Set());

  // Track Page View
  useEffect(() => {
    const trackView = async () => {
       try {
         const utmSource = searchParams.get("utm_source");
         const utmMedium = searchParams.get("utm_medium");
         const utmCampaign = searchParams.get("utm_campaign");
         const utmContent = searchParams.get("utm_content");

         await fetch("/api/analytics", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                event: "page_view",
                data: {
                    url: pathname,
                    screenWidth: window.innerWidth,
                    userAgent: navigator.userAgent,
                    utmSource,
                    utmMedium,
                    utmCampaign,
                    utmContent
                }
            })
         });
       } catch (e) {
         console.error(e);
       }
    };
    trackView();
    // Reset scroll tracking on page change
    sentScroll.current.clear();
  }, [pathname, searchParams]);

  // Track Scroll Depth
  useEffect(() => {
    const handleScroll = () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPosition = window.scrollY;
        const percentage = (scrollPosition / totalHeight) * 100;

        const checkpoints = [25, 50, 75, 90];
        
        checkpoints.forEach(point => {
            if (percentage >= point && !sentScroll.current.has(point)) {
                sentScroll.current.add(point);
                // Fire event
                fetch("/api/analytics", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        event: `scroll_${point}%`,
                        data: {
                            url: pathname,
                            screenWidth: window.innerWidth,
                            userAgent: navigator.userAgent
                        }
                    })
                 }).catch(() => {});
            }
        });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <>
      {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
      
      {/* Meta Pixel */}
      {process.env.NEXT_PUBLIC_FB_PIXEL_ID && (
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL_ID}');
            fbq('track', 'PageView');
            `,
          }}
        />
      )}

      {/* Yandex Metrica */}
      {process.env.NEXT_PUBLIC_YANDEX_METRICA_ID && (
         <Script
            id="yandex-metrica"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
             __html: `
               (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
               m[i].l=1*new Date();
               for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
               k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
               (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

               ym(${process.env.NEXT_PUBLIC_YANDEX_METRICA_ID}, "init", {
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
               });
             `
            }}
         />
      )}
    </>
  );
}
