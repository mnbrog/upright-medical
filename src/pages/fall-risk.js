// File: src/pages/fall-risk.jsx

import React from "react";
import styled from "styled-components";
import GlobalStyles from "../components/Layout/GlobalStyles";
import Nav from "../components/Nav";
import HeroSection from "../components/sections/Hero";
import NeedScreen from "../components/sections/NeedScreen";
import FraOverview from "../components/sections/FraOverview";
import FraVideo from "../components/sections/FraVideo";
import FraResearch from "../components/sections/FraResearch";
import WhoWeHelp from "../components/sections/WhoWeHelp";

// A simple styled footer for this page
const Footer = styled.footer`
  text-align: center;
  padding: 2rem;
  margin-top: 4rem;
  background: #EAECEF;
  color: #334D6E;
`;

const FallRiskPage = () => (
  <>
    <GlobalStyles />
    <Nav active="fall-risk" />
    <main>
      <HeroSection />
      <NeedScreen />
      <FraOverview />
      <FraVideo />
      <FraResearch />
      <WhoWeHelp />
    </main>
    <Footer>
      <p>&copy; {new Date().getFullYear()} Upright Medical Solutions. All Rights Reserved.</p>
    </Footer>
  </>
);

export default FallRiskPage;