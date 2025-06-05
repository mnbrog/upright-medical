// File: src/pages/fall-risk.js

import React, { useState, useEffect } from "react"
import styled, { createGlobalStyle, keyframes } from "styled-components"

/* ----------------------------------------------------------------------------------------------------------------- */
/* 1) GLOBAL STYLES                                                                                                   */
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
/* 2) Color Palette                                                                                                   */
/* ----------------------------------------------------------------------------------------------------------------- */
const COLORS = {
  darkBlue: "#0A2640",
  teal: "#3FD0C9",
  lightGray: "#F7F9FA",
  cardBg: "#FFFFFF",
  neutralGray: "#6B7280",
}

/* ----------------------------------------------------------------------------------------------------------------- */
/* 3) LAYOUT COMPONENTS                                                                                               */
/* ----------------------------------------------------------------------------------------------------------------- */

/* 3.1: Sticky navigation bar with logo and either four tabs (desktop) or hamburger (mobile) */
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

/* 3.1.1: Desktop version: NavLinks as a 4-column grid, centered under logo */
const NavLinks = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  max-width: 600px;    /* Constrain to 600px so tabs are perfectly centered */
  gap: 0;
  margin-bottom: 0.5rem;

  li {
    list-style: none;
    text-align: center;
  }

  a {
    display: block;
    padding: 0.75rem 0;
    font-size: 1rem;
    font-weight: 500;
    color: ${COLORS.darkBlue};
    transition: color 0.2s ease-in-out, font-weight 0.2s ease-in-out;

    &.active {
      color: ${COLORS.teal};
      font-weight: 600;
    }

    &:hover {
      color: ${COLORS.teal};
    }
  }

  /* Mobile: hide the grid version */
  @media (max-width: 768px) {
    display: none;
  }

  /* If the viewport is very narrow, shrink font slightly */
  @media (max-width: 400px) {
    a {
      font-size: 0.85rem;
      padding: 0.5rem 0;
    }
  }
`

/* 3.1.2: Hamburger icon (mobile only) */
const Hamburger = styled.button`
  display: none; /* hidden desktop */
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: ${COLORS.darkBlue};
  margin-bottom: 0.5rem;

  &:hover {
    color: ${COLORS.teal};
  }

  @media (max-width: 768px) {
    display: block;
  }
`

/* 3.1.3: Overlay menu animation */
const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`
const slideDown = keyframes`
  from { transform: translateY(-20px); opacity: 0; }
  to   { transform: translateY(0); opacity: 1; }
`

