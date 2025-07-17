import React from "react";
import styled from "styled-components";
import GlobalStyles from "../components/Layout/GlobalStyles";
import Nav from "../components/Nav";
import Contact from "../components/sections/Contact";
import {
  Section,
  SectionTitle,
  AboutIntroWrapper,
  MissionStatement,
  HeroButton,
  HeroVideo,
  BackgroundVideo,
  HeroContent,
  device
} from "../components/styles";

// Styled-components for the product section
const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  /* Two columns on tablet, single on mobile */
  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
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

// A simple styled footer for this page
const Footer = styled.footer`
  text-align: center;
  padding: 2rem;
  margin-top: 4rem;
  background: #EAECEF;
  color: #334D6E;
`;

const HomePage = () => (
  <>
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
          src="/videos/mainhero.mp4"
          type="video/mp4"
          style={{
            objectFit: 'cover',
            objectPosition: 'top',
            width: '100%',
            height: '100%',
            clipPath: 'inset(0 0 10% 0)',
            WebkitClipPath: 'inset(0 0 10% 0)'
          }}
        />
        <HeroContent>
          <AboutIntroWrapper>
            <SectionTitle style={{ color: '#fff' }}>
              Upright Medical Solutions
            </SectionTitle>
            <MissionStatement style={{ color: '#fff' }}>
              Empowering providers with innovative, value-based solutions—from fall prevention to cardiovascular wellness—that improve patient outcomes and preserve independence.
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
              <ProductTitle>Pulse4Pulse</ProductTitle>
              <ProductDescription>
                A turnkey cardiovascular wellness assessment service provided at no cost to your practice, complete with staff and billing support.
              </ProductDescription>
            </div>
            <HeroButton href="/Pulse4Pulse">Learn More</HeroButton>
          </ProductCard>
        </ProductGrid>
      </Section>

      {/* Contact Section */}
      <Contact />
    </main>
    <Footer>
      <p>&copy; {new Date().getFullYear()} Upright Medical Solutions. All Rights Reserved.</p>
    </Footer>
  </>
);

export default HomePage;
