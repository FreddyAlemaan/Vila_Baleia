import { useState } from 'react'

function Logo({ className = 'h-12' }) {
  const [broken, setBroken] = useState(false)

  if (broken) {
    return (
      <span className={`font-serif text-crimson leading-none ${className} flex items-center text-xl`}>
        Vila <span className="text-navy-light ml-1">Baleia</span>
      </span>
    )
  }

  return (
    <img
      src="/assets/logo.png"
      alt="Vila Baleia"
      className={`${className} w-auto object-contain`}
      onError={() => setBroken(true)}
    />
  )
}

export default Logo
