'use client'
import Section from './Section'
import { FadeUp } from './Motion'

const skills = [
  'React & Next.js',
  'Modern JavaScript (ES6+)',
  'Tailwind CSS & Design Systems',
  'Framer Motion Animations',
  'Responsive & Accessible UI',
  'Performance Optimization'
]

export default function Skills() {
  return (
    <Section>
      <FadeUp>
        <h2 className="text-3xl font-semibold mb-8 text-[#1F2933]">
          Skills
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map(skill => (
            <li
              key={skill}
              className="bg-[#BDCDD6] rounded-xl p-5 text-[#1F2933] shadow-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </FadeUp>
    </Section>
  )
}
