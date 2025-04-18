"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import {
  PhoneCall,
  ClipboardList,
  Presentation,
  FileCheck,
  Hammer,
  Key,
} from "lucide-react";

const serviceSteps = [
  {
    icon: PhoneCall,
    title: "1. Initial Consultation",
    description:
      "Begin your journey with a free consultation. Share your vision, requirements, and budget with our experts. We'll discuss your project scope and answer any questions you might have about our services and process.",
  },
  {
    icon: ClipboardList,
    title: "2. Project Assessment",
    description:
      "Our team conducts a detailed assessment of your requirements. For interior projects, we calculate per square foot rates starting from 600 tk/sft for basic packages to 1000 tk/sft for premium solutions. Building design consultancy starts at 15 tk/sft.",
  },
  {
    icon: Presentation,
    title: "3. Design Proposal",
    description:
      "Receive a comprehensive design proposal including 3D visualizations, layout plans, and material suggestions. For interior projects, choose between Basic and Premium packages with varying features and warranty options.",
  },
  {
    icon: FileCheck,
    title: "4. Contract & Planning",
    description:
      "Once you're satisfied with the proposal, we'll finalize the contract and create a detailed project timeline. We'll outline payment schedules, material selections, and project milestones.",
  },
  {
    icon: Hammer,
    title: "5. Project Execution",
    description:
      "Watch your vision come to life as our skilled team begins the construction or installation process. We maintain strict quality control and provide regular updates on project progress.",
  },
  {
    icon: Key,
    title: "6. Project Handover",
    description:
      "Upon completion, we conduct a thorough inspection with you to ensure everything meets our high standards. Receive warranty documentation and maintenance guidelines for your new space.",
  },
];

export const HowToStart = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="wrapper px-4 py-12 sm:py-20">
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="mx-auto max-w-2xl text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl md:leading-[3.5rem] lg:text-5xl">
            How to Get Started with{" "}
            <span className="font-bold text-[#4CAF50]">Ecoscape</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:mt-4 sm:text-base md:text-lg">
            Transform your space in six simple steps. Our streamlined process
            ensures a smooth journey from concept to completion.
          </p>
        </div>

        <div className="mx-auto mt-4 grid w-full gap-6 sm:mt-6 sm:gap-8 md:mt-8 md:grid-cols-2">
          <div>
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
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Process Illustration */}
          <div className="relative hidden h-full min-h-[400px] w-full overflow-hidden rounded-xl bg-white shadow-lg sm:min-h-[500px] md:block md:min-h-[600px]">
            <Image
              src="https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/expertise-interior-design.jpg"
              alt="Our Design Process"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6 md:p-8">
              <div className="text-white">
                <h3 className="mb-1.5 text-xl font-bold sm:mb-2 sm:text-2xl">
                  Ready to Transform Your Space?
                </h3>
                <p className="text-sm text-white/90 sm:text-base">
                  Contact us today to schedule your free consultation and take
                  the first step towards your dream space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
