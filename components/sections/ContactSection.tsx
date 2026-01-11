import { ContactForm } from '@/components/ui/ContactForm'

export function ContactSection() {
  return (
    <section className="container mx-auto px-6 py-16 md:py-32">
      <h2 className="font-serif text-4xl md:text-5xl font-medium text-stone-900 mb-16">
        Start a Project
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side - Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="font-sans text-sm font-semibold text-stone-500 uppercase tracking-widest mb-4">
              Email
            </h3>
            <a
              href="mailto:hello@lumina.agency"
              className="font-sans text-lg text-stone-900 hover:text-stone-500 transition-colors"
            >
              hello@lumina.agency
            </a>
          </div>
          
          <div>
            <h3 className="font-sans text-sm font-semibold text-stone-500 uppercase tracking-widest mb-4">
              Address
            </h3>
            <p className="font-sans text-lg text-stone-500">
              123 Design Street<br />
              Creative District<br />
              São Paulo, SP 01234-567
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
