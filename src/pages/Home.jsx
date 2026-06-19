import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PhotoPlaceholder from '../components/PhotoPlaceholder'
import { fadeInUp, fadeIn, staggerContainer, viewportOnce } from '../animations/variants'
import { featuredDishes } from '../data/menu'

const infoItems = [
  { icon: '🕐', label: 'Horário', value: '12h00 — 22h00' },
  { icon: '📍', label: 'Localização', value: 'Porto Moniz, Madeira' },
  { icon: '📞', label: 'Reservas', value: '+351 291 853 147' },
  { icon: '🐟', label: 'Especialidade', value: 'Peixe · Marisco · Espetada' },
]

const stats = [
  { value: '15+', label: 'Anos de história' },
  { value: '37', label: 'Pratos no menu' },
  { value: '335+', label: 'Avaliações' },
  { value: 'nº4', label: 'Restaurante em Porto Moniz' },
]

function Hero() {
  const imgRef = useRef(null)

  useEffect(() => {
    let current = 0
    let target = 0
    let rafId

    const onScroll = () => {
      target = window.scrollY * 0.15
    }

    const lerp = () => {
      current += (target - current) * 0.08
      if (imgRef.current) {
        imgRef.current.style.transform = `translateY(${current}px) scale(1.1)`
      }
      rafId = requestAnimationFrame(lerp)
    }

    window.addEventListener('scroll', onScroll)
    rafId = requestAnimationFrame(lerp)

    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div ref={imgRef} className="absolute inset-0 w-full h-full">
        <PhotoPlaceholder
          src="exterior-1.jpg"
          alt="Vila Baleia"
          label="exterior-1.jpg"
          className="w-full h-full"
        />
      </div>
      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.img
          variants={fadeInUp}
          src="/assets/logo-tail.png"
          alt=""
          className="h-10 w-auto mb-4 opacity-90"
        />

        <motion.span
          variants={fadeInUp}
          className="text-crimson font-sans font-medium text-[10px] tracking-[0.3em] uppercase mb-6"
        >
          Porto Moniz · Madeira
        </motion.span>

        <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-7xl text-white leading-[1.1]">
          Onde o Mar
          <br />
          <span className="italic">Encontra a Mesa</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-text-muted font-sans font-light text-sm tracking-[0.08em] mt-6 max-w-md"
        >
          Sabores de Porto Moniz, à sombra do Atlântico
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mt-10">
          <Link
            to="/reservas"
            className="bg-crimson text-white text-[11px] font-medium uppercase tracking-[0.12em] px-8 py-3.5 transition-opacity hover:opacity-90"
          >
            Reservar Mesa
          </Link>
          <Link
            to="/menu"
            className="border border-navy text-white text-[11px] font-medium uppercase tracking-[0.12em] px-8 py-3.5 transition-colors hover:bg-navy/20"
          >
            Ver Menu
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2"
      >
        <span className="text-white/60 text-[9px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          className="block w-px h-8 bg-white/40"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}

function InfoBar() {
  return (
    <section className="bg-[#080808] border-t border-b border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {infoItems.map((item, i) => (
          <div
            key={item.label}
            className={`flex flex-col items-center text-center px-6 py-8 ${
              i < infoItems.length - 1 ? 'md:border-r border-border' : ''
            }`}
          >
            <span className="text-crimson text-xl mb-3">{item.icon}</span>
            <span className="text-[#444] text-[9px] uppercase tracking-[0.15em] mb-1">{item.label}</span>
            <span className="text-[#CCC] text-xs font-light">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function SobrePreview() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
      className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center"
    >
      <motion.div variants={fadeInUp}>
        <span className="text-crimson font-sans font-medium text-[10px] tracking-[0.3em] uppercase">
          A Nossa História
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-white mt-4 leading-snug">
          Tradição e <span className="italic text-navy-light">sabor</span> num só lugar
        </h2>
        <p className="text-text-muted font-light text-sm leading-relaxed mt-6">
          No coração de Porto Moniz, o Vila Baleia serve a melhor gastronomia madeiriense desde
          há mais de 15 anos. Da espetada tradicional às lapas grelhadas com manteiga de alho,
          cada prato conta a história da ilha.
        </p>

        <div className="grid grid-cols-2 gap-6 mt-10">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-serif text-3xl text-white">{s.value}</div>
              <div className="text-text-muted text-[11px] uppercase tracking-[0.1em] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <PhotoPlaceholder
          src="interior-1.jpg"
          alt="Interior Vila Baleia"
          label="interior-1.jpg"
          className="w-full h-[420px] border border-border"
        />
      </motion.div>
    </motion.section>
  )
}

function MenuDestaque() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
      className="bg-bg-soft py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-14">
          <span className="text-crimson font-sans font-medium text-[10px] tracking-[0.3em] uppercase">
            Os Nossos Pratos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white mt-4">
            Menu em <span className="italic text-navy-light">destaque</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredDishes.map((dish) => (
            <motion.article
              key={dish.name}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="group bg-bg-card border border-border hover:border-navy transition-colors duration-300"
              style={{ willChange: 'transform' }}
            >
              <div className="h-44 overflow-hidden relative">
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <PhotoPlaceholder
                    src={dish.image}
                    alt={dish.name}
                    label={dish.image}
                    className="w-full h-full"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent opacity-80" />
                <motion.span
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="absolute top-3 left-3 bg-navy/90 text-white text-[9px] uppercase tracking-[0.15em] px-2.5 py-1"
                >
                  {dish.tag}
                </motion.span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg text-white">{dish.name}</h3>
                <p className="text-text-muted font-light text-xs leading-relaxed mt-3">{dish.description}</p>
                <motion.span
                  className="block text-crimson text-sm mt-4"
                  initial={false}
                  whileHover={{ scale: 1.05 }}
                >
                  €{dish.price.toFixed(2)}
                </motion.span>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div variants={fadeInUp} className="text-center mt-12">
          <Link
            to="/menu"
            className="inline-block border border-border-md text-white text-[11px] font-medium uppercase tracking-[0.12em] px-8 py-3.5 transition-colors hover:border-navy-light"
          >
            Ver menu completo
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}

function ReservasCTA() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
      className="bg-[#0D0D0D] py-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <motion.div variants={fadeInUp} className="flex flex-col justify-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white">
            Reserve a sua <span className="italic text-navy-light">mesa</span>
          </h2>
          <blockquote className="border-l-2 border-navy pl-5 mt-8">
            <p className="text-text-muted font-light italic text-sm leading-relaxed">
              "O melhor restaurante de Porto Moniz. Comida incrível, serviço simpático."
            </p>
            <cite className="block text-[#555] text-xs mt-3 not-italic">— Visitante no Google, 2025</cite>
          </blockquote>
          <Link
            to="/reservas"
            className="inline-block mt-10 bg-crimson text-white text-[11px] font-medium uppercase tracking-[0.12em] px-8 py-3.5 w-fit transition-opacity hover:opacity-90"
          >
            Reservar Agora
          </Link>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <MiniReservaForm />
        </motion.div>
      </div>
    </motion.section>
  )
}

function MiniReservaForm() {
  const inputClass =
    'w-full bg-[#141414] border border-[#222] text-[#CCC] text-xs font-sans px-4 py-3 focus:outline-none focus:border-navy transition-colors'

  return (
    <form
      className="bg-bg-card border border-border p-8 space-y-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <input className={inputClass} placeholder="Nome" required />
      <div className="grid grid-cols-2 gap-4">
        <select className={inputClass} defaultValue="2" required>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n}>
              {n} {n === 1 ? 'Pessoa' : 'Pessoas'}
            </option>
          ))}
        </select>
        <input type="date" className={inputClass} min={new Date().toISOString().split('T')[0]} required />
      </div>
      <select className={inputClass} defaultValue="" required>
        <option value="" disabled>
          Hora
        </option>
        {Array.from({ length: 20 }, (_, i) => {
          const total = 12 * 60 + i * 30
          const h = Math.floor(total / 60)
          const m = total % 60
          return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
        }).map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
      <textarea className={inputClass} rows={3} placeholder="Pedido especial (opcional)" />
      <button
        type="submit"
        className="w-full bg-crimson text-white text-[11px] font-medium uppercase tracking-[0.12em] py-3.5 transition-opacity hover:opacity-90"
      >
        Confirmar Reserva
      </button>
    </form>
  )
}

