"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Palette,
  FileText,
  ShoppingCart,
  Wrench,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    title: "Initial Consultation",
    icon: MessageSquare,
    description:
      "We begin with a detailed discussion to understand your vision, preferences, and requirements. This helps us create a design that truly reflects your style.",
    subSteps: [
      "Free initial consultation",
      "Space assessment",
      "Budget discussion",
      "Style preference analysis",
    ],
  },
  {
    title: "Design Development",
    icon: Palette,
    description:
      "Our expert designers create detailed concepts and 3D visualizations to bring your ideas to life, ensuring every detail aligns with your vision.",
    subSteps: [
      "Concept development",
      "3D visualization",
      "Material selection",
      "Color scheme planning",
    ],
  },
  {
    title: "Proposal & Agreement",
    icon: FileText,
    description:
      "We present a comprehensive proposal including design concepts, material specifications, and a detailed cost breakdown for your approval.",
    subSteps: [
      "Detailed cost estimation",
      "Material specifications",
      "Timeline planning",
      "Contract finalization",
    ],
  },
  {
    title: "Material Selection",
    icon: ShoppingCart,
    description:
      "Together, we select high-quality materials that match your style and budget, ensuring durability and aesthetic appeal.",
    subSteps: [
      "Material showroom visit",
      "Sample selection",
      "Quality verification",
      "Order placement",
    ],
  },
  {
    title: "Execution & Installation",
    icon: Wrench,
    description:
      "Our skilled craftsmen execute the project with precision and attention to detail, ensuring the highest quality standards.",
    subSteps: [
      "Regular progress updates",
      "Quality checks",
      "Timely completion",
      "Clean-up and finishing",
    ],
  },
  {
    title: "Final Handover",
    icon: CheckCircle2,
    description:
      "We conduct a final walkthrough to ensure everything meets your expectations, followed by a comprehensive handover.",
    subSteps: [
      "Final inspection",
      "Quality assurance",
      "Documentation handover",
      "Warranty information",
    ],
  },
];

export function ServiceProcessSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Our Process</h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            A seamless journey from concept to completion, ensuring your vision
            becomes reality
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step number */}
                <div className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm text-white sm:-left-4 sm:h-8 sm:w-8 sm:text-base md:-left-6">
                  {index + 1}
                </div>

                <div className="h-full rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl">
                  <div className="flex h-full flex-col">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mb-4 text-gray-600">{step.description}</p>
                    <ul className="mt-auto space-y-2">
                      {step.subSteps.map((subStep, subIndex) => (
                        <li
                          key={subIndex}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          {subStep}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="mb-6 text-lg text-gray-600">
            Ready to start your design journey?
          </p>
          <a
            href="/contact"
            className="hover:bg-primary-dark inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-white transition-colors"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
}
