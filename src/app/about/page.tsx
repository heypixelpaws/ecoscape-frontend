"use client";

import { CTASection } from "@/app/services/_components/CTASection";
import { HeroSection } from "./_components/HeroSection";
import { MissionSection } from "./_components/MissionSection";
import { TeamSection } from "./_components/TeamSection";
import { ValuesSection } from "./_components/ValuesSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <MissionSection />
      <TeamSection />
      <ValuesSection />
      <CTASection />
    </div>
  );
}
