import { useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import PageHeader from '../components/PageHeader'

const timeSlots = Array.from({ length: 20 }, (_, i) => {
  const total = 12 * 60 + i * 30
  const h = Math.floor(total / 60)
  const m = total % 60
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
})

function Reservas() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()
  const [status, setStatus] = useState(null) // 'success' | 'error' | null

  const inputClass = (hasError) =>
    `w-full bg-[#141414] border text-[#CCC] text-xs font-sans px-4 py-3 focus:outline-none transition-colors ${
      hasError ? 'border-white' : 'border-[#222] focus:border-navy'
    }`

  const onSubmit = async (data, e) => {
    setStatus(null)
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      setStatus('success')
      reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <div>
      <PageHeader title="Reserve a Sua Mesa" image="interior-1.jpg" height="35vh" />

      <div className="max-w-[600px] mx-auto px-6 py-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <input
              className={inputClass(errors.nome)}
              placeholder="Nome"
              {...register('nome', { required: true })}
            />
          </div>

          <div>
            <input
              type="email"
              className={inputClass(errors.email)}
              placeholder="Email"
              {...register('email', { required: true })}
            />
          </div>

          <div>
            <input
              type="tel"
              className={inputClass(errors.telefone)}
              placeholder="Telefone"
              {...register('telefone', { required: true })}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <select
              className={inputClass(errors.pessoas)}
              defaultValue="2"
              {...register('pessoas', { required: true })}
            >
              {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? 'Pessoa' : 'Pessoas'}
                </option>
              ))}
            </select>

            <input
              type="date"
              className={inputClass(errors.data)}
              min={new Date().toISOString().split('T')[0]}
              {...register('data', { required: true })}
            />
          </div>

          <select
            className={inputClass(errors.hora)}
            defaultValue=""
            {...register('hora', { required: true })}
          >
            <option value="" disabled>
              Hora
            </option>
            {timeSlots.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          <textarea
            className={inputClass(false)}
            rows={4}
            placeholder="Pedido especial (opcional)"
            {...register('pedido')}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-bg text-[12px] font-medium uppercase tracking-[0.12em] py-3.5 transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {isSubmitting ? 'A enviar...' : 'Confirmar Reserva'}
          </button>

          {status === 'success' && (
            <p className="text-navy-light text-sm text-center">
              Reserva recebida! Entraremos em contacto brevemente.
            </p>
          )}
          {status === 'error' && (
            <p className="text-white text-sm text-center">
              Ocorreu um erro ao enviar a reserva. Tente novamente ou contacte-nos por telefone.
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

export default Reservas
