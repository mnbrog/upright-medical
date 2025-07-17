// File: src/components/Nav.jsx

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavBar, NavLinks, LogoWrapper, HamburgerButton } from "./styles";

const Nav = ({ active }) => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  return (
    <NavBar>
      <LogoWrapper>
        <a href="/">
          <img src="/images/Upright Medical Solutions Logo.png" alt="Upright Medical Solutions" />
        </a>
      </LogoWrapper>

      {/* Hamburger for mobile */}
      <HamburgerButton onClick={toggleMenu} aria-label="Toggle navigation">
        <FaBars size={24} />
      </HamburgerButton>

      <NavLinks className={open ? "open" : ""}>
        <li>
          <a href="/" className={active === "home" ? "active" : ""}>Home</a>
        </li>
        <li className="dropdown">
          <a href="#" className={`dropdown-toggle ${active === "fall-risk" || active === "pulse4pulse" ? "active" : ""}`}>Products</a>
          <ul className="dropdown-menu">
            <li>
              <a href="/fall-risk" className={active === "fall-risk" ? "active" : ""}>Fall Risk</a>
            </li>
            <li>
              <a href="/Pulse4Pulse" className={active === "pulse4pulse" ? "active" : ""}>Pulse4Pulse</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/about" className={active === "about" ? "active" : ""}>About</a>
        </li>
        <li>
          <a href="/#contact" className={active === "contact" ? "active" : ""}>Contact</a>
        </li>
      </NavLinks>
    </NavBar>
  );
};

export default Nav;
