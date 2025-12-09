// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";

const heartVariants = {
  float: {
    y: [-10, 10, -10],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const confetti = Array.from({ length: 12 }).map((_, i) => ({
  left: `${(i * 8) % 90 + 5}%`,
  delay: (i % 5) * 0.1,
}));

export default function Hero({ onStart, started }) {
  return (
    <section className="w-full py-20 px-6 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: text */}
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: -30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight"
          >
            Happy Birthday <span className="text-pink-500">❤️</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-slate-700"
          >
            Wishing you all the smiles, cake, and sunshine — today and always.
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-4">
            {!started ? (
              <button
                onClick={onStart}
                className="px-6 py-3 rounded-lg bg-pink-500 text-white font-medium shadow hover:scale-105 transform transition"
              >
                Start Music & Celebrate 🎉
              </button>
            ) : (
              <div className="flex gap-3">
                <button
                  onClick={onStart}
                  className="px-5 py-3 rounded-lg bg-white border text-slate-800 shadow"
                >
                  Play 🎵
                </button>
                <a
                  href="#sections"
                  className="px-5 py-3 rounded-lg bg-yellow-400 text-black font-medium shadow"
                >
                  See Memories 💌
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Right: floating image with heart animation */}
        <div className="flex-1 flex items-center justify-center relative">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-2xl shadow-lg overflow-hidden flex items-center justify-center"
          >
            <img
              src="/assets/crush.jpg"
              alt="crush"
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* floating heart */}
          <motion.div
            variants={heartVariants}
            animate="float"
            className="absolute top-10 right-6 text-5xl pointer-events-none"
          >
            <span role="img" aria-label="heart">💖</span>
          </motion.div>

          {/* confetti pieces */}
          {confetti.map((c, i) => (
            <motion.div
              key={i}
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: [ -40, 60 ], opacity: [0,1,0] }}
              transition={{ delay: c.delay, duration: 2, repeat: Infinity, repeatDelay: 2 + (i * 0.1) }}
              style={{ left: c.left }}
              className={`absolute top-0 w-2 h-2 rounded-full bg-pink-400/80`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}