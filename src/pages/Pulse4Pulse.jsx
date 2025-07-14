import React from "react";
import GlobalStyles from "../components/Layout/GlobalStyles";
import Nav from "../components/Nav";
import PulseHero from "../components/sections/PulseHero";
import PulseNeed from "../components/sections/PulseNeed";
import PulseOverview from "../components/sections/PulseOverview";
import PulseProcess from "../components/sections/PulseProcess";
import PulseEligibility from "../components/sections/PulseEligibility";
import PulseAssessment from "../components/sections/PulseAssessment";
import PulseBenefits from "../components/sections/PulseBenefits";
import PulseSpecialties from "../components/sections/PulseSpecialties";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Footer from "../components/Footer";

const Pulse4Pulse = () => (
  <>
    <GlobalStyles />
    <Nav active="pulse4pulse" />
    <main>
      <PulseHero />
      <PulseNeed />
      <PulseOverview />
      <PulseProcess />
      <PulseEligibility />
      <PulseAssessment />
      <PulseBenefits />
      <PulseSpecialties />
      <About />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Pulse4Pulse;
