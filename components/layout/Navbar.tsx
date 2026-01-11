'use client'

import Link from 'next/link'
import { AlignRight, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-stone-50/80 border-b border-stone-200">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="font-serif font-bold text-2xl text-stone-900">
              Lumina.
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/work"
                className="font-sans text-sm text-stone-900 hover:text-stone-500 transition-colors"
              >
                Work
              </Link>
              <Link
                href="/services"
                className="font-sans text-sm text-stone-900 hover:text-stone-500 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/studio"
                className="font-sans text-sm text-stone-900 hover:text-stone-500 transition-colors"
              >
                Studio
              </Link>
              <Link
                href="/journal"
                className="font-sans text-sm text-stone-900 hover:text-stone-500 transition-colors"
              >
                Journal
              </Link>
              <Link
                href="/contact"
                className="font-sans text-sm bg-stone-900 text-stone-50 hover:bg-stone-700 rounded-full px-6 py-2 transition-colors"
              >
                Let's Talk
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-stone-900"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <AlignRight size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-stone-50 z-40 flex flex-col items-center justify-center md:hidden">
          <button
            className="absolute top-6 right-6 text-stone-900"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X size={32} />
          </button>

          <nav className="flex flex-col items-center gap-8">
            <Link
              href="/work"
              onClick={closeMenu}
              className="font-serif text-4xl text-stone-900 hover:text-stone-500 transition-colors"
            >
              Work
            </Link>
            <Link
              href="/services"
              onClick={closeMenu}
              className="font-serif text-4xl text-stone-900 hover:text-stone-500 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/studio"
              onClick={closeMenu}
              className="font-serif text-4xl text-stone-900 hover:text-stone-500 transition-colors"
            >
              Studio
            </Link>
            <Link
              href="/journal"
              onClick={closeMenu}
              className="font-serif text-4xl text-stone-900 hover:text-stone-500 transition-colors"
            >
              Journal
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="font-serif text-2xl bg-stone-900 text-stone-50 hover:bg-stone-700 rounded-full px-8 py-3 transition-colors mt-4"
            >
              Let's Talk
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
