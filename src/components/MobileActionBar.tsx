import React, { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'
import { BUSINESS_INFO } from '../data/siteData'

export const MobileActionBar: React.FC = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 360)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      aria-label="Quick contact actions"
      className={`fixed right-0 bottom-0 left-0 z-40 border-t border-[#E9EFEB] bg-white/95 px-4 py-3 shadow-[0_-8px_24px_-12px_rgba(23,77,59,0.18)] backdrop-blur-md transition-transform duration-300 md:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="grid grid-cols-2 gap-3">
        <a
          href={BUSINESS_INFO.phoneHref}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#d4e3da] bg-[#F8FAF7] px-3 py-3 text-sm font-semibold text-[#174D3B]"
        >
          <Phone className="h-4 w-4 text-[#55A879]" aria-hidden="true" />
          <span>Call Now</span>
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-xl bg-[#174D3B] px-3 py-3 text-sm font-semibold text-white"
        >
          Free Estimate
        </a>
      </div>
    </div>
  )
}

