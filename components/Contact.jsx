'use client'
import Section from './Section'
import { FadeUp } from './Motion'

export default function Contact() {
  return (
    <Section>
      <FadeUp>
        <h2 className="text-3xl font-semibold mb-6 text-[#1F2933]">
          Contact
        </h2>

        <p className="mb-6 max-w-xl text-[#1F2933]/70">
          If you’d like to work together or have any questions, feel free to
          get in touch.
        </p>

        <ul className="space-y-3 text-[#6096B4]">
          <li>Email: alex@email.com</li>
          <li>Phone: +1 000 000 0000</li>
          <li>LinkedIn: linkedin.com/in/alex</li>
        </ul>
      </FadeUp>
    </Section>
  )
}
