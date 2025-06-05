import styled, { createGlobalStyle } from "styled-components";

export const COLORS = {
  darkBlue: "#0A2640",
  teal: "#3FD0C9",
  cardBg: "#FFFFFF",
};

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    scroll-snap-type: y proximity;
    height: 100%;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: #F7F9FA;
    color: ${COLORS.darkBlue};
    line-height: 1.5;
    min-height: 100%;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${COLORS.teal};
    border-radius: 4px;
  }
`;

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
  padding-bottom: 0.5rem;
`;

export const NavLinks = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  max-width: 800px;

  li {
    position: relative;
    text-align: center;
  }

  a {
    display: block;
    padding: 0.75rem 0;
    font-size: 1rem;
    color: ${COLORS.darkBlue};
    transition: color 0.2s ease-in-out, font-weight 0.2s ease-in-out;
    cursor: pointer;
  }

  a.active {
    color: ${COLORS.teal};
    font-weight: 600;
  }

  /* Primary dropdown */
  ul {
    display: none;
    position: absolute;
    background: ${COLORS.cardBg};
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    z-index: 250;
  }

  li:hover > ul {
    display: block;
  }

  /* Second-level dropdown appears to the right */
  & > li > ul {
    left: 100%;
    top: 0;
    display: flex;
  }

  & > li > ul > li {
    white-space: nowrap;
    position: relative;
  }

  /* Third-level dropdown */
  & > li > ul > li > ul {
    left: 0;
    top: 100%;
    display: none;
    flex-direction: column;
    background: ${COLORS.cardBg};
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }

  & > li > ul > li:hover > ul {
    display: block;
  }

  ul li a {
    padding: 0.5rem 0.75rem;
    color: ${COLORS.darkBlue};
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

export const Section = styled.section`
  max-width: 960px;
  margin: 4rem auto;
  padding: 2rem 1rem;
  scroll-snap-align: start;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export const InfoBox = styled.div`
  background: ${COLORS.cardBg};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  margin-top: 1rem;
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

export const Paragraph = styled.p`
  margin: 0.75rem 0;
`;

export const StepList = styled.ol`
  margin-left: 1.25rem;

  li {
    margin-bottom: 0.5rem;
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
    font-size: clamp(2.5rem, 6vw, 3.5rem);
    margin-bottom: 1rem;
  }

  p {
    font-size: clamp(1.125rem, 3vw, 1.5rem);
    margin-bottom: 1.5rem;
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

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
`;

export const ProductCard = styled.a`
  background: ${COLORS.cardBg};
  border-radius: 6px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  text-align: center;
  font-weight: 500;
  color: ${COLORS.darkBlue};
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
