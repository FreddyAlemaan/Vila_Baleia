import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import PhotoPlaceholder from '../components/PhotoPlaceholder'
import { fadeInUp, fadeIn, staggerContainer, viewportOnce, circleReveal } from '../animations/variants'
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

const eyebrowClass = 'text-white font-sans font-medium text-[12px] tracking-[0.3em] uppercase'

function ChapterDivider() {
  return (
    <div className="max-w-7xl mx-auto px-6 flex items-center gap-4 py-2">
      <div className="flex-1 h-px bg-border" />
      <div className="w-1 h-1 rounded-full bg-navy-light" />
      <div className="flex-1 h-px bg-border" />
    </div>
  )
}

function Hero() {
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <section className="relative h-screen w-full">
      {!videoError ? (
        <div className="absolute inset-0 overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/assets/hero-poster.jpg"
            onError={() => setVideoError(true)}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.45)' }}
          >
            <source src="/assets/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
      ) : (
        <PhotoPlaceholder
          src="exterior-1.jpg"
          alt="Vila Baleia"
          label="exterior-1.jpg"
          className="absolute inset-0 w-full h-full overflow-hidden"
        />
      )}
      <div className="absolute inset-0 bg-black/50" />

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

        <motion.span variants={fadeInUp} className={`${eyebrowClass} mb-6`}>
          Porto Moniz · Madeira
        </motion.span>

        <div className="flex items-center justify-center gap-6 md:gap-12">
          <motion.span
            variants={fadeInUp}
            className="hidden md:block text-white/70 font-sans text-[11px] tracking-[0.2em] uppercase"
          >
            Madeira
            <br />
            Portugal
          </motion.span>

          <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-7xl text-white leading-[1.1]">
            Onde o Mar
            <br />
            <span className="italic">Encontra a Mesa</span>
          </motion.h1>

          <motion.span
            variants={fadeInUp}
            className="hidden md:block text-white/70 font-sans text-[11px] tracking-[0.2em] uppercase"
          >
            Desde
            <br />
            2011
          </motion.span>
        </div>

        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mt-10 md:hidden">
          <Link
            to="/reservas"
            className="bg-white text-bg text-[12px] font-medium uppercase tracking-[0.12em] px-8 py-3.5 transition-opacity hover:opacity-90"
          >
            Reservar Mesa
          </Link>
          <Link
            to="/menu"
            className="border border-navy text-white text-[12px] font-medium uppercase tracking-[0.12em] px-8 py-3.5 transition-colors hover:bg-navy/20"
          >
            Ver Menu
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="hidden md:flex absolute bottom-12 left-12 flex-col items-start max-w-xs"
      >
        <p className="text-white/70 font-sans font-light text-sm leading-relaxed mb-6">
          Sabores de Porto Moniz, à sombra do Atlântico — ingredientes frescos do mar e da ilha, em
          cada prato.
        </p>
        <div className="flex gap-4">
          <Link
            to="/reservas"
            className="bg-white text-bg text-[12px] font-medium uppercase tracking-[0.12em] px-6 py-3 transition-opacity hover:opacity-90"
          >
            Reservar Mesa
          </Link>
          <Link
            to="/menu"
            className="border border-white/40 text-white text-[12px] font-medium uppercase tracking-[0.12em] px-6 py-3 transition-colors hover:bg-white/10"
          >
            Ver Menu
          </Link>
        </div>
      </motion.div>

      <motion.a
        href="https://www.google.com/maps/search/?api=1&query=Vila+Baleia+Porto+Moniz+Madeira"
        target="_blank"
        rel="noreferrer"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="hidden md:block absolute bottom-0 right-12 translate-y-1/6 w-72 bg-white px-7 py-6 shadow-xl transition-opacity hover:opacity-90"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={i < 4 ? 'text-navy' : 'text-bg/20'}>
                ★
              </span>
            ))}
          </div>
          <img src="/assets/logo-tail.png" alt="" className="h-6 w-auto" />
        </div>
        <div className="h-px bg-bg/15 my-4" />
        <div className="flex items-end justify-between">
          <div className="flex items-baseline gap-1">
            <span className="font-serif text-4xl text-bg">3.9</span>
            <span className="text-bg/50 text-sm">/5</span>
          </div>
          <div className="text-right">
            <p className="text-bg text-[11px] uppercase tracking-[0.12em]">Google Reviews</p>
            <p className="text-bg/50 text-[11px] mt-1">943 opiniões</p>
          </div>
        </div>
      </motion.a>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2 md:hidden"
      >
        <span className="text-white/80 text-[12px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          className="block w-px h-8 bg-white/40"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}

