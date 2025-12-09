// src/components/ScrollSection.jsx
import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const imgVariant = {
  hidden: { y: -120, opacity: 0, scale: 0.98 },
  visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.7 } },
  exit: { y: 80, opacity: 0, transition: { duration: 0.5 } },
};

const textVariant = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

export default function ScrollSection({ image, title, text, reverse=false }) {
  return (
    <motion.section
      className="py-20 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={container}
    >
      <div className={`max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 ${reverse ? "md:flex-row-reverse" : ""}`}>
        <motion.div className="md:w-1/2 w-full rounded-lg overflow-hidden shadow-lg" variants={imgVariant}>
          <img src={image} alt={title} className="w-full h-80 object-cover" />
        </motion.div>

        <div className="md:w-1/2 w-full">
          <motion.h3 variants={textVariant} className="text-2xl font-semibold mb-3 text-slate-900">
            {title}
          </motion.h3>
          <motion.p variants={textVariant} className="text-lg text-slate-700">
            {text}
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}