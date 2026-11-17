import React from 'react'
import { ArrowRight, Phone } from 'lucide-react'
import { BUSINESS_INFO } from '../data/siteData'
import { Reveal } from './Reveal'

export const FinalCtaSection: React.FC = () => {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden bg-[#174D3B] py-20 sm:py-24"
    >
      {/* Subtle organic radial light accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#55A879]/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#EAF5EE]/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-widest text-[#EAF5EE]/85 uppercase">
            {BUSINESS_INFO.location}
          </p>

          <h2
            id="final-cta-heading"
            className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            More Time for Life. Less Time Cleaning.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#EAF5EE]/90 sm:text-lg">
            Tell us about your space and explore cleaning options in Calgary.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-base font-semibold text-[#174D3B] shadow-md transition-all duration-200 hover:bg-[#EAF5EE] sm:w-auto"
            >
              <span>Request a Free Estimate</span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>

            <a
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-white/30 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 sm:w-auto"
            >
              <Phone className="h-4 w-4 text-[#EAF5EE]" aria-hidden="true" />
              <span>Call {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

