// src/pages/Proposal.jsx
import React, { useEffect, useState } from "react";
import AudioPlayer from "../components/AudioPlayer";
import PhotoTextSection from "../components/PhotoTextSection";
import CTA from "../components/CTA";

export default function Proposal() {
  const [playOnMount, setPlayOnMount] = useState(false);

  useEffect(() => {
    const started = localStorage.getItem("musicStarted") === "true";
    if (started) setPlayOnMount(true);
  }, []);

  return (
    <div>
      <header className="sticky top-0 backdrop-blur bg-white/60 z-10 p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold ml-4">For You ❤️</h2>
        <div className="mr-4"><AudioPlayer src="/assets/proposal.mp3" playOnMount={playOnMount} /></div>
      </header>

      <main>
        <PhotoTextSection
          imageSrc="/assets/you.jpg"
          title="Remember this day?"
          text="That day we laughed a lot — I cherish it."
        />

        <PhotoTextSection
          imageSrc="/assets/crush.jpg"
          title="You are amazing"
          text="Your smile lights up my world."
          reverse
        />

        <PhotoTextSection
          imageSrc="/assets/together.jpg"
          title="Our Moments"
          text="Small memories that mean a lot."
        />

        <div className="py-16">
          <CTA />
        </div>
      </main>
    </div>
  );
}
