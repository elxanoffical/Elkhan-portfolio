"use client";
import Section from "./Section";
import { FadeUp } from "./Motion";

const skills = {
  frontend: [
    "TypeScript",
    "Next.js",
    "React.js",
    "Redux",
    "Redux Toolkit",
    "Tailwind CSS",
    "Material UI",
    "SCSS",
    "shadcn/ui",
    "SSR",
    "SSG",
    "SEO",
  ],
  backend: [
    "Node.js",
    "Express",
    "MongoDB",
    "REST",
    "GraphQL",
    "Strapi",
    "Supabase",
    "JWT",
    "NextAuth.js",
  ],
  soft: [
    "Problem solving",
    "Error analysis",
    "Code review",
    "Team collaboration",
    "Sprint planning",
  ],
};

export default function Skills() {
  return (
    <Section>
      <FadeUp>
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F2933]">Skills</h2>

        {/* Divider */}
        <div className="mt-4 mb-8">
          <div className="h-[2px] w-full max-w-md bg-[#6096B4] rounded-full" />
        </div>

        {/* FRONTEND */}
        <div className="mb-12 max-w-5xl">
          <h3 className="text-xl font-semibold mb-4 text-[#1F2933]">
            Front-end Development
          </h3>

          <div className="flex flex-wrap gap-3">
            {skills.frontend.map((skill) => (
              <span
                key={skill}
                className="
                  px-4 py-2 rounded-full text-sm
                  bg-[#BDCDD6] text-[#1F2933]
                  border border-transparent
                  transition cursor-pointer
                  hover:bg-transparent
                  hover:border-[#6096B4]
                  hover:text-[#6096B4]
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* BACKEND */}
        <div className="mb-12 max-w-5xl">
          <h3 className="text-xl font-semibold mb-4 text-[#1F2933]">
            Back-end Development
          </h3>

          <div className="flex flex-wrap gap-3">
            {skills.backend.map((skill) => (
              <span
                key={skill}
                className="
                  px-4 py-2 rounded-full text-sm
                  bg-[#BDCDD6] text-[#1F2933]
                  border border-transparent
                  transition
                  hover:bg-transparent
                  hover:border-[#6096B4]
                  hover:text-[#6096B4]
                  cursor-pointer
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* SOFT SKILLS */}
        <div className="max-w-5xl">
          <h3 className="text-xl font-semibold mb-4 text-[#1F2933]">
            Soft Skills
          </h3>

          <div className="flex flex-wrap gap-3">
            {skills.soft.map((skill) => (
              <span
                key={skill}
                className="
                  px-4 py-2 rounded-full text-sm
                  bg-[#BDCDD6] text-[#1F2933]
                  border border-transparent
                  transition
                  hover:bg-transparent
                  hover:border-[#6096B4]
                  hover:text-[#6096B4]
                  cursor-pointer
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}
