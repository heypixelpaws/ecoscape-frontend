import { Case1 } from "./_components/Cases";
import { Contact1 } from "./_components/ContactUs";
import { CTA2 } from "./_components/CTA";
import { FAQ2 } from "./_components/FAQ";
import { Expertise } from "./_components/Expertise";
import { Gallery } from "./_components/Gallery";
import { Hero } from "./_components/Hero";
import { HowToStart } from "./_components/HowToStart";
import { Stats2 } from "./_components/Stats";
import { Testimonials1 } from "./_components/Testimonials";
import PricingSections from "./_components/Pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <Expertise />
      <HowToStart />
      <PricingSections />
      <Case1 />
      <Gallery />
      <Stats2 />
      <CTA2 />
      <Testimonials1 />
      <Contact1 />
      <FAQ2 />
    </>
  );
}
