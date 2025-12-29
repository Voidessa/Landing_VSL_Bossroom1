"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { UserPlus, Zap, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

type NotificationType = "join" | "payment" | "action";

interface Notification {
    name: string;
    action: string;
    type: NotificationType;
}

const NOTIFICATIONS: Notification[] = [
    { name: "Aziz R.", action: "присоединился к Bossroom", type: "join" },
    { name: "Jamshid K.", action: "оплатил участие", type: "payment" },
    { name: "Sardor M.", action: "стал участником", type: "join" },
    { name: "Bekzod T.", action: "продлил подписку", type: "payment" },
    { name: "Otabek A.", action: "начал обучение", type: "action" },
    { name: "Farrukh S.", action: "присоединился к сообществу", type: "join" },
    { name: "Shakhzod U.", action: "получил доступ", type: "action" },
    { name: "Jasur N.", action: "вступил в клуб", type: "join" },
    { name: "Ulughbek I.", action: "оплатил доступ", type: "payment" },
    { name: "Bobur D.", action: "присоединился к Bossroom", type: "join" },
    { name: "Sanjar Q.", action: "оплатил участие", type: "payment" },
    { name: "Firdavs X.", action: "стал участником", type: "join" },
];

export function SocialProofNotifications() {
    const { t } = useLanguage();
    const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);

    // Uzbek names database
    const firstNames = [
        "Aziz", "Jamshid", "Sardor", "Bekzod", "Otabek", "Farrukh", "Shakhzod", "Jasur", "Ulughbek",
        "Bobur", "Sanjar", "Firdavs", "Akmal", "Botir", "Dilshod", "Eldor", "Javlon", "Kamron",
        "Mansur", "Nodir", "Oybek", "Qobil", "Ravshan", "Sherzod", "Temur", "Umid", "Vali",
        "Xurshid", "Yusuf", "Zafar", "Abror", "Bilol", "Davron", "Ghayrat", "Hikmat", "Ilhom",
        "Jalol", "Komil", "Laziz", "Mirzod", "Nurbek", "Olim", "Polat", "Rustam", "Salim",
        "Tohir", "Usmon", "Vohid", "Xayrulla", "Yoqub", "Zohid"
    ];

    const lastInitials = [
        "A.", "B.", "D.", "E.", "F.", "G.", "H.", "I.", "J.", "K.", "L.", "M.", "N.", "O.", "P.",
        "Q.", "R.", "S.", "T.", "U.", "V.", "X.", "Y.", "Z.", "Sh.", "Ch."
    ];

    const actions = [
        { key: "payment", type: "payment" },
    ] as const;

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        let hideTimeoutId: NodeJS.Timeout;

        const scheduleNext = () => {
            const interval = Math.floor(Math.random() * (12000 - 5000 + 1)) + 5000;

            timeoutId = setTimeout(() => {
                // Generate random data on the fly
                const randomName = firstNames[Math.floor(Math.random() * firstNames.length)];
                const randomInitial = lastInitials[Math.floor(Math.random() * lastInitials.length)];
                const randomAction = actions[Math.floor(Math.random() * actions.length)];

                setCurrentNotification({
                    name: `${randomName} ${randomInitial}`,
                    action: randomAction.key,
                    type: randomAction.type
                });

                const duration = Math.floor(Math.random() * (5000 - 4000 + 1)) + 4000;

                hideTimeoutId = setTimeout(() => {
                    setCurrentNotification(null);
                    scheduleNext();
                }, duration);

            }, interval);
        };

        scheduleNext();

        return () => {
            clearTimeout(timeoutId);
            clearTimeout(hideTimeoutId);
        };
    }, []);

    return (
        <div className="fixed bottom-6 left-6 z-[100] flex flex-col items-start gap-2 pointer-events-none">
            <AnimatePresence mode="wait">
                {currentNotification && (
                    <motion.div
                        key="notification"
                        initial={{ opacity: 0, y: 20, scale: 0.95, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: 20, scale: 0.95, filter: "blur(5px)" }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} // Elegant spring-like ease
                        className={cn(
                            "pointer-events-auto",
                            "flex items-center gap-4",
                            "pl-4 pr-6 py-3",
                            "bg-[#050505] backdrop-blur-xl", // Darker background
                            "border border-red-600/50", // Red border
                            "rounded-none", // Sharp corners
                            "shadow-[0_0_20px_rgba(220,38,38,0.2)]", // Red glow shadow
                            "min-w-[260px]",
                            "group cursor-default select-none",
                            "hover:border-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-all duration-300" // Interactive hover
                        )}
                    >
                        {/* Angular decorative corner */}
                        <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t border-l border-red-500" />
                        <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b border-r border-red-500" />
                        {/* Icon Container with Glow */}
                        <div className={cn(
                            "relative flex items-center justify-center w-10 h-10 rounded-full",
                            "bg-gradient-to-b from-white/10 to-white/5",
                            "border border-white/10",
                            "shadow-inner shadow-white/5"
                        )}>
                            {/* Glow effect behind icon */}
                            <div className="absolute inset-0 bg-red-500/20 blur-lg rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                            {currentNotification.type === "payment" ? (
                                <Zap className="w-5 h-5 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                            ) : (
                                <UserPlus className="w-5 h-5 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                            )}
                        </div>

                        {/* Text Content */}
                        <div className="flex flex-col gap-0.5">
                            <span className="text-[14px] font-bold text-white tracking-wide leading-tight font-inter">
                                {currentNotification.name}
                            </span>
                            <span className="text-[12px] text-white/50 font-medium leading-tight">
                                {/* @ts-ignore - dynamic key access */}
                                {t.social_proof[currentNotification.action]}
                            </span>
                        </div>

                        {/* Subtle Green Dot for 'Live' feel or just decoration */}
                        <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-emerald-500/50 animate-pulse" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
