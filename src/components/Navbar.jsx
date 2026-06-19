import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

const links = [
  { to: '/', label: 'Início' },
  { to: '/menu', label: 'Menu' },
  { to: '/sobre', label: 'Sobre Nós' },
  { to: '/galeria', label: 'Galeria' },
  { to: '/contacto', label: 'Contacto' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `font-sans font-medium text-[11px] uppercase tracking-[0.12em] transition-colors duration-200 ${
      isActive ? 'text-white' : 'text-text-muted hover:text-white'
    }`

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border transition-all duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur-md' : 'bg-bg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" aria-label="Vila Baleia">
          <Logo className="h-12" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/reservas"
          className="hidden md:inline-block border border-crimson text-crimson text-[11px] font-medium uppercase tracking-[0.12em] px-5 py-2.5 transition-colors duration-200 hover:bg-crimson hover:text-white"
        >
          Reservar Mesa
        </Link>

        <button
          aria-label="Abrir menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block h-px w-6 bg-white transition-transform ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
          <span className={`block h-px w-6 bg-white transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-6 bg-white transition-transform ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-border bg-bg overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={linkClass}
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/reservas"
                onClick={() => setOpen(false)}
                className="border border-crimson text-crimson text-[11px] font-medium uppercase tracking-[0.12em] px-5 py-2.5 text-center transition-colors duration-200 hover:bg-crimson hover:text-white"
              >
                Reservar Mesa
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
