import React from "react";
import styled from "styled-components";
import GlobalStyles from "../components/Layout/GlobalStyles";
import Nav from "../components/Nav";
import AboutSection from "../components/sections/About";
import Footer from "../components/Footer";

const Main = styled.main`
  padding-top: 2rem;
`;

const AboutPage = () => (
  <>
    <GlobalStyles />
    <Nav active="about" />
    <Main>
      <AboutSection />
    </Main>
    <Footer />
  </>
);

export default AboutPage;
