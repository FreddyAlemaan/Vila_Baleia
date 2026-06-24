import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import { menuData, menuCategories } from '../data/menu'
import { fadeIn } from '../animations/variants'

function Menu() {
  const [active, setActive] = useState(menuCategories[0].key)

  return (
    <div>
      <PageHeader title="A Nossa Carta" image="interior-2.jpg" />

      <div
        className="bg-bg"
        style={{ backgroundImage: 'url(/assets/pattern-food.svg)', backgroundSize: '260px 260px' }}
      >
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="bg-bg-card px-6 py-10 md:px-12 md:py-14">
            <h2 className="font-serif text-3xl md:text-4xl text-bone leading-tight">
              A Nossa
              <br />
              Carta
            </h2>

            <div className="flex flex-wrap gap-x-6 gap-y-3 border-b border-white/15 pb-6 mt-8 mb-2">
              {menuCategories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActive(cat.key)}
                  className={`text-[12px] uppercase tracking-[0.12em] pb-2 transition-colors ${
                    active === cat.key
                      ? 'text-bone border-b-2 border-white'
                      : 'text-bone/50 hover:text-bone'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
              >
                {menuData[active].map((item) => (
                  <div
                    key={item.name}
                    className="flex items-baseline justify-between gap-4 py-5 border-b border-white/10"
                  >
                    <span className="font-serif text-bone text-lg">{item.name}</span>
                    <span className="flex-1 border-b border-dotted border-white/20 mx-2 hidden sm:block translate-y-[-4px]" />
                    <span className="text-bone text-sm whitespace-nowrap">€{item.price.toFixed(2)}</span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="text-[#8A8A8A] text-[12px] font-light text-center mt-10 leading-relaxed">
            IVA incluído à taxa em vigor. Este estabelecimento possui livro de reclamações.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Menu
