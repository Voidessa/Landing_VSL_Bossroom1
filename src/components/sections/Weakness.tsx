export const Weakness = () => {
  const points = [
    "Мужчины живут хаотично",
    "Нет структуры",
    "Нет дисциплины",
    "Нет контроля над собой",
    "Они становятся зрителями своей жизни",
  ];

  return (
    <section className="bg-black px-4 py-24 text-white">
      <div className="mx-auto max-w-4xl text-center md:text-left">
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:justify-between">
            <div className="md:w-1/2">
             <h3 className="mb-6 text-3xl font-bold uppercase leading-tight text-white md:text-4xl">
                Разоблачение <br/>
                <span className="text-zinc-600">Слабости</span>
            </h3>
            <p className="text-lg text-zinc-400">
                Это не обвинение. Это подсветка того, что происходит, когда ты теряешь фокус.
            </p>
            </div>

            <div className="md:w-1/2">
                <ul className="space-y-4">
                    {points.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-4 text-xl text-zinc-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-red-600"></span>
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};
