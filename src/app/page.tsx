import { Case1 } from "./_components/Cases";
import { Contact1 } from "./_components/ContactUs";
import { CTA2 } from "./_components/CTA";
import { FAQ2 } from "./_components/FAQ";
import { Features } from "./_components/Features";
import { Gallery } from "./_components/Gallery";
import { Hero } from "./_components/Hero";
import { Pricing2 } from "./_components/Pricing";
import { Services } from "./_components/Services";
import { Stats2 } from "./_components/Stats";
import { Testimonials1 } from "./_components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <Pricing2 />
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
