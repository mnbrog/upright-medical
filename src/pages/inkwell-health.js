// File: src/pages/inkwell-health.js

import React from "react";
import GlobalStyles from "../components/Layout/GlobalStyles";
import Nav from "../components/Nav";
import Contact from "../components/sections/Contact";
import Footer from "../components/Footer";
import {
  Section,
  SectionTitle,
  LeadParagraph,
  BulletList,
  ProductHero,
  ProductEyebrow,
  ProductHeroTitle,
  ProductHeroDescriptor,
  CategoryTag,
  TwoColumnLayout,
  TextColumn,
  ImageWrapper,
  FeatureGrid,
  FeatureCard,
  IconWrapper,
  FeatureTitle,
  FeatureDescription,
  ProcessStepper,
  ProcessStep,
  StepIcon,
  StepTitle,
  StepDescription,
  StatGrid,
  StatCard,
  StatNumber,
  StatLabel,
  BadgeRow,
  Badge,
  AccentDivider,
  CTAWrapper,
  ManufacturerLinkRow,
  HeroButton
} from "../components/styles";
import {
  FaMobileAlt,
  FaBell,
  FaChartLine,
  FaClipboardCheck,
  FaCut,
  FaCrosshairs,
  FaTshirt,
  FaTint as FaDroplet,
  FaRunning,
  FaClipboardList,
  FaSyncAlt,
  FaUserPlus,
  FaHandsHelping,
  FaEye,
  FaDollarSign,
  FaShieldVirus,
  FaAmbulance,
  FaSmile,
  FaCalendarCheck
} from "react-icons/fa";

const ACCENT = "#2F5FD6";
const GRADIENT = "linear-gradient(135deg, #0B1F3A 0%, #2F5FD6 100%)";

