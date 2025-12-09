// src/pages/Proposal.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

export default function Proposal() {
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);

  // 1. If she says YES: Celebration!
  if (accepted) {
    return (
      <div className="h-screen w-full bg-gradient-to-br from-pink-400 to-rose-600 flex flex-col items-center justify-center text-white text-center overflow-hidden">
        <Confetti numberOfPieces={1000} recycle={true} gravity={0.2} />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="z-10 bg-white/20 backdrop-blur-lg p-12 rounded-3xl border border-white/50 shadow-2xl mx-4"
        >
          <motion.h1 
            animate={{ scale: [1, 1.2, 1] }} 
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-8xl mb-4"
          >
            💖
          </motion.h1>
          <h1 className="text-5xl md:text-7xl font-bold fancy-font mb-6">
            She Said YES!
          </h1>
          <p className="text-2xl font-light">Best. Birthday. Ever.</p>
        </motion.div>
      </div>
    );
  }

  // 2. If she says NO: Gentle Understanding Message
  if (rejected) {
    return (
      <div className="h-screen w-full bg-rose-50 flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-lg bg-white p-10 rounded-2xl shadow-xl border border-rose-100"
        >
          <div className="text-6xl mb-6">❤️</div>
          <h2 className="text-3xl font-bold text-slate-800 mb-4 fancy-font">
            I Understand.
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            Thank you for being honest with me. Your friendship still means the world to me, no matter what.
          </p>
          <p className="text-sm text-slate-400">
            (Refresh the page if you change your mind)
          </p>
        </motion.div>
      </div>
    );
  }

  // 3. The Proposal View (Main)
  return (
    <div className="min-h-screen bg-rose-50 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Floating Blobs Background */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center px-4 max-w-2xl w-full"
      >
        <div className="mb-10">
           <motion.div
             animate={{ y: [0, -10, 0] }}
             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
             className="text-8xl mb-4 drop-shadow-xl"
           >
             💍
           </motion.div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 fancy-font leading-tight">
          Will you make me the<br />happiest person alive?
        </h1>
        
        <p className="text-xl text-slate-600 mb-12">
          From that first laugh to this moment right now, everything has been better with you.
        </p>

        {/* Buttons with FIXED Spacing */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-20">
          
          {/* YES BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ boxShadow: ["0 0 0px #f43f5e", "0 0 20px #f43f5e", "0 0 0px #f43f5e"] }}
            transition={{ boxShadow: { duration: 1.5, repeat: Infinity } }}
            onClick={() => setAccepted(true)}
            className="px-12 py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white text-xl font-bold rounded-full shadow-lg z-50 w-full md:w-auto"
          >
            Yes, I Will! 💖
          </motion.button>

          {/* NO BUTTON - Static and Honest */}
          <button
            onClick={() => setRejected(true)}
            className="px-12 py-4 bg-white text-slate-500 text-xl font-medium rounded-full border border-slate-200 shadow-sm hover:bg-slate-50 hover:text-slate-700 transition-colors z-50 w-full md:w-auto"
          >
            No thanks
          </button>
          
        </div>
      </motion.div>
    </div>
  );
}