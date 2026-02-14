'use client'
import Section from './Section'
import { FadeUp } from './Motion'

export default function Projects() {
  return (
    <Section>
      <FadeUp>
        <h2 className="text-3xl font-semibold mb-4 text-[#1F2933]">
          Projects
        </h2>

        <p className="mb-12 max-w-2xl text-[#1F2933]/70">
          A selection of projects where I worked on frontend development,
          component structure, and user interaction.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="h-64 bg-[#93BFCF] rounded-2xl shadow-sm" />
          <div className="h-64 bg-[#93BFCF] rounded-2xl shadow-sm" />
        </div>
      </FadeUp>
    </Section>
  )
}
