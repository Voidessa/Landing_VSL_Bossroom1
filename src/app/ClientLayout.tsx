"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { SocialProofNotifications } from "@/components/ui/SocialProofNotifications";
import { Snowfall } from "@/components/ui/Snowfall";

import { SmoothScroll } from "@/components/ui/SmoothScroll";

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <LanguageProvider>
            <SmoothScroll />
            <Snowfall />
            <LanguageSwitcher />
            <SocialProofNotifications />
            {children}
        </LanguageProvider>
    );
};
