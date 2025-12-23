"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="faq-section" className="bg-[#050505] border-t border-zinc-900/50 pt-20 pb-12 text-center relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-red-900/10 blur-[100px] pointer-events-none" />

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 mb-20 relative z-10">
        <h2 className="font-oswald italic text-3xl md:text-5xl font-bold text-white mb-12 tracking-wide uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          {t.faq.title}
        </h2>

        <Accordion type="single" collapsible className="w-full text-left grid gap-4">
          {t.faq.items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-white/5 rounded-xl px-6 bg-[#0A0A0A] hover:bg-[#0F0F0F] hover:border-red-900/30 transition-all duration-300 group"
            >
              <AccordionTrigger className="text-gray-200 font-oswald italic uppercase tracking-wider text-lg md:text-xl py-6 hover:no-underline group-data-[state=open]:text-red-500 transition-colors">
                <span className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-600/50 group-hover:bg-red-500 transition-colors" />
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 font-inter text-base leading-relaxed pb-6 pl-5 border-l border-white/5 ml-1 whitespace-pre-wrap">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="space-y-4 relative z-10 opacity-60">
        <div className="w-12 h-[1px] bg-zinc-800 mx-auto mb-6" />
        <p className="text-sm font-oswald uppercase tracking-[0.2em] text-zinc-600">{t.faq.copyright_prefix} {new Date().getFullYear()}</p>
        <p className="text-[10px] text-zinc-700 font-inter">{t.faq.copyright_suffix}</p>
      </div>
    </footer>
  );
};
