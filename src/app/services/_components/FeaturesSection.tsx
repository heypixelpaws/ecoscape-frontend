"use client";

import { motion } from "framer-motion";
import { Clock, MessageSquare, Shield, Star, Calendar } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "50-Day Move-in",
    description: "Efficient project completion with minimal delays",
  },
  {
    icon: MessageSquare,
    title: "Regular Updates",
    description: "Transparent communication with Gantt chart tracking",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "154 quality checks with branded materials",
  },
  {
    icon: Star,
    title: "Premium Design",
    description: "Personalized 3D visuals and bespoke solutions",
  },
  {
    icon: Calendar,
    title: "Project Management",
    description: "Comprehensive timeline and progress tracking",
  },
];

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

export function FeaturesSection() {
  return (
    <div className="wrapper py-16">
      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center"
            variants={itemVariants}
          >
            <div className="mb-4 rounded-full bg-[#005f27]/10 p-4">
              <feature.icon className="h-6 w-6 text-[#005f27]" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
