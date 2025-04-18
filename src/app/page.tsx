import FAQSection from "./_components/FAQ";
import { Expertise } from "./_components/Expertise";
import { Gallery } from "./_components/Gallery";
import { Hero } from "./_components/Hero";
import { HowToStart } from "./_components/HowToStart";
import { getAllProjects } from "@/lib/projects";
import PricingSections from "./_components/Pricing";
import Testimonial from "./_components/Testimonials";
import { CTASection } from "./_components/CTA";

export default async function Home() {
  const projects = await getAllProjects();

  return (
    <>
      <Hero />
      <Expertise />
      <HowToStart />
      <PricingSections />
      <Testimonial />
      <Gallery projects={projects} />
      <CTASection />
      <FAQSection />
    </>
  );
}
