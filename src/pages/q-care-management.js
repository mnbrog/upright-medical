// File: src/pages/q-care-management.js

import React from "react";
import GlobalStyles from "../components/Layout/GlobalStyles";
import Nav from "../components/Nav";
import Contact from "../components/sections/Contact";
import Footer from "../components/Footer";
import {
  Section,
  SectionTitle,
  LeadParagraph,
  ProductHero,
  ProductEyebrow,
  ProductHeroTitle,
  ProductHeroDescriptor,
  CategoryTag,
  TwoColumnLayout,
  TextColumn,
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
  CTAWrapper,
  ManufacturerLinkRow,
  HeroButton
} from "../components/styles";
import {
  FaUserNurse,
  FaFileMedicalAlt,
  FaClipboardList,
  FaFileContract,
  FaHandHoldingUsd,
  FaHeartbeat
} from "react-icons/fa";

const ACCENT = "#C81D25";
const GRADIENT = "linear-gradient(135deg, #1B4F8C 0%, #C81D25 100%)";

const QCareManagementPage = () => (
  <>
    <GlobalStyles />
    <Nav active="q-care-management" />
    <main>
      <ProductHero $gradient={GRADIENT}>
        <CategoryTag>Care Management Services</CategoryTag>
        <ProductEyebrow>Q Care Management</ProductEyebrow>
        <ProductHeroTitle>Quality Value Based Care</ProductHeroTitle>
        <ProductHeroDescriptor>
          A Clinically based provider of Medicare's Chronic Care Management, Behavioral Health Integration, Advanced Primary Care Management, and Health Risk Assessment/Annual Wellness Visit programs.
        </ProductHeroDescriptor>
      </ProductHero>

      <Section id="overview">
        <TwoColumnLayout>
          <VisualPanel $gradient={GRADIENT}>
            <VisualPanelIcon><FaHeartbeat /></VisualPanelIcon>
            <VisualPanelLabel>Q Care Management</VisualPanelLabel>
            <SpecChipRow>
              <SpecChip>CCM</SpecChip>
              <SpecChip>BHI</SpecChip>
              <SpecChip>APCM</SpecChip>
              <SpecChip>AWV</SpecChip>
            </SpecChipRow>
          </VisualPanel>

          <TextColumn>
            <SectionTitle>Our Turnkey Solutions Include:</SectionTitle>
            <LeadParagraph>
              Q stands for Quality. Chronic Care Management is most successful when you maximize Patient Engagement and Clinical Communication.
            </LeadParagraph>
          </TextColumn>
        </TwoColumnLayout>

        <FeatureGrid style={{ marginTop: "2.5rem" }}>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaUserNurse /></IconWrapper>
            <FeatureTitle>Your Practice, Represented</FeatureTitle>
            <FeatureDescription>Our Nurses act as an extension of your practice. The caller ID, voicemail, and greeting when speaking with patients will reflect your practice name.</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaFileMedicalAlt /></IconWrapper>
            <FeatureTitle>Direct EMR Charting</FeatureTitle>
            <FeatureDescription>We remote and chart directly into your EMR. See the chart notes in real time. No additional passwords for your staff to read a CCM note about Your Patients.</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaClipboardList /></IconWrapper>
            <FeatureTitle>Closing Gaps in Care</FeatureTitle>
            <FeatureDescription>We will help you collect information from your patients that will close gaps in care including PCMH, HEDIS Measures, and MIPS.</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaFileContract /></IconWrapper>
            <FeatureTitle>CMS Compliant Templates</FeatureTitle>
            <FeatureDescription>We provide templates for CMS compliant comprehensive care plans and Chronic Care Management charting.</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaHandHoldingUsd /></IconWrapper>
            <FeatureTitle>No Hidden Fees</FeatureTitle>
            <FeatureDescription>No startup/tech fees, cancel contract with no penalties, no annual contract increases.</FeatureDescription>
          </FeatureCard>
        </FeatureGrid>
      </Section>

      <CTAWrapper>
        <h2 style={{ marginBottom: "1rem" }}>Ready to Bring Q Care Management to Your Practice?</h2>
        <p style={{ maxWidth: "600px", margin: "0 auto 1.5rem auto" }}>
          Q stands for Quality. Chronic Care Management is most successful when you maximize Patient Engagement and Clinical Communication.
        </p>
        <ManufacturerLinkRow>
          <HeroButton
            href="https://qcaremanagement.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: ACCENT }}
          >
            Visit Qcaremanagement.com
          </HeroButton>
        </ManufacturerLinkRow>
      </CTAWrapper>

      <Contact product="Q Care Management" />
    </main>
    <Footer />
  </>
);

export default QCareManagementPage;
