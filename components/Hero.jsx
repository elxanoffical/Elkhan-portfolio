"use client";
import { FadeUp } from "./Motion";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-[#EEE9DA]">
      <div className="grid md:grid-cols-2 gap-20 w-full px-6 max-w-7xl mx-auto">
        {/* TEXT SIDE */}
        <FadeUp>
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#1F2933]">
              I am Elkhan
            </h1>

            <p className="mt-6 text-xl text-[#6096B4]">
              Frontend Developer & UI Engineer
            </p>

            <p className="mt-6 max-w-xl leading-relaxed text-[#1F2933]/70">
              I build clean, maintainable, and user-focused web interfaces. My
              work combines thoughtful design with solid frontend engineering.
            </p>

            {/* ACTIONS */}
            <div className="mt-8 flex items-center gap-6">
              {/* Download CV */}
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center px-6 py-3 rounded-xl
                           bg-[#6096B4] text-white font-medium
                           hover:bg-[#4a7f9a] transition"
              >
                Download CV
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-4 text-[#6096B4] text-2xl">
                <a
                  href="https://www.linkedin.com/in/meherremli/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1F2933] transition"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://github.com/elxanoffical"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1F2933] transition"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* IMAGE SIDE */}
        <FadeUp>
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-sm bg-[#BDCDD6]">
            <Image
              src="/"
              alt="Elkhan profile photo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
