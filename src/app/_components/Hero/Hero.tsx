import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { FeaturedMarquee } from "./FeaturedMarquee";

const Hero = () => {
  const Cell = ({ i = 0 }) => {
    return (
      <div className="center size-full rounded-lg bg-zinc-200 text-xl dark:bg-zinc-900">
        {i}
      </div>
    );
  };

  const cells = [1, 2, 3, 4, 5, 6];

  return (
    <div className="relative">
      {/* background image */}
      <Image
        src="/assets/hero-bg.jpg"
        alt="hero-bg"
        fill
        className="absolute inset-0 -z-10 object-cover"
      />

      <div className="wrapper flex min-h-screen items-center justify-between gap-8 pt-28">
        {/* text contents */}
        <div className="max-w-sm space-y-4">
          <h1 className="text-5xl font-bold">
            Transform Your Space with ECOSCAPE&apos;s Expertise
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            incidunt corporis soluta blanditiis temporibus a nemo cumque
            similique! Quis velit, voluptatem odio at fugit magnam! Eaque non
            omnis ducimus dolore?
          </p>

          <div className="flex gap-4">
            <Button variant="default">Get Started</Button>

            <Button variant="outline">Services</Button>
          </div>
        </div>

        {/* images */}
        <div>
          {/* <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-4">
            {cells.map((n, i) => (
              <div
                key={n}
                className={cn(
                  "min-h-80 rounded-lg p-1",
                  i === 0 && "row-span-2 h-full",
                  i === 2 && "row-span-2 h-full",
                )}
              >
                <Cell i={i + 1} />
              </div>
            ))}
          </div> */}

          <FeaturedMarquee />
        </div>
      </div>
    </div>
  );
};

export default Hero;
