import { Building, HardHat, PaintBucket, Sofa, Truck } from "lucide-react";

export const expertise = [
  {
    icon: PaintBucket,
    title: "Interior Design & Construction",
    description:
      "Create stunning spaces that reflect your style and enhance functionality. Our interior design and construction services cover everything from space planning to final decoration, ensuring a seamless blend of aesthetics and practicality.",
    image:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/expertise-interior-design.jpg",
  },
  {
    icon: Building,
    title: "Building Design Consultancy",
    description:
      "Transform your vision into reality with our comprehensive architectural and structural design services. Our expert team creates innovative, sustainable, and functional building designs that meet your specific needs and exceed expectations.",
    image:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/expertise-building-design.jpg",
  },
  {
    icon: HardHat,
    title: "Building Construction",
    description:
      "From groundbreaking to finishing touches, our construction team delivers excellence at every stage. We combine skilled craftsmanship with modern construction techniques to build structures that stand the test of time.",
    image:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/expertise-building-construction.jpg",
  },
  {
    icon: Sofa,
    title: "Customized Furniture & Lighting",
    description:
      "Elevate your space with bespoke furniture and lighting solutions. We design and craft custom pieces that perfectly match your style, space requirements, and functional needs, creating unique environments that truly stand out.",
    image:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/expertise-custom-furniture.jpg",
  },
  {
    icon: Truck,
    title: "Building Material Supply",
    description:
      "Access premium construction materials through our reliable supply chain. We source and deliver high-quality building materials, ensuring your project benefits from the best materials available in the market.",
    image:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/expertise-building-materials.jpg",
  },
] as const;
