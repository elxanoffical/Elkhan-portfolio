"use client";
import Section from "./Section";
import { FadeUp } from "./Motion";

export default function About() {
  return (
    <Section>
      <FadeUp>
        <h2 className="text-4xl font-semibold mb-2 text-[#1F2933]">About Me</h2>

        {/* SECTION DIVIDER */}
        <div className="mt-4 mb-10">
          <div className="h-[2px] w-full bg-[#6096B4] rounded-full" />
        </div>

        <p className="max-w-3xl text-lg leading-relaxed text-[#1F2933]/80">
          I’m a frontend developer who enjoys turning complex ideas into clean,
          elegant, and intuitive web experiences. I work primarily with React
          and Next.js, focusing on writing code that is both scalable and easy
          to understand.
        </p>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#1F2933]/80">
          I care deeply about design details, performance, and usability.
          Whether I’m building a small landing page or a larger application, my
          goal is always the same: create interfaces that feel natural to use
          and are built to last.
        </p>

        {/* OPTION 1 — WHAT I FOCUS ON */}
        <div className="mt-12 max-w-3xl">
          <h3 className="text-xl font-medium mb-4 text-[#1F2933]">
            What I focus on
          </h3>

          <ul className="space-y-3 text-[#1F2933]/75">
            <li>• Clean and scalable UI architecture</li>
            <li>• Smooth and intuitive user experience</li>
            <li>• Performance, accessibility, and best practices</li>
          </ul>
        </div>

        {/* OPTION 2 — STATS */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 gap-10 max-w-3xl">
          <div>
            <p className="text-4xl font-bold text-[#6096B4]">02+</p>
            <p className="mt-2 text-sm uppercase tracking-wide text-[#1F2933]/60">
              Years Experience
            </p>
          </div>

          <div>
            <p className="text-4xl font-bold text-[#6096B4]">15+</p>
            <p className="mt-2 text-sm uppercase tracking-wide text-[#1F2933]/60">
              Projects Completed
            </p>
          </div>

          <div>
            <p className="text-4xl font-bold text-[#6096B4]">100%</p>
            <p className="mt-2 text-sm uppercase tracking-wide text-[#1F2933]/60">
              Attention to Detail
            </p>
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}
