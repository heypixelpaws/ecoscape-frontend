"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";

interface PortfolioClientPageProps {
  projects: Project[];
}

export default function PortfolioClientPage({
  projects,
}: PortfolioClientPageProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative flex min-h-[50vh] w-full items-center overflow-hidden bg-black pt-20">
        <div className="absolute inset-0 h-full w-full">
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
        </div>

        <motion.div
          className="wrapper relative z-10 py-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <Badge className="bg-[#4CAF50] hover:bg-[#45a049]">
              Our Portfolio
            </Badge>
            <h1 className="max-w-3xl text-4xl font-medium tracking-tighter text-white md:text-6xl">
              Transforming{" "}
              <span className="font-bold text-[#4CAF50]">Visions</span>{" "}
              <br className="sm:hidden" />
              into Reality
            </h1>
            <p className="max-w-2xl text-center text-base leading-relaxed tracking-tight text-white/90 md:text-lg">
              Explore our collection of thoughtfully designed spaces that blend
              functionality, aesthetics, and sustainability. Each project tells
              a unique story of collaboration, innovation, and excellence.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="wrapper py-20">
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Link
                href={`/portfolio/${project.slug}`}
                className="group block overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.images[0] || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80 transition-opacity group-hover:opacity-70" />

                  <div className="absolute bottom-0 left-0 w-full bg-black/0 p-6 text-white transition-all duration-300 group-hover:bg-black/50">
                    <h3 className="mb-2 text-2xl font-semibold transition-colors group-hover:text-[#7cdd7f]">
                      {project.name}
                    </h3>

                    <p className="mb-2 text-white">{project.location}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white">
                        {project.workingArea}
                      </span>
                      <span className="inline-flex translate-x-2 transform items-center text-[#7cdd7f] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                        View Project <MoveRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
