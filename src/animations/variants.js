export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
}

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

export const viewportOnce = { once: true, margin: '-100px' }
