import React from "react"
import styled from "styled-components"
import GlobalStyles from "../components/Layout/GlobalStyles"

/* ----------------------------------------------------------------------------------------------------------------- */
/* 1) Color Palette                                                                                                   */
/* ----------------------------------------------------------------------------------------------------------------- */
const COLORS = {
  darkBlue: "#0A2640",
  teal: "#3FD0C9",
  lightGray: "#F7F9FA",
  cardBg: "#FFFFFF",
  neutralGray: "#6B7280",
}

/* ----------------------------------------------------------------------------------------------------------------- */
/* 2) LAYOUT COMPONENTS                                                                                               */
/* ----------------------------------------------------------------------------------------------------------------- */

/* 2.1: Sticky navigation bar at the top with anchor links */
const NavBar = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  background: ${COLORS.cardBg};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 100;

  ul {
    display: flex;
    justify-content: center;
    padding: 0.75rem 1rem;
    gap: 2rem;

    @media (max-width: 600px) {
      flex-wrap: wrap;
      gap: 1rem;
    }
  }

  li {
    list-style: none;
  }

  a {
    font-size: 1rem;
    font-weight: 500;
    color: ${COLORS.darkBlue};
    transition: color 0.2s ease-in-out;
    &:hover {
      color: ${COLORS.teal};
    }
  }
`;

/* 2.2: Wrapper for each section */
const Section = styled.section`
  max-width: 960px;
  margin: 0 auto;
  padding: 4rem 1rem;

  @media (max-width: 768px) {
    padding: 2.5rem 1rem;
  }
`;

/* 2.3: Section Title (H2) */
const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${COLORS.darkBlue};
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

/* 2.4: Paragraph / Body Text */
const Paragraph = styled.p`
  color: ${COLORS.darkBlue};
  font-size: 1rem;
  margin-bottom: 1rem;
`;

/* 2.5: Larger intro text (centered) */
const IntroText = styled.p`
  color: ${COLORS.darkBlue};
  font-size: 1.125rem;
  text-align: center;
  margin-bottom: 2rem;
`;

/* 2.6: Bullet List styling */
const BulletList = styled.ul`
  margin-left: 1.25rem;
  margin-bottom: 1.5rem;

  li {
    margin-bottom: 0.5rem;
    line-height: 1.4;
  }
`;

/* 2.7: Hero Section */
const HeroWrapper = styled.section`
  position: relative;
  height: 60vh;
  min-height: 400px;
  background: url("/images/clinic-hallway.jpg") center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  text-align: center;

  &:after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 22, 48, 0.6);
  }

  @media (max-width: 768px) {
    height: 50vh;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 1rem;
`;

const HeroHeadline = styled.h1`
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: #FFFFFF;
`;

const HeroSubhead = styled.p`
  font-size: clamp(1.125rem, 3vw, 1.5rem);
  margin-bottom: 2rem;
  color: #FFFFFF;
`;

/* 2.8: Hero Button */
const HeroButton = styled.a`
  background: ${COLORS.teal};
  color: #FFFFFF;
  padding: 0.75rem 1.75rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: #64FFDA;
  }
