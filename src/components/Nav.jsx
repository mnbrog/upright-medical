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
                <a href="#fra">Overview & Benefits</a>
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
                <a href="#balance">Sample Exercises / Video Preview</a>
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
                <a href="#telehealth">Platform Features</a>
              </li>
              <li>
                <a href="#telehealth">Technical Requirements</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#pulse">Pulse4Pulse Cardiovascular Assessment</a>
            <ul>
              <li>
                <a href="#pulse">Overview & Mission</a>
              </li>
              <li>
                <a href="#pulse">How It Works</a>
              </li>
              <li>
                <a href="#pulse">Key Tests & Benefits</a>
              </li>
              <li>
                <a href="#pulse">Eligible Conditions</a>
              </li>
              <li>
                <a href="#pulse">Practice Benefits</a>
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
            <a href="#resources">User Guides</a>
          </li>
          <li>
            <a href="#resources">Troubleshooting FAQs</a>
          </li>
          <li>
            <a href="#resources">Infographics</a>
          </li>
          <li>
            <a href="#resources">Case Studies</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#about" className={active === "about" ? "active" : ""}>
          About Us
        </a>
        <ul>
          <li>
            <a href="#about">Mission & Vision</a>
          </li>
          <li>
            <a href="#about">Leadership Team</a>
          </li>
          <li>
            <a href="#about">Affiliations</a>
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
            <a href="#contact">Contact Form</a>
          </li>
          <li>
            <a href="#contact">Request a Demo</a>
          </li>
        </ul>
      </li>
    </NavLinks>
  </NavBar>
);

export default Nav;
