import styled from "styled-components";

export const COLORS = {
  darkBlue: "#0A2640",
  teal: "#3FD0C9",
  cardBg: "#FFFFFF",
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
  }
  a.active {
    color: ${COLORS.teal};
    font-weight: 600;
  }
  ul {
    display: none;
    position: absolute;
    background: ${COLORS.cardBg};
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li:hover > ul {
    display: block;
  }
  & > li > ul {
    top: 100%;
    left: 0;
    min-width: 180px;
  }
  & > li > ul > li {
    position: relative;
    white-space: nowrap;
  }
  & > li > ul > li > ul {
    top: 0;
    left: 100%;
  }
  ul li a {
    padding: 0.5rem 0.75rem;
    display: block;
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

export const Hero = styled.section`
  height: 60vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export const HeroButton = styled.a`
  background: ${COLORS.teal};
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
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
`;
