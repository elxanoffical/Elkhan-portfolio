'use client'
import Section from './Section'
import { FadeUp } from './Motion'
import { Github, ExternalLink } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'AutoLux.az',
    description:
      'Full-featured e-commerce application with product filtering, authentication, and responsive UI built using Next.js and Tailwind.',
    image: '/projects/project1.png',
    github: 'https://github.com/elxanoffical/turbo.az',
    live: 'https://turbo-car-alpha.vercel.app/'
  },
  {
    title: 'SaaS Dashboard',
    description:
      'Modern dashboard interface with reusable components, animations, and optimized performance using React and Framer Motion.',
    image: '/projects/project2.png',
    github: 'https://github.com/elxanoffical/Addax',
    live: 'https://addax-elxan.vercel.app/'
  }
]

export default function Projects() {
  return (
    <Section>
      <FadeUp>
        {/* Title */}
        <h2 className="text-4xl font-semibold text-[#1F2933]">
          Projects
        </h2>

        {/* Divider */}
        <div className="mt-4 mb-12">
          <div className="h-[2px] w-full max-w-md bg-[#6096B4] rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map(project => (
            <div
              key={project.title}
              className="
                group rounded-2xl overflow-hidden
                bg-white shadow-sm
                transition duration-300
                hover:shadow-xl
                hover:-translate-y-1
              "
            >
              {/* Hero Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="
                    object-cover
                    transition duration-500
                    group-hover:scale-105 cursor-pointer
                  "
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#1F2933]">
                  {project.title}
                </h3>

                <p className="text-[#1F2933]/70 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="
                      p-2 rounded-full
                      bg-[#BDCDD6]
                      transition
                      hover:bg-[#6096B4]
                      hover:text-white
                    "
                  >
                    <Github size={18} />
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="
                      p-2 rounded-full
                      bg-[#BDCDD6]
                      transition
                      hover:bg-[#6096B4]
                      hover:text-white
                    "
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeUp>
    </Section>
  )
}
