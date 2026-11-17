import React from 'react'
import { Building2, Home, Leaf, PawPrint } from 'lucide-react'
import { TRUST_HIGHLIGHTS } from '../data/siteData'

const iconMap = {
  leaf: Leaf,
  paw: PawPrint,
  home: Home,
  building: Building2,
}

export const TrustHighlights: React.FC = () => {
  return (
    <section
      aria-label="Service highlights"
      className="border-y border-[#E9EFEB] bg-[#F8FAF7]"
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {TRUST_HIGHLIGHTS.map((item) => {
            const Icon = iconMap[item.iconName]
            return (
              <div
                key={item.title}
                className="flex items-center gap-3.5 rounded-2xl border border-[#E9EFEB]/90 bg-white px-4 py-4 shadow-[0_2px_10px_-6px_rgba(23,77,59,0.08)]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF5EE] text-[#174D3B]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="font-display text-sm font-bold text-[#25332D] leading-snug">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-xs text-[#52635B]">{item.detail}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

