"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Paintbrush,
  Sofa,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as Accordion from "@radix-ui/react-accordion";

type ServiceType = {
  title: string;
  icon: React.ElementType;
  description: string;
  image: string;
  packages?: PackageType[];
  items?: ItemType[];
  features?: string[];
  price?: string;
  minCharge?: string;
};

type PackageType = {
  name: string;
  price: string;
  features: string[];
  services: Record<string, boolean> | string;
  estimatedCosts: Array<{ area: string; cost: string }> | string;
};

type ItemType = {
  name: string;
  price: string;
  description: string;
};

const services: ServiceType[] = [
  {
    title: "Interior Design & Construction",
    icon: Paintbrush,
    description:
      "Transform your space with our bespoke interior design and construction services.",
    image: "/interior-design.jpg",
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
        services: {
          "Drawing ceiling": true,
          "Dining ceiling": false,
          "Tv panel": true,
          "Tv cabinet": true,
          "Dinner Wagon": true,
          "Master Bed cabinet": true,
          "Childbed cabinet": false,
          Dressing: false,
          "Kitchen Cabinet": true,
          Partition: false,
          "Wall paneling": false,
          "Basin unit": false,
          Shelf: false,
          "Decorative light": true,
          "Featured painting": false,
          "Electrical wiring": true,
        },
        estimatedCosts: [
          { area: "1200-1400 sft", cost: "7.2 Lac-8.4 Lac" },
          { area: "1500-1700 sft", cost: "9 Lac-10.20 Lac" },
          { area: "1800-2000 sft", cost: "10.8 Lac-12 Lac" },
          { area: "2100++ sft", cost: "12.6 Lac++" },
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
        services: {
          "Drawing ceiling": true,
          "Dining ceiling": true,
          "Tv panel": true,
          "Tv cabinet": true,
          "Dinner Wagon": true,
          "Master Bed cabinet": true,
          "Childbed cabinet": true,
          Dressing: true,
          "Kitchen Cabinet": true,
          Partition: true,
          "Wall paneling": true,
          "Basin unit": true,
          Shelf: true,
          "Decorative light": true,
          "Featured painting": true,
          "Electrical wiring": true,
        },
        estimatedCosts: [
          { area: "1200-1400 sft", cost: "12 Lac-14 Lac" },
          { area: "1500-1700 sft", cost: "15 Lac-17 Lac" },
          { area: "1800-2000 sft", cost: "18 Lac-20 Lac" },
          { area: "2100++ sft", cost: "21 Lac++" },
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
        services: "Customizable based on client needs",
        estimatedCosts:
          "Solutions tailored to client needs, varying based on material quality",
      },
    ],
  },
  {
    title: "Customized Furniture & Lighting",
    icon: Sofa,
    description:
      "Handcrafted furniture and lighting solutions designed to complement your space.",
    image: "/furniture.jpg",
    items: [
      {
        name: "Sofa",
        price: "Starting from 25,000 tk",
        description: "Customizable based on your unique design preferences",
      },
      {
        name: "Dining Table Set",
        price: "Starting from 70,000 tk",
        description: "Customizable based on your unique design preferences",
      },
      {
        name: "Custom Cabinets",
        price: "Starting from 1,500 tk per sft",
        description: "Customizable based on your unique design preferences",
      },
    ],
  },
  {
    title: "Building Design Consultancy",
    icon: Building2,
    description:
      "Comprehensive architectural and structural design solutions for residential and commercial projects.",
    image: "/building-design.jpg",
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
];

export function ServicesAccordion() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Discover our comprehensive range of interior design and construction
            services tailored to bring your vision to life.
          </p>
        </div>

        <div className="grid items-start gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="mb-6 text-gray-600">{service.description}</p>

                {service.packages && (
                  <div className="space-y-4">
                    {service.packages.map((pkg, pkgIndex) => (
                      <div
                        key={pkgIndex}
                        className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-primary"
                      >
                        <div className="mb-2 flex items-start justify-between">
                          <h4 className="font-semibold text-gray-900">
                            {pkg.name}
                          </h4>
                          <span className="text-sm font-medium text-primary">
                            {pkg.price}
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {pkg.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center gap-2 text-sm text-gray-600"
                            >
                              <CheckCircle2 className="h-4 w-4 text-primary" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {service.items && (
                  <div className="space-y-4">
                    {service.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-primary"
                      >
                        <h4 className="mb-1 font-semibold text-gray-900">
                          {item.name}
                        </h4>
                        <p className="mb-2 text-sm font-medium text-primary">
                          {item.price}
                        </p>
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {service.features && (
                  <div className="space-y-4">
                    <div className="rounded-lg border border-gray-200 p-4 transition-colors hover:border-primary">
                      <div className="mb-2 flex items-start justify-between">
                        <h4 className="font-semibold text-gray-900">Pricing</h4>
                        <span className="text-sm font-medium text-primary">
                          {service.price}
                        </span>
                      </div>
                      {service.minCharge && (
                        <p className="mb-4 text-sm text-gray-600">
                          Minimum Charge: {service.minCharge}
                        </p>
                      )}
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center gap-2 text-sm text-gray-600"
                          >
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                <div className="mt-6">
                  <Button asChild className="w-full">
                    <Link href="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
