import { cn } from "@/lib/utils";

export const Description = () => {
  return (
    <section className="bg-black px-4 py-24 text-white">
      <div className="mx-auto max-w-3xl space-y-12 text-center">
        <div className="space-y-6">
          <p className="text-lg font-medium uppercase tracking-widest text-zinc-500">
            Что это такое
          </p>
          <p className="text-2xl font-light leading-relaxed text-zinc-300 md:text-3xl">
            BOSSROOM — это <span className="text-white font-semibold">закрытый телеграм-клуб</span>.
            Наша цель — вытащить мужчину из хаоса.
          </p>
          <p className="text-xl leading-relaxed text-zinc-400">
            Мы работаем над мышлением, дисциплиной, структурой и характером.
            Это место, где мужчина становится сильнеe, а не получает временную мотивацию.
          </p>
        </div>
      </div>
    </section>
  );
};
