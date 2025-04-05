"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Innovative", "Sustainable", "Timeless", "Elegant", "Bespoke"],
    [],
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  return (
    <div className="relative flex min-h-screen w-full items-center overflow-hidden">
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

      <motion.div
        className="wrapper relative z-10 pt-24"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col items-center justify-center gap-8">
          <motion.div variants={itemVariants}>
            <Button
              variant="secondary"
              size="sm"
              className="gap-4 bg-white/50 text-foreground"
            >
              Our Journey Since 2018 <MoveRight className="h-4 w-4" />
            </Button>
          </motion.div>
          <motion.div className="flex flex-col gap-4" variants={itemVariants}>
            <h1 className="font-regular max-w-2xl text-center text-5xl tracking-tighter text-white md:text-7xl">
              <span className="text-[#4CAF50]">Crafting Legacies,</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="max-w-2xl text-center text-lg leading-relaxed tracking-tight text-white md:text-xl">
              At Ecoscape Design and Construction, we transform visions into
              reality. From architectural innovation to interior mastery, our
              journey since 2018 has been dedicated to creating environments
              where life unfolds and dreams thrive. With over 50 successful
              projects, we continue to set new standards in design and
              construction excellence.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col gap-3 sm:flex-row"
            variants={itemVariants}
          >
            <Button
              size="lg"
              className="gap-4 bg-white text-primary hover:bg-gray-100"
            >
              Schedule Consultation <PhoneCall className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              className="gap-4 bg-primary text-white hover:bg-[#45a049]"
            >
              View Our Projects <MoveRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
