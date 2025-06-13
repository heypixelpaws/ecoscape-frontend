"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import contactDetails from "@/data/contactDetails";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, PhoneCall } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

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

      <div className="wrapper relative z-20 mx-auto flex h-full items-center justify-center py-12 sm:py-16 md:py-20">
        <div className="flex max-w-2xl flex-col items-center gap-4 px-4 text-center text-white sm:gap-5 sm:px-6 md:gap-6">
          <Badge className="bg-[#4CAF50] text-xs text-white hover:bg-[#45a049] sm:text-sm">
            Transform Your Space
          </Badge>

          <h3 className="text-2xl font-medium tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
            Ready to Create Your <br className="md:hidden" />
            <span className="font-bold text-[#6AE66F]">
              Sustainable Space
            </span>{" "}
            ?
          </h3>

          <p className="text-sm leading-relaxed tracking-tight text-gray-200 sm:text-base md:text-lg">
            Take the first step towards an eco-friendly and beautiful living
            space. Our expert team is ready to bring your vision to life with
            sustainable materials and innovative design solutions.
          </p>

          <div className="mt-2 flex w-full flex-col gap-3 sm:mt-4 sm:w-auto sm:flex-row sm:gap-4">
            <Button
              className="gap-2 bg-white text-sm text-[#4CAF50] hover:bg-gray-100 sm:text-base"
              size="lg"
            >
              Schedule Consultation{" "}
              <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
            <Link href={`tel:${contactDetails.phone}`}>
              <Button
                className="gap-2 bg-[#4CAF50] text-sm text-white hover:bg-[#45a049] sm:text-base"
                size="lg"
              >
                Contact Us Now <PhoneCall className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
