import { Hero } from "@/components/sections/Hero";
import { ActionButtons } from "@/components/sections/ActionButtons";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black selection:bg-red-900 selection:text-white">
      <Hero />
      <ActionButtons />
      <Footer />
    </main>
  );
}
