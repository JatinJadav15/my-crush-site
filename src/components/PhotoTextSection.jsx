import React from "react";
import { motion } from "framer-motion";

export default function PhotoTextSection({ imageSrc, title, text, reverse=false }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="py-12"
    >
      <div className={`max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 ${reverse ? "md:flex-row-reverse" : ""}`}>
        <img src={imageSrc} alt={title} className="w-full md:w-1/2 rounded-lg shadow object-cover" />
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-lg leading-relaxed">{text}</p>
        </div>
      </div>
    </motion.section>
  );
}
