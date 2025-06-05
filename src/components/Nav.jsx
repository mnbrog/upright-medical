// File: src/components/Nav.jsx

import React from "react";
import { NavBar, NavLinks, LogoWrapper } from "./styles";

const Nav = ({ active }) => (
  <NavBar>
    <LogoWrapper>
      <img
        src="/images/Upright Medical Solutions Logo.png"
        alt="Upright Medical Solutions"
      />
    </LogoWrapper>
    <NavLinks>
      <li>
        <a href="#hero" className={active === "hero" ? "active" : ""}>
          Home
        </a>
      </li>
      <li>
        <a href="#products" className={active === "products" ? "active" : ""}>
          Products
        </a>
        <ul>
          <li>
            <a href="#fra">Fall Risk Assessment</a>
            <ul>
              <li>
                <a href="#fra">Overview &amp; Benefits</a>
              </li>
              <li>
                <a href="#fra-how">How It Works</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#balance">Balance Training Program</a>
            <ul>
              <li>
                <a href="#balance">Key Features</a>
              </li>
              <li>
                <a href="#balance-video">Sample Exercises / Video Preview</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#safety">Home Safety Toolkit</a>
            <ul>
              <li>
                <a href="#safety">PDF Checklist</a>
              </li>
              <li>
                <a href="#safety">Interactive Online Version</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#telehealth">Telehealth Integration</a>
            <ul>
              <li>
                <a href="#telehealth-features">Platform Features</a>
              </li>
              <li>
                <a href="#telehealth-setup">Technical Requirements</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#pulse">Pulse4Pulse Cardiovascular Assessment</a>
            <ul>
              <li>
                <a href="#p4p-overview">Overview &amp; Mission</a>
              </li>
              <li>
                <a href="#p4p-how">How It Works</a>
              </li>
              <li>
                <a href="#key-tests">Key Tests &amp; Benefits</a>
              </li>
              <li>
                <a href="#eligible-conditions">Eligible Conditions</a>
              </li>
              <li>
                <a href="#practice-benefits">Practice Benefits</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <a href="#resources" className={active === "resources" ? "active" : ""}>
          Resources
        </a>
        <ul>
          <li>
            <a href="#resources-guides">User Guides</a>
          </li>
          <li>
            <a href="#resources-faq">Troubleshooting FAQs</a>
          </li>
          <li>
            <a href="#resources-infographics">Infographics</a>
          </li>
          <li>
            <a href="#resources-case-studies">Case Studies</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#about" className={active === "about" ? "active" : ""}>
          About Us
        </a>
        <ul>
          <li>
            <a href="#about-mission">Mission &amp; Vision</a>
          </li>
          <li>
            <a href="#about-team">Leadership Team</a>
          </li>
          <li>
            <a href="#about-affiliations">Affiliations</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#blog" className={active === "blog" ? "active" : ""}>
          Blog
        </a>
      </li>
      <li>
        <a href="#contact" className={active === "contact" ? "active" : ""}>
          Contact
        </a>
        <ul>
          <li>
            <a href="#contact-form">Contact Form</a>
          </li>
          <li>
            <a href="#request-demo">Request a Demo</a>
          </li>
        </ul>
      </li>
    </NavLinks>
  </NavBar>
);

export default Nav;
