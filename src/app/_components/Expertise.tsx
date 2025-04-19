"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { memo, RefAttributes } from "react";
import { expertise } from "@/data/expertise";
import { LucideProps } from "lucide-react";

// Define the type for expertise items
type ExpertiseItem = {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
  image: string;
};

// Separate ExpertiseCard into its own component for better performance
const ExpertiseCard = memo(
  ({ item, index }: { item: ExpertiseItem; index: number }) => {
    const Icon = item.icon;

    return (
      <Card
        className={cn(
          "group flex flex-col overflow-hidden rounded-xl border transition-all duration-300 hover:shadow-lg",
          index === 0 && "md:col-span-2",
        )}
      >
        <CardHeader className="relative p-3 sm:p-4">
          <div className="absolute left-3 top-3 z-10 rounded-full bg-white/90 p-1.5 shadow-md backdrop-blur-sm sm:left-4 sm:top-4 sm:p-2">
            <Icon className="h-4 w-4 text-[#4CAF50] sm:h-5 sm:w-5 md:h-6 md:w-6" />
          </div>
          <div className="relative flex w-full items-center justify-center overflow-hidden rounded-t-lg">
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={300}
              className="h-40 w-auto object-cover transition-transform duration-300 group-hover:scale-105 sm:h-44 md:h-48"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={85}
            />
          </div>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col p-4 pt-0 sm:p-6">
          <h4 className="mb-1.5 text-lg font-semibold tracking-tight sm:mb-2 sm:text-xl">
            {item.title}
          </h4>
          <p className="text-sm tracking-tight text-muted-foreground sm:text-base">
            {item.description}
          </p>
        </CardContent>
      </Card>
    );
  },
);
ExpertiseCard.displayName = "ExpertiseCard";

export const Expertise = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="wrapper px-4 py-12 sm:py-20">
        <div className="mb-8 text-center sm:mb-16">
          <h2 className="text-2xl font-medium tracking-tighter sm:mx-auto sm:max-w-2xl sm:text-3xl md:text-4xl md:leading-[3.5rem] lg:text-5xl">
            Our Areas of{" "}
            <span className="ml-1 font-bold tracking-tight text-[#4CAF50]">
              Expertise
            </span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:mx-auto sm:mt-4 sm:max-w-2xl sm:text-base md:text-lg">
            With over 5 years of experience and 50+ successful projects, we
            bring unmatched expertise to every aspect of design and
            construction.
          </p>
        </div>
        <div className="mx-auto grid w-full gap-4 sm:gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {expertise.map((item, index) => (
            <ExpertiseCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
