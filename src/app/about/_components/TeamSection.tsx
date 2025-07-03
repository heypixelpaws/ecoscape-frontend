"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "Tonoy Banik",
    role: "Managing Director",
    image:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/team_tonoy.jpg",
    description: "BSc in Civil Engineering (AUST), 2017",
  },
  {
    name: "Abir Datta",
    role: "CEO",
    image:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/team_abir.png",
    description: "BSc in Civil Engineering (AUST), 2017",
  },
  {
    name: "Payel Sen Gupta",
    role: "Architect",
    image:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/team_payel.jpg",
    description: "Bachelor of Architecture (Premier University)",
  },
  {
    name: "Nazmul Alam Hira",
    role: "Architect",
    image:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/team_hira.jpg",
    description: "Bachelor of Architecture (Premier University)",
  },
  {
    name: "Swagoto Biswas",
    role: "Head of Marketing",
    image:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/team_swagoto.jpg",
    description: "Masters in English (Premier University)",
  },
  {
    name: "Dhrubo Das",
    role: "Project In-charge",
    image:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/team_dhrubo.jpeg",
    description: "BSc in Civil Engineering (Southern University)",
  },
  {
    name: "Sachin Sen",
    role: "Procurement Executive",
    image:
      "https://ecoscapebd-assets.s3.ap-south-1.amazonaws.com/team_shachin.jpeg",
    description: "Procurement Executive",
  },
];

export function TeamSection() {
  return (
    <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Meet Our Team</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Our talented team of designers and professionals brings together
            diverse expertise and a shared passion for creating exceptional
            spaces.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg bg-white shadow-lg"
            >
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="360px"
                  className="object-cover grayscale"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">{member.name}</h3>
                <p className="mb-4 text-gray-600">{member.role}</p>
                {/* <p className="text-gray-600">{member.description}</p> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
