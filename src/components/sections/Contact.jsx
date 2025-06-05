import React from "react"
import { Section, SectionTitle, ContactForm } from "../styles"

const Contact = () => (
  <Section id="contact">
    <SectionTitle>Contact</SectionTitle>
    <ContactForm>
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <textarea rows="4" placeholder="Message"></textarea>
      <button type="submit">Request Demo</button>
    </ContactForm>
    <p style={{textAlign: 'center', marginTop: '1rem'}}>
      123 Wellness Way, Suite 100<br />
      Anytown, USA &bull; (555) 123-4567
    </p>
  </Section>
)

export default Contact
