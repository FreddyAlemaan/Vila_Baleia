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

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 border-b border-border pb-4 mb-10">
          {menuCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`text-[11px] uppercase tracking-[0.12em] pb-2 transition-colors ${
                active === cat.key
                  ? 'text-white border-b-2 border-crimson'
                  : 'text-text-muted hover:text-white'
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
                className="flex items-baseline justify-between gap-4 py-4 border-b border-[#111]"
              >
                <span className="font-serif text-white text-base">{item.name}</span>
                <span className="flex-1 border-b border-dotted border-[#222] mx-2 hidden sm:block translate-y-[-4px]" />
                <span className="text-crimson text-sm whitespace-nowrap">€{item.price.toFixed(2)}</span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <p className="text-[#555] text-[11px] font-light text-center mt-12 leading-relaxed">
          IVA incluído à taxa em vigor. Este estabelecimento possui livro de reclamações.
        </p>
      </div>
    </div>
  )
}

export default Menu
