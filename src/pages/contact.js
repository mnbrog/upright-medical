import React from "react";
import styled from "styled-components";
import GlobalStyles from "../components/Layout/GlobalStyles";
import Nav from "../components/Nav";
import ContactSection from "../components/sections/Contact";
import Footer from "../components/Footer";

const Main = styled.main`
  padding-top: 2rem;
`;

const ContactPage = () => (
  <>
    <GlobalStyles />
    <Nav active="contact" />
    <Main>
      <ContactSection />
    </Main>
    <Footer />
  </>
);

export default ContactPage;
