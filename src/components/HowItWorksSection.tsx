import React from 'react'
import { ArrowRight } from 'lucide-react'
import { PROCESS_STEPS } from '../data/siteData'
import { Reveal } from './Reveal'

export const HowItWorksSection: React.FC = () => {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="bg-[#EAF5EE]/55 py-20 sm:py-24 lg:py-28 border-y border-[#E9EFEB]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-white px-3.5 py-1 text-xs font-semibold tracking-wider text-[#174D3B] uppercase border border-[#d6e8dd]">
              How It Works
            </span>
            <h2
              id="how-it-works-heading"
              className="mt-4 font-display text-3xl font-bold tracking-tight text-[#25332D] sm:text-4xl"
            >
              Getting Started Is Simple
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#52635B] sm:text-lg">
              Three straightforward steps to discuss your cleaning needs and
              coordinate directly.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {/* Desktop horizontal connector line */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-12 right-[16%] left-[16%] hidden h-px bg-[#cfe3d7] md:block"
          />

          {PROCESS_STEPS.map((step, index) => (
            <Reveal key={step.number} delayMs={index * 90}>
              <div className="card-elevated relative flex h-full flex-col rounded-2xl border border-[#E9EFEB] bg-white p-7 text-left sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#174D3B] font-display text-base font-bold text-white shadow-sm">
                  {step.number}
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-[#25332D]">
                  {step.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-[#52635B]">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={240}>
          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#174D3B] px-7 py-4 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#113B2D] hover:shadow-md"
            >
              <span>Request an Estimate</span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

