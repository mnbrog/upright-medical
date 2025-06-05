import React from "react"
import { Section, SectionTitle, InfoBox, BulletList } from "../styles"

const About = () => (
  <Section id="about">
    <SectionTitle>About Us</SectionTitle>
    <InfoBox>
      <BulletList>
        <li>Mission & Vision to reduce falls.</li>
        <li>Leadership team and key partners.</li>
      </BulletList>
    </InfoBox>
  </Section>
)

export default About
