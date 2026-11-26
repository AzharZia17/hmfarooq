import { Hero } from "@/components/sections/hero";
import { Intro } from "@/components/sections/intro";
import { ServicesIndex } from "@/components/sections/services-index";
import { Capabilities } from "@/components/sections/capabilities";
import { Approach } from "@/components/sections/approach";
import { QatarContext } from "@/components/sections/qatar-context";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesIndex />
      <Capabilities />
      <Approach />
      <QatarContext />
    </>
  );
}
