"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Snowflake {
    id: number;
    x: number;
    delay: number;
    duration: number;
    size: number;
    opacity: number;
}

export const Snowfall = () => {
    const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

    useEffect(() => {
        // Generate snowflakes only on client side to avoid hydration mismatch
        const count = 30; // Optimized count for performance
        const newSnowflakes = Array.from({ length: count }).map((_, i) => ({
            id: i,
            x: Math.random() * 100, // percentage
            delay: Math.random() * 10, // delay in seconds
            duration: Math.random() * 10 + 10, // duration between 10-20s for slow fall
            size: Math.random() * 4 + 2, // size between 2px-6px
            opacity: Math.random() * 0.5 + 0.4, // increased opacity for dark particles
        }));
        setSnowflakes(newSnowflakes);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[50] overflow-hidden">
            {snowflakes.map((flake) => (
                <motion.div
                    key={flake.id}
                    className="absolute bg-zinc-900 border border-zinc-800/50 rounded-none shadow-sm" // Black/Dark, Square, Brutal
                    style={{
                        left: `${flake.x}%`,
                        width: flake.size,
                        height: flake.size,
                        opacity: flake.opacity,
                    }}
                    initial={{ y: -20, x: 0 }}
                    animate={{
                        y: ["-10vh", "110vh"],
                        x: [0, Math.random() * 40 - 20], // Slight sway left/right
                    }}
                    transition={{
                        y: {
                            duration: flake.duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: flake.delay,
                        },
                        x: {
                            duration: flake.duration / 2, // Sway faster than fall
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                        },
                    }}
                />
            ))}
        </div>
    );
};
