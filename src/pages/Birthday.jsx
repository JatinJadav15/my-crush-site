// src/pages/Birthday.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { motion, useScroll, useTransform } from "framer-motion";
import AudioPlayer from "../components/AudioPlayer"; // Keep your existing player

// --- Components for the New Look ---

// 1. Animated Hero Section
const LuxuriousHero = ({ onStart, started }) => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Floating Background Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], opacity: [0.5, 0.8, 0.5] }} 
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-10 left-10 w-32 h-32 bg-pink-300 rounded-full blur-3xl opacity-50"
      />
      <motion.div 
        animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }} 
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-40 h-40 bg-purple-300 rounded-full blur-3xl opacity-50"
      />

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl font-bold text-slate-800 mb-4 fancy-font z-10"
      >
        Happy Birthday <span className="text-pink-500">❤️</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-xl text-slate-600 mb-10 max-w-lg z-10"
      >
        Wishing you all the smiles, cake, and sunshine — today and always.
      </motion.p>

      {!started && (
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(236, 72, 153, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-400 text-white rounded-full font-semibold text-lg shadow-xl z-10 flex items-center gap-2"
        >
          <span>Start the Magic</span> 
          <span>✨</span>
        </motion.button>
      )}
    </div>
  );
};

// 2. Glassmorphism Scroll Section
const LuxurySection = ({ image, title, text, reverse }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10 my-24 px-6 md:px-20`}
    >
      {/* Image with Frame */}
      <motion.div 
        whileHover={{ scale: 1.02, rotate: reverse ? -2 : 2 }}
        className="w-full md:w-1/2 relative"
      >
        <div className="absolute inset-0 bg-pink-200 transform translate-x-4 translate-y-4 rounded-xl -z-10" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-[400px] object-cover rounded-xl shadow-2xl border-4 border-white"
        />
      </motion.div>

      {/* Text Card with Glass Effect */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <div className="bg-white/40 backdrop-blur-md p-8 rounded-2xl border border-white/50 shadow-lg">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 fancy-font">{title}</h2>
          <p className="text-lg text-slate-700 leading-relaxed">{text}</p>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Page Component ---

export default function Birthday() {
  const navigate = useNavigate();
  const [started, setStarted] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  // Handle Resize for Confetti
  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const startAndEnable = () => {
    setStarted(true);
    localStorage.setItem("musicStarted", "true");
    const audio = document.querySelector("audio");
    if (audio) audio.play().catch(() => {});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 overflow-x-hidden selection:bg-pink-200">
      
      {/* Confetti Explosion on Start */}
      {started && <Confetti width={windowSize.width} height={windowSize.height} recycle={false} numberOfPieces={500} />}

      {/* Audio Player (Hidden visually or styled minimally) */}
      <div className="fixed left-4 top-4 z-50">
        <AudioPlayer src="/assets/bday.mp3" playOnMount={started} />
      </div>

      <LuxuriousHero onStart={startAndEnable} started={started} />

      {/* Content Container */}
      <div className="max-w-6xl mx-auto pb-20">
        <LuxurySection
          image="/assets/you.jpg"
          title="That Day We Laughed"
          text="Remember when we walked for hours and talked about everything? The world faded away, and it was just us. I still smile thinking about it."
        />

        <LuxurySection
          image="/assets/crush.jpg"
          title="Your Smile"
          text="Your smile is my absolute favourite thing in this universe. It has this magic power to brighten even the dullest days."
          reverse
        />

        <LuxurySection
          image="/assets/together.jpg"
          title="Little Moments"
          text="It's not the grand gestures, but the small moments with you that are my favourite memories. I've saved every single one in my heart."
        />

        {/* Final Surprise CTA */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="py-24 px-6 text-center"
        >
          <div className="bg-white/60 backdrop-blur-xl p-12 rounded-3xl shadow-2xl max-w-2xl mx-auto border border-white">
            <h2 className="text-4xl font-bold mb-4 fancy-font text-slate-800">One Last Surprise ✨</h2>
            <p className="text-xl text-slate-600 mb-8">I have one more thing for you...</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/proposal")}
              className="px-10 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xl rounded-full shadow-lg hover:shadow-pink-500/30 transition-all font-serif"
            >
              Open Your Gift 💌
            </motion.button>
          </div>
        </motion.section>
      </div>
    </div>
  );
}