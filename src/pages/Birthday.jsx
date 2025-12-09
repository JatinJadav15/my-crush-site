// src/pages/Birthday.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AudioPlayer from "../components/AudioPlayer";
import Hero from "../components/Hero";
import ScrollSection from "../components/ScrollSection";

export default function Birthday() {
  const navigate = useNavigate();
  const [started, setStarted] = useState(false);

  const startAndEnable = () => {
    setStarted(true);
    // store a flag for Proposal page autoplay
    localStorage.setItem("musicStarted", "true");

    // Try to play audio (AudioPlayer uses playOnMount)
    const audio = document.querySelector("audio");
    if (audio) {
      audio.play().catch(() => {});
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero onStart={startAndEnable} started={started} />

      {/* Small sticky audio control at top-left */}
      <div className="fixed left-4 top-4 z-50">
        <AudioPlayer src="/assets/dooron.mp3" playOnMount={started} />
      </div>

      {/* Sections */}
      <div id="sections" className="mt-8">
        <ScrollSection
          image="/assets/you.jpg"
          title="That Day We Laughed"
          text="Remember when we walked for hours and talked about everything? I still smile thinking about it."
        />

        <ScrollSection
          image="/assets/crush.jpg"
          title="Your Smile"
          text="Your smile is my favourite thing — it brightens the dullest days."
          reverse
        />

        <ScrollSection
          image="/assets/together.jpg"
          title="Little Moments"
          text="Small moments with you are my favourite memories. I saved them all in my heart."
        />

        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Surprise is coming ✨</h2>
            <p className="text-lg text-slate-700 mb-8">Scroll down to find out...</p>
            <button
              onClick={() => navigate("/proposal")}
              className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow hover:scale-105 transform transition"
            >
              Take me to the Surprise 💌
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
