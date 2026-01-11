import { PenTool, Code, LineChart } from 'lucide-react'

const services = [
  {
    icon: PenTool,
    title: 'Brand Identity',
    description: 'We create distinctive visual identities that resonate with your audience and stand the test of time.',
  },
  {
    icon: Code,
    title: 'Development',
    description: 'From concept to deployment, we build robust digital solutions that perform beautifully across all devices.',
  },
  {
    icon: LineChart,
    title: 'Growth',
    description: 'Strategic insights and data-driven approaches to help your business scale and reach new heights.',
  },
]

export function ServicesSection() {
  return (
    <section className="container mx-auto px-6 py-16 md:py-32">
      <div className="mb-16">
        <h2 className="font-sans text-sm font-semibold text-stone-500 uppercase tracking-widest mb-4">
          Our Expertise
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <div
              key={index}
              className="p-8 rounded-lg transition-all hover:bg-stone-100 group"
            >
              <div className="mb-6 transition-transform group-hover:scale-110">
                <Icon
                  size={32}
                  strokeWidth={1.5}
                  className="text-stone-900"
                />
              </div>
              <h3 className="font-serif text-2xl font-medium text-stone-900 mb-4">
                {service.title}
              </h3>
              <p className="font-sans text-stone-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
