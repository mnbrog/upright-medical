import React from "react"
import { Section, SectionTitle, InfoBox, BulletList } from "../styles"

const Resources = () => (
  <Section id="resources">
    <SectionTitle>Resources</SectionTitle>
    <InfoBox>
      <BulletList>
        <li>User Guides and setup PDFs.</li>
        <li>Quick-start instructions for every product.</li>
        <li>Troubleshooting FAQs.</li>
        <li>Infographics like the "Need to Screen" graphic.</li>
        <li>"Safe Home Layout" flowchart.</li>
        <li><strong>Case Study – Senior Care Facility:</strong> Fall-Risk and Balance Training success.</li>
        <li><strong>Case Study – Rehab Center:</strong> How Pulse4Pulse reduced downstream costs.</li>
      </BulletList>
    </InfoBox>
  </Section>
)

export default Resources
