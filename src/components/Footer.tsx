import React from 'react'
import { ArrowUpRight, MapPin, Phone } from 'lucide-react'
import { BUSINESS_INFO, NAV_ITEMS, SERVICES } from '../data/siteData'
import { BrandMark } from './BrandMark'

interface FooterProps {
  onSelectService: (serviceFormValue: string) => void
}

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  return (
    <footer className="bg-[#113B2D] text-[#EAF5EE] pb-24 md:pb-0">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Business Brand & Contact */}
          <div className="lg:col-span-4">
            <a href="#home" className="inline-flex items-center gap-3">
              <BrandMark className="h-9 w-9 shrink-0" inverted />
              <span className="font-display text-lg font-bold text-white">
                {BUSINESS_INFO.name}
              </span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#EAF5EE]/80">
              Residential and commercial cleaning services in Calgary, Alberta,
              featuring an eco-conscious approach with cleaning methods
              described as pet- and kid-friendly.
            </p>

            <div className="mt-6 space-y-2.5 text-sm">
              <div className="flex items-center gap-2.5 text-[#EAF5EE]/90">
                <MapPin className="h-4 w-4 shrink-0 text-[#55A879]" aria-hidden="true" />
                <span>{BUSINESS_INFO.location}</span>
              </div>
              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center gap-2.5 font-semibold text-white transition-colors hover:text-[#55A879]"
              >
                <Phone className="h-4 w-4 shrink-0 text-[#55A879]" aria-hidden="true" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-xs font-bold tracking-wider text-white uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-[#EAF5EE]/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-xs font-bold tracking-wider text-white uppercase">
              Cleaning Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a
                    href="#contact"
                    onClick={() => onSelectService(service.formValue)}
                    className="text-[#EAF5EE]/80 transition-colors hover:text-white"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact CTA */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-xs font-bold tracking-wider text-white uppercase">
              Get in Touch
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[#EAF5EE]/80">
              Ready to discuss your home, apartment, or commercial space in
              Calgary?
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#55A879] px-5 py-3 text-sm font-semibold text-[#113B2D] transition-colors hover:bg-[#EAF5EE]"
              >
                <span>Request a Free Estimate</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4 text-[#55A879]" aria-hidden="true" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Discreet & Clear Independent Concept Disclaimer */}
        <div className="mt-12 border-t border-white/15 pt-8">
          <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-3.5">
            <p className="text-xs leading-relaxed text-[#EAF5EE]/85">
              {BUSINESS_INFO.disclaimer}
            </p>
          </div>
          <div className="mt-5 flex flex-col items-start justify-between gap-2 text-xs text-[#EAF5EE]/65 sm:flex-row sm:items-center">
            <p>
              Concept Design Presentation — {BUSINESS_INFO.name} ({BUSINESS_INFO.location})
            </p>
            <p>Prepared independently by Alira Digital</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

