import React, { useState } from "react"
import { NavBar, NavLinks, LogoWrapper, Hamburger, SubIndicator } from "./styles"

const Nav = ({ active }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenus, setOpenMenus] = useState({})

  const toggleMobile = () => setMobileOpen(!mobileOpen)
  const toggleMenu = (key) =>
    setOpenMenus((o) => ({ ...o, [key]: !o[key] }))

  const menuProps = (key) => ({
    className: `has-submenu ${openMenus[key] ? "open" : ""}`,
  })

  const btnProps = (key) => ({
    "aria-haspopup": "true",
    "aria-expanded": openMenus[key] ? "true" : "false",
    onClick: () => toggleMenu(key),
  })

  return (
    <NavBar>
      <LogoWrapper>
        <img
          src="/images/Upright Medical Solutions Logo.png"
          alt="Upright Medical Solutions"
        />
      </LogoWrapper>
      <Hamburger onClick={toggleMobile} aria-label="Toggle menu" aria-expanded={mobileOpen}>
        <span />
        <span />
        <span />
      </Hamburger>
      <NavLinks className={mobileOpen ? "open" : ""} role="menubar">
        <li>
          <a href="#hero" className={active === "hero" ? "active" : ""} role="menuitem">
            Home
          </a>
        </li>
        <li {...menuProps("products")}> 
          <button {...btnProps("products")}>Products <SubIndicator /></button>
          <ul role="menu">
            <li {...menuProps("fra")}> 
              <button {...btnProps("fra")}>Fall Risk Assessment <SubIndicator /></button>
              <ul role="menu">
                <li>
                  <a href="#fra" role="menuitem">Overview &amp; Benefits</a>
                </li>
                <li>
                  <a href="#fra-how" role="menuitem">How It Works</a>
                </li>
              </ul>
            </li>
            <li {...menuProps("balance")}> 
              <button {...btnProps("balance")}>Balance Training Program <SubIndicator /></button>
              <ul role="menu">
                <li>
                  <a href="#balance" role="menuitem">Key Features</a>
                </li>
                <li>
                  <a href="#balance" role="menuitem">Sample Exercises / Video Preview</a>
                </li>
              </ul>
            </li>
            <li {...menuProps("safety")}> 
              <button {...btnProps("safety")}>Home Safety Toolkit <SubIndicator /></button>
              <ul role="menu">
                <li>
                  <a href="#safety" role="menuitem">PDF Checklist</a>
                </li>
                <li>
                  <a href="#safety" role="menuitem">Interactive Online Version</a>
                </li>
              </ul>
            </li>
            <li {...menuProps("tele")}> 
              <button {...btnProps("tele")}>Telehealth Integration <SubIndicator /></button>
              <ul role="menu">
                <li>
                  <a href="#telehealth" role="menuitem">Platform Features</a>
                </li>
                <li>
                  <a href="#telehealth" role="menuitem">Technical Requirements</a>
                </li>
              </ul>
            </li>
            <li {...menuProps("pulse")}> 
              <button {...btnProps("pulse")}>Pulse4Pulse Cardiovascular Assessment <SubIndicator /></button>
              <ul role="menu">
                <li>
                  <a href="#pulse" role="menuitem">Overview &amp; Mission</a>
                </li>
                <li>
                  <a href="#pulse" role="menuitem">How It Works</a>
                </li>
                <li>
                  <a href="#pulse" role="menuitem">Key Tests &amp; Benefits</a>
                </li>
                <li>
                  <a href="#pulse" role="menuitem">Eligible Conditions</a>
                </li>
                <li>
                  <a href="#pulse" role="menuitem">Practice Benefits</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li {...menuProps("resources")}> 
          <button {...btnProps("resources")}>Resources <SubIndicator /></button>
          <ul role="menu">
            <li><a href="#resources" role="menuitem">User Guides</a></li>
            <li><a href="#resources" role="menuitem">Troubleshooting FAQs</a></li>
            <li><a href="#resources" role="menuitem">Infographics</a></li>
            <li><a href="#resources" role="menuitem">Case Studies</a></li>
          </ul>
        </li>
        <li {...menuProps("about")}> 
          <button {...btnProps("about")}>About Us <SubIndicator /></button>
          <ul role="menu">
            <li><a href="#about" role="menuitem">Mission &amp; Vision</a></li>
            <li><a href="#about" role="menuitem">Leadership Team</a></li>
            <li><a href="#about" role="menuitem">Affiliations</a></li>
          </ul>
        </li>
        <li>
          <a href="#blog" className={active === "blog" ? "active" : ""} role="menuitem">
            Blog
          </a>
        </li>
        <li {...menuProps("contact")}> 
          <button {...btnProps("contact")}>Contact <SubIndicator /></button>
          <ul role="menu">
            <li><a href="#contact" role="menuitem">Contact Form</a></li>
            <li><a href="#contact" role="menuitem">Request a Demo</a></li>
          </ul>
        </li>
      </NavLinks>
    </NavBar>
  )
}

export default Nav
