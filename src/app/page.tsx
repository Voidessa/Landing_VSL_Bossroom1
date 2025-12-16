import { Hero } from "@/components/sections/Hero";
import { VSLContent } from "@/components/sections/VSLContent";
import { VSLOffer } from "@/components/sections/VSLOffer";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Hero />
      <VSLContent />
      <VSLOffer />
      <Footer />
    </main>
  );
}
