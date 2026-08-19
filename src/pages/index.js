// File: src/pages/index.js

import React from "react";
import styled from "styled-components";
import GlobalStyles from "../components/Layout/GlobalStyles";
import Nav from "../components/Nav";
import Contact from "../components/sections/Contact";
import Footer from "../components/Footer";
import {
  Section,
  SectionTitle,
  AboutIntroWrapper,
  MissionStatement,
  HeroButton,
  HeroVideo,
  BackgroundVideo,
  HeroContent
} from "../components/styles";

// Styled-components for the product section
const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ProductCard = styled.div`
  background: #FFFFFF;
  border-radius: 12px;
  border: 1px solid #EAECEF;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  }
`;

const ProductTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #334D6E;
  margin-bottom: 2rem;
`;

const HomePage = () => (
  <>
  <meta name="google-site-verification" content="YNZP5SDN7XocdqXz-pA1QKWTgdSgxo_Z8CGbZFCEx_E" />
    <GlobalStyles />
    <Nav active="home" />
    <main>
      {/* Hero Video Section */}
      <HeroVideo id="intro">
        <BackgroundVideo
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-fallback.jpg"
          src="../videos/mainhero.mp4"
          type="video/mp4"
        />
        <HeroContent>
          <AboutIntroWrapper>
            <SectionTitle style={{ color: '#fff' }}>
              Upright Medical Solutions
            </SectionTitle>
            <MissionStatement style={{ color: '#fff' }}>
              Empowering providers with innovative, value-based solutions from fall prevention to cardiovascular wellness that improve patient outcomes and preserve independence.
            </MissionStatement>
            <HeroButton
              href="#products"
              style={{ color: '#fff', borderColor: '#fff' }}
            >
              Explore Our Solutions
            </HeroButton>
          </AboutIntroWrapper>
        </HeroContent>
      </HeroVideo>

      {/* Products Section */}
      <Section id="products">
        <SectionTitle>Our Solutions</SectionTitle>
        <ProductGrid>
          <ProductCard>
            <div>
              <ProductTitle>Fall Risk Assessment</ProductTitle>
              <ProductDescription>
                An evidence-based platform that empowers clinicians to mitigate fall risks, identify underlying factors, and improve patient outcomes.
              </ProductDescription>
            </div>
            <HeroButton href="/fall-risk">Learn More</HeroButton>
          </ProductCard>

          <ProductCard>
            <div>
              <ProductTitle>TendoNova Ocelot®</ProductTitle>
              <ProductDescription>
                A minimally invasive solution for percutaneous tenotomy that is faster, easier, and reimbursable.
              </ProductDescription>
            </div>
            <HeroButton href="/tendonova">Learn More</HeroButton>
          </ProductCard>

          <ProductCard>
            <div>
              <ProductTitle>Echolight</ProductTitle>
              <ProductDescription>
                Radiofrequency Echographic Multi Spectrometry (REMS) for the evaluation of bone quantity and quality.
              </ProductDescription>
            </div>
            <HeroButton href="/echolight">Learn More</HeroButton>
          </ProductCard>

          <ProductCard>
            <div>
              <ProductTitle>HemaClear®</ProductTitle>
              <ProductDescription>
                The all-in-one, sterile, exsanguination tourniquet for a bloodless surgical field in limb surgery.
              </ProductDescription>
            </div>
            <HeroButton href="/hemaclear">Learn More</HeroButton>
          </ProductCard>

          <ProductCard>
            <div>
              <ProductTitle>InkWell Health</ProductTitle>
              <ProductDescription>
                Proprietary temporary tattoo technology to personalize recovery after orthopedic surgery.
              </ProductDescription>
            </div>
            <HeroButton href="/inkwell-health">Learn More</HeroButton>
          </ProductCard>

          <ProductCard>
            <div>
              <ProductTitle>Q Care Management</ProductTitle>
              <ProductDescription>
                A clinically based provider of Medicare's Chronic Care Management, Behavioral Health Integration, Advanced Primary Care Management, and Health Risk Assessment/Annual Wellness Visit programs.
              </ProductDescription>
            </div>
            <HeroButton href="/q-care-management">Learn More</HeroButton>
          </ProductCard>
        </ProductGrid>
      </Section>

      {/* Contact Section */}
      <Contact />
    </main>
    <Footer />
  </>
);

export default HomePage;