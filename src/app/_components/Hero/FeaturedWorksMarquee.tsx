"use client";

import Marquee from "@/components/ui/marquee";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const featuredWorks = [
  {
    id: 1,
    name: "Modern Loft Renovation",
    image:
      "https://images.unsplash.com/photo-1543248939-ff40856f65d4?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/projects/modern-loft",
  },
  {
    id: 2,
    name: "Coastal Beach House",
    image:
      "https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/projects/beach-house",
  },
  {
    id: 3,
    name: "Minimalist Studio Apartment",
    image:
      "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/projects/minimalist-studio",
  },
  {
    id: 4,
    name: "Luxury Penthouse Suite",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/projects/luxury-penthouse",
  },
  {
    id: 5,
    name: "Scandinavian Living Room",
    image:
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/projects/scandinavian-living",
  },
  {
    id: 6,
    name: "Urban Kitchen Design",
    image:
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/projects/urban-kitchen",
  },
  {
    id: 7,
    name: "Eco-Friendly Office",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/projects/eco-office",
  },
  {
    id: 8,
    name: "Contemporary Bathroom",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/projects/contemporary-bathroom",
  },
  {
    id: 9,
    name: "Rustic Mountain Home",
    image:
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/projects/mountain-home",
  },
] as const;

const firstRow = featuredWorks.slice(0, featuredWorks.length / 2);
const secondRow = featuredWorks.slice(featuredWorks.length / 2);

interface ProjectCardProps {
  id: number;
  name: string;
  image: string;
  link: string;
  isFirst: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  name,
  image,
  link,
  isFirst,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative h-64 w-48 cursor-pointer overflow-hidden rounded-lg shadow-md"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={image}
        alt={name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover object-center"
        priority={isFirst}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
      />
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-primary/80 to-transparent p-4 text-white"
          >
            <h3 className="text-lg font-semibold">{name}</h3>
            <Link
              href={link}
              className="mt-2 inline-block rounded bg-white px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-gray-100"
            >
              View Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export function FeaturedWorksMarquee() {
  return (
    <div className="relative flex h-[480px] w-full flex-row items-center justify-center overflow-hidden rounded-lg bg-gray-100 shadow-lg">
      <Marquee pauseOnHover vertical className="[--duration:30s]">
        {firstRow.map((project, index) => (
          <ProjectCard key={project.id} {...project} isFirst={index === 0} />
        ))}
      </Marquee>
      <Marquee pauseOnHover vertical className="[--duration:40s]">
        {secondRow.map((project) => (
          <ProjectCard key={project.id} {...project} isFirst={false} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-gray-100"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-gray-100"></div>
    </div>
  );
}
