import React, { useState } from "react";

export default function CTA(){
  const [choice, setChoice] = useState(null);
  const [sentMsg, setSentMsg] = useState("");

  const handleClick = (val) => {
    setChoice(val);

    // Save in localStorage so you can check later
    localStorage.setItem("proposalChoice", val);

    // Optional: also save a timestamp
    localStorage.setItem("proposalTimestamp", new Date().toISOString());

    // Update UI message
    setSentMsg(`You clicked: ${val}. Saved locally.`);

    // OPTIONAL: send to a webhook (e.g., Google Forms / Formspree / your simple webhook)
    // If you want to record the click centrally you can POST to an endpoint here.
  };

  return (
    <div className="max-w-2xl mx-auto text-center p-8 border rounded-lg shadow">
      <h3 className="text-3xl font-bold mb-4">Will You Be My Special One?</h3>
      <p className="mb-6">I promise to make every day as special as today.</p>

      <div className="flex justify-center gap-6">
        <button
          onClick={() => handleClick("Yes")}
          className="px-6 py-3 bg-green-500 text-white rounded-lg text-xl shadow"
        >
          Yes
        </button>

        <button
          onClick={() => handleClick("No")}
          className="px-6 py-3 bg-red-500 text-white rounded-lg text-xl shadow"
        >
          No
        </button>
      </div>

      {choice && (
        <div className="mt-6 text-sm text-gray-700">
          <strong>Recorded:</strong> {choice}
        </div>
      )}
    </div>
  );
}
