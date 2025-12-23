"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, HelpCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const ActionButtons = () => {
    const { t } = useLanguage();

    const scrollToFAQ = () => {
        const faqSection = document.getElementById("faq-section");
        if (faqSection) {
            faqSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-8 space-y-8 md:space-y-10 flex flex-col items-center relative z-20">
            {/* Payment Button - Primary CTA */}
            <Link
                href="https://t.me/aurumai_second_bot"
                className="group relative w-full md:w-auto"
            >
                {/* Glow Effect behind button */}
                <div className="absolute -inset-1 rounded-xl bg-red-600 opacity-60 blur-lg transition duration-1000 group-hover:opacity-100 group-hover:duration-200 animate-pulse" />

                <button className="relative w-full md:w-[480px] flex items-center justify-center gap-3 rounded-xl bg-gradient-to-b from-red-500 to-red-700 px-6 py-6 md:py-8 text-xl md:text-3xl font-oswald italic font-bold uppercase tracking-wider text-white shadow-[0_10px_40px_rgba(220,38,38,0.4)] border-t border-red-400/50 transition-all hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(220,38,38,0.6)] active:scale-[0.98]">
                    <span className="drop-shadow-sm">{t.actions.payment}</span>
                    <ArrowRight className="h-6 w-6 md:h-8 md:w-8 text-white drop-shadow-md group-hover:translate-x-1 transition-transform" />
                </button>
            </Link>

            {/* Bossroom Info Button - Secondary CTA */}
            <Link
                href="https://site-for-bossroom-2.vercel.app"
                className="group relative w-full md:w-auto"
            >
                <button className="relative w-full md:w-[480px] flex items-center justify-center gap-3 rounded-xl bg-black border border-white/10 px-6 py-4 md:py-6 text-lg md:text-2xl font-oswald italic font-bold uppercase tracking-wider text-zinc-300 transition-all hover:text-white hover:bg-zinc-900 hover:border-red-900/50 hover:scale-[1.02] active:scale-[0.98]">
                    <span className="drop-shadow-sm">{t.actions.bossroom}</span>
                </button>
            </Link>

            {/* Scale/Social Proof Text below button (Optional but fits optimization) */}
            <div className="text-zinc-500 text-xs md:text-sm font-inter flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span className="uppercase tracking-widest">{t.actions.limited_access}</span>
            </div>

            {/* FAQ Button - Minimalist */}
            <button
                onClick={scrollToFAQ}
                className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors duration-300 text-sm md:text-base uppercase tracking-widest font-oswald"
            >
                <span>{t.actions.faq}</span>
                <HelpCircle className="h-4 w-4 group-hover:text-red-500 transition-colors" />
            </button>
        </div>
    );
};
