import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import PhotoPlaceholder from '../components/PhotoPlaceholder'
import { fadeInUp, staggerContainer, viewportOnce } from '../animations/variants'

const stats = [
  { value: '15+', label: 'Anos de história' },
  { value: '37', label: 'Pratos no menu' },
  { value: '335+', label: 'Avaliações' },
  { value: 'nº4', label: 'Restaurante em Porto Moniz' },
]

const valores = [
  {
    title: 'Qualidade',
    text: 'Selecionamos os melhores produtos frescos da região e do mar de Madeira, todos os dias.',
    icon: 'M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z',
  },
  {
    title: 'Tradição',
    text: 'Receitas passadas de geração em geração, fiéis ao sabor autêntico da gastronomia madeirense.',
    icon: 'M4 4h16v4H4zM6 8v12h4V12h4v8h4V8',
  },
  {
    title: 'Sabor',
    text: 'Cada prato é preparado com cuidado para entregar uma experiência inesquecível à mesa.',
    icon: 'M12 21s-7-4.5-7-10a5 5 0 0110-2 5 5 0 0110 2c0 5.5-7 10-7 10z',
  },
]

function Sobre() {
  return (
    <div>
      <PageHeader title="A Nossa História" image="interior-2.jpg" />

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="max-w-4xl mx-auto px-6 py-20 text-center"
      >
        <motion.p variants={fadeInUp} className="text-text-muted font-light text-sm leading-relaxed">
          No coração de Porto Moniz, à beira do oceano Atlântico, o Vila Baleia nasceu da paixão
          por servir o melhor que a ilha da Madeira tem para oferecer. Há mais de 15 anos que
          recebemos visitantes e locais à nossa mesa, com pratos que celebram o mar e a terra
          madeirense — do peixe-espada preto à espetada regional em pau de loureiro.
        </motion.p>
        <motion.p variants={fadeInUp} className="text-text-muted font-light text-sm leading-relaxed mt-6">
          O nome "Vila Baleia" presta homenagem à tradição baleeira de Porto Moniz, e o nosso
          logótipo — a cauda de uma baleia em azul marinho — simboliza a ligação eterna entre a
          nossa cozinha e o oceano que a inspira.
        </motion.p>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="bg-bg-soft py-16"
      >
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeInUp}>
              <div className="font-serif text-3xl text-bone">{s.value}</div>
              <div className="text-text-muted text-[12px] uppercase tracking-[0.1em] mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <div className="grid md:grid-cols-3 gap-10">
          {valores.map((v) => (
            <motion.div key={v.title} variants={fadeInUp} className="text-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="#EDE7DA" strokeWidth="1.5" className="w-10 h-10 mx-auto mb-5">
                <path d={v.icon} />
              </svg>
              <h3 className="font-serif text-xl text-bone">{v.title}</h3>
              <p className="text-text-muted font-light text-sm leading-relaxed mt-3">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp}
        className="max-w-7xl mx-auto px-6 pb-20"
      >
        <PhotoPlaceholder
          src="exterior-2.jpg"
          alt="Vila Baleia exterior"
          label="exterior-2.jpg"
          className="w-full h-[360px] border border-border"
        />
      </motion.div>
    </div>
  )
}

export default Sobre
