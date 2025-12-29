"use client";

import { cn } from "@/lib/utils";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { useLanguage } from "@/context/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();

  if (!t || !t.hero) {
    return null;
  }

  return (
    <section className="relative flex flex-col items-center justify-start pt-16 md:pt-24 pb-12 overflow-hidden bg-[#050505] px-4 text-center">

      {/* Top Badge Decoration (Visual only) */}
      <div className="absolute top-0 left-0 right-0 flex justify-center pt-4 opacity-50 pointer-events-none">
        <div className="bg-red-900/20 border border-red-900/50 rounded-full px-4 py-1">
          <span className="text-red-500 text-[10px] md:text-xs font-oswald uppercase tracking-[0.2em] font-bold animate-pulse">
            {t.hero.badge}
          </span>
        </div>
      </div>

      <div className="z-10 mx-auto max-w-5xl space-y-10 md:space-y-14 w-full relative">

        {/* Offer Section */}
        <div className="space-y-6 animate-fade-in-up opacity-0 [animation-fill-mode:forwards]">
          <h1 className="font-oswald italic text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.9] tracking-tight mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-300 via-white to-zinc-400 drop-shadow-sm pr-2">
              {t.hero.title_prefix}
            </span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-600 drop-shadow-[0_0_30px_rgba(220,38,38,0.7)] pr-2">
              {t.hero.title_highlight}
            </span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-300 via-white to-zinc-400 drop-shadow-sm pr-2">
              {t.hero.title_suffix}
            </span>
          </h1>
          <p className="font-inter text-gray-400 max-w-2xl mx-auto text-base md:text-xl leading-relaxed font-light">
            {t.hero.description} <br />
            <span className="text-white font-medium border-b border-red-900/50 pb-1">{t.hero.description_bold}</span>
          </p>
        </div>

        {/* VSL Player */}
        <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(220,38,38,0.25)] border-2 border-red-900/30 animate-fade-in-up opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards] bg-zinc-900/50 relative group max-w-5xl mx-auto backdrop-blur-sm">
          <YouTubeEmbed videoId="39EbnNBVUWk" className="absolute inset-0 w-full h-full" />

          {/* Decorative Corner Accents */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-red-600/50 rounded-tl-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-red-600/50 rounded-br-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

      </div>

      {/* Background Ambience */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-[#050505] to-[#050505] opacity-80 pointer-events-none blur-3xl"></div>
    </section>
  );
};
