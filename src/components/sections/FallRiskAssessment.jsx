import React from "react"
import { Section, SectionTitle, InfoBox, BulletList, Paragraph, StepList } from "../styles"

const FallRiskAssessment = () => (
  <Section id="fra">
    <SectionTitle>Fall Risk Assessment</SectionTitle>
    <InfoBox>
      <h3>Overview & Benefits</h3>
      <BulletList>
        <li>The CDC STEADI initiative recommends screening all patients 65+.</li>
        <li>Based on American and British Geriatrics Societies guidelines.</li>
        <li>Medicare MIPS Measure #318 covers future fall risk screening.</li>
        <li>Also satisfies measures #154 and #155.</li>
        <li><strong>Automated Math:</strong> Combines multiple test results into a single risk score.</li>
        <li><strong>2,300+ Studies:</strong> Built on extensive clinical research.</li>
        <li><strong>10–25 Minutes:</strong> Simple to administer with minimal training.</li>
        <li><strong>Evidence-Based:</strong> Peer-reviewed algorithms outperform traditional screening.</li>
      </BulletList>
      <Paragraph>
        <strong>Unlock the ability to predict and prevent falls</strong> using our validated FRA technology.
      </Paragraph>
      <h3 id="fra-how">How It Works</h3>
      <StepList>
        <li><strong>Patient Screening:</strong> Self-answer questionnaires in the waiting room or at home.</li>
        <li><strong>Performance Testing:</strong> Five Time Sit to Stand, Walking Test, Single Leg Stance, Timed Up and Go.</li>
        <li><strong>Review Report &amp; Care Plan:</strong> Doctor reviews auto-generated report and provides educational materials.</li>
      </StepList>
      <h3>Performance-Based Outcome Measures</h3>
      <BulletList>
        <li><strong>Lusardi et al (2017):</strong> PBOMs are the most powerful predictors of future falls.</li>
        <li><strong>Combination Algorithm:</strong> Merges multiple scores into one probability.</li>
        <li><strong>APTA-SR/3 vs. STEADI:</strong> Higher Positive Likelihood Ratio (2.2 vs 1.57).</li>
        <li><strong>Minimize False Negatives:</strong> Multiple tests reduce missed high-risk patients.</li>
      </BulletList>
      <Paragraph>
        <strong>Quick Clinic Integration:</strong> Patients self-screen via tablet; an assistant runs 3–5 tests and our algorithm does the rest.
      </Paragraph>
      <h3>Billing & Financial Impact</h3>
      <Paragraph>
        Average reimbursement is $73.48 (range $45–$136) using CPT 97750 in 15-minute units. For questionnaire interpretation use CPT 96160.
      </Paragraph>
      <BulletList>
        <li>Florida (5 physicians): 6‑month collections <strong>$138,562</strong></li>
        <li>Arkansas (6 PT centers): 3‑month collections <strong>$176,215</strong></li>
        <li>California (1 hospital): 3‑month collections <strong>$235,178</strong></li>
      </BulletList>
      <h3>Plan of Care & Educational Materials</h3>
      <Paragraph>
        After reviewing the FRA report, the doctor provides a Falls Care Plan and educational materials (home modifications, exercise tips).
      </Paragraph>
    </InfoBox>
  </Section>
)

export default FallRiskAssessment
