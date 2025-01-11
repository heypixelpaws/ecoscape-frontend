"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { FeaturedWorksMarquee } from "./FeaturedWorksMarquee";

const Hero = () => {
  return (
    <div className="relative bg-gray-50">
      <Image
        src="/assets/hero-bg.jpg"
        alt="Interior design background"
        fill
        className="absolute inset-0 object-cover opacity-20"
        priority
      />
      <div className="wrapper relative z-10">
        <div className="flex min-h-screen flex-col items-center justify-center gap-12 pt-40 md:pt-28 lg:flex-row lg:justify-between">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-lg space-y-6 text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Transform Your Space with{" "}
              <span className="text-primary">ECOSCAPE&apos;s</span> Expertise
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-600 sm:text-xl"
            >
              Elevate your living and working environments with our innovative,
              sustainable, and personalized interior design solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Button size="lg">Get Started</Button>
              <Button variant="outline" size="lg">
                Our Services
              </Button>
            </motion.div>
          </motion.div>

          {/* Featured Works Marquee */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl"
          >
            <FeaturedWorksMarquee />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
