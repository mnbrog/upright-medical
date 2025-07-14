import React from "react";
import GlobalStyles from "../components/Layout/GlobalStyles";
import Nav from "../components/Nav";
import HeroSection from "../components/sections/Hero";
import Contact from "../components/sections/Contact";
import Footer from "../components/Footer";
import {
  Section,
  SectionTitle,
  FeatureGrid,
  FeatureCard,
  FeatureTitle,
  FeatureDescription,
  HeroButton,
  AboutIntroWrapper,
  MissionStatement
} from "../components/styles";

const HomePage = () => (
  <>
    <GlobalStyles />
    <Nav active="home" />
    <HeroSection />

    <Section id="products">
      <SectionTitle>Our Solutions</SectionTitle>
      <FeatureGrid style={{gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", maxWidth: "800px", margin: "0 auto"}}>
        <FeatureCard>
          <FeatureTitle>Fall Risk Assessment</FeatureTitle>
          <FeatureDescription>
            Evidence-based fall prevention program that empowers clinicians with data-driven care plans.
          </FeatureDescription>
          <HeroButton href="/fall-risk">Learn More</HeroButton>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Pulse4Pulse</FeatureTitle>
          <FeatureDescription>
            Turnkey cardiovascular wellness service providing in-office testing and billing support.
          </FeatureDescription>
          <HeroButton href="/Pulse4Pulse">Learn More</HeroButton>
        </FeatureCard>
      </FeatureGrid>
    </Section>

    <Section id="about">
      <AboutIntroWrapper>
        <SectionTitle>About Upright Medical</SectionTitle>
        <MissionStatement>
          Our mission is to empower providers with innovative, value-based solutions – from fall prevention to cardiovascular wellness – that improve patient outcomes and preserve independence.
        </MissionStatement>
      </AboutIntroWrapper>
    </Section>

    <Contact />
    <Footer />
  </>
);

export default HomePage;
