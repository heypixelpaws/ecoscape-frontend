"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Building, HardHat, PaintBucket, Sofa, Truck } from "lucide-react";
import { cn } from "@/lib/utils";

const expertise = [
  {
    icon: PaintBucket,
    title: "Interior Design & Construction",
    description:
      "Create stunning spaces that reflect your style and enhance functionality. Our interior design and construction services cover everything from space planning to final decoration, ensuring a seamless blend of aesthetics and practicality.",
    image: "/assets/expertise/interior-design.jpg",
  },
  {
    icon: Building,
    title: "Building Design Consultancy",
    description:
      "Transform your vision into reality with our comprehensive architectural and structural design services. Our expert team creates innovative, sustainable, and functional building designs that meet your specific needs and exceed expectations.",
    image: "/assets/expertise/building-design.jpg",
  },
  {
    icon: HardHat,
    title: "Building Construction",
    description:
      "From groundbreaking to finishing touches, our construction team delivers excellence at every stage. We combine skilled craftsmanship with modern construction techniques to build structures that stand the test of time.",
    image: "/assets/expertise/building-construction.jpg",
  },
  {
    icon: Sofa,
    title: "Customized Furniture & Lighting",
    description:
      "Elevate your space with bespoke furniture and lighting solutions. We design and craft custom pieces that perfectly match your style, space requirements, and functional needs, creating unique environments that truly stand out.",
    image: "/assets/expertise/custom-furniture.jpg",
  },
  {
    icon: Truck,
    title: "Building Material Supply",
    description:
      "Access premium construction materials through our reliable supply chain. We source and deliver high-quality building materials, ensuring your project benefits from the best materials available in the market.",
    image: "/assets/expertise/building-materials.jpg",
  },
];

export const Expertise = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="wrapper py-20">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-medium tracking-tighter sm:mx-auto sm:max-w-2xl md:text-5xl md:leading-[3.5rem]">
            Our Areas of{" "}
            <span className="ml-1 font-bold tracking-tight text-[#4CAF50]">
              Expertise
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground sm:mx-auto sm:max-w-2xl">
            With over 5 years of experience and 50+ successful projects, we
            bring unmatched expertise to every aspect of design and
            construction.
          </p>
        </div>
        <div className="mx-auto grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item, index) => (
            <Card
              key={item.title}
              className={cn(
                "group flex flex-col overflow-hidden rounded-xl border transition-all duration-300 hover:shadow-lg",
                index === 0 && "col-span-2",
              )}
            >
              <CardHeader className="relative">
                <div className="absolute left-4 top-4 z-10 rounded-full bg-white/90 p-2 shadow-md backdrop-blur-sm">
                  <item.icon className="h-6 w-6 text-[#4CAF50]" />
                </div>
                <div className="relative flex w-full items-center justify-center overflow-hidden rounded-t-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="h-48 w-auto object-cover transition-transform duration-300 group-hover:scale-105 md:h-52 lg:h-52"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col p-6 pt-0">
                <h4 className="mb-2 text-xl font-semibold tracking-tight">
                  {item.title}
                </h4>
                <p className="text-base tracking-tight text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
