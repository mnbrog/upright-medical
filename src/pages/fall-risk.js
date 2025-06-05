// File: src/pages/fall-risk.js

import React, { useState, useEffect } from "react"
import styled, { createGlobalStyle, keyframes } from "styled-components"

/* ----------------------------------------------------------------------------------------------------------------- */
/* 1) GLOBAL STYLES                                                                                                  */
/* ----------------------------------------------------------------------------------------------------------------- */
const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    scroll-snap-type: y proximity; /* only snap when near top */
    height: 100%;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: #F7F9FA;
    color: #0A2640;
    line-height: 1.5;
    min-height: 100%;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #3FD0C9;
    border-radius: 4px;
  }
`

/* ----------------------------------------------------------------------------------------------------------------- */
/* 2) Color Palette                                                                                                  */
/* ----------------------------------------------------------------------------------------------------------------- */
const COLORS = {
  darkBlue: "#0A2640",
  teal: "#3FD0C9",
  lightGray: "#F7F9FA",
  cardBg: "#FFFFFF",
  neutralGray: "#6B7280",
}

/* ----------------------------------------------------------------------------------------------------------------- */
/* 3) LAYOUT COMPONENTS                                                                                              */
/* ----------------------------------------------------------------------------------------------------------------- */

/* 3.1: Sticky navigation bar with logo and nested dropdowns (desktop) or hamburger (mobile) */
const NavBar = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  background: ${COLORS.cardBg};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 200;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0.5rem;
`

const LogoWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 0.5rem;

  a img {
    display: block;
    height: 100px;
    width: auto;
  }

  @media (min-width: 600px) {
    a img {
      height: 140px;
    }
  }
`

/* 3.1.1: Desktop version: NavLinks as a horizontal list with nested dropdowns */
const NavLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  max-width: 960px;
  margin-bottom: 0.5rem;

  li {
    position: relative;
  }

  a {
    display: block;
    padding: 0.5rem 0.75rem;
    font-size: 0.9rem;
    font-weight: 500;
    color: ${COLORS.darkBlue};
    transition: color 0.2s ease-in-out, font-weight 0.2s ease-in-out;
    cursor: pointer;

    &.active {
      color: ${COLORS.teal};
      font-weight: 600;
    }

    &:hover {
      color: ${COLORS.teal};
    }
  }

  /* Hide this on mobile */
  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 400px) {
    a {
      font-size: 0.8rem;
      padding: 0.4rem 0.6rem;
    }
  }
`

const NavItem = styled.li``

/* 3.1.2: Dropdown menu (desktop) */
const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background: ${COLORS.cardBg};
  min-width: 200px;
  padding: 0.5rem 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: none;
  z-index: 250;

  /* Show when hovering parent NavItem */
  ${NavItem}:hover & {
    display: block;
  }

  li {
    position: relative;

    &:hover > a {
      background: ${COLORS.lightGray};
      color: ${COLORS.teal};
    }

    /* For nested dropdowns */
    &:hover > ul {
      display: block;
    }
  }

  a {
    display: block;
    padding: 0.5rem 1rem;
    font-weight: 500;
    color: ${COLORS.darkBlue};
    font-size: 0.85rem;
  }

  a:hover {
    background: ${COLORS.lightGray};
    color: ${COLORS.teal};
  }
`

/* 3.1.3: Hamburger icon (mobile only) */
const Hamburger = styled.button`
  display: none; /* hidden desktop */
  background: none;
  border: none;
  font-size: 2.25rem;
  cursor: pointer;
  color: ${COLORS.darkBlue};
  margin: 0.5rem 0;

  &:hover {
    color: ${COLORS.teal};
  }

  @media (max-width: 768px) {
    display: block;
  }
`

/* 3.1.4: Mobile overlay menu animation */
const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`
const slideDown = keyframes`
  from { transform: translateY(-20px); opacity: 0; }
  to   { transform: translateY(0); opacity: 1; }
`

/* 3.1.5: Mobile overlay menu (full screen) */
const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${COLORS.cardBg};
  z-index: 300;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 1rem;
  animation: ${fadeIn} 0.3s ease-in-out;

  .close-btn {
    align-self: flex-end;
    background: none;
    border: none;
    font-size: 2rem;
    color: ${COLORS.darkBlue};
    cursor: pointer;
    margin-bottom: 1rem;

    &:hover {
      color: ${COLORS.teal};
    }
  }

  a {
    font-size: 1rem;
    font-weight: 500;
    color: ${COLORS.darkBlue};
    margin: 0.5rem 0;
    opacity: 0;
    animation: ${slideDown} 0.35s ease-in-out forwards;
  }

  /* parent/child/grandchild attributes control staggered animation */
  a[parent] {
    animation-delay: 0.2s;
  }
  a[child] {
    animation-delay: 0.4s;
  }
  a[grandchild] {
    animation-delay: 0.6s;
  }
  a:last-child {
    animation-delay: 1s;
  }
`

/* 3.2: Section container with top padding, bottom margin, and scroll-snap alignment */
const Section = styled.section`
  scroll-snap-align: start;
  scroll-margin-top: 180px;      /* offset to keep title below nav */
  max-width: 960px;
  margin: 4rem auto 8rem auto;   /* extra top margin on first, big bottom gap */
  padding: 6rem 1rem 2rem 1rem;   /* top padding so title stays below navbar */

  &:first-of-type {
    margin-top: 4rem;
  }

  @media (max-width: 768px) {
    padding: 5rem 1rem 2rem 1rem;
    margin: 3rem auto 8rem auto;
  }
`

/* 3.3: “InfoBox” to visually separate each Section’s content */
const InfoBox = styled.div`
  background: ${COLORS.cardBg};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`

/* 3.4: Section Title (H2) */
const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${COLORS.darkBlue};
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`

/* 3.5: Paragraph / Body Text */
const Paragraph = styled.p`
  color: ${COLORS.darkBlue};
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`

