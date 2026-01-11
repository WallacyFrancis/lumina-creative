'use client'

import { useState } from 'react'
import { useFormStatus } from 'react-dom'
import { submitContact } from '@/app/actions'

function SubmitButton() {
  const { pending } = useFormStatus()
  
  return (
    <button
      type="submit"
      disabled={pending}
      className="font-sans text-sm bg-stone-900 text-stone-50 hover:bg-stone-700 rounded-full px-8 py-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? 'Sending...' : 'Send Message'}
    </button>
  )
}

export function ContactForm() {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(formData: FormData) {
    setError(null)
    const result = await submitContact(formData)
    
    if (result.success) {
      setSuccess(true)
    } else {
      setError(result.message)
    }
  }

  if (success) {
    return (
      <div className="font-serif text-xl text-stone-900">
        Thank you. We'll be in touch.
      </div>
    )
  }

  return (
    <form action={handleSubmit} className="space-y-8">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="w-full font-serif text-lg bg-transparent border-b border-stone-300 focus:border-stone-900 outline-none pb-3 transition-colors"
        />
      </div>
      
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full font-serif text-lg bg-transparent border-b border-stone-300 focus:border-stone-900 outline-none pb-3 transition-colors"
        />
      </div>
      
      <div>
        <textarea
          name="message"
          placeholder="Message"
          required
          rows={6}
          className="w-full font-serif text-lg bg-transparent border-b border-stone-300 focus:border-stone-900 outline-none pb-3 resize-none transition-colors"
        />
      </div>

      {error && (
        <div className="text-stone-500 text-sm">{error}</div>
      )}

      <SubmitButton />
    </form>
  )
}
