import { cn } from "@/lib/utils";

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-4 py-8 md:py-16 text-center">
      <div className="z-10 mx-auto max-w-4xl space-y-6 md:space-y-10">
        
        {/* Step 1: Audience Appeal */}
        <div className="space-y-4 animate-fade-in-up opacity-0 [animation-fill-mode:forwards]">
            <h2 className="font-oswald text-base md:text-xl font-bold tracking-[0.1em] text-red-600 uppercase border-b border-red-900/50 inline-block pb-1 mb-4">
              1-QADAM. AUDITORIYAGA MUROJAAT
            </h2>
            <div className="font-inter text-gray-300 text-sm md:text-lg space-y-4 max-w-2xl mx-auto leading-relaxed">
              <p>
                Agar siz O‘zbekiston yoki MDHdan bo‘lgan yigit bo‘lsangiz va o‘zingizni shunday holatda ushlab qolsangizki, 
                <span className="text-white font-bold ml-1">hayotingizni boshqacha yashash mumkin edi, lekin hozir unday emas</span> —
              </p>
              <ul className="text-left md:text-center space-y-2 text-gray-400 italic bg-zinc-900/50 p-4 rounded-lg border border-white/5">
                <li>• agar boshingizda doimiy <span className="text-white">“dushanbadan boshlayman”</span> bo‘lsa,</li>
                <li>• agar munosabatlarda kuch emas, <span className="text-white">ichki bezovtalik</span> sezsangiz,</li>
                <li>• agar o‘zingizga va atrofdagilarning sizga bo‘lgan <span className="text-white">hurmati asta-sekin yo‘qolayotgandek</span> tuyulsa —</li>
              </ul>
              <p className="font-bold text-white text-lg md:text-xl pt-2">
                BU SAHIFA SIZ UCHUN.
              </p>
              <p className="text-gray-400">
                Siz kuchsiz emassiz. <br/>
                Siz shunchaki <span className="text-red-500 font-bold">tizimsiz</span> yashayapsiz.
              </p>
            </div>
        </div>

        {/* Step 2: Big Promise (Offer) */}
        <div className="space-y-4 animate-fade-in-up opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards] border-yt border-white/10 pt-8 mt-8">
             <h2 className="font-oswald text-base md:text-xl font-bold tracking-[0.1em] text-red-600 uppercase mb-2">
                2-QADAM. KATTA VA’DA (OFFER)
             </h2>
             <h1 className="font-anton text-4xl md:text-6xl lg:text-7xl uppercase leading-none tracking-tight text-white mb-6">
               30 KUN ICHIDA: <br/>
               <span className="text-red-600">ERKAK POZITSIYASINI</span> <br/>
               YIG‘IB OLISH
             </h1>
             <p className="font-inter text-gray-400 max-w-xl mx-auto text-base md:text-lg">
                Motivatsion ertaklarsiz. “Iroda kuchi” o‘yinlarisiz. <br/>
                Ideal sharoitlarni kutmasdan.
             </p>
        </div>

        {/* Step 3: VSL Player */}
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-[0_0_50px_rgba(220,38,38,0.15)] border border-white/5 animate-fade-in-up opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards] bg-zinc-900 relative group max-w-3xl mx-auto mt-8">
             <iframe 
               width="100%" 
               height="100%" 
                src="https://www.youtube.com/embed/39EbnNBVUWk" 
               title="YouTube video player" 
               frameBorder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
               referrerPolicy="strict-origin-when-cross-origin" 
               allowFullScreen
               className="absolute inset-0 w-full h-full"
             ></iframe>

        </div>

        {/* Short CTA below video */}
        <div className="animate-fade-in-up opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards] pt-4">
             <p className="font-oswald text-gray-500 text-sm uppercase tracking-widest mb-2">DA’VO QILISHDAN OLDIN, VIDEO KO‘RING</p>
             <div className="h-8 w-[1px] bg-gradient-to-b from-gray-500 to-transparent mx-auto"></div>
        </div>
      </div>
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/40 via-black to-black opacity-60 pointer-events-none"></div>
    </section>
  );
};
