import { motion } from 'framer-motion'
import PhotoPlaceholder from './PhotoPlaceholder'
import { fadeInUp } from '../animations/variants'

function PageHeader({ title, image, height = '40vh' }) {
  return (
    <div className="relative w-full overflow-hidden" style={{ height }}>
      <PhotoPlaceholder src={image} alt={title} label={image} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative h-full flex items-center justify-center pt-20">
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="font-serif text-4xl md:text-5xl text-bone text-center px-6"
        >
          {title}
        </motion.h1>
      </div>
    </div>
  )
}

export default PageHeader
