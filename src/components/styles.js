// File: src/components/styles/index.js

import styled from "styled-components";

export const COLORS = {
  darkBlue: "#0A2640",
  teal: "#3FD0C9",
  cardBg: "#FFFFFF",
  // FIX 1: Added missing color definitions
  lightTeal: "#A7F3D0",
  seriousRed: "#EF4444",
  neutralGray: "#6B7280",
  lightBg: "#F9FAFB",
};

// Responsive breakpoints
// Mobile: < 640px
// Tablet: 640px – 1023px
// Desktop: >= 1024px
export const device = {
  mobile: "(max-width: 639px)",
  tablet: "(min-width: 640px) and (max-width: 1023px)",
  desktop: "(min-width: 1024px)",
};


export const NavBar = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  background: ${COLORS.cardBg};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 200;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 1rem;

  /* Tablet layout wraps nav items */
  @media ${device.tablet} {
    flex-wrap: wrap;
  }
`;



export const LogoWrapper = styled.div`
  margin: 1rem 0 0.5rem;

  img {
    display: block;
    height: 100px;
    width: auto;
  }

  @media (min-width: 600px) {
    img {
      height: 140px;
    }
  }
`;

// Button for mobile nav toggle
export const HamburgerButton = styled.button`
  background: none;
  border: none;
  display: none;
  cursor: pointer;

  @media ${device.mobile} {
    display: block;
    align-self: flex-end;
  }

  &:focus {
    outline: 2px solid ${COLORS.teal};
  }
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0.5rem 1rem;
  position: relative;
  justify-content: center;

  > li {
    position: relative;
  }

  a,
  button {
    display: block;
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
    width: 100%;
    color: ${COLORS.darkBlue};
    transition: color 0.2s ease-in-out, font-weight 0.2s ease-in-out;
  }

  a:hover,
  button:hover {
    background: #f2f4f5;
    color: ${COLORS.teal};
  }

  a.active {
    color: ${COLORS.teal};
    font-weight: 600;
    text-decoration: underline;
  }

  ul {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background: ${COLORS.cardBg};
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    margin: 0;
    padding: 0;
    list-style: none;
    min-width: 200px;
    z-index: 10;
  }

  li:hover > ul,
  li:focus-within > ul {
    display: block;
  }

  ul li {
    position: relative;
    white-space: nowrap;
  }

  ul li ul {
    top: 0;
    left: 100%;
  }

  /* Mobile slide-out menu */
  @media ${device.mobile} {
    flex-direction: column;
    align-items: flex-start;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 260px;
    transform: translateX(-100%);
    transition: transform 0.2s ease;
    background: ${COLORS.cardBg};
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

    &.open {
      transform: translateX(0);
    }

    > li {
      width: 100%;
    }

    > li > ul {
      position: static;
      box-shadow: none;
    }

    > li.open > ul {
      display: block;
    }

    ul li ul {
      position: static;
    }
  }
`;

export const Section = styled.section`
  max-width: 1100px;
  margin: 5rem auto;
  padding: 2rem;
  scroll-margin-top: 200px;

  /* Adjust padding on tablet */
  @media ${device.tablet} {
    padding: 1.5rem;
  }

  /* Mobile gets the smallest padding */
  @media ${device.mobile} {
    padding: 1rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: clamp(1.75rem, 5vw, 2.25rem);
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 700;
`;


export const BulletList = styled.ul`
  margin-left: 1.25rem;

  li {
    margin-bottom: 0.5rem;
    position: relative;
    padding-left: 1rem;

    &::before {
      content: "•";
      position: absolute;
      left: 0;
      color: ${COLORS.teal};
    }
  }
`;



export const HeroVideo = styled.section`
  position: relative;
  height: 60vh;
  min-height: 400px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  scroll-margin-top: 200px; /* FIX 2: Added the missing scroll margin */
`;

export const BackgroundVideo = styled.video`
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
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;

  h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: 1rem;
  }

  p {
    font-size: clamp(1rem, 2.5vw, 1.25rem);
    margin-bottom: 1.5rem;
  }

  /* Fine-tune font sizes per breakpoint */
  @media ${device.mobile} {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }

  @media ${device.tablet} {
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.125rem;
    }
  }

  @media ${device.desktop} {
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1.25rem;
    }
  }
`;

export const HeroButton = styled.a`
  background: ${COLORS.teal};
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: #64ffda;
  }
`;



export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 400px;
  margin: 0 auto;

  input,
  textarea {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    background: ${COLORS.teal};
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
  }
`;



// --- STYLES FOR THE "NEED SCREEN" SECTION ---

export const ImpactText = styled.h3`
  font-size: clamp(1.25rem, 3vw, 2rem);
  font-weight: 700;
  line-height: 1.2;
  color: ${COLORS.darkBlue};
  margin-bottom: 0.75rem;
`;

export const QuoteText = styled.p`
  font-style: italic;
  font-size: clamp(0.7rem, 1.5vw, 1rem);
  line-height: 1.6;
  color: #334D6E;
  max-width: 550px;
  margin: 0 auto 1.5rem auto;
  position: relative;
  padding: 0 1rem;

  &::before, &::after {
    content: '"';
    font-size: 2rem;
    color: ${COLORS.lightTeal};
    position: absolute;
    line-height: 1;
  }

  &::before {
    top: -0.25rem;
    left: 0;
  }

  &::after {
    bottom: -1rem;
    right: 0;
  }
`;


// Recommended responsive 3-column grid
export const StatGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  width: 100%;
  margin: 1.5rem 0;

  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Define StatNumber FIRST to prevent initialization errors
