import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import PhotoPlaceholder from '../components/PhotoPlaceholder'
import { fadeInUp, staggerContainer, viewportOnce } from '../animations/variants'

const photos = [
  { src: 'exterior-1.jpg', tall: true },
  { src: 'exterior-2.jpg', tall: false },
  { src: 'terraza.jpg', tall: true },
  { src: 'interior-1.jpg', tall: false },
  { src: 'interior-2.jpg', tall: true },
]

function Lightbox({ index, onClose, onNext, onPrev }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, onNext, onPrev])

  const photo = photos[index]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center px-6"
      onClick={onClose}
    >
      <button
        aria-label="Fechar"
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white text-2xl"
      >
        ✕
      </button>
      <button
        aria-label="Anterior"
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        className="absolute left-4 md:left-8 text-white/70 hover:text-white text-3xl"
      >
        ‹
      </button>
      <button
        aria-label="Seguinte"
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        className="absolute right-4 md:right-8 text-white/70 hover:text-white text-3xl"
      >
        ›
      </button>

      <div onClick={(e) => e.stopPropagation()} className="max-w-4xl w-full">
        <PhotoPlaceholder
          src={photo.src}
          alt={photo.src}
          label={photo.src}
          className="w-full max-h-[80vh] border border-border-md"
        />
      </div>
    </motion.div>
  )
}

function Galeria() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const next = useCallback(() => setLightboxIndex((i) => (i + 1) % photos.length), [])
  const prev = useCallback(() => setLightboxIndex((i) => (i - 1 + photos.length) % photos.length), [])

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <span className="text-white font-sans font-medium text-[12px] tracking-[0.3em] uppercase">
            Galeria
          </span>
          <h1 className="font-serif text-3xl md:text-4xl text-white mt-4">
            Uma <span className="italic text-navy-light">experiência</span> visual
          </h1>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 [&>*]:break-inside-avoid"
          style={{ columnFill: 'balance' }}
        >
          {photos.map((photo, i) => (
            <motion.button
              key={photo.src}
              variants={fadeInUp}
              onClick={() => setLightboxIndex(i)}
              className={`relative group overflow-hidden border border-border ${
                photo.tall ? 'row-span-2' : ''
              }`}
            >
              <PhotoPlaceholder
                src={photo.src}
                alt={photo.src}
                label={photo.src}
                className={`w-full ${photo.tall ? 'h-[420px]' : 'h-[200px]'}`}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-white text-2xl transition-opacity">⊕</span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNext={next}
          onPrev={prev}
        />
      )}
    </div>
  )
}

export default Galeria
