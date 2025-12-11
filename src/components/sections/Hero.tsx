import { cn } from "@/lib/utils";

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 py-24 text-center">
      <div className="z-10 mx-auto max-w-4xl space-y-8">
        <h2 className="animate-fade-in text-xl font-bold tracking-[0.2em] text-red-600 opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards] md:text-2xl">
          BOSSROOM
        </h2>
        
        <h1 className="animate-fade-in-up text-4xl font-extrabold uppercase leading-tight tracking-tight text-white opacity-0 [animation-delay:500ms] [animation-fill-mode:forwards] md:text-6xl lg:text-7xl">
          Перестань прожигать жизнь.<br className="hidden md:block" />
          <span className="text-gray-400">Стань мужчиной,<br className="hidden md:block" /> которого уважают.</span>
        </h1>

        <p className="mx-auto max-w-2xl animate-fade-in-up text-lg text-gray-500 opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards] md:text-xl">
          Закрытое сообщество для развития мужского мышления, дисциплины и характера.
        </p>

        <div className="animate-fade-in-up pt-8 opacity-0 [animation-delay:1100ms] [animation-fill-mode:forwards]">
            {/* CTA or Scroll indicator could go here later */}
             <div className="h-px w-24 bg-gradient-to-r from-transparent via-red-900 to-transparent mx-auto"></div>
        </div>
      </div>
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/40 via-black to-black opacity-60"></div>
    </section>
  );
};
