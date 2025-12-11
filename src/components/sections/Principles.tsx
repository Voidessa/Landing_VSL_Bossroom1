export const Principles = () => {
  const principles = [
    "СИЛА",
    "ДИСЦИПЛИНА",
    "ХАРАКТЕР",
    "УВАЖЕНИЕ",
    "ДЕЙСТВИЕ, А НЕ СЛОВА",
    "ЧЕСТНОСТЬ ПЕРЕД СОБОЙ",
    "РАЗВИТИЕ БЕЗ ЖАЛОБ",
    "СТАНОВЛЕНИЕ МУЖЧИНОЙ",
  ];

  return (
    <section className="bg-zinc-950 px-4 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <h3 className="mb-16 text-center text-3xl font-bold uppercase tracking-widest text-white">
          Принципы BOSSROOM
        </h3>
        
        <div className="grid grid-cols-1 gap-px bg-zinc-800 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
                <div key={i} className="flex h-40 items-center justify-center bg-black p-6 text-center transition-colors hover:bg-zinc-900">
                    <span className="text-sm font-bold tracking-widest text-zinc-300 md:text-base">
                        {p}
                    </span>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
