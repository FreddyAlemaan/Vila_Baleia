import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, viewportOnce } from '../animations/variants'

function Contacto() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()
  const [status, setStatus] = useState(null)

  const inputClass = (hasError) =>
    `w-full bg-transparent border-0 border-b text-[#CCC] text-xs font-sans px-1 py-3 focus:outline-none transition-colors ${
      hasError ? 'border-white' : 'border-[#2A2A2A] focus:border-white'
    }`

  const onSubmit = async () => {
    setStatus('success')
    reset()
  }

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="text-center mb-14"
        >
          <span className="text-bone font-sans font-medium text-[12px] tracking-[0.3em] uppercase">
            Contacto
          </span>
          <h1 className="font-serif text-3xl md:text-4xl text-bone mt-4">
            Fale <span className="italic text-navy-light">connosco</span>
          </h1>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-16"
        >
          <motion.div variants={fadeInUp} className="space-y-10">
            <div className="border border-border aspect-video overflow-hidden">
              <iframe
                title="Vila Baleia — Porto Moniz, Madeira"
                src="https://www.google.com/maps?q=Porto+Moniz,+Madeira,+Portugal&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(0.9)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <ul className="space-y-4 text-sm font-light text-text-muted">
              <li>
                <span className="block text-[12px] uppercase tracking-[0.15em] text-[#7A7A7A] mb-1">Endereço</span>
                Porto Moniz, Madeira, Portugal
              </li>
              <li>
                <span className="block text-[12px] uppercase tracking-[0.15em] text-[#7A7A7A] mb-1">Telefone</span>
                +351 291 853 147
              </li>
              <li>
                <span className="block text-[12px] uppercase tracking-[0.15em] text-[#7A7A7A] mb-1">Horário</span>
                Segunda a Domingo, 12h00–22h00
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <input
                className={inputClass(errors.nome)}
                placeholder="Nome"
                {...register('nome', { required: true })}
              />
              <input
                type="email"
                className={inputClass(errors.email)}
                placeholder="Email"
                {...register('email', { required: true })}
              />
              <textarea
                className={inputClass(errors.mensagem)}
                rows={6}
                placeholder="Mensagem"
                {...register('mensagem', { required: true })}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-bg text-[12px] font-medium uppercase tracking-[0.12em] py-3.5 transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {isSubmitting ? 'A enviar...' : 'Enviar Mensagem'}
              </button>

              {status === 'success' && (
                <p className="text-navy-light text-sm text-center">
                  Mensagem enviada! Responderemos brevemente.
                </p>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contacto
