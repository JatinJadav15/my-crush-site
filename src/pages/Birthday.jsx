// src/pages/Birthday.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AudioPlayer from "../components/AudioPlayer";

export default function Birthday() {
  const navigate = useNavigate();
  const [started, setStarted] = useState(false);

  const startAndEnable = () => {
    setStarted(true);
    localStorage.setItem("musicStarted", "true");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-pink-50 to-white">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold mb-4">Happy Birthday ❤️</h1>
        <p className="mb-6 text-lg">Wishing you all the happiness and smiles.</p>

        <div className="mb-6">
          <AudioPlayer src="/assets/bday.mp3" playOnMount={started} />
        </div>

        {!started ? (
          <button onClick={startAndEnable} className="px-6 py-3 bg-pink-500 text-white rounded-lg text-lg shadow">
            Start Music & Celebrate 🎉
          </button>
        ) : (
          <div className="flex gap-4 justify-center mt-4">
            <button onClick={() => navigate("/proposal")} className="px-6 py-3 bg-yellow-400 rounded-lg text-lg">
              Take me to the Surprise 💌
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
