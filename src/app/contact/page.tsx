"use client";

import { HeroSection } from "./_components/HeroSection";
import { ContactFormSection } from "./_components/ContactFormSection";
import { ContactInfoSection } from "./_components/ContactInfoSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ContactInfoSection />
      <ContactFormSection />
    </div>
  );
}