function GaleriaPreview() {
  const photos = ['interior-2.jpg', 'terraza.jpg', 'exterior-2.jpg']

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <motion.div variants={fadeInUp} className="text-center mb-14">
        <span className="text-crimson font-sans font-medium text-[10px] tracking-[0.3em] uppercase">Galeria</span>
        <h2 className="font-serif text-3xl md:text-4xl text-white mt-4">
          Uma <span className="italic text-navy-light">experiência</span> visual
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 h-[480px]">
        <motion.div variants={fadeInUp} className="col-span-2 row-span-2 relative group overflow-hidden border border-border">
          <PhotoPlaceholder src="exterior-1.jpg" alt="Vila Baleia" label="exterior-1.jpg" className="w-full h-full" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 text-white text-2xl transition-opacity">⊕</span>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} className="col-span-2 relative group overflow-hidden border border-border">
          <PhotoPlaceholder src="interior-1.jpg" alt="Interior" label="interior-1.jpg" className="w-full h-full" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 text-white text-2xl transition-opacity">⊕</span>
          </div>
        </motion.div>
        {photos.map((p) => (
          <motion.div key={p} variants={fadeInUp} className="relative group overflow-hidden border border-border">
            <PhotoPlaceholder src={p} alt={p} label={p} className="w-full h-full" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 text-white text-2xl transition-opacity">⊕</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div variants={fadeInUp} className="text-center mt-10">
        <Link
          to="/galeria"
          className="text-text-muted text-[11px] uppercase tracking-[0.12em] hover:text-white transition-colors"
        >
          Ver galeria completa →
        </Link>
      </motion.div>
    </motion.section>
  )
}

function Home() {
  return (
    <>
      <Hero />
      <InfoBar />
      <SobrePreview />
      <MenuDestaque />
      <ReservasCTA />
      <GaleriaPreview />
    </>
  )
}

export default Home
