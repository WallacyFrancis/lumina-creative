'use client'

import Link from 'next/link'
import { AlignRight } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
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
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <AlignRight size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-stone-200 mt-4 pt-4">
            <div className="flex flex-col gap-4">
              <Link
                href="/work"
                className="font-sans text-sm text-stone-900 hover:text-stone-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Work
              </Link>
              <Link
                href="/services"
                className="font-sans text-sm text-stone-900 hover:text-stone-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/studio"
                className="font-sans text-sm text-stone-900 hover:text-stone-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Studio
              </Link>
              <Link
                href="/journal"
                className="font-sans text-sm text-stone-900 hover:text-stone-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Journal
              </Link>
              <Link
                href="/contact"
                className="font-sans text-sm bg-stone-900 text-stone-50 hover:bg-stone-700 rounded-full px-6 py-2 transition-colors w-fit"
                onClick={() => setMobileMenuOpen(false)}
              >
                Let's Talk
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
