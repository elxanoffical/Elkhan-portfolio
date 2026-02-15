'use client'
import Section from './Section'
import { FadeUp } from './Motion'
import { Mail, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <Section>
      <FadeUp>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F2933]">
          Let’s Work Together
        </h2>

        {/* Divider */}
        <div className="mt-4 mb-8">
          <div className="h-[2px] w-full max-w-md bg-[#6096B4] rounded-full" />
        </div>

        {/* Contact Card */}
        <div
          className="
            relative overflow-hidden
            rounded-3xl p-5 sm:p-10
            bg-white
            shadow-lg
            transition duration-300
            hover:shadow-2xl
          "
        >

          {/* Soft background accent */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#6096B4]/25 rounded-full blur-3xl" />

          <p className="mb-10 max-w-xl text-[#1F2933]/70 relative z-10">
            I’m open to freelance projects, collaborations, and new
            opportunities. If you have an idea or project in mind,
            feel free to reach out.
          </p>

          <div className="space-y-6 relative z-10">

            {/* Email */}
            <a
              href="mailto:elxanmeherremli9@gmail.com"
              className="
                flex items-center gap-4 
                p-4 rounded-xl
                bg-[#F4F7FA]
                transition duration-300
                hover:bg-[#6096B4]
                hover:text-white
              "
            >
              <Mail size={22} />
              <span className="font-medium text-sm sm:text-lg">
                elxanmeherremli9@gmail.com
              </span>
            </a>

            {/* Phone */}
            <a
              href="tel:+994554926731"
              className="
                flex items-center gap-4
                p-4 rounded-xl
                bg-[#F4F7FA]
                transition duration-300
                hover:bg-[#6096B4]
                hover:text-white
              "
            >
              <Phone size={22} />
              <span className="font-medium text-md sm:text-lg">
                +994 55 492 67 31
              </span>
            </a>

          </div>
        </div>

      </FadeUp>
    </Section>
  )
}
