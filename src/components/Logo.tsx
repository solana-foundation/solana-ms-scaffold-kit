import React from 'react'

interface LogoProps {
  className?: string
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 230 60"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="solanaGradient" x1="0" y1="0" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9945FF"/>
          <stop offset="50%" stopColor="#14F195"/>
          <stop offset="100%" stopColor="#00FFA3"/>
        </linearGradient>
      </defs>
      <path d="M20 15H60L50 25H10L20 15Z" fill="url(#solanaGradient)"/>
      <path d="M20 35H60L50 45H10L20 35Z" fill="url(#solanaGradient)"/>
      <text
        x="70"
        y="35"
        className="fill-current"
        style={{
          fontFamily: 'var(--font-geist-sans)',
          fontSize: '20px',
          fontWeight: 'bold'
        }}
      >
        Solana MS Kit
      </text>
    </svg>
  )
}
