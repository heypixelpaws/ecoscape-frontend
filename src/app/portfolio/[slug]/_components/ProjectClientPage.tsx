"use client";

import { Button } from "@/components/ui/button";
import { getProjectBySlug, type Project } from "@/lib/projects";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  CreditCard,
  MapPin,
  MoveLeft,
  MoveRight,
  Ruler,
  Tag,
  User,
  X,
} from "lucide-react";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

export default function ProjectClientPage({
  params,
}: {
  params: { slug: string };
}) {
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);

  // Load project data
  useEffect(() => {
    async function loadProject() {
      try {
        const projectData = await getProjectBySlug(params.slug);
        if (!projectData) {
          notFound();
        }
        setProject(projectData);
      } catch (error) {
        console.error("Error loading project:", error);
        notFound();
      } finally {
        setLoading(false);
      }
    }

    loadProject();
  }, [params.slug]);

  // Handle lightbox navigation
  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  }, []);

  const nextImage = useCallback(() => {
    if (!project) return;
    setLightboxIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1,
    );
  }, [project]);

  const prevImage = useCallback(() => {
    if (!project) return;
    setLightboxIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1,
    );
  }, [project]);

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, closeLightbox, nextImage, prevImage]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-[#4CAF50]"></div>
      </div>
    );
  }

  if (!project) {
    return notFound();
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <div className="min-h-screen bg-white">
      {/* Hero Section with Marquee */}
      <motion.div className="relative h-[50vh] w-full overflow-hidden">
        <motion.div
          className="absolute inset-0 flex h-full w-full"
          style={{ scale }}
        >
          <div
            ref={marqueeRef}
            className="flex h-full animate-marquee whitespace-nowrap"
            style={{
              animation: `marquee ${project.images.length * 5}s linear infinite`,
            }}
          >
            {project.images.map((image, index) => (
              <div
                key={index}
                className="relative h-full w-[20vw] flex-shrink-0"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.name} - Image ${index + 1}`}
                  fill
                  sizes="20vw"
                  className="object-cover"
                  priority={true}
                  unoptimized={true}
                />
              </div>
            ))}
            {/* Duplicate images for seamless loop */}
            {project.images.map((image, index) => (
              <div
                key={`duplicate-${index}`}
                className="relative h-full w-[20vw] flex-shrink-0"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.name} - Image ${index + 1}`}
                  fill
                  sizes="20vw"
                  className="object-cover"
                  unoptimized={true}
                />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-black/60 pt-20"
          style={{ y }}
        >
          <motion.div
            className="z-10 px-4 text-center text-white"
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-4 text-3xl font-bold text-[#4CAF50] md:text-5xl">
              {project.name}
            </h1>
            <p className="mx-auto max-w-3xl text-base md:text-lg">
              {project.location}
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Project Details */}
      <div className="wrapper py-6">
        <motion.div
          className="grid grid-cols-1 md:gap-12 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Project Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="sticky top-24 py-6">
              <h2 className="mb-8 text-xl font-bold text-gray-900 md:text-2xl">
                Project Details
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <User className="mt-1 h-6 w-6 text-[#4CAF50]" />
                  <div>
                    <h3 className="text-base font-medium text-gray-900 md:text-lg">
                      Client
                    </h3>
                    <p className="text-sm text-gray-600 md:text-base">
                      {project.client}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-6 w-6 text-[#4CAF50]" />
                  <div>
                    <h3 className="text-base font-medium text-gray-900 md:text-lg">
                      Location
                    </h3>
                    <p className="text-sm text-gray-600 md:text-base">
                      {project.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Ruler className="mt-1 h-6 w-6 text-[#4CAF50]" />
                  <div>
                    <h3 className="text-base font-medium text-gray-900 md:text-lg">
                      Working Area
                    </h3>
                    <p className="text-sm text-gray-600 md:text-base">
                      {project.workingArea}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CreditCard className="mt-1 h-6 w-6 text-[#4CAF50]" />
                  <div>
                    <h3 className="text-base font-medium text-gray-900 md:text-lg">
                      Total Cost
                    </h3>
                    <p className="text-sm text-gray-600 md:text-base">
                      {project.totalCost}
                    </p>
                  </div>
                </div>

                {project.serviceType && (
                  <div className="flex items-start gap-4">
                    <Tag className="mt-1 h-6 w-6 text-[#4CAF50]" />
                    <div>
                      <h3 className="text-base font-medium text-gray-900 md:text-lg">
                        Project Type
                      </h3>
                      <p className="text-sm text-gray-600 md:text-base">
                        {project.serviceType}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 hidden md:block">
                <Button
                  onClick={() => router.push("/portfolio")}
                  variant="outline"
                  className="gap-2"
                >
                  <MoveLeft className="h-4 w-4" /> Back to Portfolio
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Description and Gallery */}
          <motion.div variants={itemVariants} className="py-6 lg:col-span-2">
            <h2 className="mb-6 text-xl font-bold text-gray-900 md:text-2xl">
              About the Project
            </h2>

            <div className="prose prose-lg mb-12 max-w-none">
              <p className="leading-relaxed text-gray-700">
                {project.description}
              </p>
            </div>

            <h2 className="mb-8 text-xl font-bold text-gray-900 md:mb-6 md:text-2xl">
              Project Gallery
            </h2>

            <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              {project.images.map((image: string, index: number) => (
                <motion.div
                  key={index}
                  className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => openLightbox(index)}
                >
                  {/* Use unoptimized for original format and faster loading from S3 */}
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.name} - Image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading={index < 4 ? "eager" : "lazy"}
                    unoptimized={true}
                  />
                  <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-gray-900">
                      View Larger
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-end border-t border-gray-200 pt-8">
              {/* <Button
                onClick={() => router.push("/portfolio")}
                variant="outline"
                className="gap-2"
              >
                <MoveLeft className="h-4 w-4" /> All Projects
              </Button> */}

              <Button
                onClick={() => {
                  // In a real app, you would navigate to the next project
                  router.push("/contact");
                }}
                className="gap-2 bg-[#4CAF50] hover:bg-[#45a049]"
              >
                Contact Us <MoveRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Lightbox - Only render when open for better performance */}
      {lightboxOpen && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div
              className="relative h-[80vh] w-[90vw] max-w-7xl"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={lightboxIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-full w-full"
                >
                  {/* Use unoptimized for original format and faster loading from S3 */}
                  <Image
                    src={project.images[lightboxIndex] || "/placeholder.svg"}
                    alt={`${project.name} - Image ${lightboxIndex + 1}`}
                    fill
                    sizes="90vw"
                    className="object-contain"
                    priority
                    unoptimized={true}
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-4 left-0 flex w-full justify-center gap-2">
                <span className="rounded-full bg-black/50 px-3 py-1 text-sm text-white">
                  {lightboxIndex + 1} / {project.images.length}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
