import React, { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { BUSINESS_INFO, NAV_ITEMS } from '../data/siteData'
import { BrandMark } from './BrandMark'

interface NavbarProps {
  activeSection: string
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E9EFEB] shadow-[0_4px_20px_-10px_rgba(23,77,59,0.1)]'
          : 'bg-white/90 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-[#174D3B] focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a
          href="#home"
          className="group flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#174D3B]"
          aria-label={`${BUSINESS_INFO.name} — Home`}
        >
          <BrandMark className="h-9 w-9 shrink-0 transition-transform duration-300 group-hover:scale-[1.03]" />
          <div className="flex flex-col">
            <span className="font-display text-[1.05rem] font-bold tracking-tight text-[#174D3B] sm:text-lg leading-tight">
              {BUSINESS_INFO.name}
            </span>
            <span className="text-[0.7rem] font-medium tracking-wide text-[#52635B] uppercase">
              {BUSINESS_INFO.shortLocation}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id
            return (
              <a
                key={item.id}
                href={item.href}
                aria-current={isActive ? 'location' : undefined}
                className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-[#174D3B] bg-[#EAF5EE]/75 font-semibold'
                    : 'text-[#25332D]/80 hover:text-[#174D3B] hover:bg-[#F8FAF7]'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={BUSINESS_INFO.phoneHref}
            className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-[#174D3B] transition-colors hover:bg-[#EAF5EE]/70"
          >
            <Phone className="h-4 w-4 text-[#55A879]" aria-hidden="true" />
            <span>{BUSINESS_INFO.phoneDisplay}</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-[#174D3B] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#113B2D] hover:shadow-md active:scale-[0.99]"
          >
            Get a Free Estimate
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={BUSINESS_INFO.phoneHref}
            aria-label={`Call ${BUSINESS_INFO.phoneDisplay}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#E9EFEB] bg-[#F8FAF7] text-[#174D3B] transition-colors hover:bg-[#EAF5EE]"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#E9EFEB] bg-white text-[#25332D] transition-colors hover:bg-[#F8FAF7]"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="border-t border-[#E9EFEB] bg-white px-4 pt-4 pb-6 shadow-xl lg:hidden"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={handleNavClick}
                  aria-current={isActive ? 'location' : undefined}
                  className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#EAF5EE] text-[#174D3B] font-semibold'
                      : 'text-[#25332D] hover:bg-[#F8FAF7]'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>

          <div className="mt-5 flex flex-col gap-3 border-t border-[#E9EFEB] pt-5">
            <a
              href="#contact"
              onClick={handleNavClick}
              className="inline-flex w-full items-center justify-center rounded-xl bg-[#174D3B] px-5 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#113B2D]"
            >
              Get a Free Estimate
            </a>
            <a
              href={BUSINESS_INFO.phoneHref}
              onClick={handleNavClick}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#E9EFEB] bg-[#F8FAF7] px-5 py-3.5 text-base font-semibold text-[#174D3B] transition-colors hover:bg-[#EAF5EE]"
            >
              <Phone className="h-4 w-4 text-[#55A879]" aria-hidden="true" />
              <span>Call {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

