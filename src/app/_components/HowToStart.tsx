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
      <div className="wrapper py-20">
        <div className="mb-12 text-center">
          <h2 className="mx-auto max-w-2xl text-4xl font-medium tracking-tight md:text-5xl md:leading-[3.5rem]">
            How to Get Started with{" "}
            <span className="font-bold text-[#4CAF50]">Ecoscape</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Transform your space in six simple steps. Our streamlined process
            ensures a smooth journey from concept to completion.
          </p>
        </div>

        <div className="mx-auto mt-6 grid w-full gap-12 md:mt-8 md:grid-cols-2">
          <div>
            <Accordion defaultValue="item-0" type="single" className="w-full">
              {serviceSteps.map(({ title, description, icon: Icon }, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="data-[state=open]:border-b-2 data-[state=open]:border-[#4CAF50]"
                >
                  <AccordionTrigger className="text-lg [&>svg]:hidden">
                    <div className="flex items-center gap-4">
                      <Icon className="h-6 w-6 text-[#4CAF50]" />
                      {title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[17px] leading-relaxed text-muted-foreground">
                    {description}
                    <div className="mb-2 mt-6 aspect-video w-full overflow-hidden rounded-xl bg-muted md:hidden">
                      <Image
                        src="/assets/expertise/interior-design.jpg"
                        alt="Interior Design Process"
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
          <div className="relative hidden h-full min-h-[600px] w-full overflow-hidden rounded-xl bg-white shadow-lg md:block">
            <Image
              src="https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/expertise-interior-design.jpg"
              alt="Our Design Process"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-8">
              <div className="text-white">
                <h3 className="mb-2 text-2xl font-bold">
                  Ready to Transform Your Space?
                </h3>
                <p className="text-white/90">
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
