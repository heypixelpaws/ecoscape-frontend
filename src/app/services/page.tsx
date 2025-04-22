"use client";

import { HeroSection } from "./_components/HeroSection";
import { FeaturesSection } from "./_components/FeaturesSection";
import { ServicesAccordion } from "./_components/ServicesAccordion";
import { ComparisonTable } from "./_components/ComparisonTable";
import { CTASection } from "./_components/CTASection";
import { ServiceProcessSection } from "./_components/ServiceProcessSection";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FeaturesSection />
      <ServicesAccordion />
      <ServiceProcessSection />
      <ComparisonTable />
      <CTASection />
    </div>
  );
}
