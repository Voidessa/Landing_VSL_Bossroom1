import { Target } from "lucide-react";

export const Goal = () => {
    const goals = [
        "Собрать характер",
        "Вернуть силу",
        "Дисциплину",
        "Структуру мыслей",
        "Личные стандарты",
        "Уважение к себе",
        "Превращение хаоса в порядок"
    ];

  return (
    <section className="bg-black px-4 py-24 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-8 flex justify-center">
            <Target className="h-12 w-12 text-red-600" />
        </div>
        <h3 className="mb-6 text-3xl font-bold uppercase md:text-4xl">
          Основная Цель
        </h3>
        <p className="mb-12 text-xl text-zinc-400">
            Это не мотивация, а рабочий процесс.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
            {goals.map((g, i) => (
                <span key={i} className="border border-zinc-800 bg-zinc-900 px-6 py-3 text-lg font-medium text-zinc-300 transition-colors hover:border-red-900 hover:text-white">
                    {g}
                </span>
            ))}
        </div>
      </div>
    </section>
  );
};
