"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

import { SmoothScroll } from "@/components/ui/SmoothScroll";

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <LanguageProvider>
            <SmoothScroll />
            <LanguageSwitcher />
            {children}
        </LanguageProvider>
    );
};
