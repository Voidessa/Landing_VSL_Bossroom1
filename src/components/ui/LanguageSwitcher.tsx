"use client";

import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();

    const languages = [
        { code: 'uz', label: 'UZ' },
        { code: 'ru', label: 'RU' },
        { code: 'en', label: 'EN' },
    ] as const;

    return (
        <div className="fixed top-4 right-4 z-50 flex items-center gap-1 bg-black/50 backdrop-blur-md rounded-full p-1 border border-white/10 shadow-lg">
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={cn(
                        "px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300",
                        language === lang.code
                            ? "bg-red-600 text-white shadow-md shadow-red-900/20"
                            : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
                    )}
                >
                    {lang.label}
                </button>
            ))}
        </div>
    );
};