function ParallaxSection() {
  const sectionRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    let rafId
    const tick = () => {
      if (sectionRef.current && imgRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const offset = rect.top * 0.25
        imgRef.current.style.transform = `translateY(${offset}px) scale(1.15)`
      }
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-[50vh] flex items-center justify-center overflow-hidden"
    >
      <div ref={imgRef} className="absolute inset-0 w-full h-full" style={{ willChange: 'transform' }}>
        <PhotoPlaceholder src="exterior-1.jpg" alt="" className="w-full h-full" />
      </div>
      <div className="absolute inset-0 bg-black/65" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="relative z-10 text-center px-6"
      >
        <motion.p variants={fadeInUp} className={`${eyebrowClass} mb-4`}>
          Porto Moniz · Madeira
        </motion.p>
        <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
          Onde o oceano <em className="text-navy-light">encontra</em>
          <br />a montanha
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-sm text-white/75 tracking-widest font-light max-w-md mx-auto">
          No extremo norte da ilha, a natureza e a gastronomia encontram-se à mesa.
        </motion.p>
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
            <span className="text-white text-xl mb-3">{item.icon}</span>
            <span className="text-[#7A7A7A] text-[12px] uppercase tracking-[0.15em] mb-1">{item.label}</span>
            <span className="text-[#CCC] text-xs font-light">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function CapituloLugar() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
      className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center"
    >
      <motion.div variants={fadeInUp}>
        <motion.p variants={fadeInUp} className={`${eyebrowClass} mb-3`}>
          Capítulo I
        </motion.p>
        <motion.h2 variants={fadeInUp} className="font-serif text-3xl md:text-4xl text-white leading-tight">
          Um lugar onde o tempo
          <br />
          <em className="italic text-navy-light">parece parar</em>
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-text-muted font-light text-sm leading-relaxed mt-6">
          No coração de Porto Moniz, entre montanhas verdes e o Atlântico infinito, o Vila Baleia
          nasceu da paixão pela gastronomia da ilha.
        </motion.p>
        <motion.p variants={fadeInUp} className="text-text-muted font-light text-sm leading-relaxed mt-4">
          Cada prato que servimos carrega décadas de tradição madeiriense — desde as lapas
          grelhadas com manteiga de alho até à espetada regional preparada como manda a receita
          antiga.
        </motion.p>
      </motion.div>

      <motion.div variants={fadeInUp} className="relative pb-10 pr-10 md:pb-12 md:pr-12">
        <div className="absolute top-4 left-4 right-10 bottom-10 border border-navy-light hidden sm:block" />
        <PhotoPlaceholder
          src="interior-1.jpg"
          alt="Interior Vila Baleia"
          label="interior-1.jpg"
          className="relative w-full h-[420px]"
        />
        <div className="absolute bottom-0 right-0 w-36 h-36 sm:w-44 sm:h-44 border-4 border-bg shadow-xl">
          <PhotoPlaceholder
            src="espetada-regional.jpg"
            alt="Espetada Regional"
            label="espetada-regional.jpg"
            className="w-full h-full"
          />
        </div>
      </motion.div>
    </motion.section>
  )
}

function parseStatValue(raw) {
  const match = raw.match(/^(\D*)(\d+)(\D*)$/)
  if (!match) return { prefix: '', target: 0, suffix: raw }
  const [, prefix, digits, suffix] = match
  return { prefix, target: parseInt(digits, 10), suffix }
}

function useCountUp(target, inView, duration = 2000) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])

  return count
}

function StatItem({ value, label, inView }) {
  const { prefix, target, suffix } = parseStatValue(value)
  const count = useCountUp(target, inView)

  return (
    <div className="text-center">
      <div className="font-serif text-4xl text-white">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-text-muted text-[12px] uppercase tracking-[0.1em] mt-2">{label}</div>
    </div>
  )
}

