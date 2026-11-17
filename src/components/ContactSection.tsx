import React, { useEffect, useState } from 'react'
import {
  AlertCircle,
  CheckCircle2,
  Copy,
  Info,
  Loader2,
  MapPin,
  Phone,
  RotateCcw,
  Send,
} from 'lucide-react'
import {
  BUSINESS_INFO,
  PROPERTY_TYPES,
  SERVICE_OPTIONS,
} from '../data/siteData'
import { Reveal } from './Reveal'

interface ContactSectionProps {
  selectedServiceRequest: { service: string; key: number } | null
}

interface FormValues {
  fullName: string
  email: string
  phone: string
  propertyType: string
  serviceRequired: string
  preferredDate: string
  additionalDetails: string
}

interface FormErrors {
  fullName?: string
  email?: string
  phone?: string
  propertyType?: string
  serviceRequired?: string
}

const INITIAL_VALUES: FormValues = {
  fullName: '',
  email: '',
  phone: '',
  propertyType: '',
  serviceRequired: '',
  preferredDate: '',
  additionalDetails: '',
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedServiceRequest,
}) => {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'demo-success' | 'error'>('idle')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (selectedServiceRequest?.service) {
      const preselectedService = selectedServiceRequest.service
      setValues((prev) => ({
        ...prev,
        serviceRequired: preselectedService,
        propertyType:
          preselectedService === 'House Cleaning'
            ? 'House'
            : preselectedService === 'Apartment Cleaning'
              ? 'Apartment'
              : preselectedService === 'Commercial Cleaning'
                ? 'Commercial'
                : prev.propertyType,
      }))
      setErrors((prev) => ({ ...prev, serviceRequired: undefined }))
      setStatus((prev) => (prev === 'demo-success' ? 'idle' : prev))
    }
  }, [selectedServiceRequest])

  const validate = (data: FormValues): FormErrors => {
    const nextErrors: FormErrors = {}

    if (!data.fullName.trim() || data.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name.'
    }

    if (!data.email.trim()) {
      nextErrors.email = 'Please enter your email address.'
    } else if (!EMAIL_REGEX.test(data.email.trim())) {
      nextErrors.email = 'Please enter a valid email address (e.g. name@example.com).'
    }

    const digitsOnly = data.phone.replace(/\D/g, '')
    if (!data.phone.trim()) {
      nextErrors.phone = 'Please enter your phone number.'
    } else if (digitsOnly.length < 10) {
      nextErrors.phone = 'Please enter a valid 10-digit phone number.'
    }

    if (!data.propertyType) {
      nextErrors.propertyType = 'Please select a property type.'
    }

    if (!data.serviceRequired) {
      nextErrors.serviceRequired = 'Please choose the cleaning service you need.'
    }

    return nextErrors
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
    if (status === 'error') {
      setStatus('idle')
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const validationErrors = validate(values)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setStatus('error')
      const firstErrorField = Object.keys(validationErrors)[0]
      const element = document.getElementById(`field-${firstErrorField}`)
      element?.focus()
      return
    }

    setErrors({})
    setStatus('submitting')

    // Demo-only preview delay: does not transmit or persist personal data
    window.setTimeout(() => {
      setStatus('demo-success')
    }, 650)
  }

  const handleReset = () => {
    setValues(INITIAL_VALUES)
    setErrors({})
    setStatus('idle')
    setCopied(false)
  }

  const buildSummaryText = () => {
    const lines = [
      `Cleaning Estimate Request — ${BUSINESS_INFO.name}`,
      `Name: ${values.fullName.trim()}`,
      `Email: ${values.email.trim()}`,
      `Phone: ${values.phone.trim()}`,
      `Property Type: ${values.propertyType}`,
      `Service Required: ${values.serviceRequired}`,
      values.preferredDate ? `Preferred Date: ${values.preferredDate}` : null,
      values.additionalDetails.trim()
        ? `Additional Details: ${values.additionalDetails.trim()}`
        : null,
    ].filter(Boolean)
    return lines.join('\n')
  }

  const handleCopySummary = async () => {
    try {
      await navigator.clipboard.writeText(buildSummaryText())
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2500)
    } catch {
      setCopied(false)
    }
  }

  const errorCount = Object.keys(errors).length

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-[#F8FAF7] py-20 sm:py-24 lg:py-28 border-t border-[#E9EFEB]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Direct Contact Details */}
          <Reveal className="lg:col-span-5">
            <span className="inline-block rounded-full bg-[#EAF5EE] px-3.5 py-1 text-xs font-semibold tracking-wider text-[#174D3B] uppercase">
              Request an Estimate
            </span>

            <h2
              id="contact-heading"
              className="mt-4 font-display text-3xl font-bold tracking-tight text-[#25332D] sm:text-4xl"
            >
              Let’s Make Your Space Feel Fresh
            </h2>

            <p className="mt-4 text-base leading-relaxed text-[#52635B]">
              Tell us about your home, apartment, or commercial space in
              Calgary, or call directly to discuss your cleaning requirements
              and request an estimate.
            </p>

            {/* Contact Info Cards */}
            <div className="mt-8 space-y-4">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="card-elevated card-elevated-hover flex items-center gap-4 rounded-2xl border border-[#E9EFEB] bg-white p-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF5EE] text-[#174D3B]">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wider text-[#55A879] uppercase">
                    Call Directly
                  </p>
                  <p className="mt-0.5 font-display text-lg font-bold text-[#174D3B]">
                    {BUSINESS_INFO.phoneDisplay}
                  </p>
                </div>
              </a>

              <div className="card-elevated flex items-center gap-4 rounded-2xl border border-[#E9EFEB] bg-white p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF5EE] text-[#174D3B]">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wider text-[#55A879] uppercase">
                    Location
                  </p>
                  <p className="mt-0.5 font-display text-base font-bold text-[#25332D]">
                    {BUSINESS_INFO.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Transparent Demo Mode Notice */}
            <div className="mt-8 rounded-2xl border border-[#d6e8dd] bg-[#EAF5EE]/70 p-5">
              <div className="flex items-start gap-3">
                <Info
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#174D3B]"
                  aria-hidden="true"
                />
                <div className="text-xs leading-relaxed text-[#25332D]/90">
                  <p className="font-semibold text-[#174D3B]">
                    Interactive Concept Form (Demo Mode)
                  </p>
                  <p className="mt-1">
                    This concept form validates entries locally and does not
                    transmit or store personal information. To contact Shannon’s
                    Cleaning Service directly, please call{' '}
                    <a
                      href={BUSINESS_INFO.phoneHref}
                      className="font-semibold text-[#174D3B] underline underline-offset-2"
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                    . For a live site launch, this form connects to an email
                    delivery service or backend endpoint (such as Netlify Forms,
                    Formspree, or a custom API).
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Estimate Request Form */}
          <Reveal delayMs={90} className="lg:col-span-7">
            <div className="card-elevated rounded-3xl border border-[#E9EFEB] bg-white p-6 sm:p-8 lg:p-10">
              {status === 'demo-success' ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="py-4"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF5EE] text-[#174D3B]">
                    <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
                  </div>

                  <span className="mt-5 inline-block rounded-full bg-[#EAF5EE] px-3 py-1 text-xs font-semibold text-[#174D3B]">
                    Demo Mode Preview — Not Transmitted
                  </span>

                  <h3 className="mt-3 font-display text-2xl font-bold text-[#25332D]">
                    Your Estimate Summary Is Ready
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-[#52635B]">
                    Because this is an independent demonstration concept by
                    Alira Digital, no message was sent and no personal details
                    were stored. In a live deployment, this request would be
                    delivered directly to the business inbox via a configured
                    email/API integration.
                  </p>

                  {/* Formatted Preview Summary */}
                  <div className="mt-6 rounded-2xl border border-[#E9EFEB] bg-[#F8FAF7] p-5 text-sm">
                    <p className="text-xs font-semibold tracking-wider text-[#52635B] uppercase">
                      Prepared Request Summary
                    </p>
                    <dl className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      <div>
                        <dt className="text-xs text-[#52635B]">Name</dt>
                        <dd className="font-medium text-[#25332D]">
                          {values.fullName}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs text-[#52635B]">Email</dt>
                        <dd className="font-medium text-[#25332D]">
                          {values.email}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs text-[#52635B]">Phone</dt>
                        <dd className="font-medium text-[#25332D]">
                          {values.phone}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs text-[#52635B]">Property Type</dt>
                        <dd className="font-medium text-[#25332D]">
                          {values.propertyType}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs text-[#52635B]">
                          Service Required
                        </dt>
                        <dd className="font-medium text-[#25332D]">
                          {values.serviceRequired}
                        </dd>
                      </div>
                      {values.preferredDate && (
                        <div>
                          <dt className="text-xs text-[#52635B]">
                            Preferred Date
                          </dt>
                          <dd className="font-medium text-[#25332D]">
                            {values.preferredDate}
                          </dd>
                        </div>
                      )}
                    </dl>
                    {values.additionalDetails.trim() && (
                      <div className="mt-3 border-t border-[#E9EFEB] pt-3">
                        <dt className="text-xs text-[#52635B]">
                          Additional Details
                        </dt>
                        <dd className="mt-0.5 text-[#25332D]">
                          {values.additionalDetails}
                        </dd>
                      </div>
                    )}
                  </div>

                  {/* Direct Real-World Next Steps */}
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a
                      href={BUSINESS_INFO.phoneHref}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#174D3B] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#113B2D]"
                    >
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#d4e3da] bg-white px-5 py-3 text-sm font-semibold text-[#174D3B] transition-colors hover:bg-[#EAF5EE]/60"
                    >
                      <Copy className="h-4 w-4" aria-hidden="true" />
                      <span>
                        {copied ? 'Summary Copied' : 'Copy Request Summary'}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-[#52635B] transition-colors hover:bg-[#F8FAF7] hover:text-[#25332D]"
                    >
                      <RotateCcw className="h-4 w-4" aria-hidden="true" />
                      <span>Reset Form</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Estimate request form">
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-2 border-b border-[#E9EFEB] pb-5">
                    <div>
                      <h3 className="font-display text-xl font-bold text-[#25332D]">
                        Estimate Request Form
                      </h3>
                      <p className="mt-1 text-xs text-[#52635B]">
                        Fields marked with <span className="text-[#b91c1c]">*</span> are required.
                      </p>
                    </div>
                    <span className="rounded-full bg-[#EAF5EE] px-3 py-1 text-[0.7rem] font-semibold text-[#174D3B]">
                      Demo Mode
                    </span>
                  </div>

                  {/* Accessible Validation Alert Banner */}
                  {status === 'error' && errorCount > 0 && (
                    <div
                      role="alert"
                      className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50/90 p-4 text-sm text-red-800"
                    >
                      <AlertCircle
                        className="mt-0.5 h-5 w-5 shrink-0 text-red-600"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="font-semibold">
                          Please review the highlighted{' '}
                          {errorCount === 1 ? 'field' : 'fields'} below.
                        </p>
                        <p className="mt-0.5 text-xs text-red-700">
                          Complete all required details to preview your estimate
                          request.
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {/* 1. Full Name */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="field-fullName"
                        className="block text-sm font-semibold text-[#25332D]"
                      >
                        Full Name <span className="text-[#b91c1c]">*</span>
                      </label>
                      <input
                        id="field-fullName"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        required
                        value={values.fullName}
                        onChange={handleChange}
                        placeholder="Your full name"
                        aria-invalid={Boolean(errors.fullName)}
                        aria-describedby={
                          errors.fullName ? 'error-fullName' : undefined
                        }
                        className={`mt-1.5 block w-full rounded-xl border px-4 py-3 text-sm text-[#25332D] placeholder:text-[#52635B]/60 transition-colors focus:border-[#174D3B] focus:bg-white focus:outline-none ${
                          errors.fullName
                            ? 'border-red-400 bg-red-50/40'
                            : 'border-[#dce5df] bg-[#F8FAF7]/70 hover:border-[#b9cec1]'
                        }`}
                      />
                      {errors.fullName && (
                        <p
                          id="error-fullName"
                          className="mt-1.5 text-xs font-medium text-red-600"
                        >
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* 2. Email Address */}
                    <div>
                      <label
                        htmlFor="field-email"
                        className="block text-sm font-semibold text-[#25332D]"
                      >
                        Email Address <span className="text-[#b91c1c]">*</span>
                      </label>
                      <input
                        id="field-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={values.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={
                          errors.email ? 'error-email' : undefined
                        }
                        className={`mt-1.5 block w-full rounded-xl border px-4 py-3 text-sm text-[#25332D] placeholder:text-[#52635B]/60 transition-colors focus:border-[#174D3B] focus:bg-white focus:outline-none ${
                          errors.email
                            ? 'border-red-400 bg-red-50/40'
                            : 'border-[#dce5df] bg-[#F8FAF7]/70 hover:border-[#b9cec1]'
                        }`}
                      />
                      {errors.email && (
                        <p
                          id="error-email"
                          className="mt-1.5 text-xs font-medium text-red-600"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* 3. Phone Number */}
                    <div>
                      <label
                        htmlFor="field-phone"
                        className="block text-sm font-semibold text-[#25332D]"
                      >
                        Phone Number <span className="text-[#b91c1c]">*</span>
                      </label>
                      <input
                        id="field-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        value={values.phone}
                        onChange={handleChange}
                        placeholder="403-555-0199"
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={
                          errors.phone ? 'error-phone' : undefined
                        }
                        className={`mt-1.5 block w-full rounded-xl border px-4 py-3 text-sm text-[#25332D] placeholder:text-[#52635B]/60 transition-colors focus:border-[#174D3B] focus:bg-white focus:outline-none ${
                          errors.phone
                            ? 'border-red-400 bg-red-50/40'
                            : 'border-[#dce5df] bg-[#F8FAF7]/70 hover:border-[#b9cec1]'
                        }`}
                      />
                      {errors.phone && (
                        <p
                          id="error-phone"
                          className="mt-1.5 text-xs font-medium text-red-600"
                        >
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* 4. Property Type */}
                    <div>
                      <label
                        htmlFor="field-propertyType"
                        className="block text-sm font-semibold text-[#25332D]"
                      >
                        Property Type <span className="text-[#b91c1c]">*</span>
                      </label>
                      <select
                        id="field-propertyType"
                        name="propertyType"
                        required
                        value={values.propertyType}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.propertyType)}
                        aria-describedby={
                          errors.propertyType ? 'error-propertyType' : undefined
                        }
                        className={`mt-1.5 block w-full rounded-xl border px-4 py-3 text-sm text-[#25332D] transition-colors focus:border-[#174D3B] focus:bg-white focus:outline-none ${
                          errors.propertyType
                            ? 'border-red-400 bg-red-50/40'
                            : 'border-[#dce5df] bg-[#F8FAF7]/70 hover:border-[#b9cec1]'
                        }`}
                      >
                        <option value="">Select property type</option>
                        {PROPERTY_TYPES.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.propertyType && (
                        <p
                          id="error-propertyType"
                          className="mt-1.5 text-xs font-medium text-red-600"
                        >
                          {errors.propertyType}
                        </p>
                      )}
                    </div>

                    {/* 5. Service Required */}
                    <div>
                      <label
                        htmlFor="field-serviceRequired"
                        className="block text-sm font-semibold text-[#25332D]"
                      >
                        Service Required <span className="text-[#b91c1c]">*</span>
                      </label>
                      <select
                        id="field-serviceRequired"
                        name="serviceRequired"
                        required
                        value={values.serviceRequired}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.serviceRequired)}
                        aria-describedby={
                          errors.serviceRequired
                            ? 'error-serviceRequired'
                            : undefined
                        }
                        className={`mt-1.5 block w-full rounded-xl border px-4 py-3 text-sm text-[#25332D] transition-colors focus:border-[#174D3B] focus:bg-white focus:outline-none ${
                          errors.serviceRequired
                            ? 'border-red-400 bg-red-50/40'
                            : 'border-[#dce5df] bg-[#F8FAF7]/70 hover:border-[#b9cec1]'
                        }`}
                      >
                        <option value="">Select a service</option>
                        {SERVICE_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {errors.serviceRequired && (
                        <p
                          id="error-serviceRequired"
                          className="mt-1.5 text-xs font-medium text-red-600"
                        >
                          {errors.serviceRequired}
                        </p>
                      )}
                    </div>

                    {/* 6. Preferred Date (Optional) */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="field-preferredDate"
                        className="block text-sm font-semibold text-[#25332D]"
                      >
                        Preferred Date{' '}
                        <span className="font-normal text-[#52635B]">
                          (optional)
                        </span>
                      </label>
                      <input
                        id="field-preferredDate"
                        name="preferredDate"
                        type="date"
                        value={values.preferredDate}
                        onChange={handleChange}
                        className="mt-1.5 block w-full rounded-xl border border-[#dce5df] bg-[#F8FAF7]/70 px-4 py-3 text-sm text-[#25332D] transition-colors hover:border-[#b9cec1] focus:border-[#174D3B] focus:bg-white focus:outline-none"
                      />
                    </div>

                    {/* 7. Additional Details */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="field-additionalDetails"
                        className="block text-sm font-semibold text-[#25332D]"
                      >
                        Additional Details{' '}
                        <span className="font-normal text-[#52635B]">
                          (optional)
                        </span>
                      </label>
                      <textarea
                        id="field-additionalDetails"
                        name="additionalDetails"
                        rows={4}
                        value={values.additionalDetails}
                        onChange={handleChange}
                        placeholder="Share approximate size, rooms, or specific focus areas (e.g. floors, baseboards, walls, dusting)..."
                        className="mt-1.5 block w-full resize-y rounded-xl border border-[#dce5df] bg-[#F8FAF7]/70 px-4 py-3 text-sm text-[#25332D] placeholder:text-[#52635B]/60 transition-colors hover:border-[#b9cec1] focus:border-[#174D3B] focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="mt-7">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#174D3B] px-6 py-4 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#113B2D] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-75"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2
                            className="h-5 w-5 animate-spin"
                            aria-hidden="true"
                          />
                          <span>Preparing Request Preview...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" aria-hidden="true" />
                          <span>Send Estimate Request</span>
                        </>
                      )}
                    </button>

                    <p className="mt-3 text-center text-xs text-[#52635B]">
                      Demo form preview — no personal information is sent or
                      saved. Prefer to speak right away?{' '}
                      <a
                        href={BUSINESS_INFO.phoneHref}
                        className="font-semibold text-[#174D3B] underline underline-offset-2"
                      >
                        Call {BUSINESS_INFO.phoneDisplay}
                      </a>
                      .
                    </p>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

