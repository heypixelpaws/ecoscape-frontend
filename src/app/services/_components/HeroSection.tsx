"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Lazy load the video component
const BackgroundVideo = dynamic(
  () =>
    import("../../_components/BackgroundVideo").then(
      (mod) => mod.SecondaryVideo,
    ),
  {
    ssr: false,
    loading: () => <div className="h-full w-full bg-black" />,
  },
);

export function HeroSection() {
  return (
    <div className="relative h-[60vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0 h-full w-full">
        <BackgroundVideo />
        <div className="absolute inset-0 bg-black bg-opacity-65"></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="z-10 px-4 pt-8 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
            Interior Design <span className="text-[#4CAF50]">Excellence</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg md:text-xl">
            Transform your space with our comprehensive design and construction
            solutions
          </p>
        </motion.div>
      </div>
    </div>
  );
}
