"use client";

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

const tooltipContent = {
  materials:
    "Different material qualities affect the final cost and durability",
  warranty: "Warranty covers manufacturing defects and structural issues",
  customization: "Fully customizable based on your specific requirements",
  layouts: "Includes detailed technical drawings and specifications",
};

const interiorPlans = [
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
    image: "/assets/expertise/interior-design.jpg",
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
    image: "/assets/expertise/interior-design-premium.jpg",
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
    image: "/assets/expertise/interior-design-custom.jpg",
  },
];

const buildingPlans = [
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
    image: "/assets/expertise/building-design.jpg",
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
    image: "/assets/expertise/building-design-premium.jpg",
  },
];

const furniturePlans = [
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
    image: "/assets/expertise/custom-furniture.jpg",
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
    image: "/assets/expertise/interior-design.jpg",
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
    image: "/assets/expertise/building-materials.jpg",
  },
];

export const PricingSections = () => {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-6 py-20">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-medium tracking-tight sm:text-5xl">
            Transparent{" "}
            <span className="font-bold text-[#4CAF50]">Pricing</span> for Every
            Need
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our range of services with clear, upfront pricing. Choose
            the package that best fits your requirements.
          </p>
        </div>

        <Tabs defaultValue="interior" className="mx-auto max-w-screen-xl">
          <TabsList className="mb-8 h-12 w-full justify-center bg-transparent">
            <TabsTrigger
              value="interior"
              className="data-[state=active]:bg-[#4CAF50] data-[state=active]:text-white"
            >
              <PaintBucket className="mr-2 h-4 w-4" />
              Interior Design
            </TabsTrigger>
            <TabsTrigger
              value="building"
              className="data-[state=active]:bg-[#4CAF50] data-[state=active]:text-white"
            >
              <Building className="mr-2 h-4 w-4" />
              Building Design
            </TabsTrigger>
            <TabsTrigger
              value="furniture"
              className="data-[state=active]:bg-[#4CAF50] data-[state=active]:text-white"
            >
              <Sofa className="mr-2 h-4 w-4" />
              Custom Furniture
            </TabsTrigger>
          </TabsList>

          <TabsContent value="interior" className="mt-4">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {interiorPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={cn(
                    "relative overflow-hidden rounded-xl border bg-white transition-all duration-200 hover:shadow-lg",
                    {
                      "shadow-md ring-[2px] ring-[#4CAF50]": plan.isPopular,
                    },
                  )}
                >
                  <div className="relative h-48">
                    <Image
                      src={plan.image || "/placeholder.svg"}
                      alt={plan.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    {plan.isPopular && (
                      <Badge className="absolute right-4 top-4 bg-[#4CAF50]">
                        Most Popular
                      </Badge>
                    )}
                  </div>
                  <div className="p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-lg bg-[#4CAF50]/10 p-2">
                        <plan.icon className="h-6 w-6 text-[#4CAF50]" />
                      </div>
                      <h3 className="text-xl font-bold">{plan.name}</h3>
                    </div>
                    <p className="text-muted-foreground">{plan.description}</p>
                    {plan.price ? (
                      <p className="mt-4 text-3xl font-bold">
                        {plan.price}
                        <span className="ml-1 text-base font-normal text-muted-foreground">
                          tk/sft
                        </span>
                      </p>
                    ) : (
                      <p className="mt-4 text-2xl font-bold text-[#4CAF50]">
                        Custom Pricing
                      </p>
                    )}

                    <Button
                      variant={plan.isPopular ? "default" : "outline"}
                      size="lg"
                      className={cn("mt-6 w-full", {
                        "bg-[#4CAF50] hover:bg-[#45a049]": plan.isPopular,
                      })}
                    >
                      Get Started
                    </Button>

                    <Separator className="my-8" />

                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature.title}
                          className="flex items-start gap-2"
                        >
                          <CircleCheck className="mt-0.5 h-5 w-5 text-[#4CAF50]" />
                          <span className="flex-1">{feature.title}</span>
                          {feature.tooltip && (
                            <Tooltip>
                              <TooltipTrigger className="cursor-help">
                                <CircleHelp className="h-5 w-5 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent>{feature.tooltip}</TooltipContent>
                            </Tooltip>
                          )}
                        </li>
                      ))}
                    </ul>

                    <Separator className="my-8" />

                    <div className="text-sm text-muted-foreground">
                      {plan.additionalInfo}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="building" className="mt-0">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {buildingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={cn(
                    "relative max-w-md overflow-hidden rounded-xl border bg-white transition-all duration-200 hover:shadow-lg",
                    {
                      "border-[2px] border-[#4CAF50] shadow-md": plan.isPopular,
                    },
                  )}
                >
                  <div className="relative h-48">
                    <Image
                      src={plan.image || "/placeholder.svg"}
                      alt={plan.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    {plan.isPopular && (
                      <Badge className="absolute right-4 top-4 bg-[#4CAF50]">
                        Recommended
                      </Badge>
                    )}
                  </div>
                  <div className="p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-lg bg-[#4CAF50]/10 p-2">
                        <plan.icon className="h-6 w-6 text-[#4CAF50]" />
                      </div>
                      <h3 className="text-xl font-bold">{plan.name}</h3>
                    </div>
                    <p className="text-muted-foreground">{plan.description}</p>
                    {plan.price ? (
                      <p className="mt-4 text-3xl font-bold">
                        {plan.price}
                        <span className="ml-1 text-base font-normal text-muted-foreground">
                          tk/sft
                        </span>
                      </p>
                    ) : (
                      <p className="mt-4 text-2xl font-bold text-[#4CAF50]">
                        Contact for Quote
                      </p>
                    )}

                    <Button
                      variant={plan.isPopular ? "default" : "outline"}
                      size="lg"
                      className={cn("mt-6 w-full", {
                        "bg-[#4CAF50] hover:bg-[#45a049]": plan.isPopular,
                      })}
                    >
                      Get Started
                    </Button>

                    <Separator className="my-8" />

                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature.title}
                          className="flex items-start gap-2"
                        >
                          <CircleCheck className="mt-0.5 h-5 w-5 text-[#4CAF50]" />
                          <span className="flex-1">{feature.title}</span>
                          {feature.tooltip && (
                            <Tooltip>
                              <TooltipTrigger className="cursor-help">
                                <CircleHelp className="h-5 w-5 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent>{feature.tooltip}</TooltipContent>
                            </Tooltip>
                          )}
                        </li>
                      ))}
                    </ul>

                    <Separator className="my-8" />

                    <div className="text-sm text-muted-foreground">
                      {plan.additionalInfo}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="furniture" className="mt-0">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {furniturePlans.map((plan) => (
                <div
                  key={plan.name}
                  className="relative overflow-hidden rounded-xl border bg-white transition-all duration-200 hover:shadow-lg"
                >
                  <div className="relative h-48">
                    <Image
                      src={plan.image || "/placeholder.svg"}
                      alt={plan.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute left-4 top-4 rounded-lg bg-white p-2">
                      <plan.icon className="h-6 w-6 text-[#4CAF50]" />
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="mb-2 text-xl font-bold">{plan.name}</h3>
                    <p className="mb-6 text-muted-foreground">
                      {plan.description}
                    </p>

                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature.title}
                          className="flex items-start gap-2"
                        >
                          <CircleCheck className="mt-0.5 h-5 w-5 text-[#4CAF50]" />
                          <span className="flex-1">{feature.title}</span>
                        </li>
                      ))}
                    </ul>

                    <Button variant="outline" size="lg" className="mt-8 w-full">
                      Request Quote
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </TooltipProvider>
  );
};

export default PricingSections;
