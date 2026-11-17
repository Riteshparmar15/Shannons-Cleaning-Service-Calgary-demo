import React from 'react'
import { ArrowRight, Leaf, MapPin, Phone } from 'lucide-react'
import { BUSINESS_INFO } from '../data/siteData'

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-b from-[#F8FAF7] via-white to-white pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24"
    >
      {/* Subtle architectural background shape */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 -z-0 h-[420px] w-[420px] translate-x-1/3 -translate-y-1/4 rounded-full bg-[#EAF5EE]/65 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Copy Column */}
          <div className="lg:col-span-6">
            {/* Small Trust Label */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d6e8dd] bg-[#EAF5EE]/80 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#174D3B] sm:text-sm">
              <MapPin className="h-3.5 w-3.5 text-[#55A879]" aria-hidden="true" />
              <span>Cleaning Services in Calgary, Alberta</span>
            </div>

            {/* Single Page H1 */}
            <h1
              id="hero-heading"
              className="font-display text-4xl font-extrabold tracking-tight text-[#25332D] sm:text-5xl lg:text-[3.35rem] lg:leading-[1.1]"
            >
              A Cleaner Home.{' '}
              <span className="text-[#174D3B]">A Fresher Way to Live.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#52635B] sm:text-lg sm:leading-relaxed">
              Enjoy more time for what matters. Discover thoughtful residential
              and commercial cleaning services in Calgary, with an eco-conscious
              approach to keeping spaces fresh and comfortable.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#174D3B] px-6 py-4 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#113B2D] hover:shadow-md active:scale-[0.99]"
              >
                <span>Request a Free Estimate</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>

              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-[#d4e3da] bg-white px-6 py-4 text-base font-semibold text-[#174D3B] transition-all duration-200 hover:border-[#55A879] hover:bg-[#F8FAF7]"
              >
                <Phone className="h-4 w-4 text-[#55A879]" aria-hidden="true" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Grounded quick reassurance line */}
            <p className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#52635B]">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#55A879]" aria-hidden="true" />
                Eco-friendly positioning
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#55A879]" aria-hidden="true" />
                Pet- &amp; kid-friendly methods
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#55A879]" aria-hidden="true" />
                Residential &amp; commercial
              </span>
            </p>
          </div>

          {/* Right Photography Column */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Soft mint backdrop accent */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 -z-10 rounded-[2rem] bg-[#EAF5EE]/70 hidden sm:block"
              />

              <div className="overflow-hidden rounded-[1.5rem] border border-[#E9EFEB] bg-[#F8FAF7] shadow-[0_24px_60px_-24px_rgba(23,77,59,0.22)]">
                <img
                  src="./images/hero-living-room.jpg"
                  alt="Illustrative sunlit modern living room with spotless hardwood floors, soft neutral seating, and fresh indoor greenery"
                  width={1200}
                  height={900}
                  fetchPriority="high"
                  className="aspect-[4/3] w-full object-cover object-center"
                />
              </div>

              {/* Subtle Floating Visual Element */}
              <div className="mt-4 flex items-center gap-3.5 rounded-2xl border border-[#E9EFEB] bg-white/95 p-4 shadow-[0_14px_34px_-12px_rgba(23,77,59,0.16)] backdrop-blur-md sm:absolute sm:bottom-5 sm:left-5 sm:mt-0 sm:max-w-xs">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF5EE] text-[#174D3B]">
                  <Leaf className="h-5 w-5 text-[#174D3B]" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-[#25332D]">
                    Eco-Conscious Home Care
                  </p>
                  <p className="mt-0.5 text-xs leading-snug text-[#52635B]">
                    Pet- &amp; kid-friendly cleaning methods for homes and
                    workplaces in Calgary.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

