import React, { useState } from "react";
import { NavBar, NavLinks, LogoWrapper, Hamburger, CloseIcon } from "./styles";

const Nav = ({ active }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavBar>
      <LogoWrapper>
        <a href="/">
          <img
            src="/images/Upright Medical Solutions Logo.png"
            alt="Upright Medical Solutions"
          />
        </a>
      </LogoWrapper>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <CloseIcon /> : <div />}
      </Hamburger>

      <NavLinks className={isOpen ? "open" : ""}>
        <li>
          <a href="/" className={active === "home" ? "active" : ""}>
            Home
          </a>
        </li>
        <li className="dropdown">
          <a
            href="#"
            className={`dropdown-toggle ${
              [
                "fall-risk",
                "tendonova",
                "echolight",
                "hemaclear",
                "inkwell-health",
                "q-care-management"
              ].includes(active)
                ? "active"
                : ""
            }`}
          >
            Products
          </a>
          <ul className="dropdown-menu">
            <li>
              <a
                href="/fall-risk"
                className={active === "fall-risk" ? "active" : ""}
              >
                Fall Risk Assessment
              </a>
            </li>
            <li>
              <a
                href="/tendonova"
                className={active === "tendonova" ? "active" : ""}
              >
                TendoNova
              </a>
            </li>
            <li>
              <a
                href="/echolight"
                className={active === "echolight" ? "active" : ""}
              >
                Echolight
              </a>
            </li>
            <li>
              <a
                href="/hemaclear"
                className={active === "hemaclear" ? "active" : ""}
              >
                HemaClear
              </a>
            </li>
            <li>
              <a
                href="/inkwell-health"
                className={active === "inkwell-health" ? "active" : ""}
              >
                InkWell Health
              </a>
            </li>
            <li>
              <a
                href="/q-care-management"
                className={active === "q-care-management" ? "active" : ""}
              >
                Q Care Management
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/about" className={active === "about" ? "active" : ""}>
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
};

export default Nav;