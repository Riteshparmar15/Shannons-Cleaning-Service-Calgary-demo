import React from 'react'
import { Building2, CheckCircle2, Heart, Leaf } from 'lucide-react'
import { WHY_CHOOSE_BENEFITS, type BenefitItem } from '../data/siteData'
import { Reveal } from './Reveal'

const benefitIconMap: Record<
  BenefitItem['iconName'],
  React.ComponentType<{ className?: string }>
> = {
  leaf: Leaf,
  heart: Heart,
  check: CheckCircle2,
  building2: Building2,
}

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-heading"
      className="overflow-x-clip bg-[#F8FAF7] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Visual Column */}
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -left-4 -z-10 h-44 w-44 rounded-3xl bg-[#EAF5EE]"
              />
              <div className="overflow-hidden rounded-[1.5rem] border border-[#E9EFEB] bg-white shadow-[0_20px_50px_-24px_rgba(23,77,59,0.2)]">
                <img
                  src="./images/eco-cleaning-care.jpg"
                  alt="Illustrative sunlit quartz countertop featuring amber glass bottles, fresh folded cotton cloths, a wooden brush, and eucalyptus stems"
                  width={900}
                  height={1200}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          {/* Right Content & Benefit Cards */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-block rounded-full bg-[#EAF5EE] px-3.5 py-1 text-xs font-semibold tracking-wider text-[#174D3B] uppercase">
                Why Choose Us
              </span>
              <h2
                id="why-choose-heading"
                className="mt-4 font-display text-3xl font-bold tracking-tight text-[#25332D] sm:text-4xl"
              >
                A Little More Care in Every Clean
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#52635B] sm:text-lg">
                Your space deserves thoughtful attention. Shannon’s Cleaning
                Service highlights an eco-friendly approach and cleaning methods
                described as pet- and kid-friendly.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {WHY_CHOOSE_BENEFITS.map((benefit, idx) => {
                const Icon = benefitIconMap[benefit.iconName]
                return (
                  <Reveal key={benefit.title} delayMs={idx * 70}>
                    <div className="card-elevated h-full rounded-2xl border border-[#E9EFEB] bg-white p-6">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF5EE] text-[#174D3B]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h3 className="mt-4 font-display text-lg font-bold text-[#25332D]">
                        {benefit.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#52635B]">
                        {benefit.description}
                      </p>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

