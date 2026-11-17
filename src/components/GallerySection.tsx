import React, { useEffect, useState } from 'react'
import { Expand, X } from 'lucide-react'
import { GALLERY_ITEMS, type GalleryItem } from '../data/siteData'
import { Reveal } from './Reveal'

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null)
      }
    }
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedImage])

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="inline-block rounded-full bg-[#EAF5EE] px-3.5 py-1 text-xs font-semibold tracking-wider text-[#174D3B] uppercase">
                Visual Inspiration
              </span>
              <h2
                id="gallery-heading"
                className="mt-4 font-display text-3xl font-bold tracking-tight text-[#25332D] sm:text-4xl"
              >
                A Fresh Space Feels Different
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#52635B] sm:text-lg">
                Clean, calm interiors across residential homes, apartments, and
                commercial spaces.
              </p>
            </div>
            <p className="text-xs font-medium text-[#52635B] bg-[#F8FAF7] border border-[#E9EFEB] rounded-lg px-3 py-2">
              Illustrative photography for concept preview only
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_ITEMS.map((item, idx) => (
            <Reveal key={item.id} delayMs={idx * 60}>
              <figure className="group relative overflow-hidden rounded-2xl border border-[#E9EFEB] bg-[#F8FAF7] card-elevated">
                <button
                  type="button"
                  onClick={() => setSelectedImage(item)}
                  aria-label={`View larger preview: ${item.title}`}
                  className="block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#174D3B]"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.alt}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#174D3B]/55 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span
                      aria-hidden="true"
                      className="absolute top-3.5 right-3.5 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#174D3B] opacity-0 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:opacity-100"
                    >
                      <Expand className="h-4 w-4" />
                    </span>
                  </div>
                  <figcaption className="flex items-center justify-between px-5 py-4 bg-white">
                    <div>
                      <p className="font-display text-sm font-bold text-[#25332D]">
                        {item.title}
                      </p>
                      <p className="text-xs text-[#52635B] mt-0.5">
                        {item.category}
                      </p>
                    </div>
                    <span className="text-[0.68rem] font-medium text-[#52635B]/80">
                      Illustrative
                    </span>
                  </figcaption>
                </button>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-[#52635B]">
          Note: All gallery photographs are illustrative concept visuals and do
          not depict actual Shannon’s Cleaning Service projects or client
          properties.
        </p>
      </div>

      {/* Accessible Lightbox Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#174D3B]/75 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image preview"
              className="absolute top-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[#25332D] shadow-md transition-colors hover:bg-[#EAF5EE] hover:text-[#174D3B]"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[75vh] w-full object-cover"
            />
            <div className="flex flex-wrap items-center justify-between gap-2 px-6 py-4 bg-white border-t border-[#E9EFEB]">
              <div>
                <p className="font-display text-base font-bold text-[#25332D]">
                  {selectedImage.title}
                </p>
                <p className="text-xs text-[#52635B]">
                  {selectedImage.category} — Illustrative concept photograph
                </p>
              </div>
              <a
                href="#contact"
                onClick={() => setSelectedImage(null)}
                className="inline-flex items-center rounded-lg bg-[#174D3B] px-4 py-2 text-xs font-semibold text-white hover:bg-[#113B2D]"
              >
                Request an Estimate
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