`;

/* ----------------------------------------------------------------------------------------------------------------- */
/* 3) PAGE CONTENT                                                                                                    */
/* ----------------------------------------------------------------------------------------------------------------- */
const FallRiskPage = () => {
  return (
    <>
      <GlobalStyles />

      {/* ──────────────── Navigation Bar ───────────────── */}
      <NavBar>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#need-screen">Need to Screen</a></li>
          <li><a href="#what-is-fra">What Is FRA?</a></li>
          <li><a href="#pboms">PBOMs</a></li>
          <li><a href="#workflow">Clinic Workflow</a></li>
        </ul>
      </NavBar>

      {/* ──────────────── Hero / Introduction ───────────────── */}
      <HeroWrapper id="hero">
        <HeroContent>
          <HeroHeadline>
            Predict Risk. <br />
            Prevent Falls.
          </HeroHeadline>
          <HeroSubhead>
            Solutions to Rising Insurance Costs and Health-Related Employee Productivity Problems :contentReference[oaicite:1]{index=1}
          </HeroSubhead>
          <HeroButton href="#need-screen">
            Learn More
          </HeroButton>
        </HeroContent>
      </HeroWrapper>

      {/* ──────────────── Section 1: The Need to Screen for Falls ───────────────── */}
      <Section id="need-screen">
        <SectionTitle>The Need to Screen for Falls</SectionTitle>
        <IntroText>
          For older adults, falls are serious.
        </IntroText>
        <BulletList>
          <li>
            The CDC STEADI initiative tells healthcare providers to “Screen all patients age 65+ for fall risk” :contentReference[oaicite:3]{index=3}
          </li>
          <li>
            Based on American and British Geriatrics Societies’ clinical practice guidelines :contentReference[oaicite:5]{index=5}
          </li>
          <li>
            Medicare MIPS Measure #318 calls for “Screening for Future Fall Risk” all patients age 65+ as a best practice :contentReference[oaicite:7]{index=7}
          </li>
          <li>
            Also covers MIPS #154 and #155 :contentReference[oaicite:9]{index=9}
          </li>
        </BulletList>
        <Paragraph>
          Unlock the ability to predict risk and prevent falls … and beats STEADI head-to-head.  
          Our Fall Risk Assessment (FRA) technology allows clinicians to quickly identify critical areas of fall risk.
        </Paragraph>
      </Section>

      {/* ──────────────── Section 2: What Is the Fall Risk Assessment (FRA)? ───────────────── */}
      <Section id="what-is-fra">
        <SectionTitle>What Is the Fall Risk Assessment (FRA)?</SectionTitle>
        <IntroText>
          A detailed, automated assessment that calculates an individual’s statistical risk of falling within the next 12 months. :contentReference[oaicite:11]{index=11}
        </IntroText>
        <BulletList>
          <li>
            Automatically calculates the advanced mathematics necessary to predict fall risk :contentReference[oaicite:13]{index=13}
          </li>
          <li>
            Leverages data from over 2,300 separate studies :contentReference[oaicite:15]{index=15}
          </li>
          <li>
            Complete the test in just 10–25 minutes :contentReference[oaicite:17]{index=17}
          </li>
          <li>
            A rigorous test doesn’t need to be difficult to introduce in your practice.
          </li>
          <li>
            Rooted in research, yet simple to conduct. :contentReference[oaicite:19]{index=19}
          </li>
        </BulletList>

        <Paragraph>
          <strong>Step 1: Screen</strong> – Identify if the patient has any risk factors present.
        </Paragraph>
        <Paragraph>
          <strong>Step 2: Assess</strong> – Quantify the severity of risks identified.
        </Paragraph>
        <Paragraph>
          <strong>Step 3: Intervene</strong> – Apply evidence-based interventions. :contentReference[oaicite:21]{index=21}
        </Paragraph>
      </Section>

      {/* ──────────────── Section 3: Performance-Based Outcome Measures (PBOMs) ───────────────── */}
      <Section id="pboms">
        <SectionTitle>Performance-Based Outcome Measures (PBOMs)</SectionTitle>
        <IntroText>
          Are critical for a predictive falls assessment. :contentReference[oaicite:23]{index=23}
        </IntroText>
        <BulletList>
          <li>
            Lusardi et al (2017) meta-study identified PBOMs as the most powerful predictor of future falls. :contentReference[oaicite:25]{index=25}
          </li>
          <li>
            Lusardi et al advanced a statistical methodology of combining results from multiple PBOMs to better predict falls. :contentReference[oaicite:27]{index=27}
          </li>
          <li>
            Parcetich et al (2022) compared the predictive quality of Lusardi’s PBOMs (APTA-SR/3) with the CDC STEADI.
          </li>
          <li>
            Parcetich et al found that APTA-SR/3 had much better Positive Likelihood (2.2/2.35 vs 1.57) and hence higher accuracy than STEADI. :contentReference[oaicite:29]{index=29}
          </li>
          <li>
            Nithman et al (2019) found CDC STEADI had high false negative rates and emphasized “it is important to conduct more than one mobility or balance screening test.” :contentReference[oaicite:31]{index=31}
          </li>
        </BulletList>

        <Paragraph>
          <strong>Integrate seamlessly into your clinic workflow:</strong>
        </Paragraph>
        <Paragraph>
          Patients self-answer a brief series of questions at home or while sitting in the waiting room.
        </Paragraph>
        <Paragraph>
          <strong>1.</strong> Patient is led to an exam room, where a physician assistant or MA will administer 3 to 5 performance tests.
        </Paragraph>
        <Paragraph>
          <strong>2.</strong> Doctor auto-generates report & Falls Care Plan, reviews with patient and provides educational materials.
        </Paragraph>
        <Paragraph>
          Some busy surgeries/clinics easily see 40+ patients per day! :contentReference[oaicite:33]{index=33}
        </Paragraph>
      </Section>

      {/* ──────────────── Section 4: Clinic Workflow / How It Works ───────────────── */}
      <Section id="workflow">
        <SectionTitle>Clinic Workflow – Best Practice Example</SectionTitle>
        <IntroText>
          Step 1: Patient Screening
        </IntroText>
        <Paragraph>
          Patients self-answer the questionnaires while sitting in the waiting room during their registration. :contentReference[oaicite:35]{index=35}
        </Paragraph>

        <IntroText>
          Step 2: Performance Testing
        </IntroText>
        <Paragraph>
          Patient is led to an exam room through a hallway, where the walk test is done. A physician assistant or MA administers the other performance tests in the exam room. :contentReference[oaicite:37]{index=37}
        </Paragraph>

        <IntroText>
          Step 3: Review Report & Care Plan
        </IntroText>
        <Paragraph>
          Doctor sees patient. The FRA report and Falls Care Plan are auto-generated. Review results with patient and provide educational materials. :contentReference[oaicite:39]{index=39}
        </Paragraph>

        <IntroText>
          Financial Impact / Case Studies
        </IntroText>
        <BulletList>
          <li>
            <strong>Reference Customer – Florida (5 Physicians)</strong><br />
            Program runs 5 days/week for patients 65+, surgical patients at pre-op, 6-weeks post-op, 90 days post-op.  
            6 Months of Collections: $138,562 :contentReference[oaicite:41]{index=41}
          </li>
          <li>
            <strong>Arkansas (6 Physical Therapy Centers)</strong><br />
            Program runs 5 days/week on referrals for patients 65+.  
            3 Months of Collections: $176,215 :contentReference[oaicite:43]{index=43}
          </li>
          <li>
            <strong>California (1 Hospital)</strong><br />
            Program runs 7 days/week for patients 65+, surgical patients at pre-op, 90 days post-op.  
            3 Months of Collections: $235,178 :contentReference[oaicite:45]{index=45}
          </li>
        </BulletList>
      </Section>
    </>
  )
}

export default FallRiskPage
