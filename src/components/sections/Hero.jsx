import React from "react"
import { HeroVideo, BackgroundVideo, HeroContent, HeroButton } from "../styles"

const HeroSection = () => (
  <HeroVideo id="hero">
    <BackgroundVideo
      autoPlay
      loop
      muted
      playsInline
      poster="/images/clinic-background-fallback.jpg"
      src="/videos/clinic-background.mp4"
      type="video/mp4"
    />
    <HeroContent>
      <h1>Innovative Health &amp; Safety Solutions</h1>
      <p>Predict Risk. Prevent Falls.</p>
      <HeroButton href="#contact">Get a Demo</HeroButton>
    </HeroContent>
  </HeroVideo>
)

export default HeroSection
