"use client";

import { useRef } from "react";
import { Calendar, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";

export const CTASection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative w-full overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 h-full w-full">
        <video
          src="https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/homepage-hero-bg-video.mp4"
          preload="auto"
          autoPlay
          muted
          loop
          playsInline
          title="Homepage Hero Background Video"
          className="h-full w-full object-cover"
        >
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </motion.div>

      <div className="absolute inset-0 z-10 bg-black/60"></div>

      <div className="wrapper relative z-20 mx-auto flex h-full items-center justify-center py-20">
        <div className="flex max-w-2xl flex-col items-center gap-6 text-center text-white">
          <Badge className="bg-[#4CAF50] text-white hover:bg-[#45a049]">
            Transform Your Space
          </Badge>

          <h3 className="text-3xl font-medium tracking-tighter md:text-5xl">
            Ready to Create Your <br />
            <span className="font-bold text-[#6AE66F]">Sustainable Space</span>?
          </h3>

          <p className="text-lg leading-relaxed tracking-tight text-gray-200">
            Take the first step towards an eco-friendly and beautiful living
            space. Our expert team is ready to bring your vision to life with
            sustainable materials and innovative design solutions.
          </p>

          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <Button
              className="gap-2 bg-white text-[#4CAF50] hover:bg-gray-100"
              size="lg"
            >
              Schedule Consultation <Calendar className="h-4 w-4" />
            </Button>
            <Button
              className="gap-2 bg-[#4CAF50] text-white hover:bg-[#45a049]"
              size="lg"
            >
              Contact Us Now <PhoneCall className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