const InkWellHealthPage = () => (
  <>
    <GlobalStyles />
    <Nav active="inkwell-health" />
    <main>
      <ProductHero $gradient={GRADIENT}>
        <CategoryTag>Remote Therapeutic Monitoring / Post-Op Recovery</CategoryTag>
        <ProductEyebrow>InkWell Health</ProductEyebrow>
        <ProductHeroTitle>InkWell Health</ProductHeroTitle>
        <ProductHeroDescriptor>
          Proprietary Temporary Tattoo Technology to Personalize Recovery after Orthopedic Surgery
        </ProductHeroDescriptor>
      </ProductHero>

      <Section id="overview">
        <TwoColumnLayout>
          <ImageWrapper>
            <img
              src="/images/inkwell-health-hero.png"
              alt="InkWell Health: The World's First Remote Monitoring Solution for Knee Surgery Patients, showing the RTM tattoo applied to a knee and scanned by phone"
            />
          </ImageWrapper>

          <TextColumn>
            <SectionTitle>The InkWell Health Knee Module (IWH-K)</SectionTitle>
            <LeadParagraph>
              Leveraging smartphone access and a patent-pending solution
            </LeadParagraph>
          </TextColumn>
        </TwoColumnLayout>

        <FeatureGrid style={{ marginTop: "2.5rem" }}>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaClipboardCheck /></IconWrapper>
            <FeatureTitle>Simple &amp; Easy to Use</FeatureTitle>
            <FeatureDescription>The Inkwell Team manages the patient &amp; process</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaEye /></IconWrapper>
            <FeatureTitle>Know How Your Patients Are Doing!</FeatureTitle>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaBell /></IconWrapper>
            <FeatureTitle>Critical Alerts &amp; Off-Track Notifications</FeatureTitle>
            <FeatureDescription>Swelling, Range of Motion &amp; Temperature alerts during the critical "Recovery Period"</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaChartLine /></IconWrapper>
            <FeatureTitle>Track Progress to Recovery Goals</FeatureTitle>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaClipboardList /></IconWrapper>
            <FeatureTitle>Medical Grade Data to Optimize Plan</FeatureTitle>
            <FeatureDescription>Data to guide Physical Therapy Plan of Care, PT Sessions</FeatureDescription>
          </FeatureCard>
        </FeatureGrid>

        <LeadParagraph style={{ textAlign: "center", marginTop: "2rem" }}>
          Tattoo – Scanned by Phone like a QR Code. Medical Data shared with Patient &amp; Clinicians.
        </LeadParagraph>
      </Section>

      <Section id="tattoo">
        <SectionTitle>Applying the Tattoo Takes 30 Seconds!</SectionTitle>
        <AccentDivider $accent={ACCENT} />
        <ProcessStepper>
          <ProcessStep>
            <StepIcon $accent={ACCENT}><FaTshirt /></StepIcon>
            <StepTitle>1. Prepare the Area</StepTitle>
            <StepDescription>For the first tattoo, carefully remove any hair from the area, clean and dry skin. If needed, remove the old tattoo with the wipes provided.</StepDescription>
          </ProcessStep>
          <ProcessStep>
            <StepIcon $accent={ACCENT}><FaCut /></StepIcon>
            <StepTitle>2. Cut Out the Tattoo</StepTitle>
          </ProcessStep>
          <ProcessStep>
            <StepIcon $accent={ACCENT}><FaCrosshairs /></StepIcon>
            <StepTitle>3. Find the Right Spot</StepTitle>
            <StepDescription>Middle cross goes over bony bump on inside of knee below kneecap</StepDescription>
          </ProcessStep>
          <ProcessStep>
            <StepIcon $accent={ACCENT}><FaTshirt /></StepIcon>
            <StepTitle>4. Remove the Plastic</StepTitle>
          </ProcessStep>
          <ProcessStep>
            <StepIcon $accent={ACCENT}><FaDroplet /></StepIcon>
            <StepTitle>5. Apply Tattoo</StepTitle>
            <StepDescription>With your leg straight, place the tattoo on the spot found in step 3. Hold wet towel over tattoo for 30 seconds. Peel the paper away.</StepDescription>
          </ProcessStep>
        </ProcessStepper>
      </Section>

      <Section id="exercises">
        <SectionTitle>Integrated Home Exercises for All Body Areas</SectionTitle>
        <LeadParagraph style={{ textAlign: "center" }}>
          Leveraging the same workflow and a combined smartphone app — Inkwell Health &amp; ptMantra combined.
        </LeadParagraph>
        <FeatureGrid>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaMobileAlt /></IconWrapper>
            <FeatureTitle>Same Workflow &amp; One App for Patient</FeatureTitle>
            <FeatureDescription>Inkwell Health &amp; ptMantra combined</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaRunning /></IconWrapper>
            <FeatureTitle>Pre Hab and Post Op Home Exercises</FeatureTitle>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaClipboardCheck /></IconWrapper>
            <FeatureTitle>Patient Adherence Tracking</FeatureTitle>
            <FeatureDescription>Eliminates paper tracking, easy for patients to engage in their care plan and for providers to monitor progress.</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaHandsHelping /></IconWrapper>
            <FeatureTitle>Comprehensive Library of Exercises</FeatureTitle>
            <FeatureDescription>Exercise programs for all areas of the body. Patients review instructions, perform exercises, and log pain as well difficulty so adjustments can be easily made.</FeatureDescription>
          </FeatureCard>
        </FeatureGrid>
      </Section>

      <Section id="implementation">
        <SectionTitle>Simple Implementation Process</SectionTitle>
        <LeadParagraph style={{ textAlign: "center" }}>Inkwell makes it easy for your customers!</LeadParagraph>
        <AccentDivider $accent={ACCENT} />
        <ProcessStepper>
          <ProcessStep>
            <StepIcon $accent={ACCENT}><FaUserPlus /></StepIcon>
            <StepTitle>Patient Onboarding &amp; Training</StepTitle>
            <StepDescription>*Done by Inkwell</StepDescription>
          </ProcessStep>
          <ProcessStep>
            <StepIcon $accent={ACCENT}><FaDroplet /></StepIcon>
            <StepTitle>Tattoo Applied</StepTitle>
          </ProcessStep>
          <ProcessStep>
            <StepIcon $accent={ACCENT}><FaHandsHelping /></StepIcon>
            <StepTitle>Patient Support &amp; Reminders</StepTitle>
            <StepDescription>*Done by Inkwell</StepDescription>
          </ProcessStep>
          <ProcessStep>
            <StepIcon $accent={ACCENT}><FaEye /></StepIcon>
            <StepTitle>Monitoring the Patient</StepTitle>
            <StepDescription>*Can be done by Inkwell</StepDescription>
          </ProcessStep>
          <ProcessStep>
            <StepIcon $accent={ACCENT}><FaSyncAlt /></StepIcon>
            <StepTitle>LIVE Access to Patient Data</StepTitle>
            <StepDescription>*Done by Inkwell</StepDescription>
          </ProcessStep>
        </ProcessStepper>
      </Section>

      <Section id="rtm-codes">
        <SectionTitle>Substantially Boosting Clinic Profits</SectionTitle>
        <LeadParagraph style={{ textAlign: "center" }}>Leveraging existing Reimbursement Codes</LeadParagraph>
        <FeatureGrid>
          <FeatureCard>
            <FeatureTitle>98975</FeatureTitle>
            <FeatureDescription>Initial Set Up (one time - $20)</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>98977</FeatureTitle>
            <FeatureDescription>Data collection (every 30 Days - $55)</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>98980</FeatureTitle>
            <FeatureDescription>Time (first 20min every month - $50)</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>98981</FeatureTitle>
            <FeatureDescription>Time (additional 20min / month - $40)</FeatureDescription>
          </FeatureCard>
        </FeatureGrid>
        <StatGrid style={{ gridTemplateColumns: "1fr", maxWidth: "420px", margin: "2rem auto 0 auto" }}>
          <StatCard>
            <StatNumber style={{ color: ACCENT }}>$230–$310</StatNumber>
            <StatLabel>Average Profit Per Patient (2 months of monitoring)</StatLabel>
          </StatCard>
        </StatGrid>
      </Section>

      <Section id="clinical-series">
        <SectionTitle>3 Center Clinical Series Results</SectionTitle>
        <LeadParagraph style={{ textAlign: "center" }}>98 patient Multi Center Clinical Series</LeadParagraph>
        <LeadParagraph style={{ textAlign: "center" }}>According to InkWell Health:</LeadParagraph>
        <FeatureGrid>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaSmile /></IconWrapper>
            <FeatureTitle>High Patient Compliance &amp; Acceptance</FeatureTitle>
            <FeatureDescription>87% of patients met the entry requirements for billing; 77% rated app Good/Excellent/Best (SUS)</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaChartLine /></IconWrapper>
            <FeatureTitle>Data to Identify Patients at Risk of MUA</FeatureTitle>
            <FeatureDescription>4 MUA's flagged by the data and sites are now using data trends to identify patients at risk!</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaShieldVirus /></IconWrapper>
            <FeatureTitle>Data to Identify Potential Infections</FeatureTitle>
            <FeatureDescription>2 confirmed infections were flagged by temperature and swelling alerts.</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaAmbulance /></IconWrapper>
            <FeatureTitle>Help Prevent Emergency Room Visits</FeatureTitle>
            <FeatureDescription>ED room visits prevented due to temperature, swelling and pain alerts.</FeatureDescription>
          </FeatureCard>
        </FeatureGrid>
      </Section>

      <Section id="efficiency">
        <SectionTitle>Customer &amp; Practice Efficiency Potential</SectionTitle>
        <LeadParagraph style={{ textAlign: "center" }}>Leveraging Inkwell's Data to optimize Follow Up appointments!</LeadParagraph>
        <FeatureGrid>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaCalendarCheck /></IconWrapper>
            <FeatureTitle>High Volume Clinic Using Inkwells Data to Help Manage Follow Up Appointments</FeatureTitle>
            <FeatureDescription>Clinic using data to more efficiently follow patients and even reduce follow up appointments during the global period.</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaUserPlus /></IconWrapper>
            <FeatureTitle>Same Clinic Able to See More New Patients</FeatureTitle>
            <FeatureDescription>Generating New Patient Evaluations at $108</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaDollarSign /></IconWrapper>
            <FeatureTitle>Generating More Surgical Patients</FeatureTitle>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaChartLine /></IconWrapper>
            <FeatureTitle>Overall Significant Financial Benefit to Patient and Practice!</FeatureTitle>
            <FeatureDescription>Generating more revenue from RTM and new Patients, while also saving patients time and money!</FeatureDescription>
          </FeatureCard>
        </FeatureGrid>
      </Section>

      <Section id="protocol">
        <SectionTitle>Announcing Our Less Swelling, Less Pain™ Inkwell Protocol:</SectionTitle>
        <BadgeRow>
          <Badge $accent={ACCENT}>Leveraging a Proven Protocol from Dr Wickline</Badge>
          <Badge $accent={ACCENT}>Less pain and less opioids</Badge>
          <Badge $accent={ACCENT}>Improved flexion &amp; satisfaction</Badge>
          <Badge $accent={ACCENT}>Enable Home Therapy &amp; Optimized Outpatient PT</Badge>
        </BadgeRow>
      </Section>

      <Section id="value">
        <SectionTitle>Value of Inkwell &amp; Patient Engagement</SectionTitle>
        <LeadParagraph style={{ textAlign: "center" }}>Leveraging Inkwell's Data to meet your needs!</LeadParagraph>
        <BulletList>
          <li>RTM Revenue — Leverage Existing Reimbursement Codes</li>
          <li>Value Based Models — Now Include PT</li>
          <li>Prevention: MUA / ED Visit / SSI — Swelling and Temperature</li>
          <li>Patient Satisfaction / Proms / MIPS</li>
          <li>Help Clinics Manage Follow Up — Manage Visits during Global; See more New Patients</li>
          <li>Optimize Recovery — Personalize Recovery; Track Progress Remotely</li>
        </BulletList>
      </Section>

      <CTAWrapper>
        <h2 style={{ marginBottom: "1rem" }}>Ready to Bring InkWell Health to Your Practice?</h2>
        <ManufacturerLinkRow>
          <HeroButton
            href="https://www.inkwellhealth.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: ACCENT }}
          >
            Visit inkwellhealth.com
          </HeroButton>
        </ManufacturerLinkRow>
      </CTAWrapper>

      <Contact product="InkWell Health" />
    </main>
    <Footer />
  </>
);

export default InkWellHealthPage;
