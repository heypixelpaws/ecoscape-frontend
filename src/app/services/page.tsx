"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Paintbrush,
  Sofa,
  Lightbulb,
  Truck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Building Design Consultancy",
    icon: Building2,
    description:
      "Comprehensive architectural and structural design solutions for residential and commercial projects.",
    features: [
      "Architectural layout",
      "Structural layout",
      "Electrical layout",
      "Plumbing layout",
      "3D design visualization",
    ],
    price: "15 tk per sft",
    minCharge: "50,000 tk for duplex buildings",
  },
  {
    title: "Building Construction",
    icon: Building2,
    description:
      "Expert construction services with attention to detail and quality craftsmanship.",
    features: [
      "Quality materials",
      "Skilled workforce",
      "Timely completion",
      "Structural integrity",
      "Safety compliance",
    ],
  },
  {
    title: "Interior Design & Construction",
    icon: Paintbrush,
    description:
      "Transform your space with our bespoke interior design and construction services.",
    packages: [
      {
        name: "Basic",
        price: "600 tk per sft",
        features: [
          "Garjan ply, partex partical board",
          "Leaqure/docu paint",
          "1 year service warranty",
          "Basic ceiling and cabinet work",
        ],
      },
      {
        name: "Premium",
        price: "1000 tk per sft",
        features: [
          "Eco board, Marine board, PVC board",
          "Premium finishes",
          "5 years service warranty",
          "Comprehensive interior solutions",
        ],
      },
      {
        name: "Custom",
        price: "Customizable",
        features: [
          "Tailored solutions",
          "Premium materials",
          "Custom warranty",
          "Bespoke design",
        ],
      },
    ],
  },
  {
    title: "Customized Furniture & Lighting",
    icon: Sofa,
    description:
      "Handcrafted furniture and lighting solutions designed to complement your space.",
    items: [
      {
        name: "Sofa",
        price: "Starting from 25,000 tk",
      },
      {
        name: "Dining Table Set",
        price: "Starting from 70,000 tk",
      },
      {
        name: "Custom Cabinets",
        price: "Starting from 1,500 tk per sft",
      },
    ],
  },
  {
    title: "Building Material Supply",
    icon: Truck,
    description:
      "Quality building materials sourced from trusted suppliers at competitive prices.",
    features: [
      "Wide range of materials",
      "Competitive pricing",
      "Quality assurance",
      "Timely delivery",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden bg-black">
        <Image
          src="/services-hero.jpg"
          alt="Services Hero"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="z-10 px-4 text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
              Our Services
            </h1>
            <p className="mx-auto max-w-2xl text-lg md:text-xl">
              Comprehensive design and construction solutions tailored to your
              needs
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="wrapper py-20">
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
              variants={itemVariants}
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="rounded-full bg-[#005f27]/10 p-3">
                  <service.icon className="h-6 w-6 text-[#005f27]" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h2>
              </div>
              <p className="mb-4 text-gray-600">{service.description}</p>

              {service.packages ? (
                <div className="space-y-4">
                  {service.packages.map((pkg, pkgIndex) => (
                    <div
                      key={pkgIndex}
                      className="rounded-lg border border-gray-200 p-4"
                    >
                      <h3 className="mb-2 font-medium text-gray-900">
                        {pkg.name} Package
                      </h3>
                      <p className="mb-2 text-sm font-medium text-[#005f27]">
                        {pkg.price}
                      </p>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center gap-2 text-sm text-gray-600"
                          >
                            <CheckCircle2 className="h-4 w-4 text-[#64b826]" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : service.items ? (
                <div className="space-y-4">
                  {service.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center justify-between rounded-lg border border-gray-200 p-4"
                    >
                      <span className="font-medium text-gray-900">
                        {item.name}
                      </span>
                      <span className="text-sm text-[#005f27]">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-2">
                  {service.features?.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#64b826]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              {service.price && (
                <div className="mt-4">
                  <p className="text-sm font-medium text-[#005f27]">
                    {service.price}
                  </p>
                  {service.minCharge && (
                    <p className="text-xs text-gray-500">{service.minCharge}</p>
                  )}
                </div>
              )}

              <div className="mt-6">
                <Button
                  variant="outline"
                  className="group flex w-full items-center justify-center gap-2 border-[#005f27] text-[#005f27] hover:bg-[#005f27] hover:text-white"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#005f27] py-20">
        <div className="wrapper">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to Transform Your Space?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg">
              Contact us today to discuss your project and get a personalized
              quote
            </p>
            <Button
              size="lg"
              className="bg-white text-[#005f27] hover:bg-gray-100"
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
