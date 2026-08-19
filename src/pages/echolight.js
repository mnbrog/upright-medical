// File: src/pages/echolight.js

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
  CTAWrapper
} from "../components/styles";
import {
  FaBone,
  FaWaveSquare,
  FaMicroscope,
  FaChartBar,
  FaWeight,
  FaBroom,
  FaBullseye,
  FaHeartbeat,
  FaClipboardCheck
} from "react-icons/fa";

const ACCENT = "#0AA3A0";
const GRADIENT = "linear-gradient(135deg, #0A5F5D 0%, #0AA3A0 100%)";

const EcholightPage = () => (
  <>
    <GlobalStyles />
    <Nav active="echolight" />
    <main>
      <ProductHero $gradient={GRADIENT}>
        <CategoryTag>Bone Health Assessment / Diagnostic Imaging</CategoryTag>
        <ProductEyebrow>Echolight</ProductEyebrow>
        <ProductHeroTitle>Echolight REMS Technology</ProductHeroTitle>
        <ProductHeroDescriptor>
          Radiofrequency Echographic Multi Spectrometry (REMS) for the evaluation of bone quantity and quality
        </ProductHeroDescriptor>
      </ProductHero>

      <Section id="scan">
        <TwoColumnLayout>
          <VisualPanel $gradient={GRADIENT}>
            <VisualPanelIcon><FaBone /></VisualPanelIcon>
            <VisualPanelLabel>REMS Ultrasound Scan</VisualPanelLabel>
            <SpecChipRow>
              <SpecChip>Radiation-Free</SpecChip>
              <SpecChip>Portable</SpecChip>
              <SpecChip>Operator Independent</SpecChip>
            </SpecChipRow>
          </VisualPanel>

          <TextColumn>
            <SectionTitle>REMS Technology</SectionTitle>
            <LeadParagraph>
              REMS allows bone health evaluation by means of a rapid ultrasound scan on reference axial sites:
            </LeadParagraph>
            <StatGrid style={{ gridTemplateColumns: "1fr 1fr" }}>
              <StatCard>
                <StatNumber style={{ color: ACCENT }}>80s</StatNumber>
                <StatLabel>Lumbar vertebrae scan</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber style={{ color: ACCENT }}>40s</StatNumber>
                <StatLabel>Proximal femur scan</StatLabel>
              </StatCard>
            </StatGrid>
          </TextColumn>
        </TwoColumnLayout>
      </Section>

      <Section id="process">
        <SectionTitle>Echolight Process Flow</SectionTitle>
        <AccentDivider $accent={ACCENT} />
        <ProcessStepper>
          <ProcessStep>
            <StepIcon $accent={ACCENT}><FaWaveSquare /></StepIcon>
            <StepTitle>US Acquisition</StepTitle>
            <StepDescription>Software-guided ultrasonographic scan</StepDescription>
          </ProcessStep>
          <ProcessStep>
            <StepIcon $accent={ACCENT}><FaBullseye /></StepIcon>
            <StepTitle>B-Mode Image</StepTitle>
            <StepDescription>Automatic identification of bone interface and Region of Interest</StepDescription>
          </ProcessStep>
          <ProcessStep>
            <StepIcon $accent={ACCENT}><FaChartBar /></StepIcon>
            <StepTitle>RF Signal ROI</StepTitle>
            <StepDescription>Analysis of raw frequency data</StepDescription>
          </ProcessStep>
        </ProcessStepper>
      </Section>

      <Section id="parameters">
        <SectionTitle>Data Analysis</SectionTitle>
        <FeatureGrid style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaChartBar /></IconWrapper>
            <FeatureTitle>Quantitative Parameters</FeatureTitle>
            <BadgeRow style={{ margin: "0.75rem 0 0 0" }}>
              <Badge $accent={ACCENT}>BMD</Badge>
              <Badge $accent={ACCENT}>T-score</Badge>
              <Badge $accent={ACCENT}>Z-score</Badge>
            </BadgeRow>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaMicroscope /></IconWrapper>
            <FeatureTitle>Qualitative Parameters</FeatureTitle>
            <BadgeRow style={{ margin: "0.75rem 0 0 0" }}>
              <Badge $accent={ACCENT}>Fragility Score</Badge>
            </BadgeRow>
          </FeatureCard>
        </FeatureGrid>
      </Section>

      <Section id="artifact-exclusion">
        <SectionTitle>Key Benefit: Automatic Artifact Exclusion</SectionTitle>
        <FeatureGrid style={{ gridTemplateColumns: "1fr", maxWidth: "700px", margin: "0 auto" }}>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaBroom /></IconWrapper>
            <FeatureDescription>
              REMS processes the raw data of 256 scan lines, automatically eliminating signals that belong to calcifications, osteophytes, hardware, and other artifacts.
            </FeatureDescription>
          </FeatureCard>
        </FeatureGrid>
      </Section>

      <Section id="fragility-score">
        <SectionTitle>Fragility Score and Fracture Risk Prediction</SectionTitle>
        <LeadParagraph style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          Fragility Score is a REMS-based parameter providing a direct estimation of skeletal fragility.
        </LeadParagraph>
        <BadgeRow>
          <Badge $accent={ACCENT}>Dimensionless parameter ranging from 0 to 100 depending on the degree of frailty</Badge>
          <Badge $accent={ACCENT}>Independent from BMD</Badge>
        </BadgeRow>
        <LeadParagraph style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          Quantitative Data (T-Score) and Qualitative Data (Fragility Score) are combined to determine Fracture Risk.
        </LeadParagraph>
      </Section>

      <Section id="fracture-risk">
        <SectionTitle>Fracture Risk Prediction</SectionTitle>
        <TableWrapper>
          <DataTable>
            <caption>Total Fracture Risk at 5 years (%)</caption>
            <thead>
              <tr>
                <th>Risk class</th>
                <th>Risk of major osteoporotic fracture per 100 subjects at 5 years</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>R1</td><td>≤ 0.5</td></tr>
              <tr><td>R2</td><td>[0.5-1.0]</td></tr>
              <tr><td>R3</td><td>[1.0-2.0]</td></tr>
              <tr><td>R4</td><td>[2.0-3.5]</td></tr>
              <tr><td>R5</td><td>[3.5-6.0]</td></tr>
              <tr><td>R6</td><td>[6.0-10.0]</td></tr>
              <tr><td>R7</td><td>&gt; 10.0</td></tr>
            </tbody>
          </DataTable>
        </TableWrapper>
        <FootnoteText>
          Each risk class is associated with the probability to have an incident fragility fracture in five years (conventional tools provide the probability in ten years).
        </FootnoteText>
      </Section>

      <Section id="body-composition">
        <SectionTitle>Advanced Body Composition Analysis</SectionTitle>
        <LeadParagraph style={{ textAlign: "center" }}>
          Automatically generated during the 80-second scan of the lumbar spine.
        </LeadParagraph>
        <FeatureGrid style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaWeight /></IconWrapper>
            <FeatureTitle>Body Composition</FeatureTitle>
            <FeatureDescription>Quantitative Fat Mass, Fat Free Mass, Body Water, and Proteins/Minerals</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaClipboardCheck /></IconWrapper>
            <FeatureTitle>Fat &amp; Visceral Fat</FeatureTitle>
            <FeatureDescription>Body Fat Percentage and Visceral Fat Level</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <IconWrapper $accent={ACCENT}><FaHeartbeat /></IconWrapper>
            <FeatureTitle>Metabolic Rate</FeatureTitle>
            <FeatureDescription>Basal Metabolic Rate and Activity-based Metabolic Rates</FeatureDescription>
          </FeatureCard>
        </FeatureGrid>
      </Section>

      <Section id="advantage">
        <SectionTitle>The Echolight Advantage</SectionTitle>
        <BadgeRow>
          <Badge $accent={ACCENT}>Operator independent</Badge>
          <Badge $accent={ACCENT}>Portable</Badge>
          <Badge $accent={ACCENT}>Radiation-free &amp; non-invasive</Badge>
          <Badge $accent={ACCENT}>Automatic processing and analysis of the acquired data</Badge>
          <Badge $accent={ACCENT}>Exclusion of artifacts</Badge>
          <Badge $accent={ACCENT}>Precision &amp; accuracy</Badge>
          <Badge $accent={ACCENT}>Early diagnosis and prevention</Badge>
          <Badge $accent={ACCENT}>Bone health status short-term monitoring</Badge>
          <Badge $accent={ACCENT}>Bone quality assessment</Badge>
        </BadgeRow>
      </Section>

      <CTAWrapper>
        <h2 style={{ marginBottom: "1rem" }}>Ready to Bring Echolight to Your Practice?</h2>
        <p style={{ maxWidth: "600px", margin: "0 auto" }}>
          Contact us to learn more about REMS bone health assessment.
        </p>
      </CTAWrapper>

      <Contact product="Echolight" />
    </main>
    <Footer />
  </>
);

export default EcholightPage;
