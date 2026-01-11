import Link from 'next/link'
import { Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-stone-100 border-t border-stone-200">
      <div className="container mx-auto px-6">
        {/* Top Section - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Col 1: Logo + Tagline */}
          <div className="space-y-4">
            <h2 className="font-serif font-bold text-2xl text-stone-900">
              Lumina.
            </h2>
            <p className="font-sans text-sm text-stone-500">
              Crafting digital experiences
            </p>
          </div>

          {/* Col 2: Socials */}
          <div className="space-y-4">
            <h3 className="font-sans text-sm font-semibold text-stone-900 uppercase tracking-wide">
              Follow
            </h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-500 hover:text-stone-900 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-500 hover:text-stone-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-500 hover:text-stone-900 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Col 3: Sitemap */}
          <div className="space-y-4">
            <h3 className="font-sans text-sm font-semibold text-stone-900 uppercase tracking-wide">
              Sitemap
            </h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/work"
                className="font-sans text-sm text-stone-500 hover:text-stone-900 transition-colors"
              >
                Work
              </Link>
              <Link
                href="/services"
                className="font-sans text-sm text-stone-500 hover:text-stone-900 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/studio"
                className="font-sans text-sm text-stone-500 hover:text-stone-900 transition-colors"
              >
                About
              </Link>
            </nav>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-4">
            <h3 className="font-sans text-sm font-semibold text-stone-900 uppercase tracking-wide">
              Newsletter
            </h3>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 font-sans text-sm bg-stone-50 border border-stone-200 rounded-full px-4 py-2 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent"
              />
              <button
                type="button"
                className="bg-stone-900 text-stone-50 hover:bg-stone-700 rounded-full p-2 transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-stone-200 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-sm text-stone-500">
            © {new Date().getFullYear()} Lumina Creative. All rights reserved.
          </p>
          <p className="font-sans text-sm text-stone-500">
            Made in Brazil
          </p>
        </div>
      </div>
    </footer>
  )
}
