import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Home,
  Building,
  TreesIcon as Tree,
  Sofa,
  Lightbulb,
  Leaf,
  Recycle,
} from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Eco-Friendly Home Renovation",
    description:
      "A complete home makeover with sustainable materials and energy-efficient systems.",
    icon: Home,
    image:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/avani-featured.webp",
    size: "lg",
  },
  {
    title: "Green Office Space",
    description:
      "Modern office design with a focus on employee well-being and environmental sustainability.",
    icon: Building,
    image:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/lambent-featured.webp",
    size: "sm",
  },
  {
    title: "Sustainable Restaurant Design",
    description:
      "Innovative restaurant interior using recycled materials and energy-saving lighting.",
    icon: Leaf,
    image:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/noah-featured.webp",
    size: "sm",
  },
  {
    title: "Eco-Resort Renovation",
    description:
      "Luxury meets sustainability in this beachfront resort renovation project.",
    icon: Tree,
    image:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/srinibash-featured.webp",
    size: "sm",
  },
  {
    title: "Smart Home Integration",
    description:
      "Cutting-edge smart home technology for efficient energy management.",
    icon: Lightbulb,
    image:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/mrinmoyi-featured.webp",
    size: "sm",
  },
  // {
  //   title: "Upcycled Furniture Collection",
  //   description: "Custom furniture pieces created from reclaimed materials.",
  //   icon: Recycle,
  //   image:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ76w58ea3h84PGZimmf4RWT0C11ffPTUVeEQ&s",
  //   size: "sm",
  // },
  // {
  //   title: "Biophilic Office Design",
  //   description:
  //     "Bringing nature indoors to create a more productive and healthy work environment.",
  //   icon: Sofa,
  //   image:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMmmEgyBRfvWmcz2cmJ40ke64f4GjK5bDGwQ&s",
  //   size: "md",
  // },
  // {
  //   title: "Biophilic Office Design",
  //   description:
  //     "Bringing nature indoors to create a more productive and healthy work environment.",
  //   icon: Sofa,
  //   image:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7FlnDeWsFlEfoyVgm3__lTj77d_XvGp0eFA&s",
  //   size: "sm",
  // },
];

export const Gallery = () => (
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
              Explore our portfolio of eco-friendly and innovative designs that
              blend aesthetics with sustainability.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className={cn(
                "group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl",
                {
                  "lg:col-span-2 lg:row-span-2": project.size === "lg",
                  "lg:col-span-2": project.size === "md",
                },
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-60" />
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={400}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-between p-4 text-white sm:p-6">
                <project.icon className="h-6 w-6 stroke-1 sm:h-7 sm:w-7 md:h-8 md:w-8" />
                <div className="flex flex-col">
                  <h3 className="text-base font-semibold tracking-tight opacity-100 transition-opacity duration-300 group-hover:opacity-0 sm:text-lg md:text-xl">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-xs opacity-100 transition-opacity duration-300 group-hover:opacity-0 sm:mt-2 sm:text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
