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
        <a href="/" className={active === "home" ? "active" : ""}>
          Home
        </a>
      </li>

      <li className="dropdown">
        <a
          href="#"
          className={`dropdown-toggle ${active === "fall-risk" || active === "pulse4pulse" ? "active" : ""}`}
        >
          Products
        </a>
        <ul className="dropdown-menu">
          <li>
            <a href="/fall-risk" className={active === "fall-risk" ? "active" : ""}>
              Fall Risk
            </a>
          </li>
          <li>
            <a href="/Pulse4Pulse/" className={active === "pulse4pulse" ? "active" : ""}>
              Pulse4Pulse
            </a>
          </li>
        </ul>
      </li>

      <li>
        <a href="/#about" className={active === "about" ? "active" : ""}>
          About
        </a>
      </li>
      <li>
        <a href="/#contact" className={active === "contact" ? "active" : ""}>
          Contact
        </a>
      </li>
    </NavLinks>
  </NavBar>
);

export default Nav;