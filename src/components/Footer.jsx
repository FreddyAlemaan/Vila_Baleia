import { Link } from 'react-router-dom'
import Logo from './Logo'

const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/menu', label: 'Menu' },
  { to: '/reservas', label: 'Reservas' },
  { to: '/sobre', label: 'Sobre Nós' },
  { to: '/contacto', label: 'Contacto' },
]

const socials = [
  { label: 'Facebook', href: 'https://facebook.com', icon: 'M13.5 9H15V6.5h-1.5C12.12 6.5 11 7.62 11 9v1.5H9.5V13H11v7h2.5v-7H15l.5-2.5h-2V9c0-.28.22-.5.5-.5z' },
  { label: 'Instagram', href: 'https://instagram.com', icon: 'M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM12 2c-2.72 0-3.06.01-4.12.06-1.06.05-1.79.22-2.43.47-.66.26-1.22.6-1.76 1.14a4.86 4.86 0 00-1.14 1.76c-.25.64-.42 1.37-.47 2.43C2.01 8.94 2 9.28 2 12s.01 3.06.06 4.12c.05 1.06.22 1.79.47 2.43.26.66.6 1.22 1.14 1.76.54.54 1.1.88 1.76 1.14.64.25 1.37.42 2.43.47C8.94 21.99 9.28 22 12 22s3.06-.01 4.12-.06c1.06-.05 1.79-.22 2.43-.47.66-.26 1.22-.6 1.76-1.14.54-.54.88-1.1 1.14-1.76.25-.64.42-1.37.47-2.43.05-1.06.06-1.4.06-4.12s-.01-3.06-.06-4.12c-.05-1.06-.22-1.79-.47-2.43a4.86 4.86 0 00-1.14-1.76 4.86 4.86 0 00-1.76-1.14c-.64-.25-1.37-.42-2.43-.47C15.06 2.01 14.72 2 12 2z' },
  { label: 'YouTube', href: 'https://youtube.com', icon: 'M21.6 7.2s-.21-1.49-.87-2.15c-.83-.87-1.76-.87-2.19-.92C15.4 4 12 4 12 4h-.01s-3.4 0-6.54.13c-.43.05-1.36.05-2.19.92C2.6 5.71 2.4 7.2 2.4 7.2S2.2 8.95 2.2 10.71v1.63c0 1.76.2 3.51.2 3.51s.21 1.49.87 2.15c.83.87 1.92.84 2.41.93 1.75.17 7.32.22 7.32.22s3.4-.01 6.54-.13c.43-.05 1.36-.05 2.19-.92.66-.66.87-2.15.87-2.15s.2-1.75.2-3.51v-1.63c0-1.76-.2-3.51-.2-3.51zM9.95 14.6V9.4l5.2 2.6-5.2 2.6z' },
]

function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <Logo className="h-10 mb-6" />
          <p className="font-serif italic text-2xl text-white leading-snug max-w-sm">
            Sabores do Atlântico, tradição madeirense.
          </p>
          <div className="flex gap-4 mt-8">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-8 h-8 flex items-center justify-center border border-border text-text-muted hover:text-white hover:border-border-md transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d={s.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <ul>
            {navLinks.map((l, i) => (
              <li key={l.to} className="border-b border-border">
                <Link
                  to={l.to}
                  className="flex items-baseline gap-4 py-3.5 text-text-muted hover:text-white transition-colors group"
                >
                  <span className="text-[11px] text-navy-light tracking-[0.1em]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-serif text-lg group-hover:translate-x-1 transition-transform">
                    {l.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-muted text-[12px] font-light tracking-wide">
            © 2026 Vila Baleia · Todos os direitos reservados
          </p>
          <p className="text-text-muted text-[12px] font-light tracking-wide">
            +351 291 853 147 · Porto Moniz, Madeira
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
