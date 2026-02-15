'use client'
import Section from './Section'
import { FadeUp } from './Motion'
import { Github, ExternalLink } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'AutoLux.az',
    description:
      'Full-featured car marketplace platform with user authentication, filtering, and responsive UI. Users can register, log in, and explore car listings seamlessly. Built for performance and maintainability..',
    image: '/projects/project1.png',
    github: 'https://github.com/elxanoffical/turbo.az',
    live: 'https://turbo-car-alpha.vercel.app/',
    tools: ['Next.js', 'Tailwind CSS', 'Hook Form', 'Date-fns','React Icons']
  },
  {
    title: 'Addax',
    description:
      'Modern analytics dashboard with reusable components, state management and smooth animations.',
    image: '/projects/project2.png',
    github: 'https://github.com/elxanoffical/Addax',
    live: 'https://addax-elxan.vercel.app/',
    tools: ['React.js', 'Sass', 'React-icons', 'Email.js',]
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

        {/* Mobile Slider / Desktop Grid */}
        <div
          className="
            flex md:grid md:grid-cols-2 gap-8
            overflow-x-auto md:overflow-visible
            snap-x snap-mandatory
            pb-4
          "
        >
          {projects.map(project => (
            <div
              key={project.title}
              className="
                group min-w-[85%] sm:min-w-[70%] md:min-w-0
                snap-start
                rounded-2xl overflow-hidden
                bg-white shadow-sm
                transition duration-300
                hover:shadow-xl
                hover:-translate-y-1
              "
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="
                    object-center cursor-pointer
                    transition duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-xl font-semibold mb-3 text-[#1F2933]">
                  {project.title}
                </h3>

                <p className="text-[#1F2933]/70 mb-5 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map(tool => (
                    <span
                      key={tool}
                      className="
                        text-xs px-3 py-1 rounded-full cursor-pointer
                        bg-[#BDCDD6]
                        text-[#1F2933]
                        transition
                        hover:bg-[#6096B4]
                        hover:text-white
                      "
                    >
                      {tool}
                    </span>
                  ))}
                </div>

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
