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

export const circleReveal = {
  hidden: { clipPath: 'circle(0% at 50% 50%)', opacity: 0, scale: 0.94 },
  visible: {
    clipPath: 'circle(150% at 50% 50%)',
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}
