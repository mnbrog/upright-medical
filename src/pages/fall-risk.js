import React, { useState, useEffect } from "react"
import GlobalStyles from "../components/Layout/GlobalStyles"
import Nav from "../components/Nav"

import HeroSection from "../components/sections/Hero"
import ProductsSection from "../components/sections/Products"
import FallRiskAssessment from "../components/sections/FallRiskAssessment"
import BalanceTraining from "../components/sections/BalanceTraining"
import HomeSafety from "../components/sections/HomeSafety"
import Telehealth from "../components/sections/Telehealth"
import Pulse4Pulse from "../components/sections/Pulse4Pulse"
import Resources from "../components/sections/Resources"
import About from "../components/sections/About"
import Blog from "../components/sections/Blog"
import Contact from "../components/sections/Contact"

const FallRiskPage = () => {
  const [active, setActive] = useState("hero")

  useEffect(() => {
    const ids = [
      "hero",
      "products",
      "fra",
      "balance",
      "safety",
      "telehealth",
      "pulse",
      "resources",
      "about",
      "blog",
      "contact"
    ]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: "-40% 0px -60% 0px" }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <GlobalStyles />
      <Nav active={active} />
      <HeroSection />
      <ProductsSection />
      <FallRiskAssessment />
      <BalanceTraining />
      <HomeSafety />
      <Telehealth />
      <Pulse4Pulse />
      <Resources />
      <About />
      <Blog />
      <Contact />
    </>
  )
}

export default FallRiskPage
