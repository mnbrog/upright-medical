import React from "react"
import { Section, SectionTitle, InfoBox, BulletList, StepList } from "../styles"

const BalanceTraining = () => (
  <Section id="balance">
    <SectionTitle>Balance Training Program</SectionTitle>
    <InfoBox>
      <BulletList>
        <li>Key features and progressive exercises.</li>
        <li>Video previews keep patients engaged.</li>
      </BulletList>
      <h3>Sample Clinic Workflow</h3>
      <StepList>
        <li>Step 1: Patient Screening questionnaire captures history, meds and previous falls.</li>
        <li>Step 2: Performance tests administered in exam room.</li>
        <li>Step 3: FRA report generates interventions and educational materials.</li>
      </StepList>
    </InfoBox>
  </Section>
)

export default BalanceTraining
