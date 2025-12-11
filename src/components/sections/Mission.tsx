import { Shield } from "lucide-react";

export const Mission = () => {
  return (
    <section className="bg-black px-4 py-24 text-white">
        <div className="mx-auto max-w-3xl text-center">
            <Shield className="mx-auto mb-6 h-12 w-12 text-zinc-700" />
            <h3 className="mb-8 text-2xl font-bold uppercase leading-tight md:text-3xl">
                Миссия: создать безопасную среду <br/> для роста мужчины
            </h3>
            <div className="space-y-6 text-lg text-zinc-400 md:text-xl">
                <p>
                    Мужчине нужно пространство, где он может становиться лучше.
                </p>
                <p>
                   Где нет хаоса. Где есть структура. Где есть направление.
                </p>
                <p className="text-white">
                    Место, где мужчина растёт в характере.
                </p>
            </div>
        </div>
    </section>
  );
};
