export const CoreIdea = () => {
  const theses = [
    {
      id: 1,
      text: "Мужчина должен стать сильным, уважаемым, дисциплинированным.",
    },
    {
      id: 2,
      text: "Мир пытается сделать тебя слабым.",
    },
    {
      id: 3,
      text: "BOSSROOM — место, где мужчина строит себя: мысль, дисциплина, характер.",
    },
  ];

  return (
    <section className="bg-zinc-950 px-4 py-24 text-white">
      <div className="mx-auto max-w-4xl">
        <h3 className="mb-12 text-center text-2xl font-bold uppercase tracking-wider text-red-600">
          Основная Идея
        </h3>
        <div className="grid gap-8 md:grid-cols-3">
          {theses.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 p-8 text-center transition-all hover:border-red-900/50 hover:bg-zinc-900/80"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-black text-xl font-bold text-zinc-500 group-hover:text-red-500">
                0{item.id}
              </div>
              <p className="text-lg font-medium leading-relaxed text-zinc-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
