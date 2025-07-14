// File: src/pages/pulse4pulse.jsx

import React from "react";
import GlobalStyles from "../components/Layout/GlobalStyles"; // Import GlobalStyles
import Nav from "../components/Nav";
import PulseHero from "../components/sections/PulseHero";
import PulseNeed from "../components/sections/PulseNeed";
import PulseOverview from "../components/sections/PulseOverview";
import PulseProcess from "../components/sections/PulseProcess";
import PulseEligibility from "../components/sections/PulseEligibility";
import PulseAssessment from "../components/sections/PulseAssessment";
import PulseBenefits from "../components/sections/PulseBenefits";
import PulseSpecialties from "../components/sections/PulseSpecialties";
import Footer from "../components/Footer";

// Reuse the shared footer styling

const Pulse4Pulse = () => (
  <>
    <GlobalStyles /> {/* This component injects all global styles */}
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
    </main>
    <Footer />
  </>
);

export default Pulse4Pulse;