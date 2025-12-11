import { Check } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    "Структура мышления",
    "Дисциплина в жизни",
    "Развитие характера",
    "Поддержка и направление",
    "Среда, которая заставляет расти",
    "Жёсткие рамки и ясные мысли",
    "Контроль над собой, а не над внешним миром",
  ];

  return (
    <section className="bg-zinc-950 px-4 py-24 text-white">
      <div className="mx-auto max-w-4xl">
        <h3 className="mb-12 text-center text-2xl font-bold uppercase tracking-wider text-red-600">
          Что ты получаешь внутри
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4 rounded-lg bg-zinc-900 p-6">
                    <Check className="mt-1 h-6 w-6 flex-shrink-0 text-red-600" />
                    <p className="text-lg font-medium text-zinc-200">{benefit}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
