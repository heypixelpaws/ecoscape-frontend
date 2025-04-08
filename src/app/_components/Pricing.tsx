"use client";

import React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import {
  Sofa,
  Building,
  PaintBucket,
  CircleCheck,
  CircleHelp,
  Table,
  Home,
  PenTool,
  Layout,
  Box,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

interface Feature {
  title: string;
  tooltip?: string;
}

interface Plan {
  name: string;
  description: string;
  features: Feature[];
  icon: LucideIcon;
  image?: string;
  price?: number | null;
  isPopular?: boolean;
  additionalInfo?: string;
}

const tooltipContent = {
  materials:
    "Different material qualities affect the final cost and durability",
  warranty: "Warranty covers manufacturing defects and structural issues",
  customization: "Fully customizable based on your specific requirements",
  layouts: "Includes detailed technical drawings and specifications",
};

const interiorPlans: Plan[] = [
  {
    name: "Basic Interior",
    price: 600,
    description:
      "Essential interior package with quality materials and core features",
    features: [
      { title: "600 tk per sft rate" },
      { title: "1 year service warranty", tooltip: tooltipContent.warranty },
      {
        title: "Garjan ply, partex board materials",
        tooltip: tooltipContent.materials,
      },
      { title: "Drawing ceiling" },
      { title: "TV panel and cabinet" },
      { title: "Master Bed cabinet" },
      { title: "Kitchen Cabinet" },
      { title: "Decorative light" },
      { title: "Electrical wiring" },
    ],
    additionalInfo: "Estimated cost for 1200-1400 sft: 7.2 Lac-8.4 Lac",
    icon: PaintBucket,
    image:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/pricing-basic-interior.webp",
  },
  {
    name: "Premium Interior",
    price: 1000,
    isPopular: true,
    description:
      "Comprehensive coverage with premium materials and extended warranty",
    features: [
      { title: "1000 tk per sft rate" },
      { title: "5 years service warranty", tooltip: tooltipContent.warranty },
      {
        title: "Eco board, Marine board, PVC materials",
        tooltip: tooltipContent.materials,
      },
      { title: "All Basic features included" },
      { title: "Dining ceiling" },
      { title: "Childbed cabinet" },
      { title: "Wall paneling" },
      { title: "Basin unit" },
      { title: "Featured painting" },
      { title: "Partition work" },
    ],
    additionalInfo: "Estimated cost for 1200-1400 sft: 12 Lac-14 Lac",
    icon: Home,
    image:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/pricing-premium-interior.webp",
  },
  {
    name: "Custom Interior",
    price: null,
    description: "Tailored interior solutions for unique requirements",
    features: [
      {
        title: "Customizable per sft rate",
        tooltip: tooltipContent.customization,
      },
      {
        title: "Customizable warranty period",
        tooltip: tooltipContent.warranty,
      },
      { title: "Premium material options", tooltip: tooltipContent.materials },
      { title: "All Premium features included" },
      { title: "Bespoke design solutions" },
      { title: "Premium finish options" },
      { title: "Specialized storage solutions" },
    ],
    additionalInfo:
      "Solutions Tailored to Client Needs, Varying Based on Material Quality",
    icon: PenTool,
    image:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/pricing-custom-interior.webp",
  },
];

const buildingPlans: Plan[] = [
  {
    name: "Standard Building Design",
    price: 15,
    description: "Comprehensive building design package at 15 tk per sft",
    features: [
      { title: "Architectural layout", tooltip: tooltipContent.layouts },
      { title: "Structural layout", tooltip: tooltipContent.layouts },
      { title: "Electrical layout", tooltip: tooltipContent.layouts },
      { title: "Plumbing layout", tooltip: tooltipContent.layouts },
      { title: "3D design visualization" },
      { title: "Technical documentation" },
      { title: "Material specifications" },
    ],
    additionalInfo: "Minimum charge 50,000 tk for Duplex building",
    icon: Building,
    image:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/pricing-standard-building-design.webp",
  },
  {
    name: "Premium Building Design",
    price: null,
    isPopular: true,
    description: "Enhanced design package with additional features",
    features: [
      { title: "All Standard features included" },
      { title: "Advanced 3D visualization" },
      { title: "Detailed construction drawings" },
      { title: "Interior layout suggestions" },
      { title: "Landscape design concepts" },
      { title: "Green building features" },
      { title: "Cost optimization plans" },
    ],
    additionalInfo: "Custom pricing based on project complexity",
    icon: Layout,
    image:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/pricing-premium-building-design.webp",
  },
];

const furniturePlans: Plan[] = [
  {
    name: "Living Room",
    description: "Custom-designed sofas and seating solutions",
    features: [
      { title: "Sofa sets starting from 25,000 Tk" },
      { title: "Multiple design options" },
      { title: "Quality fabric/leather choices" },
      { title: "Custom dimensions" },
      { title: "Comfort-focused design" },
    ],
    icon: Sofa,
    image:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/pricing-living-room.webp",
  },
  {
    name: "Dining Room",
    description: "Elegant dining sets for your home",
    features: [
      { title: "Dining table + 4 chairs from 70,000 Tk" },
      { title: "Various wood options" },
      { title: "Custom table sizes" },
      { title: "Chair style options" },
      { title: "Matching sideboard options" },
    ],
    icon: Table,
    image:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/pricing-dining-room.webp",
  },
  {
    name: "Custom Cabinets",
    description: "Bespoke storage solutions",
    features: [
      { title: "Starting from 1500 tk per sft" },
      { title: "Custom dimensions" },
      { title: "Multiple finish options" },
      { title: "Interior organization" },
      { title: "Hardware choices" },
    ],
    icon: Box,
    image:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/pricing-cabinets.webp",
  },
];

// Custom hook to preload images
function useImagePreloader(imageSources: string[]) {
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const preloadImages = async () => {
      const promises = imageSources.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.crossOrigin = "anonymous";
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(promises);
        if (isMounted) {
          setImagesPreloaded(true);
        }
      } catch (error) {
        console.error("Failed to preload images:", error);
      }
    };

    preloadImages();

    return () => {
      isMounted = false;
    };
  }, [imageSources]);

  return imagesPreloaded;
}

