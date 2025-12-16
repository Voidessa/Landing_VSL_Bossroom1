"use client";

import { cn } from "@/lib/utils";

export const VSLContent = () => {
    return (
        <section className="bg-zinc-950 text-gray-200 py-16 md:py-24 px-4 overflow-hidden font-inter">
            <div className="mx-auto max-w-3xl space-y-20">

                {/* Step 4: Validation */}
                <div className="space-y-6">
                    <h3 className="font-oswald text-2xl md:text-3xl font-bold text-white uppercase tracking-wide border-l-4 border-red-600 pl-4">
                        4-QADAM. VA’DANI TASDIQLASH
                    </h3>
                    <div className="prose prose-invert prose-lg text-gray-400 leading-relaxed">
                        <p>
                            Siz navbatdagi “erkaklar uchun marafon”ga tushmaysiz. <br />
                            Sizga “alfa bo‘l” deb aytishmaydi. <br />
                            Sizga tez pul va ideal munosabatlar va’da qilinmaydi.
                        </p>
                        <p>
                            Siz ilgari ko‘p marta sinib ketgan bo‘lsangiz ham <strong>ishlaydigan tizimga</strong> kirasiz.
                        </p>
                        <ul className="list-none space-y-2 pl-4 border-l border-white/10">
                            <li>• Bu tizim ishlaydi, chunki u motivatsiyani talab qilmaydi.</li>
                            <li>• Hissiyotlarga bog‘lanmagan.</li>
                            <li>• Yomon kun sababli buzilib ketmaydi.</li>
                        </ul>
                        <p className="text-white font-bold text-xl italic mt-4">
                            Bu ilhom emas. Bu — algoritm.
                        </p>
                    </div>
                </div>

                {/* Step 5: Pain */}
                <div className="space-y-6">
                    <h3 className="font-oswald text-2xl md:text-3xl font-bold text-white uppercase tracking-wide border-l-4 border-red-600 pl-4">
                        5-QADAM. ASOSIY OG‘RIQ (VA MUNOSABATLAR)
                    </h3>
                    <div className="prose prose-invert prose-lg text-gray-400 leading-relaxed">
                        <p>Agar siz bu yerda bo‘lsangiz, ehtimol o‘zingizni tanigansiz.</p>
                        <ul className="space-y-3 list-disc pl-5">
                            <li>Siz erkak emas, <strong>“paçan”</strong> kabi yashayotganingizni tushunasiz.</li>
                            <li>Sportni, daromadni, rivojlanishni doim keyinga qoldirasiz.</li>
                            <li>“O‘zimga erta turaman” deysiz — va yana tushga yaqin uyg‘onasiz.</li>
                            <li>Telefon, ijtimoiy tarmoqlar, o‘yinlarda ko‘p vaqt ketadi.</li>
                            <li>Boshda xaos: uyqu, ovqat, energiya, pul — hammasi beqaror.</li>
                        </ul>
                        <p className="mt-6">Bu holat munosabatlarga ham bevosita ta’sir qiladi. Ayol quyidagilarni sezadi:</p>
                        <div className="bg-red-900/10 p-4 rounded-lg border border-red-900/20 text-red-200 text-sm md:text-base">
                            • tayanch yo‘qligini <br />
                            • ishonch o‘rniga bezovtalikni <br />
                            • kuch o‘rniga ehtiyojni
                        </div>
                        <p className="font-bold text-white mt-4">
                            Va bir payt kelib u sizni yo‘qotishdan qo‘rqmay qo‘yadi. <br />
                            <span className="text-gray-500 font-normal">Siz yomon bo‘lgani uchun emas. Sizda yig‘ilgan erkak pozitsiyasi yo‘qligi uchun.</span>
                        </p>
                    </div>
                </div>

                {/* Step 6 & 7: Tried & Why Failed */}
                <div className="space-y-6">
                    <h3 className="font-oswald text-2xl md:text-3xl font-bold text-white uppercase tracking-wide border-l-4 border-red-600 pl-4">
                        6 & 7-QADAM. SIZ NIMALARNI SINAB KO‘RGANSIZ VA NEGA BU ISHLAMADI
                    </h3>
                    <div className="prose prose-invert prose-lg text-gray-400 leading-relaxed">
                        <p>
                            Ehtimol siz allaqachon motivatsion videolar ko‘rgansiz, kurslar sotib olgansiz, 1–2 hafta rejim qilgansiz. Lekin ishlamadi. Nega?
                        </p>
                        <div className="bg-white/5 p-6 rounded-xl border-l-[6px] border-red-600">
                            <p className="text-white text-xl font-bold mb-2">MUAMMO SIZDA EMAS. MUAMMO — SXEMADA.</p>
                            <p>Yolg‘iz o‘zi o‘zgarishga urinayotgan erkak:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-300">
                                <li>Muhit yo‘q</li>
                                <li>Struktura yo‘q</li>
                                <li>Tizim bosimi yo‘q</li>
                            </ul>
                            <p className="mt-4 italic">→ Deyarli har doim orqaga qaytadi. Bu kuchsizlikdan emas. Inson — ijtimoiy mavjudot bo‘lgani uchun.</p>
                        </div>
                    </div>
                </div>

                {/* Step 8: Solution */}
                <div className="space-y-6">
                    <h3 className="font-oswald text-2xl md:text-3xl font-bold text-white uppercase tracking-wide border-l-4 border-red-600 pl-4">
                        8-QADAM. YECHIM — BOSSROOM
                    </h3>
                    <div className="prose prose-invert prose-lg text-gray-400 leading-relaxed">
                        <p>Bossroom — bu kurs ham emas, motivatsiya ham emas.</p>
                        <p>Bu joyda 30 kun ichida siz:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                            <div className="bg-zinc-900 border border-white/10 p-4 rounded flex items-center gap-3">
                                <span className="text-red-600 font-bold text-2xl">01</span>
                                <span className="font-bold text-white">Rejimni yig‘asiz</span>
                            </div>
                            <div className="bg-zinc-900 border border-white/10 p-4 rounded flex items-center gap-3">
                                <span className="text-red-600 font-bold text-2xl">02</span>
                                <span className="font-bold text-white">Tanani mustahkamlaysiz</span>
                            </div>
                            <div className="bg-zinc-900 border border-white/10 p-4 rounded flex items-center gap-3">
                                <span className="text-red-600 font-bold text-2xl">03</span>
                                <span className="font-bold text-white">Erkak tamoyillarini qurasiz</span>
                            </div>
                            <div className="bg-zinc-900 border border-white/10 p-4 rounded flex items-center gap-3">
                                <span className="text-red-600 font-bold text-2xl">04</span>
                                <span className="font-bold text-white">Harakatni boshlaysiz</span>
                            </div>
                        </div>
                        <p className="text-white font-medium">
                            Bu yerda “qattiq bo‘lish” o‘rgatilmaydi. Bu yerda yig‘ilgan, sokin va ishonchli erkak bo‘lish o‘rgatiladi. <br />
                            <span className="italic text-gray-500">Hurmat qilinadigan. Va yo‘qotishdan qo‘rqiladigan.</span>
                        </p>
                    </div>
                </div>

                {/* Step 9: Trust */}
                <div className="space-y-6">
                    <h3 className="font-oswald text-2xl md:text-3xl font-bold text-white uppercase tracking-wide border-l-4 border-red-600 pl-4">
                        9-QADAM. NEGA MENGA ISHONISH MUMKIN
                    </h3>
                    <div className="prose prose-invert prose-lg text-gray-400 leading-relaxed">
                        <p>
                            Men o‘zim ham ko‘pchilik yigitlar kabi yashaganman: rejimsiz, barqaror pulsiz, energiyasiz. <br />
                            Men o‘zimni yig‘ish yo‘lidan o‘tdim: intizom, tana, ish va mas’uliyat orqali.
                        </p>
                        <p>
                            Men bilan ishlagan yigitlar 30–60 kun ichida o‘zgargan. Motivatsiya sabab emas. Tizim paydo bo‘lgani uchun.
                        </p>
                        <div className="bg-white/5 p-4 rounded border border-white/10 text-center">
                             <p className="font-anton text-xl tracking-wide uppercase text-white">
                                Men million va’da qilmayman. <br/>
                                Men <span className="text-red-600">erkak fundamentini</span> va’da qilaman.
                             </p>
                        </div>
                    </div>
                </div>

                 {/* Step 10: Inside Bossroom */}
                 <div className="space-y-6">
                    <h3 className="font-oswald text-2xl md:text-3xl font-bold text-white uppercase tracking-wide border-l-4 border-red-600 pl-4">
                        10-QADAM. BOSSROOM ICHIDA NIMA BOR
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         {[
                            { title: "REJIM", items: ["Uyqu", "Ertalabki protokollar", "Kun strukturasi", "Energiyani boshqarish"] },
                            { title: "TANA", items: ["Zalsiz mashqlar", "Ovqatlanish", "Tiklanish", "Tana orqali intizom"] },
                            { title: "XARAKTER", items: ["Erkak tamoyillari", "Chegaralar", "Mas’uliyat", "So‘zida turish"] },
                            { title: "PUL", items: ["Daromadning asosiy modeli", "Birinchi qadamlar", "400–600$ ga chiqish"] },
                            { title: "MUHIT", items: ["Oila bosimi", "Jamiyat reaksiyasi", "Natijani ushlab qolish"] },
                            { title: "QO‘LLAB-QUVVATLASH", items: ["Tahlillar", "Javoblar", "Qo‘shimcha materiallar"] },
                         ].map((block, idx) => (
                             <div key={idx} className="bg-zinc-900/80 p-6 rounded-xl border border-white/5 hover:border-red-900/30 transition-colors">
                                 <h4 className="font-anton text-xl text-red-600 mb-4 uppercase tracking-wider">{block.title} BLOKI</h4>
                                 <ul className="space-y-2 text-gray-300 text-sm font-medium">
                                     {block.items.map((item, i) => (
                                         <li key={i} className="flex items-start gap-2">
                                             <span className="text-red-800 text-xs mt-1">■</span> {item}
                                         </li>
                                     ))}
                                 </ul>
                             </div>
                         ))}
                    </div>
                </div>
                
                 {/* Step 11: Bonuses */}
                 <div className="space-y-6">
                    <h3 className="font-oswald text-2xl md:text-3xl font-bold text-white uppercase tracking-wide border-l-4 border-red-600 pl-4">
                        11-QADAM. BONUSLAR
                    </h3>
                    <div className="bg-gradient-to-r from-red-900/20 to-black p-6 rounded-xl border border-red-900/30">
                        <ul className="space-y-3 font-medium text-lg text-white">
                             <li className="flex gap-3">
                                 <span className="text-red-500">🎁</span> “90 kunlik erkak yo‘li” chek-listi
                             </li>
                             <li className="flex gap-3">
                                 <span className="text-red-500">🎁</span> “So‘zida turish va orqaga qaytmaslik” gajdi
                             </li>
                             <li className="flex gap-3">
                                 <span className="text-red-500">🎁</span> Erkak qarorlar matritsasi
                             </li>
                             <li className="flex gap-3">
                                 <span className="text-red-500">🎁</span> “Anti-xaos” protokoli
                             </li>
                        </ul>
                    </div>
                 </div>

            </div>
        </section>
    );
};
