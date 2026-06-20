import { useState } from 'react'

/** Renders /assets/{src}; falls back to a labeled placeholder block if the asset is missing. */
function PhotoPlaceholder({ src, alt = '', label, className = '' }) {
  const [broken, setBroken] = useState(false)

  if (broken) {
    return (
      <div
        className={`flex items-center justify-center bg-bg-card border border-border text-text-muted text-[12px] uppercase tracking-[0.2em] ${className}`}
      >
        {label || alt || src}
      </div>
    )
  }

  return (
    <img
      src={`/assets/${src}`}
      alt={alt}
      className={`object-cover ${className}`}
      onError={() => setBroken(true)}
    />
  )
}

export default PhotoPlaceholder