// Fixed OptimizedImage component
const OptimizedImage = ({
  src,
  alt,
  fill = true,
  className = "",
  priority = false,
}: {
  src?: string;
  alt: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <div
          className={`absolute inset-0 animate-pulse bg-gray-100 ${className}`}
        />
      )}
      <Image
        src={src || "/placeholder.svg?height=300&width=500"}
        alt={alt}
        fill={fill}
        className={`object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"} ${className}`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={priority}
        quality={80}
        onLoad={() => setLoaded(true)}
        placeholder="empty"
      />
    </>
  );
};

// Plan card component to reduce re-renders
const PlanCard = React.memo(({ plan, type }: { plan: Plan; type: string }) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border bg-white transition-all duration-200 hover:shadow-lg",
        {
          "shadow-md ring-[2px] ring-[#4CAF50]": plan.isPopular,
          "w-full max-w-md": type === "building",
        },
      )}
    >
      <div className="relative h-40 sm:h-44 md:h-48">
        <OptimizedImage
          src={plan.image}
          alt={plan.name}
          priority={plan.isPopular}
        />
        <div className="absolute inset-0 bg-black/30" />
        {plan.isPopular && (
          <Badge className="absolute right-3 top-3 bg-[#4CAF50] text-xs sm:right-4 sm:top-4 sm:text-sm">
            {type === "building" ? "Recommended" : "Most Popular"}
          </Badge>
        )}
        {type === "furniture" && (
          <div className="absolute left-3 top-3 rounded-lg bg-white p-1.5 sm:left-4 sm:top-4 sm:p-2">
            <plan.icon className="h-4 w-4 text-[#4CAF50] sm:h-5 sm:w-5 md:h-6 md:w-6" />
          </div>
        )}
      </div>

      <div
        className={cn("p-3 sm:p-4 md:p-6", {
          "p-4 sm:p-6 md:p-8": type === "building" || type === "furniture",
        })}
      >
        {type !== "furniture" && (
          <div className="mb-3 flex items-center gap-2 sm:mb-4 sm:gap-3">
            <div className="rounded-lg bg-[#4CAF50]/10 p-1.5 sm:p-2">
              <plan.icon className="h-4 w-4 text-[#4CAF50] sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </div>
            <h3 className="text-lg font-bold sm:text-xl">{plan.name}</h3>
          </div>
        )}

        {type === "furniture" && (
          <h3 className="mb-1.5 text-lg font-bold sm:mb-2 sm:text-xl">
            {plan.name}
          </h3>
        )}

        <p
          className={cn("text-sm text-muted-foreground sm:text-base", {
            "mb-4 sm:mb-6": type === "furniture",
          })}
        >
          {plan.description}
        </p>

        {plan.price !== undefined && type !== "furniture" && (
          <p className="mt-3 text-2xl font-bold sm:mt-4 sm:text-3xl">
            {plan.price}
            <span className="ml-1 text-sm font-normal text-muted-foreground sm:text-base">
              tk/sft
            </span>
          </p>
        )}

        {plan.price === null && type !== "furniture" && (
          <p className="mt-3 text-xl font-bold text-[#4CAF50] sm:mt-4 sm:text-2xl">
            {type === "building" ? "Contact for Quote" : "Custom Pricing"}
          </p>
        )}

        <Button
          variant={plan.isPopular ? "default" : "outline"}
          size="lg"
          className={cn("mt-4 w-full text-sm sm:mt-6 sm:text-base", {
            "bg-[#4CAF50] hover:bg-[#45a049]": plan.isPopular,
            "mt-6 sm:mt-8": type === "furniture",
          })}
        >
          {type === "furniture" ? "Request Quote" : "Get Started"}
        </Button>

        <Separator className="my-4 sm:my-6 md:my-8" />

        <ul className="space-y-2 sm:space-y-3">
          {plan.features.map((feature) => (
            <li
              key={feature.title}
              className="flex items-start gap-1.5 sm:gap-2"
            >
              <CircleCheck className="mt-0.5 size-4 text-[#4CAF50] sm:size-5" />
              <span className="flex-1 text-sm sm:text-base">
                {feature.title}
              </span>
              {feature.tooltip && (
                <Tooltip>
                  <TooltipTrigger className="cursor-help">
                    <CircleHelp className="size-4 text-muted-foreground sm:size-5" />
                  </TooltipTrigger>
                  <TooltipContent>{feature.tooltip}</TooltipContent>
                </Tooltip>
              )}
            </li>
          ))}
        </ul>

        {plan.additionalInfo && type !== "furniture" && (
          <>
            <Separator className="my-4 sm:my-6" />
            <div className="text-xs text-muted-foreground sm:text-sm">
              {plan.additionalInfo}
            </div>
          </>
        )}
      </div>
    </div>
  );
});

