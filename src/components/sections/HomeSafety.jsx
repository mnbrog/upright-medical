import React from "react"
import { Section, SectionTitle, InfoBox, BulletList, Paragraph } from "../styles"

const HomeSafety = () => (
  <Section id="safety">
    <SectionTitle>Home Safety Toolkit</SectionTitle>
    <InfoBox>
      <BulletList>
        <li>Downloadable PDF checklist.</li>
        <li>Interactive online home review.</li>
      </BulletList>
      <Paragraph>
        Doctors can provide a Falls Care Plan with brochures on home modifications and exercise tips.
      </Paragraph>
    </InfoBox>
  </Section>
)

export default HomeSafety
