import React from 'react'
import {
  ArrowRight,
  Briefcase,
  Building,
  Droplets,
  Home,
  Layers,
  Sparkles,
} from 'lucide-react'
import { SERVICES, type ServiceItem } from '../data/siteData'
import { Reveal } from './Reveal'

interface ServicesSectionProps {
  onSelectService: (serviceFormValue: string) => void
}

const serviceIconMap: Record<ServiceItem['iconName'], React.ComponentType<{ className?: string }>> = {
  home: Home,
  building: Building,
  briefcase: Briefcase,
  sparkles: Sparkles,
  droplets: Droplets,
  layers: Layers,
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
}) => {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-[#EAF5EE] px-3.5 py-1 text-xs font-semibold tracking-wider text-[#174D3B] uppercase">
              Our Services
            </span>
            <h2
              id="services-heading"
              className="mt-4 font-display text-3xl font-bold tracking-tight text-[#25332D] sm:text-4xl"
            >
              Cleaning That Fits Your Space and Lifestyle
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#52635B] sm:text-lg">
              From everyday home care to detailed cleaning tasks, explore
              services designed to help keep your space fresh and comfortable.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = serviceIconMap[service.iconName]
            return (
              <Reveal key={service.id} delayMs={index * 60}>
                <article className="card-elevated card-elevated-hover group flex h-full flex-col justify-between rounded-2xl border border-[#E9EFEB] bg-white p-7">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF5EE] text-[#174D3B] transition-colors duration-200 group-hover:bg-[#174D3B] group-hover:text-white">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span className="rounded-full bg-[#F8FAF7] px-2.5 py-1 text-[0.7rem] font-semibold tracking-wide text-[#52635B] border border-[#E9EFEB]">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-xl font-bold text-[#25332D]">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-[0.95rem] leading-relaxed text-[#52635B]">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-7 border-t border-[#E9EFEB]/80 pt-5">
                    <a
                      href="#contact"
                      onClick={() => onSelectService(service.formValue)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#174D3B] transition-colors hover:text-[#55A879]"
                    >
                      <span>Request an Estimate</span>
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

