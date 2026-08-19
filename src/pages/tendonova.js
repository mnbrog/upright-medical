// File: src/pages/tendonova.js

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
  CenteredTextColumn,
  VisualPanel,
  VisualPanelIcon,
  VisualPanelLabel,
  SpecChipRow,
  SpecChip,
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
  QuoteText,
  CTAWrapper,
  ManufacturerLinkRow,
  HeroButton,
  ContactDetail
} from "../components/styles";
import {
  FaSyringe,
  FaBatteryFull,
  FaPlug,
  FaCut,
  FaHeartbeat,
  FaUserMd,
  FaDollarSign,
  FaThumbsUp,
  FaClock,
  FaBan,
  FaChartLine,
  FaSmile,
  FaEnvelope,
  FaPhoneAlt
} from "react-icons/fa";

const ACCENT = "#7C3AED";
const GRADIENT = "linear-gradient(135deg, #4C1D77 0%, #7C3AED 100%)";

const TendoNovaPage = () => (
  <>
    <GlobalStyles />
    <Nav active="tendonova" />
    <main>
      <ProductHero $gradient={GRADIENT}>
        <CategoryTag>Sports Medicine &amp; Orthopedics</CategoryTag>
        <ProductEyebrow>TendoNova</ProductEyebrow>
        <ProductHeroTitle>TendoNova Ocelot®</ProductHeroTitle>
        <ProductHeroDescriptor>
          A minimally invasive solution for percutaneous tenotomy that is faster, easier, and reimbursable
        </ProductHeroDescriptor>
      </ProductHero>

      <Section id="overview">
        <TwoColumnLayout>
          <VisualPanel $gradient={GRADIENT}>
            <VisualPanelIcon><FaSyringe /></VisualPanelIcon>
            <VisualPanelLabel>TendoNova Ocelot® Device</VisualPanelLabel>
            <SpecChipRow>
              <SpecChip>22G Needle</SpecChip>
              <SpecChip>30-Second Setup</SpecChip>
              <SpecChip>Wireless</SpecChip>
              <SpecChip>Single-Use Disposable</SpecChip>
            </SpecChipRow>
          </VisualPanel>

          <TextColumn>
            <SectionTitle>The TendoNova Ocelot®</SectionTitle>
            <LeadParagraph>
              The TendoNova Ocelot® is an innovative, portable, handheld, battery-powered device that consists of a reusable drive unit, a charging station, and a sterile disposable unit that houses the cutting tool assembly. It enables percutaneous tenotomy, a minimally invasive procedure that treats chronic tendinopathy easily, quickly, and cost-effectively.
            </LeadParagraph>
            <LeadParagraph>
              TendoNova® is a wireless, mechanical cutting device that can be used to perform tenotomy procedures aimed at promoting proper healing and tendon remodeling. TendoNova® enables precise soft tissue fragmentation and debridement for percutaneous tenotomy.
            </LeadParagraph>
          </TextColumn>
        </TwoColumnLayout>
      </Section>

      <Section id="how-it-works">
        <SectionTitle>How the Procedure Works</SectionTitle>
        <AccentDivider $accent={ACCENT} />
        <ProcessStepper>
          <ProcessStep>
            <StepIcon $accent={ACCENT}><FaCut /></StepIcon>
            <StepTitle>Ultrasound-Guided Fragmentation</StepTitle>
            <StepDescription>
              The Ocelot functions by rapidly oscillating a stainless-steel franseen cutter to mechanically debride and fragment damaged soft tissue, guided by ultrasound imaging so clinicians can precisely target the affected area.
            </StepDescription>
          </ProcessStep>
          <ProcessStep>
            <StepIcon $accent={ACCENT}><FaHeartbeat /></StepIcon>
            <StepTitle>Healing Response</StepTitle>
            <StepDescription>
              This breaks up scar tissue in the tendon, increasing blood flow and releasing growth factors to promote healing and soft tissue remodeling.
            </StepDescription>
          </ProcessStep>
          <ProcessStep>
            <StepIcon $accent={ACCENT}><FaUserMd /></StepIcon>
            <StepTitle>In-Office Procedure</StepTitle>
            <StepDescription>
              The procedure is performed with local anesthesia in the office or ASC and is minimally invasive compared to open surgery.
            </StepDescription>
          </ProcessStep>
          <ProcessStep>
            <StepIcon $accent={ACCENT}><FaSyringe /></StepIcon>
            <StepTitle>Biologic Delivery Port</StepTitle>
            <StepDescription>
              The needle can be separated from the cannula, leaving the cannula in place to safely create a port for targeted delivery of biologic agents (e.g., platelet-rich plasma) post-procedure.
            </StepDescription>
          </ProcessStep>
        </ProcessStepper>
      </Section>

      <Section id="device">
        <SectionTitle>Device Components</SectionTitle>
        <FeatureGrid>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaSyringe /></IconWrapper>
            <FeatureTitle>Sterile, Single-Use Disposable</FeatureTitle>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaBatteryFull /></IconWrapper>
            <FeatureTitle>Rechargeable Driver Unit (RDU)</FeatureTitle>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaPlug /></IconWrapper>
            <FeatureTitle>Charging Cradle</FeatureTitle>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaCut /></IconWrapper>
            <FeatureTitle>22 Gauge Inner Oscillating Needle with Cutting Tip</FeatureTitle>
          </FeatureCard>
        </FeatureGrid>
      </Section>

      <Section id="features">
        <SectionTitle>Key Features</SectionTitle>
        <FeatureGrid>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaDollarSign /></IconWrapper>
            <FeatureTitle>Minimally Invasive, Lower Cost</FeatureTitle>
            <FeatureDescription>Enables minimally invasive, ultrasound guided procedures at a lower cost</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaThumbsUp /></IconWrapper>
            <FeatureTitle>Improved Ease of Use</FeatureTitle>
            <FeatureDescription>Improved ease of use compared to other devices</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaClock /></IconWrapper>
            <FeatureTitle>No Saline, 30-Second Set-Up</FeatureTitle>
            <FeatureDescription>No saline or priming with 30 second set-up</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaBan /></IconWrapper>
            <FeatureTitle>No Stab Incision</FeatureTitle>
            <FeatureDescription>No stab incision</FeatureDescription>
          </FeatureCard>
        </FeatureGrid>

        <CenteredTextColumn style={{ marginTop: "3rem" }}>
          <LeadParagraph>
            Percutaneous tenotomy is a cost-effective, time-saving, and lower-risk treatment option.
          </LeadParagraph>
          <BulletList style={{ textAlign: "left" }}>
            <li>Disrupts the damaged tendon and restarts the healing process</li>
            <li>Typically results in a reduction in symptoms for patients with chronic tendon pain</li>
            <li>Less-invasive than open surgery and can be performed in minutes</li>
          </BulletList>
        </CenteredTextColumn>
      </Section>

      <Section id="conditions">
        <SectionTitle>Conditions Treated</SectionTitle>
        <BadgeRow>
          <Badge $accent={ACCENT}>Rotator cuff tendinopathy / impingement (swimmer's shoulder)</Badge>
          <Badge $accent={ACCENT}>Medial epicondylitis (golfer's elbow)</Badge>
          <Badge $accent={ACCENT}>Lateral epicondylitis (tennis elbow)</Badge>
          <Badge $accent={ACCENT}>Gluteal tendinopathy</Badge>
          <Badge $accent={ACCENT}>Hamstring tendinopathy</Badge>
          <Badge $accent={ACCENT}>Patellar tendinopathy (jumper's knee)</Badge>
          <Badge $accent={ACCENT}>Quadriceps tendinopathy</Badge>
          <Badge $accent={ACCENT}>Achilles tendinopathy</Badge>
          <Badge $accent={ACCENT}>Plantar fasciitis</Badge>
          <Badge $accent={ACCENT}>Distal biceps tendinopathy</Badge>
        </BadgeRow>
      </Section>

      <Section id="for-use-in">
        <SectionTitle>For Use In</SectionTitle>
        <BadgeRow>
          <Badge $accent={ACCENT}>Sports medicine</Badge>
          <Badge $accent={ACCENT}>Pain management</Badge>
          <Badge $accent={ACCENT}>Orthopedics</Badge>
          <Badge $accent={ACCENT}>Podiatry</Badge>
          <Badge $accent={ACCENT}>PM&amp;R</Badge>
        </BadgeRow>
      </Section>

      <Section id="why-tendonova">
        <SectionTitle>Why TendoNova</SectionTitle>
        <LeadParagraph style={{ textAlign: "center" }}>According to TendoNova:</LeadParagraph>

        <StatGrid style={{ gridTemplateColumns: "1fr", maxWidth: "420px", margin: "0 auto 2rem auto" }}>
          <StatCard>
            <StatNumber style={{ color: ACCENT }}>87%</StatNumber>
            <StatLabel>of patients treated for refractory tendinopathy with TendoNova reported positive results.</StatLabel>
          </StatCard>
        </StatGrid>

        <FeatureGrid style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaDollarSign /></IconWrapper>
            <FeatureTitle>Decreased Cost of Care</FeatureTitle>
            <FeatureDescription>Tenotomy can be performed in the outpatient setting, avoiding the expense of an operating room or ambulatory surgical suite.</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaSmile /></IconWrapper>
            <FeatureTitle>Improved Patient Experience</FeatureTitle>
            <FeatureDescription>In-office procedure with local anesthesia, fewer complications, and greater treatment precision than existing tools.</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaUserMd /></IconWrapper>
            <FeatureTitle>Improved Physician Experience</FeatureTitle>
            <FeatureDescription>Handheld and cordless, minimizing equipment and cords for a safer workspace.</FeatureDescription>
          </FeatureCard>
        </FeatureGrid>
      </Section>

      <Section id="trusted-by">
        <SectionTitle>Trusted by Leading Physicians</SectionTitle>
        <LeadParagraph style={{ textAlign: "center" }}>
          Robert Santrock, MD (Dovetail Orthopedics) · Kenneth Mautner, MD (Head Team Physician, Atlanta Hawks; Emory University School of Medicine) · Gregory Kolovich, MD (Optim Orthopedics; President, Georgia Society for Surgery of the Hand)
        </LeadParagraph>

        <FeatureGrid style={{ gridTemplateColumns: "1fr", maxWidth: "700px", margin: "2rem auto 0 auto" }}>
          <FeatureCard>
            <QuoteText>
              After 15 years of treating elite and recreational athletes for tendinopathy, I have been frustrated by the tools we have had to help heal these injuries. TendoNova® will be a game changer in getting our athletes back to the healthiest level possible.
            </QuoteText>
            <FeatureTitle>Kenneth Mautner, MD</FeatureTitle>
            <FeatureDescription>
              Head Team Physician of Atlanta Hawks and Assoc. Professor Physiatry at Emory University School of Medicine
            </FeatureDescription>
          </FeatureCard>
        </FeatureGrid>
      </Section>

      <CTAWrapper>
        <h2 style={{ marginBottom: "1rem" }}>Ready to Bring TendoNova to Your Practice?</h2>
        <p style={{ maxWidth: "600px", margin: "0 auto 1.5rem auto" }}>
          Reach out for details on the Ocelot® device, pricing, or getting started.
        </p>

        <ContactDetail style={{ justifyContent: "center" }}>
          <FaPhoneAlt color={ACCENT} size="20" />
          <a href="tel:8772030161">877.203.0161</a>
        </ContactDetail>
        <ContactDetail style={{ justifyContent: "center" }}>
          <FaEnvelope color={ACCENT} size="20" />
          <a href="mailto:sales@tendonova.com">sales@tendonova.com</a>
        </ContactDetail>

        <ManufacturerLinkRow>
          <HeroButton
            href="https://tendonova.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: ACCENT }}
          >
            Visit tendonova.com
          </HeroButton>
        </ManufacturerLinkRow>

        <FeatureDescription style={{ marginTop: "2rem" }}>
          © 2025 TendoNova. All rights reserved.
        </FeatureDescription>
      </CTAWrapper>

      <Contact product="TendoNova" />
    </main>
    <Footer />
  </>
);

export default TendoNovaPage;