export const StatNumber = styled.p`
  font-size: clamp(1.2rem, 3.5vw, 1.8rem);
  font-weight: 700;
  color: ${COLORS.darkBlue};
  line-height: .7;
  transition: color 0.3s ease-in-out;
`;

export const StatLabel = styled.p`
  font-size: 0.85rem;
  color: #334D6E;
  line-height: 1.4;
`;

export const StatCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: transparent;
  padding: 0.75rem;
  border-top: 3px solid ${COLORS.lightTeal};
  transition: transform 0.3s ease;

  &.serious {
    border-top-color: ${COLORS.seriousRed};
  }

  &:hover {
    transform: translateY(-5px);

    ${StatNumber} {
      color: ${COLORS.seriousRed};
    }
  }
`;

export const BridgeText = styled.p`
  font-size: clamp(0.7rem, 1.8vw, 1rem);
  font-weight: 500;
  max-width: 550px;
  margin: 0 auto 1.25rem auto;
  line-height: 1.6;
`;

export const SourceText = styled.p`
  font-size: 0.5rem;
  color: ${COLORS.neutralGray};
  margin-top: 3rem;

  a {
    color: ${COLORS.neutralGray};
    text-decoration: underline;
    transition: color 0.2s ease;

    &:hover {
      color: ${COLORS.teal};
    }
  }
`;

export const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const LeadParagraph = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  line-height: 1.6;
  color: #334D6E;
  margin-bottom: 1.5rem;
`;
export const ImageWrapper = styled.div`
  img {
    width: 100%;
    height: auto;
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(10, 38, 64, 0.1);
  }
`;

export const FeatureGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  
  scroll-margin-top: 400px;

  grid-template-columns: 1fr;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const FeatureCard = styled.div`
  background: ${COLORS.cardBg};
  border-radius: 12px;
  border: 1px solid #EAECEF;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03), 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 2px 4px rgba(0,0,0,0.05), 0 8px 16px rgba(0,0,0,0.08);
  }
`;

export const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: ${COLORS.lightTeal};
  border-radius: 50%;
  margin-bottom: 1rem;
  color: ${COLORS.darkBlue};
  font-size: 1.75rem;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

export const FeatureDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: #334D6E;
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  h2, p {
    text-align: center;
  }

  a {
    align-self: center;
    margin-top: 1.5rem;
  }
`;

export const MethodologyContainer = styled.div`
  margin-top: 4rem;
`;

// Find and replace the existing ProcessStepper with this version

export const ProcessStepper = styled.div`
  display: grid;
  /* Desktop shows 3 columns; stack on smaller devices */
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const ProcessStep = styled.div`
  text-align: center;
  position: relative;
  padding: 0 1rem;

  &:not(:last-child)::after {
    content: '→';
    font-size: 2.5rem;
    color: ${COLORS.lightTeal};
    position: absolute;
    top: 30px;
    right: -25px;

    @media (max-width: 820px) {
      content: '↓';
      top: auto;
      bottom: -35px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const StepIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  background-color: ${COLORS.darkBlue};
  border-radius: 50%;
  margin-bottom: 1rem;
  color: ${COLORS.cardBg};
  font-size: 2rem;
  box-shadow: 0 4px 12px rgba(10, 38, 64, 0.2);
`;

export const StepTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

export const StepDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: #334D6E;
`;

export const SecondaryButton = styled.a`
  display: inline-block;
  background: transparent;
  color: ${COLORS.darkBlue};
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  border: 1px solid ${COLORS.neutralGray};
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;

  &:hover {
      background: ${COLORS.lightBg};
      border-color: ${COLORS.darkBlue};
  }
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
  border-bottom: 1px solid #EAECEF;
`;

export const TabButton = styled.button`
  padding: 1rem 1.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: ${props => props.active ? COLORS.darkBlue : COLORS.neutralGray};
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 3px;
    background-color: ${COLORS.teal};
    transform: ${props => props.active ? 'scaleX(1)' : 'scaleX(0)'};
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    color: ${COLORS.darkBlue};
  }
`;

export const TabContent = styled.div`
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

export const CTAWrapper = styled.div`
  text-align: center;
  margin-top: 4rem;
  padding: 3rem 1.5rem;
  background: ${COLORS.cardBg};
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(10, 38, 64, 0.08);
`;

export const AboutIntroWrapper = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem auto;
`;

export const MissionStatement = styled.h3`
  font-size: clamp(1rem, 3vw, 1.5rem);
  font-weight: 500;
  line-height: 1.6;
  color: #334D6E;
  margin-bottom: 2rem;
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;

  /* Ensure single column on small screens */
  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const TeamMemberCard = styled.div`
  background: ${COLORS.cardBg};
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  }
`;

export const MemberPhoto = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.5rem;
  border: 4px solid ${COLORS.lightTeal};
`;

export const MemberName = styled.h4`
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
`;

export const MemberTitle = styled.p`
  font-size: 1rem;
  color: ${COLORS.teal};
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const MemberBio = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: #334D6E;
`;

export const ContactLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 3rem;

  /* Stack columns on mobile */
  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const ContactInfo = styled.div`
`;

export const Subheading = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 1rem;
`;

export const ContactParagraph = styled.p`
  font-size: 1.125rem;
  color: #334D6E;
  margin-bottom: 2rem;
`;

export const ContactDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 500;

  a {
    color: ${COLORS.darkBlue};
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${COLORS.teal};
    }
  }
`;

export const PrivacyNote = styled.p`
  font-size: 0.875rem;
  color: ${COLORS.neutralGray};
  margin-top: 1rem;
  text-align: center;
`;
// Find and replace the existing ProcessStepper with this version


export const CenteredTextColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;