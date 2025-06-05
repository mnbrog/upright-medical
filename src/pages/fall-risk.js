import React, { useState, useEffect } from "react";
import GlobalStyles from "../components/Layout/GlobalStyles";
import Nav from "../components/Nav";

import HeroSection from "../components/sections/Hero";
import ProductsSection from "../components/sections/Products";
import FallRiskAssessment from "../components/sections/FallRiskAssessment";
import BalanceTraining from "../components/sections/BalanceTraining";
import HomeSafety from "../components/sections/HomeSafety";
import Telehealth from "../components/sections/Telehealth";
import Pulse4Pulse from "../components/sections/Pulse4Pulse";
import Resources from "../components/sections/Resources";
import About from "../components/sections/About";
import Blog from "../components/sections/Blog";
import Contact from "../components/sections/Contact";

const FallRiskPage = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sectionIds = [
      "hero",
      "products",
      "fra",
      "balance",
      "safety",
      "telehealth",
      "pulse",
      "resources",
      "about",
      "blog",
      "contact",
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

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* 1) Global CSS + resets */}
      <GlobalStyles />

      {/* 2) Top navigation bar (passes activeSection so Nav can highlight the correct link) */}
      <Nav active={activeSection} />

      {/* 3) Each “section” has its own component. Be sure each component sets its top‐level element’s id attribute
             exactly to the strings we used in the observer list above. */}

      {/* ───────────── Hero / Introduction ───────────── */}
      <HeroSection id="hero" />

      {/* ───────────── Products overview ───────────── */}
      <ProductsSection id="products" />

      {/* ───────────── Fall Risk Assessment ───────────── */}
      <FallRiskAssessment id="fra" />

      {/* ───────────── Balance Training Program ───────────── */}
      <BalanceTraining id="balance" />

      {/* ───────────── Home Safety Toolkit ───────────── */}
      <HomeSafety id="safety" />

      {/* ───────────── Telehealth Integration ───────────── */}
      <Telehealth id="telehealth" />

      {/* ───────────── Pulse4Pulse Cardiovascular Assessment ───────────── */}
      <Pulse4Pulse id="pulse" />

      {/* ───────────── Resources ───────────── */}
      <Resources id="resources" />

      {/* ───────────── About Us ───────────── */}
      <About id="about" />

      {/* ───────────── Blog ───────────── */}
      <Blog id="blog" />

      {/* ───────────── Contact ───────────── */}
      <Contact id="contact" />
    </>
  );
};

export default FallRiskPage;
