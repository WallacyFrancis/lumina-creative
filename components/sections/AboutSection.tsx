import Link from 'next/link'
import Image from 'next/image'

export function AboutSection() {
  return (
    <section className="container mx-auto px-6 py-16 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight text-stone-900 mb-6">
            Design is not just what it looks like.
          </h2>
          <p className="font-sans text-lg text-stone-500 leading-relaxed mb-8">
            It&apos;s how it works. We believe in function-first design, where every
            element serves a purpose and enhances the user experience. At Lumina,
            we combine strategic thinking with creative excellence to deliver
            solutions that not only look beautiful but drive real results.
          </p>
          <Link
            href="/studio"
            className="font-sans text-stone-900 underline underline-offset-4 hover:text-stone-500 transition-colors inline-block"
          >
            The Studio
          </Link>
        </div>

        {/* Image Container */}
        <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden bg-stone-200">
          <Image
            src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80"
            alt="Creative process and design thinking"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
