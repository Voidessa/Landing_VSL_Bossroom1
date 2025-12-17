"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

interface YouTubeEmbedProps {
  videoId: string;
  className?: string;
}

export function YouTubeEmbed({ videoId, className }: YouTubeEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const progressLogged = useRef<Set<number>>(new Set());

  useEffect(() => {
    // Load YouTube IFrame API if not already loaded
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    const initPlayer = () => {
      if (!containerRef.current) return;
      
      // Clean up existing player if any (though usually this effect runs once)
      if (playerRef.current) return;

      playerRef.current = new window.YT.Player(containerRef.current, {
        height: "100%",
        width: "100%",
        videoId: videoId,
        playerVars: {
          autoplay: 0,
          rel: 0,
          modestbranding: 1,
        },
        events: {
          onStateChange: handleStateChange,
        },
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = () => {
        initPlayer();
      };
    }

    // Cleanup interval if component unmounts
    const progressInterval = setInterval(checkProgress, 1000);

    return () => {
      clearInterval(progressInterval);
      // We generally don't destroy the player on unmount to avoid UI flickers if navigating, 
      // but in this case specific app logic applies
    };
  }, [videoId]);

  const handleStateChange = (event: any) => {
    // YT.PlayerState: -1 (unstarted), 0 (ended), 1 (playing), 2 (paused), 3 (buffering), 5 (video cued)
    const state = event.data;
    
    if (state === 1) { // Playing
      trackEvent("video_play", { videoId });
    } else if (state === 2) { // Paused
      trackEvent("video_pause", { videoId, time: playerRef.current?.getCurrentTime() });
    } else if (state === 0) { // Ended
      trackEvent("video_complete", { videoId });
    }
  };

  const checkProgress = () => {
    if (!playerRef.current || typeof playerRef.current.getCurrentTime !== "function") return;

    const currentTime = playerRef.current.getCurrentTime();
    const duration = playerRef.current.getDuration();
    if (!duration) return;

    const percent = (currentTime / duration) * 100;
    const checkpoints = [25, 50, 75, 90];

    checkpoints.forEach((point) => {
      if (percent >= point && !progressLogged.current.has(point)) {
        progressLogged.current.add(point);
        trackEvent(`video_progress_${point}%`, { videoId });
      }
    });
  };

  return (
    <div className={className}>
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
}