function CapituloTradicao() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
      className="bg-bg-soft py-20"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.p variants={fadeInUp} className={`${eyebrowClass} mb-3`}>
          Capítulo II
        </motion.p>
        <motion.h3 variants={fadeInUp} className="font-serif text-3xl text-white mb-12">
          Mais de uma década
          <br />
          <em className="italic text-navy-light">de história</em>
        </motion.h3>

        <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-3xl mx-auto">
          {stats.map((s) => (
            <StatItem key={s.label} value={s.value} label={s.label} inView={inView} />
          ))}
        </motion.div>
      </div>
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
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-14">
          <motion.p variants={fadeInUp} className={`${eyebrowClass} mb-3`}>
            Capítulo III
          </motion.p>
          <motion.h2 variants={fadeInUp} className="font-serif text-3xl md:text-4xl text-white mb-3">
            Do mar à mesa,
            <br />
            <em className="italic text-navy-light">em minutos</em>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-sm text-text-muted font-light mt-3 max-w-lg mx-auto">
            Os nossos ingredientes chegam frescos todos os dias. A nossa cozinha transforma-os na
            experiência gastronómica que Madeira merece.
          </motion.p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {featuredDishes.map((dish) => (
            <motion.article
              key={dish.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={circleReveal}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="group bg-bg-card border border-border hover:border-navy transition-colors duration-300 w-full md:w-[calc(33.333%-1.1rem)]"
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
                  className="absolute top-3 left-3 bg-navy/90 text-white text-[12px] uppercase tracking-[0.15em] px-2.5 py-1"
                >
                  {dish.tag}
                </motion.span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg text-white">{dish.name}</h3>
                <p className="text-text-muted font-light text-xs leading-relaxed mt-3">{dish.description}</p>
                <motion.span
                  className="block text-white text-sm mt-4"
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
            className="inline-block border border-border-md text-white text-[12px] font-medium uppercase tracking-[0.12em] px-8 py-3.5 transition-colors hover:border-navy-light"
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
      className="bg-navy py-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <motion.div variants={fadeInUp} className="flex flex-col justify-center">
          <motion.p variants={fadeInUp} className={`${eyebrowClass} mb-3`}>
            Capítulo IV
          </motion.p>
          <motion.h2 variants={fadeInUp} className="font-serif text-3xl md:text-4xl text-white mb-3">
            A sua mesa
            <br />
            <em className="italic text-white">está à espera</em>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-sm text-white/70 font-light mb-8 max-w-md">
            Reserve agora e garanta o seu lugar numa experiência que não vai esquecer.
          </motion.p>

          <motion.ul variants={fadeInUp} className="space-y-3 mb-8">
            {[
              'Vista para o Atlântico',
              'Ambiente acolhedor à beira-mar',
              'Reserva confirmada em minutos',
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm text-white/85 font-light">
                <span className="flex-shrink-0 w-5 h-5 rounded-full border border-white/40 flex items-center justify-center text-[10px]">
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </motion.ul>

          <motion.blockquote variants={fadeInUp} className="border-l-2 border-white/30 pl-5 mt-2">
            <p className="text-white/70 font-light italic text-sm leading-relaxed">
              "O melhor restaurante de Porto Moniz. Comida incrível, serviço simpático."
            </p>
            <cite className="block text-white/50 text-xs mt-3 not-italic">— Visitante no Google, 2025</cite>
          </motion.blockquote>
          <motion.div variants={fadeInUp}>
            <Link
              to="/reservas"
              className="inline-block mt-10 bg-white text-bg text-[12px] font-medium uppercase tracking-[0.12em] px-8 py-3.5 w-fit transition-opacity hover:opacity-90"
            >
              Reservar Agora
            </Link>
          </motion.div>
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
    'w-full bg-transparent border-0 border-b border-[#2A2A2A] text-[#CCC] text-xs font-sans px-1 py-3 focus:outline-none focus:border-white transition-colors'

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
        className="w-full bg-white text-bg text-[12px] font-medium uppercase tracking-[0.12em] py-3.5 transition-opacity hover:opacity-90"
      >
        Confirmar Reserva
      </button>
    </form>
  )
}

function Home() {
  return (
    <>
      <Hero />
      <div className="bg-bg py-6">
        <ChapterDivider />
      </div>
      <ParallaxSection />
      <InfoBar />
      <CapituloLugar />
      <ChapterDivider />
      <CapituloTradicao />
      <ChapterDivider />
      <MenuDestaque />
      <ChapterDivider />
      <ReservasCTA />
    </>
  )
}

export default Home
