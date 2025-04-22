"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & Lead Designer",
    image: "/team/sarah.jpg",
    description:
      "With over 15 years of experience in interior design, Sarah brings a unique blend of creativity and technical expertise to every project.",
  },
  {
    name: "Michael Chen",
    role: "Senior Designer",
    image: "/team/michael.jpg",
    description:
      "Michael specializes in sustainable design solutions and has a keen eye for detail that transforms spaces into functional works of art.",
  },
  {
    name: "Emily Rodriguez",
    role: "Project Manager",
    image: "/team/emily.jpg",
    description:
      "Emily ensures every project runs smoothly, coordinating between clients, designers, and contractors to deliver exceptional results.",
  },
  {
    name: "David Wilson",
    role: "Architectural Consultant",
    image: "/team/david.jpg",
    description:
      "David's architectural background helps bridge the gap between structural integrity and aesthetic excellence in our designs.",
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
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">{member.name}</h3>
                <p className="mb-4 text-gray-600">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