/* 3.1.4: Mobile overlay menu (full screen) */
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
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.3s ease-in-out;

  a {
    font-size: 1.5rem;
    font-weight: 500;
    color: ${COLORS.darkBlue};
    margin: 1rem 0;
    opacity: 0;
    animation: ${slideDown} 0.4s ease-in-out forwards;
  }

  /* Stagger the link animations */
  a:nth-child(1) { animation-delay: 0.2s; }
  a:nth-child(2) { animation-delay: 0.3s; }
  a:nth-child(3) { animation-delay: 0.4s; }
  a:nth-child(4) { animation-delay: 0.5s; }
  a:nth-child(5) { animation-delay: 0.6s; } /* Close button if added here */
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
/* 4) FALL RISK PAGE COMPONENT                                                                                          */
/* ----------------------------------------------------------------------------------------------------------------- */
const FallRiskPage = () => {
  // track which section is currently visible
  const [activeSection, setActiveSection] = useState("hero")
  // track whether mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sectionIds = [
      "hero",
      "need-screen",
      "what-is-fra",
      "pboms",
      "billing",
      "pulse4pulse-overview",
      "key-tests",
      "eligible-conditions",
      "practice-benefits",
      "specialties",
      "workflow",
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

      {/* ──────────────── Navigation Bar ───────────────── */}
      <NavBar>
        <LogoWrapper>
          <a
            href="#hero"
            onClick={() => {
              setMenuOpen(false)
            }}
          >
            <img
              src="/images/Upright Medical Solutions Logo.png"
              alt="Upright Medical Solutions"
            />
          </a>
        </LogoWrapper>

        {/* Desktop Links */}
        <NavLinks>
          <li>
            <a
              href="#need-screen"
              className={activeSection === "need-screen" ? "active" : ""}
            >
              Need to Screen
            </a>
          </li>
          <li>
            <a
              href="#what-is-fra"
              className={activeSection === "what-is-fra" ? "active" : ""}
            >
              What Is FRA?
            </a>
          </li>
          <li>
            <a
              href="#pboms"
              className={activeSection === "pboms" ? "active" : ""}
            >
              PBOMs
            </a>
          </li>
          <li>
            <a
              href="#billing"
              className={activeSection === "billing" ? "active" : ""}
            >
              Billing
            </a>
          </li>
          <li>
            <a
              href="#pulse4pulse-overview"
              className={
                activeSection === "pulse4pulse-overview" ? "active" : ""
              }
            >
              P4P Overview
            </a>
          </li>
          <li>
            <a
              href="#key-tests"
              className={activeSection === "key-tests" ? "active" : ""}
            >
              Key Tests
            </a>
          </li>
          <li>
            <a
              href="#eligible-conditions"
              className={
                activeSection === "eligible-conditions" ? "active" : ""
              }
            >
              Conditions
            </a>
          </li>
          <li>
            <a
              href="#practice-benefits"
              className={activeSection === "practice-benefits" ? "active" : ""}
            >
              Benefits
            </a>
          </li>
          <li>
            <a
              href="#specialties"
              className={activeSection === "specialties" ? "active" : ""}
            >
              Specialties
            </a>
          </li>
          <li>
            <a
              href="#workflow"
              className={activeSection === "workflow" ? "active" : ""}
            >
              Workflow
            </a>
          </li>
        </NavLinks>

        {/* Mobile Hamburger */}
        <Hamburger onClick={() => setMenuOpen((prev) => !prev)}>
          {menuOpen ? "✕" : "☰"}
        </Hamburger>

        {/* Mobile Overlay Menu */}
        {menuOpen && (
          <MobileMenu>
            <a
              href="#need-screen"
              onClick={(e) => handleMobileClick(e, "need-screen")}
              className={activeSection === "need-screen" ? "active" : ""}
            >
              Need to Screen
            </a>
            <a
              href="#what-is-fra"
              onClick={(e) => handleMobileClick(e, "what-is-fra")}
              className={activeSection === "what-is-fra" ? "active" : ""}
            >
              What Is FRA?
            </a>
            <a
              href="#pboms"
              onClick={(e) => handleMobileClick(e, "pboms")}
              className={activeSection === "pboms" ? "active" : ""}
            >
              PBOMs
            </a>
            <a
              href="#billing"
              onClick={(e) => handleMobileClick(e, "billing")}
              className={activeSection === "billing" ? "active" : ""}
            >
              Billing
            </a>
            <a
              href="#pulse4pulse-overview"
              onClick={(e) =>
                handleMobileClick(e, "pulse4pulse-overview")
              }
              className={
                activeSection === "pulse4pulse-overview" ? "active" : ""
              }
            >
              P4P Overview
            </a>
            <a
              href="#key-tests"
              onClick={(e) => handleMobileClick(e, "key-tests")}
              className={activeSection === "key-tests" ? "active" : ""}
            >
              Key Tests
            </a>
            <a
              href="#eligible-conditions"
              onClick={(e) => handleMobileClick(e, "eligible-conditions")}
              className={
                activeSection === "eligible-conditions" ? "active" : ""
              }
            >
              Conditions
            </a>
            <a
              href="#practice-benefits"
              onClick={(e) => handleMobileClick(e, "practice-benefits")}
              className={activeSection === "practice-benefits" ? "active" : ""}
            >
              Benefits
            </a>
            <a
              href="#specialties"
              onClick={(e) => handleMobileClick(e, "specialties")}
              className={activeSection === "specialties" ? "active" : ""}
            >
              Specialties
            </a>
            <a
              href="#workflow"
              onClick={(e) => handleMobileClick(e, "workflow")}
              className={activeSection === "workflow" ? "active" : ""}
            >
              Workflow
            </a>
          </MobileMenu>
        )}
      </NavBar>

      {/* ──────────────── Hero / Introduction ───────────────── */}
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
            Solutions to rising insurance costs and health-related employee
            productivity problems.
          </HeroSubhead>
          <HeroButton href="#need-screen">Learn More</HeroButton>
        </HeroContent>
      </HeroWrapper>

      {/* ──────────────── Section 1: The Need to Screen for Falls ───────────────── */}
      <Section id="need-screen">
        <SectionTitle>The Need to Screen for Falls</SectionTitle>
        <IntroText>
          For older adults, falls are serious—and costly.
        </IntroText>
        <InfoBox>
          <BulletList>
            <li>
              The CDC STEADI initiative tells healthcare providers to “Screen
              all patients age 65+ for fall risk.”
            </li>
            <li>
              Based on American and British Geriatrics Societies’ clinical
              practice guidelines.
            </li>
            <li>
              Medicare MIPS Measure #318 calls for “Screening for Future Fall
              Risk” for all patients age 65+.
            </li>
            <li>Also covers MIPS #154 and #155.</li>
          </BulletList>
          <Paragraph>
            <strong>Unlock the ability to predict and prevent falls</strong> using
            our validated Fall Risk Assessment (FRA) technology. Clinicians can
            quickly identify critical areas of fall risk without lengthy manual
            evaluation.
          </Paragraph>
        </InfoBox>
      </Section>

      {/* ──────────────── Section 2: What Is FRA? ───────────────── */}
      <Section id="what-is-fra">
        <SectionTitle>What Is the Fall Risk Assessment (FRA)?</SectionTitle>
        <IntroText>
          A data-driven, automated assessment that calculates each individual’s
          12-month probability of falling.
        </IntroText>
        <InfoBox>
          <BulletList>
            <li>
              <strong>Automated Math:</strong> Combines multiple test results into
              a single risk score—no manual calculation required.
            </li>
            <li>
              <strong>2,300+ Studies:</strong> Built on extensive clinical
              research to ensure accuracy.
            </li>
            <li>
              <strong>10–25 Minutes:</strong> Simple to administer in any clinic
              setting, with minimal training.
            </li>
            <li>
              <strong>Evidence-Based:</strong> Rooted in peer-reviewed algorithms
              that outperform traditional screening methods.
            </li>
          </BulletList>
          <SubTitle>How It Works</SubTitle>
          <StepList>
            <li>
              <strong>Patient Screening:</strong> Patients self-answer
              questionnaires in the waiting room or at home.
            </li>
            <li>
              <strong>Performance Testing:</strong> A medical assistant
              administers 3–5 performance tests (Five Time Sit to Stand, Self
              Paced Walking Test, Single Leg Stance, Timed Up and Go).
            </li>
            <li>
              <strong>Review Report &amp; Care Plan:</strong> Doctor reviews
              auto-generated FRA report and develops care plan, providing
              educational materials.
            </li>
          </StepList>
          <BulletList>
            <li>
              <strong>Five Time Sit to Stand:</strong> Measures lower-limb
              strength and balance.
            </li>
            <li>
              <strong>Self Paced Walking Test:</strong> Assesses gait speed and
              stability.
            </li>
            <li>
              <strong>Single Leg Stance:</strong> Tests static balance on one
              limb.
            </li>
            <li>
              <strong>Timed Up and Go:</strong> Evaluates dynamic balance and
              mobility.
            </li>
          </BulletList>
        </InfoBox>
      </Section>

      {/* ──────────────── Section 3: PBOMs ───────────────── */}
      <Section id="pboms">
        <SectionTitle>Performance-Based Outcome Measures (PBOMs)</SectionTitle>
        <IntroText>
          These functional tests are the heart of any accurate fall-risk model.
        </IntroText>
        <InfoBox>
          <BulletList>
            <li>
              <strong>Lusardi et al (2017):</strong> PBOMs are the most powerful
              predictors of future falls.
            </li>
            <li>
              <strong>Combination Algorithm:</strong> Merges multiple test scores
              into a composite risk probability.
            </li>
            <li>
              <strong>APTA-SR/3 vs. STEADI:</strong> Demonstrated higher Positive
              Likelihood Ratio (2.2 vs 1.57) in Parcetich et al (2022).
            </li>
            <li>
              <strong>Minimize False Negatives:</strong> Nithman et al (2019)
              showed multiple tests reduce missed high-risk patients.
            </li>
          </BulletList>
          <Paragraph>
            <strong>Quick Clinic Integration:</strong>
            <br />
            Patients self-screen via tablet or online form. A medical assistant
            then runs 3–5 tests (walk speed, sit-to-stand, single-leg stance,
            etc.) and our algorithm does the rest.
          </Paragraph>
        </InfoBox>
      </Section>

      {/* ──────────────── Section 4: Billing & Financial Impact ─────────────── */}
      <Section id="billing">
        <SectionTitle>Billing &amp; Financial Impact</SectionTitle>
        <InfoBox>
          <SubTitle>Billing Information</SubTitle>
          <Paragraph>
            Average procedure reimbursement: $73.48 (range $45–$136). Clients use
            code <strong>CPT 97750</strong> (Physical Performance Test) billed in
            15-minute units. Rounding rules: 8 minutes = 1 unit, 23 minutes = 2
            units, 38 minutes = 3 units. For self-report questionnaire
            interpretation, use <strong>CPT 96160</strong>—two questionnaires may
            be used in the protocol.
          </Paragraph>
          <SubTitle>Fall Risk Program Financial Impact</SubTitle>
          <BulletList>
            <li>
              Florida (5 physicians, program 5 days/week, patients 65+ pre- and
              post-op): 6 months collections: <strong>$138,562</strong>
            </li>
            <li>
              Arkansas (6 PT centers, program 5 days/week, patients 65+):
              3 months collections: <strong>$176,215</strong>
            </li>
            <li>
              California (1 hospital, program 7 days/week, patients 65+, surgical
              patients): 3 months collections: <strong>$235,178</strong>
            </li>
          </BulletList>
          <SubTitle>Plan of Care &amp; Educational Materials</SubTitle>
          <Paragraph>
            Once a patient’s FRA report is complete, the doctor reviews results
            with the patient, provides a Falls Care Plan, and offers educational
            materials (e.g., brochures on home modifications, exercise tips).
          </Paragraph>
          <img
            src="PLACEHOLDER_plan_of_care.jpg"
            alt="Falls Care Plan sample"
            style={{ maxWidth: "100%", marginBottom: "1rem" }}
          />
          <img
            src="PLACEHOLDER_education.jpg"
            alt="Educational Materials"
            style={{ maxWidth: "100%" }}
          />
        </InfoBox>
      </Section>

      {/* ──────────────── Section 5: Pulse4Pulse Overview & Mission ───────────────── */}
      <Section id="pulse4pulse-overview">
        <SectionTitle>Pulse4Pulse Overview &amp; Mission</SectionTitle>
        <IntroText>
          A turnkey cardiovascular wellness assessment service with $0 cost to your practice.
        </IntroText>
        <InfoBox>
          <BulletList>
            <li>
              <strong>FDA-Cleared Device:</strong> Portable, in-office setup with a
              small footprint. Physicians can quickly evaluate patients for multiple
              chronic illnesses without referring out.
            </li>
            <li>
              <strong>60%+ of Adult Patients Qualify:</strong> Detect disease at a
              microvascular level and prevent catastrophic events.
            </li>
            <li>
              <strong>Real-Time Results:</strong> Three simultaneous tests conducted
              in 20 minutes by a certified technician—immediate reporting for
              provider review.
            </li>
            <li>
              <strong>$0 Cost to Your Practice:</strong> Pulse4Pulse supplies the
              equipment, certified staff, and billing support—no capital expenditure,
              no staff training burden.
            </li>
          </BulletList>
          <SubTitle>How It Works</SubTitle>
          <StepList>
            <li>Intake Qualification: Patient completes a brief form to identify risk factors.</li>
            <li>
              On-Site Testing: A Pulse4Pulse medical assistant visits your practice
              to perform the assessment using a portable, FDA-cleared device.
            </li>
            <li>
              Instant Results: Technician provides real-time results and preliminary
              recommendations to the provider during the same visit.
            </li>
            <li>
              Billing & Support: Pulse4Pulse handles all billing and provides an
              account manager to ensure smooth program implementation.
            </li>
          </StepList>
        </InfoBox>
      </Section>

      {/* ──────────────── Section 6: Key Tests & Benefits ───────────────── */}
      <Section id="key-tests">
        <SectionTitle>Key Tests &amp; Benefits</SectionTitle>
        <InfoBox>
          <BulletList>
            <li>
              <strong>ANS Testing:</strong> Measures autonomic nervous system
              function (heart rate variability, adaptability). Utilizes blood
              pressure cuffs, EKG leads, and P02 sensors during controlled breathing.
            </li>
            <li>
              <strong>ABI Testing:</strong> Screens for peripheral artery disease by
              comparing limb blood pressures. Four cuffs and P02 sensors record for
              two minutes each side.
            </li>
            <li>
              <strong>Sudomotor Testing:</strong> Detects early microvascular
              neuropathy by stimulating sweat glands—early detection of neuropathy.
            </li>
          </BulletList>
          <Paragraph>
            All three tests complete within a 20-minute, non-invasive session,
            producing an easy-to-interpret summary report for the provider.
          </Paragraph>
        </InfoBox>
      </Section>

      {/* ──────────────── Section 7: Eligible Conditions ───────────────── */}
      <Section id="eligible-conditions">
        <SectionTitle>Eligible Conditions</SectionTitle>
        <InfoBox>
          <IntroText>
            Any one condition below determines eligibility for Pulse4Pulse testing:
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

      {/* ──────────────── Section 8: Practice Benefits ───────────────── */}
      <Section id="practice-benefits">
        <SectionTitle>Practice Benefits</SectionTitle>
        <InfoBox>
          <BulletList>
            <li>
              <strong>New Revenue Stream:</strong> Potential for $150k/physician
              annually; 60% of adult patients qualify for testing.
            </li>
            <li>
              <strong>No Capital Expenditure:</strong> Pulse4Pulse provides device,
              staffing, and billing—zero startup cost.
            </li>
            <li>
              <strong>5 Billable Diagnostic Codes:</strong>
              <ul>
                <li key="code-93923">Ankle Brachial Index (CPT 93923)</li>
                <li key="code-95921">Autonomic Function (CPT 95921)</li>
                <li key="code-95923">Sudomotor (CPT 95923)</li>
                <li key="code-93040">Electrocardiogram (CPT 93040)</li>
                <li key="code-94761">Pulse Oximetry (CPT 94761)</li>
              </ul>
            </li>
            <li>
              <strong>Enhanced Patient Care:</strong> Early detection of disease
              indicators leads to timely intervention and improved outcomes.
            </li>
          </BulletList>
        </InfoBox>
      </Section>

      {/* ──────────────── Section 9: Applicable Medical Specialties ───────────────── */}
      <Section id="specialties">
        <SectionTitle>Applicable Medical Specialties</SectionTitle>
        <InfoBox>
          <BulletList>
            <li key="cardiology">
              <strong>Cardiology:</strong> Diagnose CAD, hypercholesterolemia,
              hypertension—especially in smokers, stroke history.
            </li>
            <li key="diabetic-medicine">
              <strong>Diabetic Medicine:</strong> Diagnose diabetes, neuropathies,
              PAD.
            </li>
            <li key="endocrinology">
              <strong>Endocrinology:</strong> Wellness tool for diabetes/thyroid/
              cholesterol issues.
            </li>
            <li key="gastroenterology">
              <strong>Gastroenterology:</strong> Identify autonomic neuropathies
              related to IBS, chronic constipation, abdominal pain.
            </li>
            <li key="general-practice">
              <strong>General Practice:</strong> Helps screen 60% of asymptomatic
              adults for hidden disease.
            </li>
            <li key="geriatric">
              <strong>Geriatric Medicine:</strong> All geriatric patients qualify—
              elevated ABI pressures over 70 correlate with dementia risk.
            </li>
            <li key="neurology">
              <strong>Neurology:</strong> Quantify neuropathy for objective care
              planning.
            </li>
            <li key="orthopedics-surgery">
              <strong>Orthopedics &amp; Surgery:</strong> Pre-surgery screening for
              circulatory and diabetic issues.
            </li>
            <li key="pain-management">
              <strong>Pain Management:</strong> Differentiate vascular vs neuropathic
              pain for tailored interventions.
            </li>
            <li key="pulmonology">
              <strong>Pulmonology / Sleep Disorders:</strong> COPD and autonomic
              dysfunction link.
            </li>
            <li key="weight-management">
              <strong>Weight Management:</strong> High rates of diabetes/
              thyroid/cholesterol in overweight patients.
            </li>
            <li key="wound-care-nephrology">
              <strong>Wound Care / Nephrology:</strong> Screen for PAD in CKD patients
              with ulcers.
            </li>
            <li key="integrative-internal">
              <strong>Integrative &amp; Internal Medicine:</strong> Wellness tool for
              asymptomatic screening and root-cause analysis of complex symptom
              profiles.
            </li>
            <li key="urology">
              <strong>Urology:</strong> Identify vascular causes of sexual dysfunction.
            </li>
          </BulletList>
        </InfoBox>
      </Section>

      {/* ──────────────── Section 10: Clinic Workflow ───────────────── */}
      <Section id="workflow">
        <SectionTitle>Clinic Workflow – Best Practice Example</SectionTitle>
        <InfoBox>
          <IntroText>Step 1: Patient Screening</IntroText>
          <Paragraph>
            Patients self-answer a brief questionnaire while waiting—captures
            history, medications, previous falls.
          </Paragraph>

          <IntroText>Step 2: Performance Testing</IntroText>
          <Paragraph>
            Patient is escorted down the hallway for a 10-meter walk test. A
            physician assistant or MA administers remaining tests in the exam
            room.
          </Paragraph>

          <IntroText>Step 3: Report &amp; Care Plan</IntroText>
          <Paragraph>
            Within seconds, the FRA engine generates a risk report and tailored
            interventions. The clinician reviews results, provides educational
            materials, and schedules follow-up.
          </Paragraph>

          <IntroText>Financial Impact / Case Studies</IntroText>
          <BulletList>
            <li key="case-fl"><strong>Florida (5 Physicians):</strong> 6 months collections – $138,562.</li>
            <li key="case-ar"><strong>Arkansas (6 PT Centers):</strong> 3 months collections – $176,215.</li>
            <li key="case-ca"><strong>California (1 Hospital):</strong> 3 months collections – $235,178.</li>
          </BulletList>
        </InfoBox>
      </Section>
    </>
  )
}

export default FallRiskPage
