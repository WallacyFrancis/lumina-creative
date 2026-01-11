export function HeroSection() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center container mx-auto px-6 py-24">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight text-stone-900">
          We craft digital experiences for the modern web.
        </h1>
        <p className="text-xl text-stone-500 max-w-2xl mt-6 font-sans">
          Lumina is a strategic design agency helping brands tell their story.
        </p>
      </div>
      
      {/* Image Container */}
      <div className="mt-16 w-full aspect-[21/9] rounded-lg overflow-hidden bg-stone-200">
        <div className="w-full h-full bg-gradient-to-br from-stone-200 via-stone-300 to-stone-200" />
      </div>
    </section>
  )
}
