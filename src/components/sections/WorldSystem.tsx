export const WorldSystem = () => {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-4 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/10 via-zinc-950 to-zinc-950 opacity-40"></div>
      
      <div className="relative mx-auto max-w-3xl text-center">
        <h3 className="mb-8 text-2xl font-bold uppercase tracking-wider text-red-600">
            Система против тебя
        </h3>
        
        <div className="space-y-6 text-lg leading-relaxed text-zinc-300 md:text-2xl">
            <p>
                Общество удерживает мужчину в слабой позиции.
            </p>
            <p>
                Мужчина теряет <span className="text-white font-semibold">силу</span>, <span className="text-white font-semibold">цели</span> и <span className="text-white font-semibold">уважение</span>.
            </p>
            <p>
                Система делает мужчин мягкими и неструктурными.
            </p>
        </div>
      </div>
    </section>
  );
};
