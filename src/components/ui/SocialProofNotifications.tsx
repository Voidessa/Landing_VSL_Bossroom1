"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { UserPlus, Zap, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type NotificationType = "join" | "payment" | "action";

interface Notification {
    name: string;
    action: string;
    type: NotificationType;
}

const NOTIFICATIONS: Notification[] = [
    { name: "Алексей В.", action: "присоединился к Bossroom", type: "join" },
    { name: "Иван Д.", action: "оплатил участие", type: "payment" },
    { name: "Елена К.", action: "стала участником", type: "join" },
    { name: "Дмитрий С.", action: "продлил подписку", type: "payment" },
    { name: "Максим Р.", action: "начал обучение", type: "action" },
    { name: "Ольга М.", action: "присоединилась к сообществу", type: "join" },
    { name: "Андрей П.", action: "получил доступ", type: "action" },
    { name: "Сергей Б.", action: "вступил в клуб", type: "join" },
    { name: "Николай Ф.", action: "оплатил доступ", type: "payment" },
];

export function SocialProofNotifications() {
    const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        let hideTimeoutId: NodeJS.Timeout;

        const scheduleNext = () => {
            // Random interval between 5 and 12 seconds (5000 - 12000ms)
            const interval = Math.floor(Math.random() * (12000 - 5000 + 1)) + 5000;

            timeoutId = setTimeout(() => {
                const randomNotif = NOTIFICATIONS[Math.floor(Math.random() * NOTIFICATIONS.length)];
                setCurrentNotification(randomNotif);

                // Show for 4-5 seconds
                const duration = Math.floor(Math.random() * (5000 - 4000 + 1)) + 4000;

                hideTimeoutId = setTimeout(() => {
                    setCurrentNotification(null);
                    scheduleNext(); // Schedule the next one after hiding
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
                            "bg-[#0A0A0A]/80 backdrop-blur-md", // Deep dark glass
                            "border border-white/5", // Very subtle border
                            "rounded-xl",
                            "shadow-[0_8px_32px_rgba(0,0,0,0.5)]", // Deep shadow
                            "min-w-[260px]",
                            "group cursor-default select-none"
                        )}
                    >
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
                                {currentNotification.action}
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