/* 3.6: Larger intro text (centered) */
const IntroText = styled.p`
  color: ${COLORS.darkBlue};
  font-size: 1.125rem;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.5;
`

/* 3.7: Bullet List styling */
const BulletList = styled.ul`
  margin-left: 1.25rem;
  margin-bottom: 1.5rem;

  li {
    margin-bottom: 0.5rem;
    line-height: 1.5;
    position: relative;
    padding-left: 1.25rem;

    &::before {
      content: "•";
      position: absolute;
      left: 0;
      color: ${COLORS.teal};
    }
  }
`

/* 3.7b: Ordered list styling for step-by-step instructions */
const StepList = styled.ol`
  margin-left: 1.25rem;
  margin-bottom: 1.5rem;

  li {
    margin-bottom: 0.5rem;
    line-height: 1.5;
  }
`

/* 3.7c: Sub-heading used within sections */
const SubTitle = styled.h3`
  font-size: 1.5rem;
  color: ${COLORS.darkBlue};
  margin: 1.5rem 0 1rem;
  text-align: center;
`

/* 3.8: Hero Section (with video background) */
const HeroWrapper = styled.section`
  position: relative;
  height: 70vh; /* extra breathing room */
  min-height: 450px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-align: center;
  scroll-snap-align: start;
  scroll-margin-top: 180px;

  @media (max-width: 768px) {
    height: 60vh;
  }
`

/* 3.9: BackgroundVideo */
const BackgroundVideo = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  z-index: 1;
  object-fit: cover;
  filter: brightness(0.6);
`

/* 3.10: Hero Content (over the video) */
const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HeroHeadline = styled.h1`
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: #ffffff;
`

const HeroSubhead = styled.p`
  font-size: clamp(1.125rem, 3vw, 1.5rem);
  margin-bottom: 2.5rem;
  color: #ffffff;
`

const HeroButton = styled.a`
  background: ${COLORS.teal};
  color: #ffffff;
  padding: 0.75rem 1.75rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: #64FFDA;
  }
