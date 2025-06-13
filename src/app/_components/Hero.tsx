"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { memo, useEffect, useMemo, useState } from "react";

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

// Lazy load the video component
const BackgroundVideo = dynamic(() => import("./BackgroundVideo"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-black" />,
});

const AnimatedTitle = memo(
  ({ titleNumber, titles }: { titleNumber: number; titles: string[] }) => (
    <span className="relative flex w-full justify-center overflow-hidden pb-2 pt-1 text-center sm:pb-4">
      &nbsp;
      {titles.map((title, index) => (
        <motion.span
          key={index}
          className="absolute text-4xl font-semibold sm:text-5xl md:text-7xl"
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
  ),
);
AnimatedTitle.displayName = "AnimatedTitle";

const ActionButtons = memo(() => (
  <motion.div
    className="flex w-full flex-col gap-2 px-4 sm:w-auto sm:flex-row sm:gap-3 sm:px-0"
    variants={itemVariants}
  >
    <Link href="/contact" passHref>
      <Button
        size="lg"
        className="group gap-2 bg-white text-sm text-primary hover:bg-gray-100 sm:gap-4 sm:text-base"
      >
        Schedule Consultation{" "}
        <PhoneCall className="h-3 w-3 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4" />
      </Button>
    </Link>
    <Link href="/portfolio" passHref>
      <Button
        size="lg"
        className="group gap-2 bg-primary text-sm text-white hover:bg-[#45a049] sm:gap-4 sm:text-base"
      >
        View Our Projects{" "}
        <MoveRight className="h-3 w-3 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4" />
      </Button>
    </Link>
  </motion.div>
));
ActionButtons.displayName = "ActionButtons";

export const Hero = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Innovative", "Sustainable", "Timeless", "Elegant", "Bespoke"],
    [],
  );

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(timeoutId);
  }, [titles.length]);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="relative flex min-h-screen w-full items-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 h-full w-full">
        <BackgroundVideo />
        <div className="absolute inset-0 bg-black bg-opacity-65"></div>
      </motion.div>

      <motion.div
        className="wrapper relative z-10 px-4 pt-16 sm:pt-24"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-8">
          <motion.div variants={itemVariants}>
            <Link href="/about" passHref>
              <Button
                variant="secondary"
                size="sm"
                className="group gap-2 bg-white/50 text-xs text-foreground sm:text-sm"
              >
                Our Journey Since 2017{" "}
                <MoveRight className="h-3 w-3 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4" />
              </Button>
            </Link>
          </motion.div>
          <motion.div
            className="flex flex-col gap-3 sm:gap-4"
            variants={itemVariants}
          >
            <h1 className="font-regular max-w-2xl text-center text-4xl tracking-tighter text-white sm:text-5xl md:text-7xl">
              <span className="text-[#4CAF50]">Crafting Legacies</span>
              <AnimatedTitle titleNumber={titleNumber} titles={titles} />
            </h1>

            <p className="max-w-2xl px-4 text-center text-sm leading-relaxed tracking-tight text-white sm:px-0 sm:text-base md:text-lg">
              Ecoscape Design and Construction began in 2017 with a single-story
              construction project in Anowara. Now, with 50+ projects, we excel
              in architecture, interior design, and civil engineering—creating
              timeless spaces where dreams grow, lives unfold, and lasting
              legacies take shape.
            </p>
          </motion.div>
          <ActionButtons />
        </div>
      </motion.div>
    </div>
  );
};
