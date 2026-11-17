import React from 'react'
import { ArrowRight, MapPin, Phone } from 'lucide-react'
import { BUSINESS_INFO } from '../data/siteData'
import { Reveal } from './Reveal'

export const ServiceAreaSection: React.FC = () => {
  return (
    <section
      id="service-area"
      aria-labelledby="service-area-heading"
      className="bg-white py-20 sm:py-24 border-t border-[#E9EFEB]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-[#E9EFEB] bg-[#F8FAF7] p-8 sm:p-10 lg:p-14">
            <div className="grid items-center gap-10 lg:grid-cols-12">
              {/* Left Copy */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#EAF5EE] px-3.5 py-1 text-xs font-semibold tracking-wider text-[#174D3B] uppercase">
                  <MapPin className="h-3.5 w-3.5 text-[#55A879]" aria-hidden="true" />
                  <span>Service Area</span>
                </div>

                <h2
                  id="service-area-heading"
                  className="mt-4 font-display text-3xl font-bold tracking-tight text-[#25332D] sm:text-4xl"
                >
                  Cleaning Services in Calgary, Alberta
                </h2>

                <p className="mt-4 max-w-xl text-base leading-relaxed text-[#52635B] sm:text-lg">
                  Looking for cleaning support in Calgary? Get in touch to
                  discuss your property and service requirements.
                </p>

                <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                  <a
                    href="#contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#174D3B] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#113B2D]"
                  >
                    <span>Request an Estimate</span>
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>

                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#d4e3da] bg-white px-5 py-3.5 text-sm font-semibold text-[#174D3B] transition-colors hover:border-[#55A879] hover:bg-[#EAF5EE]/50"
                  >
                    <Phone className="h-4 w-4 text-[#55A879]" aria-hidden="true" />
                    <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                  </a>
                </div>
              </div>

              {/* Right Minimalist Calgary Location Card (No fabricated street address or neighbourhoods) */}
              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-2xl border border-[#dceae1] bg-white p-7 shadow-[0_12px_36px_-18px_rgba(23,77,59,0.16)]">
                  {/* Subtle abstract architectural topographic arcs */}
                  <svg
                    viewBox="0 0 320 180"
                    fill="none"
                    aria-hidden="true"
                    className="w-full h-36 rounded-xl bg-[#EAF5EE]/60"
                  >
                    <circle
                      cx="160"
                      cy="90"
                      r="110"
                      stroke="#cfe3d7"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                    <circle
                      cx="160"
                      cy="90"
                      r="74"
                      stroke="#55A879"
                      strokeOpacity="0.35"
                      strokeWidth="1.25"
                    />
                    <circle
                      cx="160"
                      cy="90"
                      r="38"
                      fill="#55A879"
                      fillOpacity="0.14"
                    />
                    <circle cx="160" cy="90" r="10" fill="#174D3B" />
                    <circle cx="160" cy="90" r="4" fill="#FFFFFF" />
                  </svg>

                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold tracking-wider text-[#55A879] uppercase">
                        Location
                      </p>
                      <p className="mt-1 font-display text-lg font-bold text-[#25332D]">
                        {BUSINESS_INFO.location}
                      </p>
                      <p className="mt-1 text-xs text-[#52635B]">
                        Residential &amp; Commercial Cleaning Inquiries
                      </p>
                    </div>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF5EE] text-[#174D3B]">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

