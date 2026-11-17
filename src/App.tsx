import React, { useEffect, useState } from 'react'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { FinalCtaSection } from './components/FinalCtaSection'
import { Footer } from './components/Footer'
import { GallerySection } from './components/GallerySection'
import { HeroSection } from './components/HeroSection'
import { HowItWorksSection } from './components/HowItWorksSection'
import { MobileActionBar } from './components/MobileActionBar'
import { Navbar } from './components/Navbar'
import { ServiceAreaSection } from './components/ServiceAreaSection'
import { ServicesSection } from './components/ServicesSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { TrustHighlights } from './components/TrustHighlights'
import { WhyChooseUsSection } from './components/WhyChooseUsSection'
import { NAV_ITEMS } from './data/siteData'

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home')
  const [selectedServiceRequest, setSelectedServiceRequest] = useState<{
    service: string
    key: number
  } | null>(null)

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id)
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          )

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id)
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSelectService = (serviceFormValue: string) => {
    setSelectedServiceRequest({ service: serviceFormValue, key: Date.now() })
  }

  return (
    <div className="min-h-screen bg-white text-[#25332D]">
      <Navbar activeSection={activeSection} />

      <main id="main-content">
        <HeroSection />
        <TrustHighlights />
        <ServicesSection onSelectService={handleSelectService} />
        <WhyChooseUsSection />
        <AboutSection />
        <HowItWorksSection />
        <GallerySection />
        <TestimonialsSection />
        <ServiceAreaSection />
        <ContactSection selectedServiceRequest={selectedServiceRequest} />
        <FinalCtaSection />
      </main>

      <Footer onSelectService={handleSelectService} />
      <MobileActionBar />
    </div>
  )
}

export default App