`

/* ----------------------------------------------------------------------------------------------------------------- */
/* 4) FALL RISK PAGE COMPONENT                                                                                       */
/* ----------------------------------------------------------------------------------------------------------------- */
const FallRiskPage = () => {
  // track which section is currently visible
  const [activeSection, setActiveSection] = useState("hero")
  // track whether mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sectionIds = [
      "hero",
      "home",
      "fall-overview",
      "fall-how",
      "balance-key",
      "balance-video",
      "home-safety",
      "telehealth-features",
      "telehealth-setup",
      "p4p-overview",
      "p4p-how",
      "key-tests",
      "eligible-conditions",
      "practice-benefits",
      "resources-guides",
      "resources-faq",
      "resources-infographics",
      "resources-case-studies",
      "about-mission",
      "about-team",
      "about-affiliations",
      "blog-section",
      "contact"
    ]
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -60% 0px",
      threshold: 0,
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Close mobile menu and scroll to section
  const handleMobileClick = (e, targetId) => {
    e.preventDefault()
    setMenuOpen(false)
    const targetEl = document.getElementById(targetId)
    if (targetEl) {
      window.location.hash = `#${targetId}`
    }
  }

  return (
    <>
      <GlobalStyles />

      {/* ───────────────── Navigation Bar ───────────────── */}
      <NavBar>
        <LogoWrapper>
          <a href="#hero" onClick={() => setMenuOpen(false)}>
            <img
              src="/images/Upright Medical Solutions Logo.png"
              alt="Upright Medical Solutions"
            />
          </a>
        </LogoWrapper>

        {/* Desktop Links (Products is a single top-level dropdown) */}
        <NavLinks>
          {/* Home */}
          <NavItem>
            <a href="#home" className={activeSection === "home" ? "active" : ""}>
              Home
            </a>
          </NavItem>

          {/* Products (single parent with nested dropdowns) */}
          <NavItem>
            <a>Products</a>
            <DropdownMenu>
              {/* Fall Risk Assessment */}
              <li>
                <a
                  className={
                    ["fall-overview", "fall-how"].includes(activeSection)
                      ? "active"
                      : ""
                  }
                >
                  Fall Risk Assessment
                </a>
                <DropdownMenu>
                  <li>
                    <a
                      href="#fall-overview"
                      className={activeSection === "fall-overview" ? "active" : ""}
                    >
                      Overview &amp; Benefits
                    </a>
                  </li>
                  <li>
                    <a
                      href="#fall-how"
                      className={activeSection === "fall-how" ? "active" : ""}
                    >
                      How It Works
                    </a>
                  </li>
                </DropdownMenu>
              </li>

              {/* Balance Training Program */}
              <li>
                <a
                  className={
                    ["balance-key", "balance-video"].includes(activeSection)
                      ? "active"
                      : ""
                  }
                >
                  Balance Training Program
                </a>
                <DropdownMenu>
                  <li>
                    <a
                      href="#balance-key"
                      className={activeSection === "balance-key" ? "active" : ""}
                    >
                      Key Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#balance-video"
                      className={activeSection === "balance-video" ? "active" : ""}
                    >
                      Video Preview
                    </a>
                  </li>
                </DropdownMenu>
              </li>

              {/* Home Safety Toolkit */}
              <li>
                <a className={activeSection === "home-safety" ? "active" : ""}>
                  Home Safety Toolkit
                </a>
                <DropdownMenu>
                  <li>
                    <a
                      href="#home-safety"
                      className={activeSection === "home-safety" ? "active" : ""}
                    >
                      PDF Checklist (Download)
                    </a>
                  </li>
                  <li>
                    <a
                      href="#home-safety"
                      className={activeSection === "home-safety" ? "active" : ""}
                    >
                      Interactive Online Version
                    </a>
                  </li>
                </DropdownMenu>
              </li>

              {/* Telehealth Integration */}
              <li>
                <a
                  className={
                    ["telehealth-features", "telehealth-setup"].includes(activeSection)
                      ? "active"
                      : ""
                  }
                >
                  Telehealth Integration
                </a>
                <DropdownMenu>
                  <li>
                    <a
                      href="#telehealth-features"
                      className={activeSection === "telehealth-features" ? "active" : ""}
                    >
                      Platform Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#telehealth-setup"
                      className={activeSection === "telehealth-setup" ? "active" : ""}
                    >
                      Setup Guide
                    </a>
                  </li>
                </DropdownMenu>
              </li>

              {/* Pulse4Pulse Cardiovascular Assessment */}
              <li>
                <a
                  className={
                    [
                      "p4p-overview",
                      "p4p-how",
                      "key-tests",
                      "eligible-conditions",
                      "practice-benefits",
                    ].includes(activeSection)
                      ? "active"
                      : ""
                  }
                >
                  Pulse4Pulse Cardiovascular Assessment
                </a>
                <DropdownMenu>
                  <li>
                    <a
                      href="#p4p-overview"
                      className={activeSection === "p4p-overview" ? "active" : ""}
                    >
                      Overview &amp; Mission
                    </a>
                  </li>
                  <li>
                    <a
                      href="#p4p-how"
                      className={activeSection === "p4p-how" ? "active" : ""}
                    >
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a
                      href="#key-tests"
                      className={activeSection === "key-tests" ? "active" : ""}
                    >
                      Key Tests &amp; Benefits
                    </a>
                  </li>
                  <li>
                    <a
                      href="#eligible-conditions"
                      className={activeSection === "eligible-conditions" ? "active" : ""}
                    >
                      Eligible Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#practice-benefits"
                      className={activeSection === "practice-benefits" ? "active" : ""}
                    >
                      Practice Benefits
                    </a>
                  </li>
                </DropdownMenu>
              </li>
            </DropdownMenu>
          </NavItem>

          {/* Resources */}
          <NavItem>
            <a
              className={
                ["resources-guides", "resources-faq", "resources-infographics", "resources-case-studies"].includes(
                  activeSection
                )
                  ? "active"
                  : ""
              }
            >
              Resources
            </a>
            <DropdownMenu>
              <li>
                <a
                  href="#resources-guides"
                  className={activeSection === "resources-guides" ? "active" : ""}
                >
                  User Guides
                </a>
              </li>
              <li>
                <a
                  href="#resources-faq"
                  className={activeSection === "resources-faq" ? "active" : ""}
                >
                  Troubleshooting FAQs
                </a>
              </li>
              <li>
                <a
                  href="#resources-infographics"
                  className={activeSection === "resources-infographics" ? "active" : ""}
                >
                  Infographics
                </a>
              </li>
              <li>
                <a
                  href="#resources-case-studies"
                  className={activeSection === "resources-case-studies" ? "active" : ""}
                >
                  Case Studies
                </a>
              </li>
            </DropdownMenu>
          </NavItem>

          {/* About Us */}
          <NavItem>
            <a
              className={
                ["about-mission", "about-team", "about-affiliations"].includes(activeSection)
                  ? "active"
                  : ""
              }
            >
              About Us
            </a>
            <DropdownMenu>
              <li>
                <a
                  href="#about-mission"
                  className={activeSection === "about-mission" ? "active" : ""}
                >
                  Mission &amp; Vision
                </a>
              </li>
              <li>
                <a
                  href="#about-team"
                  className={activeSection === "about-team" ? "active" : ""}
                >
                  Leadership Team
                </a>
              </li>
              <li>
                <a
                  href="#about-affiliations"
                  className={activeSection === "about-affiliations" ? "active" : ""}
                >
                  Affiliations
                </a>
              </li>
            </DropdownMenu>
          </NavItem>

          {/* Blog */}
          <NavItem>
            <a href="#blog-section" className={activeSection === "blog-section" ? "active" : ""}>
              Blog
            </a>
          </NavItem>

          {/* Contact */}
          <NavItem>
            <a href="#contact" className={activeSection === "contact" ? "active" : ""}>
              Contact
            </a>
          </NavItem>
        </NavLinks>

        {/* Mobile Hamburger */}
        <Hamburger onClick={() => setMenuOpen((prev) => !prev)}>
          {menuOpen ? "✕" : "☰"}
        </Hamburger>

        {/* Mobile Overlay Menu */}
        {menuOpen && (
          <MobileMenu>
            <button
              className="close-btn"
              onClick={() => setMenuOpen(false)}
              aria-label="Close Menu"
            >
              ✕
            </button>

            {/* Home */}
            <a
              href="#home"
              onClick={(e) => handleMobileClick(e, "home")}
              parent
              className={activeSection === "home" ? "active" : ""}
            >
              Home
            </a>

            {/* Products Parent */}
            <a parent className={["fall-overview", "fall-how", "balance-key", "balance-video", "home-safety", "telehealth-features", "telehealth-setup", "p4p-overview", "p4p-how", "key-tests", "eligible-conditions", "practice-benefits"].includes(activeSection) ? "active" : ""}>
              Products
            </a>

            {/* ─ Fall Risk Assessment */}
            <a
              href="#fall-overview"
              onClick={(e) => handleMobileClick(e, "fall-overview")}
              child
              style={{ paddingLeft: "1.5rem" }}
              className={["fall-overview", "fall-how"].includes(activeSection) ? "active" : ""}
            >
              • Fall Risk Assessment
            </a>
            {/* ── Overview & Benefits */}
            <a
              href="#fall-overview"
              onClick={(e) => handleMobileClick(e, "fall-overview")}
              grandchild
              style={{ paddingLeft: "3rem" }}
              className={activeSection === "fall-overview" ? "active" : ""}
            >
              • Overview &amp; Benefits
            </a>
            {/* ── How It Works */}
            <a
              href="#fall-how"
              onClick={(e) => handleMobileClick(e, "fall-how")}
              grandchild
              style={{ paddingLeft: "3rem" }}
              className={activeSection === "fall-how" ? "active" : ""}
            >
              • How It Works
            </a>

            {/* ─ Balance Training Program */}
            <a
              href="#balance-key"
              onClick={(e) => handleMobileClick(e, "balance-key")}
              child
              style={{ paddingLeft: "1.5rem" }}
              className={["balance-key", "balance-video"].includes(activeSection) ? "active" : ""}
            >
              • Balance Training Program
            </a>
            {/* ── Key Features */}
            <a
              href="#balance-key"
              onClick={(e) => handleMobileClick(e, "balance-key")}
              grandchild
              style={{ paddingLeft: "3rem" }}
              className={activeSection === "balance-key" ? "active" : ""}
            >
              • Key Features
            </a>
            {/* ── Video Preview */}
            <a
              href="#balance-video"
              onClick={(e) => handleMobileClick(e, "balance-video")}
              grandchild
              style={{ paddingLeft: "3rem" }}
              className={activeSection === "balance-video" ? "active" : ""}
            >
              • Video Preview
            </a>

            {/* ─ Home Safety Toolkit */}
            <a
              href="#home-safety"
              onClick={(e) => handleMobileClick(e, "home-safety")}
              child
              style={{ paddingLeft: "1.5rem" }}
              className={activeSection === "home-safety" ? "active" : ""}
            >
              • Home Safety Toolkit
            </a>
            {/* ── PDF Checklist */}
            <a
              href="#home-safety"
              onClick={(e) => handleMobileClick(e, "home-safety")}
              grandchild
              style={{ paddingLeft: "3rem" }}
              className={activeSection === "home-safety" ? "active" : ""}
            >
              • PDF Checklist (Download)
            </a>
            {/* ── Interactive Online Version */}
            <a
              href="#home-safety"
              onClick={(e) => handleMobileClick(e, "home-safety")}
              grandchild
              style={{ paddingLeft: "3rem" }}
              className={activeSection === "home-safety" ? "active" : ""}
            >
              • Interactive Online Version
            </a>

            {/* ─ Telehealth Integration */}
            <a
              href="#telehealth-features"
              onClick={(e) => handleMobileClick(e, "telehealth-features")}
              child
              style={{ paddingLeft: "1.5rem" }}
              className={["telehealth-features", "telehealth-setup"].includes(activeSection) ? "active" : ""}
            >
              • Telehealth Integration
            </a>
            {/* ── Platform Features */}
            <a
              href="#telehealth-features"
              onClick={(e) => handleMobileClick(e, "telehealth-features")}
              grandchild
              style={{ paddingLeft: "3rem" }}
              className={activeSection === "telehealth-features" ? "active" : ""}
            >
              • Platform Features
            </a>
            {/* ── Setup Guide */}
            <a
              href="#telehealth-setup"
              onClick={(e) => handleMobileClick(e, "telehealth-setup")}
              grandchild
              style={{ paddingLeft: "3rem" }}
              className={activeSection === "telehealth-setup" ? "active" : ""}
            >
              • Setup Guide
            </a>

            {/* ─ Pulse4Pulse Cardiovascular Assessment */}
            <a
              href="#p4p-overview"
              onClick={(e) => handleMobileClick(e, "p4p-overview")}
              child
              style={{ paddingLeft: "1.5rem" }}
              className={
                [
                  "p4p-overview",
                  "p4p-how",
                  "key-tests",
                  "eligible-conditions",
                  "practice-benefits",
                ].includes(activeSection)
                  ? "active"
                  : ""
              }
            >
              • Pulse4Pulse Cardiovascular Assessment
            </a>
            {/* ── Overview & Mission */}
            <a
              href="#p4p-overview"
              onClick={(e) => handleMobileClick(e, "p4p-overview")}
              grandchild
              style={{ paddingLeft: "3rem" }}
              className={activeSection === "p4p-overview" ? "active" : ""}
            >
              • Overview &amp; Mission
            </a>
            {/* ── How It Works */}
            <a
              href="#p4p-how"
              onClick={(e) => handleMobileClick(e, "p4p-how")}
              grandchild
              style={{ paddingLeft: "3rem" }}
              className={activeSection === "p4p-how" ? "active" : ""}
            >
              • How It Works
            </a>
            {/* ── Key Tests & Benefits */}
            <a
              href="#key-tests"
              onClick={(e) => handleMobileClick(e, "key-tests")}
              grandchild
              style={{ paddingLeft: "3rem" }}
              className={activeSection === "key-tests" ? "active" : ""}
            >
              • Key Tests &amp; Benefits
            </a>
            {/* ── Eligible Conditions */}
            <a
              href="#eligible-conditions"
              onClick={(e) => handleMobileClick(e, "eligible-conditions")}
              grandchild
              style={{ paddingLeft: "3rem" }}
              className={activeSection === "eligible-conditions" ? "active" : ""}
            >
              • Eligible Conditions
            </a>
            {/* ── Practice Benefits */}
            <a
              href="#practice-benefits"
              onClick={(e) => handleMobileClick(e, "practice-benefits")}
              grandchild
              style={{ paddingLeft: "3rem" }}
              className={activeSection === "practice-benefits" ? "active" : ""}
            >
              • Practice Benefits
            </a>

            {/* Resources */}
            <a
              href="#resources-guides"
              onClick={(e) => handleMobileClick(e, "resources-guides")}
              parent
              className={
                ["resources-guides", "resources-faq", "resources-infographics", "resources-case-studies"].includes(
                  activeSection
                )
                  ? "active"
                  : ""
              }
            >
              Resources
            </a>
            {/* ── User Guides */}
            <a
              href="#resources-guides"
              onClick={(e) => handleMobileClick(e, "resources-guides")}
              child
              style={{ paddingLeft: "1.5rem" }}
              className={activeSection === "resources-guides" ? "active" : ""}
            >
              • User Guides
            </a>
            {/* ── Troubleshooting FAQs */}
            <a
              href="#resources-faq"
              onClick={(e) => handleMobileClick(e, "resources-faq")}
              child
              style={{ paddingLeft: "1.5rem" }}
              className={activeSection === "resources-faq" ? "active" : ""}
            >
              • Troubleshooting FAQs
            </a>
            {/* ── Infographics */}
            <a
              href="#resources-infographics"
              onClick={(e) => handleMobileClick(e, "resources-infographics")}
              child
              style={{ paddingLeft: "1.5rem" }}
              className={activeSection === "resources-infographics" ? "active" : ""}
            >
              • Infographics
            </a>
            {/* ── Case Studies */}
            <a
              href="#resources-case-studies"
              onClick={(e) => handleMobileClick(e, "resources-case-studies")}
              child
              style={{ paddingLeft: "1.5rem" }}
              className={activeSection === "resources-case-studies" ? "active" : ""}
            >
              • Case Studies
            </a>

            {/* About Us */}
            <a
              href="#about-mission"
              onClick={(e) => handleMobileClick(e, "about-mission")}
              parent
              className={["about-mission", "about-team", "about-affiliations"].includes(activeSection) ? "active" : ""}
            >
              About Us
            </a>
            {/* ── Mission & Vision */}
            <a
              href="#about-mission"
              onClick={(e) => handleMobileClick(e, "about-mission")}
              child
              style={{ paddingLeft: "1.5rem" }}
              className={activeSection === "about-mission" ? "active" : ""}
            >
              • Mission &amp; Vision
            </a>
            {/* ── Leadership Team */}
            <a
              href="#about-team"
              onClick={(e) => handleMobileClick(e, "about-team")}
              child
              style={{ paddingLeft: "1.5rem" }}
              className={activeSection === "about-team" ? "active" : ""}
            >
              • Leadership Team
            </a>
            {/* ── Affiliations */}
            <a
              href="#about-affiliations"
              onClick={(e) => handleMobileClick(e, "about-affiliations")}
              child
              style={{ paddingLeft: "1.5rem" }}
              className={activeSection === "about-affiliations" ? "active" : ""}
            >
              • Affiliations
            </a>

            {/* Blog */}
            <a
              href="#blog-section"
              onClick={(e) => handleMobileClick(e, "blog-section")}
              parent
              className={activeSection === "blog-section" ? "active" : ""}
            >
              Blog
            </a>

            {/* Contact */}
            <a
              href="#contact"
              onClick={(e) => handleMobileClick(e, "contact")}
              parent
              className={activeSection === "contact" ? "active" : ""}
            >
              Contact
            </a>
          </MobileMenu>
        )}
      </NavBar>

      {/* ───────────────── Hero / Introduction ───────────────── */}
      <HeroWrapper id="hero">
        <BackgroundVideo
          autoPlay
          loop
          muted
          playsInline
          poster="/images/clinic-background-fallback.jpg"
          src="/videos/clinic-background.mp4"
          type="video/mp4"
        />
        <HeroContent>
          <HeroHeadline>
            Predict Risk. <br />
            Prevent Falls.
          </HeroHeadline>
          <HeroSubhead>
            Innovative Health &amp; Safety Solutions for your practice and patients.
          </HeroSubhead>
          <HeroButton href="#home">Learn More</HeroButton>
        </HeroContent>
      </HeroWrapper>

      {/* ───────────────── Home Section ───────────────── */}
      <Section id="home">
        <SectionTitle>Innovative Health &amp; Safety Solutions</SectionTitle>
        <IntroText>
          We help clinicians implement cutting‐edge screening and training tools to reduce falls,
          improve balance, ensure home safety, offer telehealth, and deliver turnkey cardiovascular
          assessments at $0 cost.
        </IntroText>
        <InfoBox>
          <BulletList>
            <li>
              <strong>Fall Risk Assessment</strong> – Predict a patient’s 12‐month fall probability
              with minimal clinic time.
            </li>
            <li>
              <strong>Balance Training Program</strong> – Personalized plans, real‐time feedback,
              and progress tracking.
            </li>
            <li>
              <strong>Home Safety Toolkit</strong> – Downloadable PDF checklist + interactive online
              version.
            </li>
            <li>
              <strong>Telehealth Integration</strong> – Remote assessment &amp; virtual follow‐up.
            </li>
            <li>
              <strong>Pulse4Pulse</strong> – Turnkey cardiovascular wellness service at $0 cost.
            </li>
          </BulletList>
          <HeroButton href="#contact" style={{ marginTop: "1rem" }}>
            Get a Demo
          </HeroButton>
        </InfoBox>
      </Section>

      {/* ───────────────── Products » Fall Risk Assessment ───────────────── */}
      {/* 4.1: Fall Risk Overview */}
      <Section id="fall-overview">
        <SectionTitle>Fall Risk Assessment ― Overview &amp; Benefits</SectionTitle>
        <IntroText>
          Predict each patient’s 12‐month probability of falling using a data‐driven, automated model.
        </IntroText>
        <InfoBox>
          <BulletList>
            <li>
              <strong>Automated Math:</strong> Combines multiple performance‐test results into a
              single risk score—no manual calculation required.
            </li>
            <li>
              <strong>Built on 2,300+ Studies:</strong> Extensive clinical research ensures accuracy.
            </li>
            <li>
              <strong>Quick to Administer:</strong> Only 10–25 minutes in any clinical setting.
            </li>
            <li>
              <strong>Evidence‐Based Algorithm:</strong> Outperforms traditional screening methods.
            </li>
          </BulletList>
          <img
            src=""
            alt="Fall Risk Assessment Device"
            style={{ width: "100%", height: "200px", background: "#e0e0e0" }}
          />
          <p style={{ fontStyle: "italic", marginTop: "0.5rem" }}>
            {/* Feature image placeholder */}
            Feature image placeholder: device or assessment in action
          </p>
        </InfoBox>
      </Section>

      {/* 4.2: Fall Risk ― How It Works */}
      <Section id="fall-how">
        <SectionTitle>Fall Risk Assessment ― How It Works</SectionTitle>
        <IntroText>
          A simple 3‐step process to screen and intervene.
        </IntroText>
        <InfoBox>
          <StepList>
            <li>
              <strong>Patient Screening:</strong> Self‐answer questionnaires in waiting room or at home.
            </li>
            <li>
              <strong>Performance Testing:</strong> Administer 3–5 tests:
              <ul>
                <li>Five Time Sit to Stand</li>
                <li>Self Paced Walking Test</li>
                <li>Single Leg Stance</li>
                <li>Timed Up and Go</li>
              </ul>
            </li>
            <li>
              <strong>Review Report &amp; Care Plan:</strong> Provider reviews auto‐generated FRA report,
              provides educational materials, and schedules follow‐up.
            </li>
          </StepList>
        </InfoBox>
      </Section>

      {/* ───────────────── Products » Balance Training Program ───────────────── */}
      {/* 5.1: Balance Training ― Key Features */}
      <Section id="balance-key">
        <SectionTitle>Balance Training Program ― Key Features</SectionTitle>
        <IntroText>
          Personalized, engaging balance exercises with real‐time feedback and tracking.
        </IntroText>
        <InfoBox>
          <BulletList>
            <li>Personalized balance exercise plans</li>
            <li>Real‐time performance feedback</li>
            <li>Progress tracking &amp; analytics</li>
          </BulletList>
        </InfoBox>
      </Section>

      {/* 5.2: Balance Training ― Sample Exercises / Video Preview */}
      <Section id="balance-video">
        <SectionTitle>Balance Training Program ― Sample Exercises &amp; Video Preview</SectionTitle>
        <InfoBox>
          <video controls width="100%" height="200" style={{ background: "#000" }} />
          <p style={{ fontStyle: "italic", marginTop: "0.5rem" }}>
            {/* Video preview placeholder */}
            Video preview placeholder for balance training exercises
          </p>
        </InfoBox>
      </Section>

      {/* ───────────────── Products » Home Safety Toolkit ───────────────── */}
      <Section id="home-safety">
        <SectionTitle>Home Safety Toolkit</SectionTitle>
        <InfoBox>
          <Paragraph>
            Ensure a safer home environment with our comprehensive safety checklist.
          </Paragraph>
          <a
            href="#"
            className="button"
            style={{
              display: "inline-block",
              padding: "0.75rem 1.25rem",
              background: COLORS.teal,
              color: "#fff",
              borderRadius: "4px",
              fontWeight: 600,
              marginBottom: "1rem",
            }}
          >
            Download Home Safety Checklist (PDF)
          </a>
          <p style={{ fontStyle: "italic" }}>
            {/* Interactive version placeholder */}
            Placeholder: Interactive home safety checklist UI can be inserted here
          </p>
        </InfoBox>
      </Section>

      {/* ───────────────── Products » Telehealth Integration ───────────────── */}
      {/* 7.1: Telehealth ― Platform Features */}
      <Section id="telehealth-features">
        <SectionTitle>Telehealth Integration ― Platform Features</SectionTitle>
        <InfoBox style={{ background: "#F0F9FF" }}>
          <Paragraph>
            Our telehealth platform seamlessly connects with your practice, enabling remote
            assessments and consultations. Easy to set up and integrate:
          </Paragraph>
          <BulletList>
            <li>Integrate platform with EHR &amp; scheduling system</li>
            <li>Train staff on conducting virtual assessments</li>
            <li>Begin remote monitoring &amp; follow‐up via secure video/data sharing</li>
          </BulletList>
        </InfoBox>
      </Section>

      {/* 7.2: Telehealth ― Technical Requirements / Setup Guide */}
      <Section id="telehealth-setup">
        <SectionTitle>Telehealth Integration ― Technical Requirements &amp; Setup Guide</SectionTitle>
        <InfoBox>
          <Paragraph>
            <strong>Requirements:</strong> Standard webcam, stable internet, basic tablet/laptop for patient self‐screening.
          </Paragraph>
          <Paragraph>
            <strong>Setup:</strong>
            <ul>
              <li>Install telehealth app/plugin on clinic workstations.</li>
              <li>Configure HIPAA‐compliant video link.</li>
              <li>Ensure data sync with EHR for automated documentation.</li>
            </ul>
          </Paragraph>
        </InfoBox>
      </Section>

      {/* ───────────────── Products » Pulse4Pulse Cardiovascular Assessment ───────────────── */}
      {/* 8.1: P4P Overview & Mission */}
      <Section id="p4p-overview">
        <SectionTitle>Pulse4Pulse Overview &amp; Mission</SectionTitle>
        <IntroText>
          Turnkey cardiovascular wellness assessment service at $0 cost to your practice.
        </IntroText>
        <InfoBox>
          <BulletList>
            <li>
              <strong>FDA-Cleared Device:</strong> Portable, in-office setup. No referrals needed.
            </li>
            <li>
              <strong>60%+ of Adult Patients Qualify:</strong> Detect microvascular disease early.
            </li>
            <li>
              <strong>Real-Time Results:</strong> Three simultaneous tests in 20 minutes—instant reporting.
            </li>
            <li>
              <strong>$0 Cost to Practice:</strong> We supply device, certified staff, and billing support.
            </li>
          </BulletList>
        </InfoBox>
      </Section>

      {/* 8.2: P4P How It Works (step-by-step) */}
      <Section id="p4p-how">
        <SectionTitle>Pulse4Pulse ― How It Works</SectionTitle>
        <InfoBox>
          <StepList>
            <li>
              <strong>Intake Qualification:</strong> Patient completes a form to identify clinical risk factors.
            </li>
            <li>
              <strong>On-Site Testing:</strong> A P4P medical assistant visits your practice and performs the assessment.
            </li>
            <li>
              <strong>Instant Results:</strong> Technician provides real-time results &amp; preliminary recommendations.
            </li>
            <li>
              <strong>Billing &amp; Support:</strong> Pulse4Pulse handles billing and provides an account manager.
            </li>
          </StepList>
        </InfoBox>
      </Section>

      {/* 8.3: P4P Key Tests & Benefits */}
      <Section id="key-tests">
        <SectionTitle>Pulse4Pulse ― Key Tests &amp; Benefits</SectionTitle>
        <InfoBox>
          <BulletList>
            <li>
              <strong>ANS Testing:</strong> Measures autonomic function (heart rate variability, adaptability).
            </li>
            <li>
              <strong>ABI Testing:</strong> Screens for PAD by comparing limb blood pressures.
            </li>
            <li>
              <strong>Sudomotor Testing:</strong> Detects microvascular neuropathy via sweat‐gland stimulation.
            </li>
          </BulletList>
          <Paragraph>
            All three tests complete within 20 minutes, non-invasive, with an easy-to-interpret summary report.
          </Paragraph>
        </InfoBox>
      </Section>

      {/* 8.4: P4P Eligible Conditions */}
      <Section id="eligible-conditions">
        <SectionTitle>Pulse4Pulse ― Eligible Conditions</SectionTitle>
        <InfoBox>
          <IntroText>
            Any one condition below makes a patient eligible for Pulse4Pulse testing:
          </IntroText>
          <BulletList>
            <li>Diabetes</li>
            <li>High Blood Pressure</li>
            <li>High Cholesterol</li>
            <li>Sleep Apnea</li>
            <li>Erectile Dysfunction / Sexual Dysfunction</li>
            <li>Chronic Kidney Disease</li>
            <li>Heart Disease</li>
            <li>Current or Past Nicotine Use</li>
            <li>Numbness or Coldness in Hands/Feet</li>
            <li>Leg Pain When Walking (Claudication)</li>
          </BulletList>
        </InfoBox>
      </Section>

      {/* 8.5: P4P Practice Benefits */}
      <Section id="practice-benefits">
        <SectionTitle>Pulse4Pulse ― Practice Benefits</SectionTitle>
        <InfoBox>
          <BulletList>
            <li>
              <strong>New Revenue Stream:</strong> Potential for ~$150k/physician annually; 60%+ of adults qualify.
            </li>
            <li>
              <strong>No Capital Expenditure:</strong> We provide device, staff, and billing support.
            </li>
            <li>
              <strong>5 Billable Diagnostic Codes:</strong>
              <ul>
                <li>Ankle Brachial Index (CPT 93923)</li>
                <li>Autonomic Function (CPT 95921)</li>
                <li>Sudomotor (CPT 95923)</li>
                <li>Electrocardiogram (CPT 93040)</li>
                <li>Pulse Oximetry (CPT 94761)</li>
              </ul>
            </li>
            <li>
              <strong>Enhanced Patient Care:</strong> Early disease detection leads to timely intervention.
            </li>
          </BulletList>
        </InfoBox>
      </Section>

      {/* ───────────────── Resources ───────────────── */}
      {/* 9.1: User Guides */}
      <Section id="resources-guides">
        <SectionTitle>Resources ― User Guides</SectionTitle>
        <InfoBox>
          <BulletList>
            <li>
              <a href="#" style={{ color: COLORS.darkBlue, textDecoration: "underline" }}>
                Fall Prevention Guide (PDF)
              </a>
            </li>
            <li>
              <a href="#" style={{ color: COLORS.darkBlue, textDecoration: "underline" }}>
                Balance Training Quick-Start (PDF)
              </a>
            </li>
            <li>
              <a href="#" style={{ color: COLORS.darkBlue, textDecoration: "underline" }}>
                Telehealth Setup Manual
              </a>
            </li>
            <li>
              <a href="#" style={{ color: COLORS.darkBlue, textDecoration: "underline" }}>
                Pulse4Pulse Device User Manual
              </a>
            </li>
          </BulletList>
        </InfoBox>
      </Section>

      {/* 9.2: Troubleshooting FAQs */}
      <Section id="resources-faq">
        <SectionTitle>Resources ― Troubleshooting FAQs</SectionTitle>
        <InfoBox>
          <BulletList>
            <li>
              <strong>Fall Risk Assessment:</strong> “Device won’t calibrate” | “Incomplete test data”
            </li>
            <li>
              <strong>Balance Training:</strong> “Video preview not loading” | “Sensor pairing issues”
            </li>
            <li>
              <strong>Home Safety Toolkit:</strong> “PDF not downloading” | “Interactive section not loading”
            </li>
            <li>
              <strong>Telehealth:</strong> “Video connection drops” | “EHR integration issue”
            </li>
            <li>
              <strong>Pulse4Pulse:</strong> “Billing code errors” | “Technician scheduling delays”
            </li>
          </BulletList>
        </InfoBox>
      </Section>

      {/* 9.3: Infographics */}
      <Section id="resources-infographics">
        <SectionTitle>Resources ― Infographics</SectionTitle>
        <InfoBox>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <div style={{ width: "200px", height: "150px", background: "#e0e0e0" }}></div>
            <p style={{ fontStyle: "italic" }}>Placeholder: “Need to Screen” Infographic</p>
            <div style={{ width: "200px", height: "150px", background: "#e0e0e0" }}></div>
            <p style={{ fontStyle: "italic" }}>Placeholder: “Safe Home Layout” Flowchart</p>
          </div>
        </InfoBox>
      </Section>

      {/* 9.4: Case Studies */}
      <Section id="resources-case-studies">
        <SectionTitle>Resources ― Case Studies</SectionTitle>
        <InfoBox style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
          <div style={{ background: "#fff", border: "1px solid #ddd", borderRadius: "4px", padding: "1rem", width: "280px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
            <p style={{ fontStyle: "italic" }}>
              “Since implementing these programs, our clinic reduced patient falls by 30% in one year.”
            </p>
            <p style={{ textAlign: "right", fontSize: "0.9rem", color: "#555" }}>
              – Dr. Alice Smith, Geriatric Specialist (Senior Care Facility)
            </p>
          </div>
          <div style={{ background: "#fff", border: "1px solid #ddd", borderRadius: "4px", padding: "1rem", width: "280px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
            <p style={{ fontStyle: "italic" }}>
              “Pulse4Pulse reduced downstream cardiovascular costs by 20% at our rehab center.”
            </p>
            <p style={{ textAlign: "right", fontSize: "0.9rem", color: "#555" }}>
              – Dr. John Doe, Cardiologist (Rehab Center)
            </p>
          </div>
        </InfoBox>
      </Section>

      {/* ───────────────── About Us ───────────────── */}
      {/* 10.1: Mission & Vision */}
      <Section id="about-mission">
        <SectionTitle>About Us ― Mission &amp; Vision</SectionTitle>
        <InfoBox>
          <Paragraph>
            We are committed to advancing preventive healthcare through innovative solutions
            that improve patient safety and wellness. Our team brings decades of experience
            in medical technology, rehabilitation, and patient care.
          </Paragraph>
        </InfoBox>
      </Section>

      {/* 10.2: Leadership Team */}
      <Section id="about-team">
        <SectionTitle>About Us ― Leadership Team</SectionTitle>
        <InfoBox style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
          <div style={{ textAlign: "center", width: "150px" }}>
            <div style={{ width: "100px", height: "100px", background: "#ddd", borderRadius: "50%", margin: "0 auto 0.5rem" }}></div>
            {/* Placeholder: Photo of Jane Doe */}
            <p style={{ fontWeight: 600 }}>Jane Doe</p>
            <p style={{ fontSize: "0.9rem", color: "#555" }}>Founder &amp; CEO</p>
          </div>
          <div style={{ textAlign: "center", width: "150px" }}>
            <div style={{ width: "100px", height: "100px", background: "#ddd", borderRadius: "50%", margin: "0 auto 0.5rem" }}></div>
            {/* Placeholder: Photo of Richard Roe */}
            <p style={{ fontWeight: 600 }}>Richard Roe</p>
            <p style={{ fontSize: "0.9rem", color: "#555" }}>Chief Medical Officer</p>
          </div>
          <div style={{ textAlign: "center", width: "150px" }}>
            <div style={{ width: "100px", height: "100px", background: "#ddd", borderRadius: "50%", margin: "0 auto 0.5rem" }}></div>
            {/* Placeholder: Photo of Emily Smith */}
            <p style={{ fontWeight: 600 }}>Emily Smith</p>
            <p style={{ fontSize: "0.9rem", color: "#555" }}>Director of Therapy Programs</p>
          </div>
        </InfoBox>
      </Section>

      {/* 10.3: Partnerships & Affiliations */}
      <Section id="about-affiliations">
        <SectionTitle>About Us ― Partnerships &amp; Affiliations</SectionTitle>
        <InfoBox>
          <BulletList>
            <li>National Falls Prevention Alliance</li>
            <li>American Heart Association (Partner)</li>
            <li>Telehealth Innovators Coalition</li>
            <li>University of Alabama Health Research (UA HR)</li>
            <li>Kappa Alpha Order (Affiliated)</li>
          </BulletList>
        </InfoBox>
      </Section>

      {/* ───────────────── Blog ───────────────── */}
      <Section id="blog-section">
        <SectionTitle>Blog</SectionTitle>
        <InfoBox>
          <BulletList>
            <li>
              <a href="#" style={{ color: COLORS.darkBlue, textDecoration: "underline" }}>
                Top 5 Strategies for Fall Prevention in Hospitals
              </a>
            </li>
            <li>
              <a href="#" style={{ color: COLORS.darkBlue, textDecoration: "underline" }}>
                Senior Wellness Tips: Balance Exercises &amp; Fall Prevention
              </a>
            </li>
            <li>
              <a href="#" style={{ color: COLORS.darkBlue, textDecoration: "underline" }}>
                Pulse4Pulse Insights: Cardio Screening Best Practices
              </a>
            </li>
            <li>
              <a href="#" style={{ color: COLORS.darkBlue, textDecoration: "underline" }}>
                Our Latest Product Updates &amp; News
              </a>
            </li>
          </BulletList>
        </InfoBox>
      </Section>

      {/* ───────────────── Contact ───────────────── */}
      <Section id="contact">
        <SectionTitle>Contact Us</SectionTitle>
        <InfoBox>
          <Paragraph>
            Interested in learning more or scheduling a demo? Fill out the form below:
          </Paragraph>
          <form
            className="contact-form"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              maxWidth: "400px",
              margin: "0 auto",
            }}
          >
            <input
              type="text"
              placeholder="Name"
              required
              style={{ padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }}
            />
            <input
              type="email"
              placeholder="Email"
              required
              style={{ padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }}
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              style={{ padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }}
            />
            <button
              type="submit"
              style={{
                alignSelf: "flex-start",
                padding: "0.5rem 1rem",
                background: COLORS.teal,
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Submit
            </button>
          </form>
          <button
            onClick={() => (window.location.hash = "#home")}
            style={{
              marginTop: "1rem",
              padding: "0.75rem 1.25rem",
              background: COLORS.teal,
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Request a Demo
          </button>
          <p
            className="office-info"
            style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#555", textAlign: "center" }}
          >
            Office: 123 Health St, Wellness City, ST 00000 | Phone: (123) 456-7890 | Email: info@uprightmedical.com
          </p>
        </InfoBox>
      </Section>
    </>
  )
}

export default FallRiskPage
