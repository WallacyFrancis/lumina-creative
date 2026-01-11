'use server'

import { supabase } from '@/lib/supabase'
import { revalidatePath } from 'next/cache'

export async function submitContact(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  if (!name || !email || !message) {
    return {
      success: false,
      message: 'Please fill in all fields.',
    }
  }

  try {
    const { error } = await supabase
      .from('contacts')
      .insert([
        {
          name,
          email,
          message,
        },
      ])

    if (error) {
      console.error('Error inserting contact:', error)
      return {
        success: false,
        message: 'Something went wrong. Please try again.',
      }
    }

    revalidatePath('/')
    return {
      success: true,
      message: "Thank you. We'll be in touch.",
    }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return {
      success: false,
      message: 'Something went wrong. Please try again.',
    }
  }
}
