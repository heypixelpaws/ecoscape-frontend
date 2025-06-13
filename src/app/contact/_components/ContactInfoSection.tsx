"use client";

import contactDetails from "@/data/contactDetails";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export function ContactInfoSection() {
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
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Contact Information
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Reach out to us through any of these channels or visit our office.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-lg bg-white p-6 shadow-md"
          >
            <MapPin className="mb-4 h-12 w-12 text-primary" />
            <h3 className="mb-2 text-xl font-bold">Our Location</h3>
            <p className="text-gray-600">{contactDetails.address}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-lg bg-white p-6 shadow-md"
          >
            <Phone className="mb-4 h-12 w-12 text-primary" />
            <h3 className="mb-2 text-xl font-bold">Phone</h3>
            <p className="text-gray-600">
              {contactDetails.phone}
              <br />
              Available 24/7
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="rounded-lg bg-white p-6 shadow-md"
          >
            <Mail className="mb-4 h-12 w-12 text-primary" />
            <h3 className="mb-2 text-xl font-bold">Email</h3>
            <p className="text-gray-600">{contactDetails.email}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="rounded-lg bg-white p-6 shadow-md"
          >
            <Clock className="mb-4 h-12 w-12 text-primary" />
            <h3 className="mb-2 text-xl font-bold">Office Hours</h3>
            <p className="text-gray-600">
              Saturday - Thursday: 10am - 10pm
              <br />
              Friday: Closed
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
