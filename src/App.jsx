// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Birthday from "./pages/Birthday";
import Proposal from "./pages/Proposal";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Birthday />} />
      <Route path="/proposal" element={<Proposal />} />
    </Routes>
  );
}
// test push from VS Code
jj