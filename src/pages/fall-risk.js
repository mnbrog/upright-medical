// File: src/pages/fall-risk.js

import React, { useState, useEffect } from "react";
import GlobalStyles from "../components/Layout/GlobalStyles";
import Nav from "../components/Nav";

import HeroSection from "../components/sections/Hero";
import NeedScreen from "../components/sections/NeedScreen";
import FraOverview from "../components/sections/FraOverview";
import FraResearch from "../components/sections/FraResearch";
import WhoWeHelp from "../components/sections/WhoWeHelp";

const FallRiskPage = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const ids = [
      "hero",
      "need-screen",
      "fra-overview",
      "fra-research",
      "who-we-help",
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* 1) Global CSS + resets */}
      <GlobalStyles />

      {/* 2) Top navigation bar (passes activeSection so Nav can highlight the correct link) */}
      <Nav active={activeSection} />

      {/* 3) Each “section” has its own component. Make sure each has the matching id. */}

      {/* ───────────── Hero / Introduction ───────────── */}
      <HeroSection id="hero" />

      {/* ───────────── Need to Screen ───────────── */}
      <NeedScreen id="need-screen" />

      {/* ───────────── What is FRA ───────────── */}
      <FraOverview id="fra-overview" />

      {/* ───────────── FRA Research ───────────── */}
      <FraResearch id="fra-research" />

      {/* ───────────── Who We Help ───────────── */}
      <WhoWeHelp id="who-we-help" />

    </>
  );
};

export default FallRiskPage;
