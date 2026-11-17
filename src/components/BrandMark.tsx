import React from 'react'

interface BrandMarkProps {
  className?: string
  inverted?: boolean
}

export const BrandMark: React.FC<BrandMarkProps> = ({
  className = 'h-9 w-9',
  inverted = false,
}) => {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect
        width="40"
        height="40"
        rx="11"
        fill={inverted ? '#EAF5EE' : '#174D3B'}
      />
      <path
        d="M27.8 12.2C20.5 12.6 14.5 17 13.2 24.6C12.95 26.05 14.1 27.3 15.55 27.1C23.05 26 27.8 20.4 27.8 12.2Z"
        fill={inverted ? '#174D3B' : '#55A879'}
      />
      <path
        d="M13.6 26.5C16.5 22 20.3 18.5 25.6 15"
        stroke={inverted ? '#EAF5EE' : '#EAF5EE'}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle
        cx="14"
        cy="14.2"
        r="1.7"
        fill={inverted ? '#55A879' : '#EAF5EE'}
      />
    </svg>
  )
}

