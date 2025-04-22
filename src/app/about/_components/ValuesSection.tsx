"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Excellence",
    description:
      "We strive for perfection in every detail, delivering exceptional quality in all our work.",
    icon: "⭐",
  },
  {
    title: "Innovation",
    description:
      "We embrace creativity and new ideas, constantly pushing the boundaries of design.",
    icon: "💡",
  },
  {
    title: "Sustainability",
    description:
      "We are committed to eco-friendly practices and materials, creating spaces that respect our planet.",
    icon: "🌱",
  },
  {
    title: "Collaboration",
    description:
      "We believe in working closely with our clients and partners to achieve the best possible results.",
    icon: "🤝",
  },
  {
    title: "Integrity",
    description:
      "We maintain the highest standards of honesty and transparency in all our dealings.",
    icon: "✨",
  },
  {
    title: "Passion",
    description:
      "We are driven by our love for design and our dedication to creating beautiful spaces.",
    icon: "❤️",
  },
];

export function ValuesSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Our Core Values
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            These principles guide everything we do and shape the way we
            approach each project.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 text-4xl">{value.icon}</div>
              <h3 className="mb-2 text-xl font-bold">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
