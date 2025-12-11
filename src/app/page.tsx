import { Hero } from "@/components/sections/Hero";
import { Description } from "@/components/sections/Description";
import { CoreIdea } from "@/components/sections/CoreIdea";
import { Weakness } from "@/components/sections/Weakness";
import { WorldSystem } from "@/components/sections/WorldSystem";
import { Goal } from "@/components/sections/Goal";
import { Benefits } from "@/components/sections/Benefits";
import { Mission } from "@/components/sections/Mission";
import { Principles } from "@/components/sections/Principles";
import { TransformationPath } from "@/components/sections/TransformationPath";
import { FinalMeaning } from "@/components/sections/FinalMeaning";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Hero />
      <Description />
      <CoreIdea />
      <Weakness />
      <WorldSystem />
      <Goal />
      <Benefits />
      <Mission />
      <Principles />
      <TransformationPath />
      <FinalMeaning />
      <Footer />
    </main>
  );
}
