"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

export const VSLOffer = () => {
    return (
        <section id="offer" className="bg-black text-white py-16 md:py-24 px-4 overflow-hidden relative border-t border-white/10 font-inter">
            <div className="mx-auto max-w-2xl space-y-16 text-center z-10 relative">

                {/* 12. Qiymat */}
                <div className="space-y-6">
                    <h3 className="font-oswald text-xl md:text-2xl font-bold tracking-[0.2em] text-red-600 uppercase">12-QADAM. QIYMAT</h3>
                    <div className="bg-zinc-900/30 p-6 rounded-xl border border-white/5 inline-block">
                        <p className="text-gray-400 mb-4 font-medium">Agar buni alohida yig‘sangiz:</p>
                        <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base text-white font-medium">
                            <span className="px-4 py-2 border border-white/10 rounded-full">Murabbiy</span>
                            <span className="px-4 py-2 border border-white/10 rounded-full">Mentor</span>
                            <span className="px-4 py-2 border border-white/10 rounded-full">Kurslar</span>
                            <span className="px-4 py-2 border border-white/10 rounded-full">Tahlillar</span>
                            <span className="px-4 py-2 border border-white/10 rounded-full">Hamjamiyat</span>
                        </div>
                        <p className="text-2xl md:text-3xl font-anton mt-6">
                            Kamida <span className="text-red-500 strike-through line-through opacity-70 decoration-red-500/50">300–600$</span> chiqadi.
                        </p>
                    </div>
                </div>

                {/* 13. Narx ($15) */}
                <div className="space-y-6 transform hover:scale-105 transition-transform duration-500">
                    <h3 className="font-oswald text-xl md:text-2xl font-bold tracking-[0.2em] text-red-600 uppercase">13-QADAM. NARX</h3>
                    <div className="bg-gradient-to-b from-zinc-900 to-black p-10 rounded-3xl border border-red-900/50 shadow-[0_0_60px_rgba(220,38,38,0.2)]">
                        <p className="text-gray-400 mb-2 uppercase tracking-wide text-sm font-bold">Hozir Bossroom narxi:</p>
                        <div className="flex items-baseline justify-center gap-2 mb-6">
                            <span className="font-anton text-7xl md:text-8xl text-white">15$</span>
                            <span className="text-xl font-medium text-gray-500">dan</span>
                        </div>
                        <div className="text-base md:text-lg text-gray-300 space-y-2 font-medium">
                            <p>Siz kurs uchun emas to‘laysiz.</p>
                            <p>Siz yana sinib ketishga yo‘l qo‘ymaydigan <span className="text-white font-bold underline decoration-red-500">muhit</span> uchun to‘laysiz.</p>
                        </div>
                    </div>
                </div>

                {/* 14. Cheklov */}
                <div className="space-y-4">
                    <h3 className="font-oswald text-xl md:text-2xl font-bold tracking-[0.2em] text-red-600 uppercase">14-QADAM. CHEKLOV</h3>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
                        Bossroom bosqichma-bosqich ochiladi.<br />
                        Sifat va qo‘llab-quvvatlashni saqlash uchun <br/>
                        <span className="text-red-500 font-bold bg-red-900/10 px-3 py-1 rounded inline-block mt-2 border border-red-900/30">JOYLAR CHEKLANGAN</span>
                    </p>
                </div>

                {/* 15. Kafolat */}
                <div className="space-y-4">
                    <h3 className="font-oswald text-xl md:text-2xl font-bold tracking-[0.2em] text-red-600 uppercase">15-QADAM. KAFOLAT</h3>
                    <div className="bg-green-900/10 border border-green-500/30 p-6 rounded-xl inline-block shadow-[0_0_30px_rgba(34,197,94,0.1)]">
                        <p className="text-green-400 font-medium text-lg">
                            Agar siz 14 kun halol bajarib,<br/> o‘zgarish ko‘rmasangiz — <span className="text-white font-bold underline decoration-green-500">pulingiz qaytariladi</span>.
                        </p>
                    </div>
                </div>

                {/* 16. CTA */}
                <div className="space-y-8 pt-12">
                    <h3 className="font-oswald text-xl md:text-2xl font-bold tracking-[0.2em] text-red-600 uppercase animate-pulse">
                        16-QADAM. HARAKATGA CHAQIRUV
                    </h3>
                    <p className="text-xl md:text-2xl font-bold text-white max-w-xl mx-auto leading-normal">
                        Agar yaqin 30 kun ichida o‘zingizni yig‘ishga tayyor bo‘lsangiz —<br />
                        tugmani bosing va Bossroom’ga kiring.
                    </p>

                    <Link
                        href="https://t.me/aurumai_second_bot"
                        target="_blank"
                        onClick={() => trackEvent("click_cta_bossroom")}
                        className="group relative inline-flex w-full items-center justify-center rounded-xl bg-red-600 px-8 py-6 text-2xl md:text-3xl font-anton text-white shadow-[0_0_40px_rgba(220,38,38,0.6)] transition-all hover:bg-red-700 hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(220,38,38,0.8)] active:scale-95"
                    >
                        <span className="relative z-10">BOSSROOM’GA KIRISH</span>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </Link>

                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                        *Tugmani bosganda siz to'g'ridan-to'g'ri bo'tga o'tasiz
                    </p>
                </div>

                {/* PS */}
                <div className="space-y-6 pt-12 border-t border-white/5 mt-12 text-left md:text-center">
                     <h4 className="font-anton text-4xl text-white/20">P.S.</h4>
                     <div className="space-y-4 text-lg text-gray-400 font-medium">
                         <p>Agar kirmasangiz — hech narsa buzilmaydi. Hammasi hozirgidek qoladi.</p>
                         <p className="text-white text-xl">
                             Agar kirsangiz — <br/>
                             <span className="text-red-500">30 kundan keyin farqni o‘zingiz ko‘rasiz.</span>
                         </p>
                     </div>
                </div>

            </div>

            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-red-900/10 via-zinc-950 to-black pointer-events-none"></div>
        </section>
    );
};