PlanCard.displayName = "PlanCard";

export const PricingSections = () => {
  // Memoize plans to prevent unnecessary re-renders
  const memoizedInteriorPlans = useMemo(() => interiorPlans, []);
  const memoizedBuildingPlans = useMemo(() => buildingPlans, []);
  const memoizedFurniturePlans = useMemo(() => furniturePlans, []);

  // Get all image sources for preloading
  const allImageSources = useMemo(() => {
    return [
      ...interiorPlans.map((plan) => plan.image),
      ...buildingPlans.map((plan) => plan.image),
      ...furniturePlans.map((plan) => plan.image),
    ].filter(Boolean) as string[];
  }, []);

  // Preload all images
  const imagesPreloaded = useImagePreloader(allImageSources);

  // Track active tab for analytics
  const [activeTab, setActiveTab] = useState("interior");

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-4 py-12 sm:px-6 sm:py-20">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12">
          <h2 className="mb-3 text-2xl font-medium tracking-tight sm:mb-4 sm:text-3xl md:text-4xl md:leading-[3.5rem] lg:text-5xl">
            Transparent{" "}
            <span className="font-bold text-[#4CAF50]">Pricing</span> for Every
            Need
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base md:text-lg">
            Explore our range of services with clear, upfront pricing. Choose
            the package that best fits your requirements.
          </p>
        </div>

        <Tabs
          defaultValue="interior"
          className="wrapper-ext"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="mb-6 h-10 w-full justify-center bg-transparent sm:mb-8 sm:h-12">
            <TabsTrigger
              value="interior"
              className="text-xs data-[state=active]:bg-[#4CAF50] data-[state=active]:text-white sm:text-base"
            >
              <PaintBucket className="mr-1.5 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
              Interior Design
            </TabsTrigger>
            <TabsTrigger
              value="building"
              className="text-xs data-[state=active]:bg-[#4CAF50] data-[state=active]:text-white sm:text-base"
            >
              <Building className="mr-1.5 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
              Building Design
            </TabsTrigger>
            <TabsTrigger
              value="furniture"
              className="text-xs data-[state=active]:bg-[#4CAF50] data-[state=active]:text-white sm:text-base"
            >
              <Sofa className="mr-1.5 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
              Custom Furniture
            </TabsTrigger>
          </TabsList>

          {/* Force mount all tabs but hide inactive ones with CSS */}
          <TabsContent
            value="interior"
            className="mt-3 data-[state=inactive]:hidden sm:mt-4"
            forceMount
          >
            <div className="grid grid-cols-1 items-start gap-4 sm:gap-6 md:gap-8 lg:grid-cols-3">
              {memoizedInteriorPlans.map((plan) => (
                <PlanCard key={plan.name} plan={plan} type="interior" />
              ))}
            </div>
          </TabsContent>

          <TabsContent
            value="building"
            className="mt-3 data-[state=inactive]:hidden sm:mt-4"
            forceMount
          >
            <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:flex-row lg:justify-center">
              {memoizedBuildingPlans.map((plan) => (
                <PlanCard key={plan.name} plan={plan} type="building" />
              ))}
            </div>
          </TabsContent>

          <TabsContent
            value="furniture"
            className="mt-3 data-[state=inactive]:hidden sm:mt-4"
            forceMount
          >
            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 lg:grid-cols-3">
              {memoizedFurniturePlans.map((plan) => (
                <PlanCard key={plan.name} plan={plan} type="furniture" />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </TooltipProvider>
  );
};

export default PricingSections;
