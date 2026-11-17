import React from 'react'
import { ArrowRight, Check, Phone } from 'lucide-react'
import { ABOUT_HIGHLIGHTS, BUSINESS_INFO } from '../data/siteData'
import { Reveal } from './Reveal'

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="overflow-x-clip bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Warm Photograph */}
          <Reveal className="lg:col-span-6">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -top-3 -right-3 -z-10 h-full w-full rounded-[1.75rem] border border-[#d6e8dd] bg-[#EAF5EE]/50 hidden sm:block"
              />
              <div className="overflow-hidden rounded-[1.5rem] border border-[#E9EFEB] bg-[#F8FAF7] shadow-[0_20px_50px_-24px_rgba(23,77,59,0.18)]">
                <img
                  src="./images/about-fresh-home.jpg"
                  alt="Illustrative sunlit open-concept dining room and kitchen with clean oak floors, spotless island, and natural greenery"
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          {/* Right Copy & Highlights */}
          <Reveal delayMs={100} className="lg:col-span-6">
            <span className="inline-block rounded-full bg-[#EAF5EE] px-3.5 py-1 text-xs font-semibold tracking-wider text-[#174D3B] uppercase">
              About Shannon’s Cleaning Service
            </span>

            <h2
              id="about-heading"
              className="mt-4 font-display text-3xl font-bold tracking-tight text-[#25332D] sm:text-4xl"
            >
              A Fresh Approach to Cleaning in Calgary
            </h2>

            <p className="mt-5 text-base leading-relaxed text-[#52635B] sm:text-lg">
              Shannon’s Cleaning Service offers residential and commercial
              cleaning in Calgary, Alberta. With an eco-conscious approach and
              cleaning methods described as pet- and kid-friendly, the business
              aims to help customers enjoy cleaner, more comfortable spaces.
            </p>

            {/* Three Short Grounded Highlights */}
            <ul className="mt-8 space-y-3.5" aria-label="Key service focus">
              {ABOUT_HIGHLIGHTS.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-[0.95rem] text-[#25332D]"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EAF5EE] text-[#174D3B]">
                    <Check className="h-3.5 w-3.5 stroke-[2.5]" aria-hidden="true" />
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#174D3B] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#113B2D] hover:shadow-md"
              >
                <span>Request a Free Estimate</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#E9EFEB] bg-[#F8FAF7] px-5 py-3.5 text-sm font-semibold text-[#174D3B] transition-colors hover:border-[#55A879] hover:bg-[#EAF5EE]/60"
              >
                <Phone className="h-4 w-4 text-[#55A879]" aria-hidden="true" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

