'use client'
import { FadeUp } from './Motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-[#EEE9DA]">
      <div className="grid md:grid-cols-2 gap-20 w-full px-6 max-w-7xl mx-auto">

        <FadeUp>
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#1F2933]">
              Alex Johnson
            </h1>

            <p className="mt-6 text-xl text-[#6096B4]">
              Frontend Developer & UI Engineer
            </p>

            <p className="mt-6 max-w-xl leading-relaxed text-[#1F2933]/70">
              I build clean, maintainable, and user-focused web interfaces.
              My work combines thoughtful design with solid frontend engineering.
            </p>
          </div>
        </FadeUp>

        <FadeUp>
          <div className="w-full h-[420px] bg-[#BDCDD6] rounded-2xl shadow-sm" />
        </FadeUp>

      </div>
    </section>
  )
}
