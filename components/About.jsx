'use client'
import Section from './Section'
import { FadeUp } from './Motion'

export default function About() {
  return (
    <Section>
      <FadeUp>
        <h2 className="text-3xl font-semibold mb-6 text-[#1F2933]">
          About
        </h2>

        <p className="max-w-3xl leading-relaxed text-[#1F2933]/70">
          I’m a frontend developer with experience building modern web
          applications using React and Next.js. I focus on writing clean,
          understandable code and creating interfaces that feel intuitive.
        </p>

        <p className="mt-4 max-w-3xl leading-relaxed text-[#1F2933]/70">
          I enjoy working on products where design, performance, and usability
          matter. My goal is to create solutions that are easy to use today
          and easy to maintain tomorrow.
        </p>
      </FadeUp>
    </Section>
  )
}
