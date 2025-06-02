// File: src/pages/fall-risk.js

import React, { useState, useEffect } from "react"
import styled, { createGlobalStyle } from "styled-components"

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
    scroll-snap-type: y mandatory;
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

/* 3.1: Sticky navigation bar with logo above nav links */
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
  padding: 1rem 0;

  @media (min-width: 600px) {
    padding: 1rem 0.5rem;
  }
`

const LogoWrapper = styled.div`
  margin-bottom: 1rem;

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

/* 3.1.1: NavLinks with active‐state styling */
const NavLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;

  li {
    list-style: none;
  }

  a {
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

  @media (min-width: 600px) {
    gap: 2rem;

    a {
      font-size: 1.1rem;
    }
  }
`

/* 3.2: Section container with generous top padding, big bottom margin, and scroll-snap */
const Section = styled.section`
  scroll-snap-align: start;
  scroll-margin-top: 160px;
  max-width: 960px;
  margin: 4rem auto 8rem auto;
  padding: 6rem 1rem 2rem 1rem;

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

/* 3.8: Hero Section (with video background) */
const HeroWrapper = styled.section`
  position: relative;
  height: 70vh;
  min-height: 450px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-align: center;
  scroll-snap-align: start;
  scroll-margin-top: 160px;

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
  text-decoration: none;

  &:hover {
    background: #64FFDA;
  }
`

/* ----------------------------------------------------------------------------------------------------------------- */
/* 4) FALL RISK PAGE COMPONENT                                                                                          */
/* ----------------------------------------------------------------------------------------------------------------- */  
const FallRiskPage = () => {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const sectionIds = ["hero", "need-screen", "what-is-fra", "pboms", "workflow"]
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

  return (
    <>
      <GlobalStyles />

      {/* ──────────────── Navigation Bar ───────────────── */}
      <NavBar>
        <LogoWrapper>
          <a href="#hero">
            <img
              src="/images/Upright Medical Solutions Logo.png"
              alt="Upright Medical Solutions"
            />
          </a>
        </LogoWrapper>
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
            <a href="#pboms" className={activeSection === "pboms" ? "active" : ""}>
              PBOMs
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
              The CDC STEADI initiative tells healthcare providers to “Screen all
              patients age 65+ for fall risk.”
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
          <Paragraph>
            <strong>Step 1: Screen</strong> – Identify existing risk factors using a
            brief questionnaire.
            <br />
            <strong>Step 2: Assess</strong> – Administer 3-5 performance tests in
            under 25 minutes.
            <br />
            <strong>Step 3: Intervene</strong> – Generate a personalized,
            evidence-based care plan immediately.
          </Paragraph>
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
              Likelihood Ratio (2.2 vs. 1.57) in Parcetich et al (2022).
            </li>
            <li>
              <strong>Minimize False Negatives:</strong> Nithman et al (2019) showed
              multiple tests reduce missed high-risk patients.
            </li>
          </BulletList>
          <Paragraph>
            <strong>Quick Clinic Integration:</strong>
            <br />
            Patients self-screen via tablet or online form. A medical assistant
            then runs 3-5 tests—walk speed, sit-to-stand, single-leg stance,
            etc.—and our algorithm does the rest.
          </Paragraph>
        </InfoBox>
      </Section>

      {/* ──────────────── Section 4: Clinic Workflow ───────────────── */}
      <Section id="workflow">
        <SectionTitle>Clinic Workflow – Best Practice Example</SectionTitle>
        <InfoBox>
          <IntroText>Step 1: Patient Screening</IntroText>
          <Paragraph>
            Patients complete a brief questionnaire while waiting—captures
            history, medications, previous falls.
          </Paragraph>

          <IntroText>Step 2: Performance Testing</IntroText>
          <Paragraph>
            Patient is escorted down the hallway for a 10-meter walk test. A
            physician assistant or MA administers the remaining performance tests
            in the exam room.
          </Paragraph>

          <IntroText>Step 3: Report &amp; Care Plan</IntroText>
          <Paragraph>
            Within seconds, the FRA engine generates a risk report and tailored
            interventions. The clinician reviews results, provides educational
            materials, and schedules follow-up.
          </Paragraph>

          <IntroText>Financial Impact / Case Studies</IntroText>
          <BulletList>
            <li>
              <strong>Florida (5 Physicians):</strong> 6 Months of Collections –
              $138,562.
            </li>
            <li>
              <strong>Arkansas (6 PT Centers):</strong> 3 Months of Collections –
              $176,215.
            </li>
            <li>
              <strong>California (1 Hospital):</strong> 3 Months of Collections –
              $235,178.
            </li>
          </BulletList>
        </InfoBox>
      </Section>
    </>
  )
}

export default FallRiskPage
