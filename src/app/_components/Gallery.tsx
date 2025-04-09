import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Home,
  Building,
  TreesIcon as Tree,
  Lightbulb,
  Leaf,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/projects";

interface GalleryProps {
  projects: Project[];
}

const featuredProjects = [
  {
    slug: "avani",
    icon: Home,
    size: "lg",
    featuredImage:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/avani-featured.webp",
    description:
      "A nature-inspired sanctuary where wooden accents meet lush greenery",
  },
  {
    slug: "lambent",
    icon: Building,
    size: "sm",
    featuredImage:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/lambent-featured.webp",
    description:
      "Innovative lighting meets sophisticated design in this modern space",
  },
  {
    slug: "noah",
    icon: Leaf,
    size: "sm",
    featuredImage:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/noah-featured.webp",
    description:
      "Where functionality meets refined aesthetics in perfect harmony",
  },
  {
    slug: "srinibash-residence",
    icon: Tree,
    size: "sm",
    featuredImage:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/srinibash-featured.webp",
    description:
      "Luxury redefined with high-end finishes and timeless elegance",
  },
  {
    slug: "mrinmoyi",
    icon: Lightbulb,
    size: "sm",
    featuredImage:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/mrinmoyi-featured.webp",
    description:
      "Contemporary charm meets natural light in this architectural gem",
  },
];

export const Gallery = ({ projects }: GalleryProps) => {
  const getProjectBySlug = (slug: string) => {
    return projects.find((p) => p.slug === slug);
  };

  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 md:py-20">
      <div className="wrapper px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
          <div className="flex flex-col items-start gap-3 sm:gap-4">
            <div>
              <Badge className="bg-[#4CAF50] text-xs hover:bg-[#45a049] sm:text-sm">
                Featured Works
              </Badge>
            </div>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <h2 className="max-w-xl text-left text-2xl font-medium tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
                Sustainable Design{" "}
                <span className="font-bold text-[#4CAF50]">Gallery</span>
              </h2>
              <p className="max-w-xl text-left text-sm leading-relaxed tracking-tight text-muted-foreground sm:text-base md:text-lg lg:max-w-lg">
                Explore our portfolio of eco-friendly and innovative designs
                that blend aesthetics with sustainability. Each project tells a
                unique story of craftsmanship and environmental consciousness.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
            {featuredProjects.map((featured, index) => {
              const project = getProjectBySlug(featured.slug);
              if (!project) return null;

              const Icon = featured.icon;

              return (
                <Link
                  key={index}
                  href={`/portfolio/${project.slug}`}
                  className={cn(
                    "group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl",
                    {
                      "lg:col-span-2 lg:row-span-2": featured.size === "lg",
                      "lg:col-span-2": featured.size === "md",
                    },
                  )}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-0" />
                  <Image
                    src={featured.featuredImage}
                    alt={project.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex flex-col justify-between p-4 text-white sm:p-6">
                    <Icon className="h-6 w-6 stroke-1 sm:h-7 sm:w-7 md:h-8 md:w-8" />
                    <div className="flex flex-col">
                      <div className="opacity-100 transition-all duration-300 group-hover:opacity-0">
                        <p className="text-sm font-medium tracking-tight sm:text-base">
                          {featured.description}
                        </p>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-black/50 p-4 opacity-0 transition-all duration-300 group-hover:opacity-100 sm:bottom-6 sm:left-6 sm:right-6">
                        <h3 className="text-base font-semibold tracking-tight sm:text-lg md:text-xl">
                          {project.name}
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm">
                          {project.location}
                        </p>
                        <div className="mt-3 flex items-center gap-1 text-sm font-medium text-[#4CAF50]">
                          See Project <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
