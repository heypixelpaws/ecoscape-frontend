"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ready to Transform Your Space?
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Contact us today to discuss your project and discover how we can
            bring your vision to life.
          </p>
          <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto">
              Schedule a Consultation
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              View Our Portfolio
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span>info@ecoscape.com</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
