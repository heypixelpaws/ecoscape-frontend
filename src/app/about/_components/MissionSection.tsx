"use client";

import { motion } from "framer-motion";

export function MissionSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="grid gap-8 md:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Mission</h2>
            <p className="text-lg text-gray-600">
              At Ecoscape, we are dedicated to creating beautiful, functional,
              and sustainable spaces that enhance the quality of life for our
              clients. We believe that great design should be accessible to
              everyone, and we strive to make that a reality through our
              innovative approach and commitment to excellence.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Vision</h2>
            <p className="text-lg text-gray-600">
              We envision a world where every space tells a story and reflects
              the unique personality of its inhabitants. Through our work, we
              aim to inspire creativity, foster connections, and create
              environments that stand the test of time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
