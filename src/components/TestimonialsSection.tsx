import React from 'react'
import { MessageSquareQuote } from 'lucide-react'
import { Reveal } from './Reveal'

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-[#F8FAF7] py-20 sm:py-24 border-t border-[#E9EFEB]"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <span className="inline-block rounded-full bg-[#EAF5EE] px-3.5 py-1 text-xs font-semibold tracking-wider text-[#174D3B] uppercase">
              Customer Trust
            </span>
            <h2
              id="testimonials-heading"
              className="mt-4 font-display text-3xl font-bold tracking-tight text-[#25332D] sm:text-4xl"
            >
              Trust Starts With a Good Experience
            </h2>
          </div>

          <div className="mt-10 rounded-3xl border border-dashed border-[#c7ddd0] bg-white px-6 py-12 text-center shadow-[0_8px_30px_-16px_rgba(23,77,59,0.08)] sm:px-12 sm:py-14">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF5EE] text-[#174D3B]">
              <MessageSquareQuote className="h-6 w-6" aria-hidden="true" />
            </div>

            <p className="mx-auto mt-5 max-w-lg font-display text-lg font-semibold text-[#25332D] sm:text-xl">
              Customer reviews can be added here once approved and verified.
            </p>

            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#52635B]">
              In keeping with authentic representation, verified client
              testimonials and direct feedback from Calgary customers can be
              featured in this section upon launch.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

