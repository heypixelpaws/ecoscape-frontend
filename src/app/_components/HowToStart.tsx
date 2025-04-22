"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { serviceSteps } from "@/data/serviceSteps";
import Image from "next/image";
import { memo } from "react";

const ProcessIllustration = memo(() => (
  <div className="relative hidden h-full min-h-[400px] w-full overflow-hidden rounded-xl bg-white shadow-lg sm:min-h-[500px] md:block md:min-h-[600px]">
    <Image
      src="https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/expertise-interior-design.jpg"
      alt="Our Design Process"
      fill
      className="object-cover"
      priority
      sizes="(max-width: 768px) 100vw, 50vw"
      quality={85}
    />
    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6 md:p-8">
      <div className="text-white">
        <h3 className="mb-1.5 text-xl font-bold sm:mb-2 sm:text-2xl">
          Ready to Transform Your Space?
        </h3>
        <p className="text-sm text-white/90 sm:text-base">
          Contact us today to schedule your free consultation and take the first
          step towards your dream space.
        </p>
      </div>
    </div>
  </div>
));
ProcessIllustration.displayName = "ProcessIllustration";

const StepAccordion = memo(() => (
  <Accordion defaultValue="item-0" type="single" className="w-full">
    {serviceSteps.map(({ title, description, icon: Icon }, index) => (
      <AccordionItem
        key={index}
        value={`item-${index}`}
        className="data-[state=open]:border-b-2 data-[state=open]:border-[#4CAF50]"
      >
        <AccordionTrigger className="text-base sm:text-lg [&>svg]:hidden">
          <div className="flex items-center gap-3 sm:gap-4">
            <Icon className="h-4 w-4 text-[#4CAF50] sm:h-5 sm:w-5 md:h-6 md:w-6" />
            {title}
          </div>
        </AccordionTrigger>
        <AccordionContent className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
          <div className="mb-2 mt-4 aspect-video w-full overflow-hidden rounded-xl bg-muted sm:mt-6 md:hidden">
            <Image
              src="https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/expertise-interior-design.jpg"
              alt="Our Design Process"
              width={400}
              height={300}
              className="h-full w-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={75}
            />
          </div>
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
));
StepAccordion.displayName = "StepAccordion";

const SectionHeader = memo(() => (
  <div className="mb-8 text-center sm:mb-12">
    <h2 className="mx-auto max-w-2xl text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl md:leading-[3.5rem] lg:text-5xl">
      How to Get Started with{" "}
      <span className="font-bold text-[#4CAF50]">Ecoscape</span>
    </h2>
    <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:mt-4 sm:text-base md:text-lg">
      Transform your space in six simple steps. Our streamlined process ensures
      a smooth journey from concept to completion.
    </p>
  </div>
));
SectionHeader.displayName = "SectionHeader";

export const HowToStart = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="wrapper px-4 py-12 sm:py-20">
        <SectionHeader />
        <div className="mx-auto mt-4 grid w-full gap-6 sm:mt-6 sm:gap-8 md:mt-8 md:grid-cols-2">
          <StepAccordion />
          <ProcessIllustration />
        </div>
      </div>
    </section>
  );
};
