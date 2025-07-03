"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="relative h-[60vh] w-full overflow-hidden bg-black">
      <Image
        src="https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/avani-featured.webp"
        alt="About Us"
        fill
        sizes="100vw"
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
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">Our Story</h1>
          <p className="mx-auto max-w-2xl text-lg md:text-xl">
            Transforming spaces with passion, precision, and innovation
          </p>
        </motion.div>
      </div>
    </div>
  );
}
