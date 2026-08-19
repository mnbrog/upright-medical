// File: src/pages/hemaclear.js

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
  TableWrapper,
  DataTable,
  FootnoteText,
  CTAWrapper,
  ManufacturerLinkRow,
  HeroButton,
  ContactDetail
} from "../components/styles";
import {
  FaTint,
  FaShieldAlt,
  FaEye,
  FaBoxOpen,
  FaHeartbeat,
  FaClock,
  FaCompressAlt,
  FaLungs,
  FaHandPointer,
  FaCut,
  FaRulerCombined,
  FaExchangeAlt,
  FaExclamationTriangle,
  FaPhoneAlt
} from "react-icons/fa";

const ACCENT = "#1B4F8C";
const GRADIENT = "linear-gradient(135deg, #0F2E52 0%, #1B4F8C 100%)";
const WARNING = "#D62839";

const HemaClearPage = () => (
  <>
    <GlobalStyles />
    <Nav active="hemaclear" />
    <main>
      <ProductHero $gradient={GRADIENT}>
        <CategoryTag>Surgical / Limb Surgery</CategoryTag>
        <ProductEyebrow>HemaClear®</ProductEyebrow>
        <ProductHeroTitle>Sterile &amp; Bloodless Surgical Field</ProductHeroTitle>
        <ProductHeroDescriptor>
          The All-In-One, Sterile, Exsanguination Tourniquet. Improving Patient Safety. Saving Time and Clutter in the Operating Theater.
        </ProductHeroDescriptor>
      </ProductHero>

      <Section id="value">
        <TwoColumnLayout>
          <VisualPanel $gradient={GRADIENT}>
            <VisualPanelIcon><FaTint /></VisualPanelIcon>
            <VisualPanelLabel>HemaClear® Tourniquet</VisualPanelLabel>
            <SpecChipRow>
              <SpecChip>Sterile</SpecChip>
              <SpecChip>Single-Use</SpecChip>
              <SpecChip>10 Size Models</SpecChip>
              <SpecChip>Color-Coded</SpecChip>
            </SpecChipRow>
          </VisualPanel>

          <TextColumn>
            <SectionTitle>Value</SectionTitle>
            <LeadParagraph>
              HemaClear overcomes the adverse effects and risks of pneumatic tourniquet: no skin damage or blisters, no nerve damage, less intra-operative and post-op pain, less DVT/PE, less Surgical Site Infection (SSI).
            </LeadParagraph>
          </TextColumn>
        </TwoColumnLayout>

        <FeatureGrid style={{ marginTop: "2.5rem" }}>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaEye /></IconWrapper>
            <FeatureTitle>Excellent Exposure</FeatureTitle>
            <FeatureDescription>Excellent exposure and very dry field. Broad space to work. Longer hamstring autograft for ACL reconstruction.</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaHandPointer /></IconWrapper>
            <FeatureTitle>Predictable</FeatureTitle>
            <FeatureDescription>Never slides down towards the incision; easy and quick to apply, never pressure loss and re-do drapes.</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaBoxOpen /></IconWrapper>
            <FeatureTitle>Streamlined Logistics</FeatureTitle>
            <FeatureDescription>No clutter and shorter preparation time, less shelf space for models, replaces cuff, Esmarch, stockinet, padding material, pump, tubing extensions. Competitive cost.</FeatureDescription>
          </FeatureCard>
        </FeatureGrid>
      </Section>

      <Section id="dry-field">
        <SectionTitle>Dry Surgical Field</SectionTitle>
        <StatGrid style={{ gridTemplateColumns: "1fr", maxWidth: "420px", margin: "0 auto" }}>
          <StatCard>
            <StatNumber style={{ color: ACCENT }}>95%</StatNumber>
            <StatLabel>HemaClear® Exsanguinates 95% of the blood to provide a dry field and optimal visibility.</StatLabel>
          </StatCard>
        </StatGrid>
      </Section>

      <Section id="sterile">
        <SectionTitle>Sterile; Less Surgical Site Infection (SSI)</SectionTitle>
        <LeadParagraph style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          HemaClear® is always sterile. Its ring is cut at the end of surgery and can never be re-used. HemaClear does not require handling, cleaning or soaking at the end of surgery and does not expose the nurses or technicians to contamination risk.
        </LeadParagraph>
      </Section>

      <Section id="advantages">
        <SectionTitle>Additional Patient Advantages</SectionTitle>
        <LeadParagraph style={{ textAlign: "center" }}>According to the manufacturer:</LeadParagraph>
        <FeatureGrid>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaTint /></IconWrapper>
            <FeatureTitle>Reduced Blood Loss</FeatureTitle>
            <FeatureDescription>Virtually no intra-operative blood loss, reduced need for transfusion</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaHeartbeat /></IconWrapper>
            <FeatureTitle>Less DVT/PE</FeatureTitle>
            <FeatureDescription>Less post-op Deep Vein Thrombosis (DVT) and Pulmonary Embolism (PE)</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaClock /></IconWrapper>
            <FeatureTitle>Shorter Tourniquet Time</FeatureTitle>
            <FeatureDescription>Shorter Tourniquet Time</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaShieldAlt /></IconWrapper>
            <FeatureTitle>Significantly Less SSI</FeatureTitle>
            <FeatureDescription>Significantly less SSI</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaCompressAlt /></IconWrapper>
            <FeatureTitle>Less Tissue Compression</FeatureTitle>
            <FeatureDescription>Less tissue under compression (narrower band)</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaLungs /></IconWrapper>
            <FeatureTitle>Less Tissue Ischemia</FeatureTitle>
            <FeatureDescription>Less tissue under ischemia (can be placed distally)</FeatureDescription>
          </FeatureCard>
        </FeatureGrid>
      </Section>

      <Section id="application">
        <SectionTitle>Application</SectionTitle>
        <AccentDivider $accent={ACCENT} />
        <ProcessStepper>
          <ProcessStep>
            <StepIcon $accent={ACCENT}><FaRulerCombined /></StepIcon>
            <StepTitle>Select</StepTitle>
            <StepDescription>HemaClear Model is selected by using the color-coded ruler supplied with each unit.</StepDescription>
          </ProcessStep>
          <ProcessStep>
            <StepIcon $accent={ACCENT}><FaHandPointer /></StepIcon>
            <StepTitle>Place</StepTitle>
            <StepDescription>Position on fingers/toes and pull handles to roll up the limb.</StepDescription>
          </ProcessStep>
          <ProcessStep>
            <StepIcon $accent={ACCENT}><FaCut /></StepIcon>
            <StepTitle>Remove</StepTitle>
            <StepDescription>HemaClear® ring is cut by scalpel after inserting the Protective Card to protect the skin. Stockinet is cut by scissors.</StepDescription>
          </ProcessStep>
          <ProcessStep>
            <StepIcon $accent={ACCENT}><FaRulerCombined /></StepIcon>
            <StepTitle>Determine Pressure</StepTitle>
            <StepDescription>Use the ruler to measure circumference and distance from fingers/toes. Use look-up table for pressure.</StepDescription>
          </ProcessStep>
          <ProcessStep>
            <StepIcon $accent={ACCENT}><FaExchangeAlt /></StepIcon>
            <StepTitle>Release Temporarily</StepTitle>
            <StepDescription>Insert and pull two Army-Navy retractors.</StepDescription>
          </ProcessStep>
        </ProcessStepper>
      </Section>

      <Section id="models">
        <SectionTitle>HemaClear Models, Uses and Ordering Information</SectionTitle>
        <TableWrapper>
          <DataTable>
            <thead>
              <tr>
                <th>Model</th>
                <th>Catalog #</th>
                <th>Units/Case</th>
                <th>Circumference of Limb cm</th>
                <th>Max. BP mm Hg</th>
                <th>Common Uses/ Placement</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>SMALL Pink</td><td>PRH-028-PI-01A</td><td>10</td><td>14-28</td><td>130</td><td>Pediatric Ortho</td></tr>
              <tr><td>MEDIUM Yellow</td><td>PRH-040-YE-01A</td><td>10</td><td>24-40</td><td>190</td><td>Adult Upper Arm</td></tr>
              <tr><td>MEDIUM Red</td><td>PRH-040-RE-01A</td><td>10</td><td>24-40</td><td>160</td><td>Adult Upper Arm</td></tr>
              <tr><td>MEDIUM Green</td><td>PRH-040-GR-01A</td><td>10</td><td>24-40</td><td>130</td><td>Pediatric Ortho</td></tr>
              <tr><td>LARGE Brown</td><td>PRH-060-BR-01A</td><td>10</td><td>30-55</td><td>190</td><td>Adult upper thigh</td></tr>
              <tr><td>LARGE Orange</td><td>PRH-060-OR-01A</td><td>10</td><td>30-55</td><td>160</td><td>Adult Ankle, Arm</td></tr>
              <tr><td>LARGE Blue</td><td>PRH-060-BL-01A</td><td>10</td><td>30-55</td><td>130</td><td>Pediatric thigh</td></tr>
              <tr><td>XLARGE B &amp; W</td><td>PRH-090-BW-01A</td><td>10</td><td>50-85</td><td>160</td><td>TKA upper thigh</td></tr>
              <tr><td>Model A - Ankle</td><td>PRH-032-MA-01A</td><td>12</td><td>22-32</td><td>160</td><td>Foot Surgery</td></tr>
              <tr><td>Model F - Forearm</td><td>PRH-035-FA-01A</td><td>25</td><td>14-35</td><td>160</td><td>Hand Surgery</td></tr>
            </tbody>
          </DataTable>
        </TableWrapper>
        <FootnoteText>
          Max BP - Maximal Blood Pressure (Systolic); B &amp; W - Black and White; Ankle - for Ankle placement; Forearm - for Forearm placement. HemaClear is supplied in cases.
          <br />
          Size selection is by color-coded ruler supplied with each HemaClear® Unit.
        </FootnoteText>
      </Section>

      <Section id="placement">
        <SectionTitle>Placement Diagram</SectionTitle>

        <TwoColumnLayout>
          <ImageWrapper style={{ maxWidth: "320px", margin: "0 auto" }}>
            <img
              src="/images/hemaclear-placement-diagram.png"
              alt="Body diagram showing correct HemaClear placement sites (wrist, deltoid/biceps, ankle, and groin) marked with checkmarks, and incorrect sites (elbow and knee) marked with red X's"
            />
          </ImageWrapper>

          <TextColumn>
            <LeadParagraph>
              Place where there is minimal muscle to avoid tourniquet pain:
            </LeadParagraph>
            <BadgeRow>
              <Badge $accent={ACCENT}>10 cm above wrist</Badge>
              <Badge $accent={ACCENT}>Between deltoid and biceps</Badge>
              <Badge $accent={ACCENT}>10 cm above ankle</Badge>
              <Badge $accent={ACCENT}>As high as possible on groin</Badge>
            </BadgeRow>
          </TextColumn>
        </TwoColumnLayout>

        <CTAWrapper style={{ background: `${WARNING}11`, boxShadow: "none", border: `1px solid ${WARNING}55`, marginTop: "2rem" }}>
          <FeatureTitle style={{ color: WARNING, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
            <FaExclamationTriangle /> Never place directly on elbow or knee.
          </FeatureTitle>
        </CTAWrapper>
      </Section>

      <Section id="contact-hemaclear">
        <SectionTitle>Learn More</SectionTitle>
        <LeadParagraph style={{ textAlign: "center" }}>
          HemaClear® is a product of Oneg HaKarmel Ltd. Haifa, Israel
        </LeadParagraph>
        <LeadParagraph style={{ textAlign: "center" }}>
          US Representative: OHK Medical Devices Inc., 9340 Unit B 7th Street, Rancho Cucamonga, California, USA
        </LeadParagraph>
        <ContactDetail style={{ justifyContent: "center" }}>
          <FaPhoneAlt color={ACCENT} size="20" />
          <a href="tel:+18665031470">+1.866.503.1470</a>
        </ContactDetail>
        <ManufacturerLinkRow>
          <HeroButton
            href="https://www.hemaclear.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: ACCENT }}
          >
            Visit hemaclear.com
          </HeroButton>
        </ManufacturerLinkRow>
        <FootnoteText style={{ textAlign: "center", marginTop: "2rem" }}>
          Copyright © 2021 Oneg HaKarmel, Ltd.
        </FootnoteText>
      </Section>

      <Contact product="HemaClear" />
    </main>
    <Footer />
  </>
);

export default HemaClearPage;
