import React, { useRef, useState, useEffect } from "react";

export default function AudioPlayer({ src, playOnMount=false }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (playOnMount && audioRef.current) {
      audioRef.current.play().then(() => setPlaying(true)).catch(()=>setPlaying(false));
    }
  }, [playOnMount]);

  const toggle = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play();
      setPlaying(true);
    } else {
      audioRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <audio ref={audioRef} src={src} loop />
      <button onClick={toggle} className="px-4 py-2 rounded bg-blue-600 text-white">
        {playing ? "Pause 🎵" : "Play 🎵"}
      </button>
    </div>
  );
}
