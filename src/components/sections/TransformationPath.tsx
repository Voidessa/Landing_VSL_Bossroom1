import { ArrowRight } from "lucide-react";

export const TransformationPath = () => {
  const steps = [
    { from: "Хаос", to: "Структура" },
    { from: "Слабость", to: "Характер" },
    { from: "Сомнение", to: "Действие" },
    { from: "Отсутствие контроля", to: "Самоконтроль" },
  ];

  return (
    <section className="bg-black px-4 py-24 text-white">
      <div className="mx-auto max-w-4xl">
        <h3 className="mb-16 text-center text-3xl font-bold uppercase text-white">
          Путь трансформации
        </h3>

        <div className="space-y-8">
            {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center gap-4 text-xl font-medium md:flex-row md:text-2xl">
                    <span className="text-zinc-500">{step.from}</span>
                    <ArrowRight className="h-6 w-6 rotate-90 text-red-600 md:rotate-0" />
                    <span className="text-white">{step.to}</span>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
