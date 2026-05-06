import { Routes, Route, Navigate } from "react-router-dom";

import Navigation from "./components/Navigation.tsx";
import Footer from "./components/Footer.tsx";

import Home from "./pages/Home.tsx";
import PreliminaryResults from "./pages/PreliminaryResults.tsx";
import About from "./pages/About.tsx";
import Participate from "./pages/Participate.tsx";

export default function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preliminary-results" element={<PreliminaryResults />} />
        <Route path="/about" element={<About />} />
        <Route path="/participate" element={<Participate />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </>
  );
}
