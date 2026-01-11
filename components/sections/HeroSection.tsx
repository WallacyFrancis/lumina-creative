export function HeroSection() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center container mx-auto px-6 py-16 md:py-32">
      <div className="max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-medium leading-tight text-stone-900">
          We craft digital experiences for the modern web.
        </h1>
        <p className="text-lg md:text-xl text-stone-500 max-w-2xl mt-6 font-sans">
          Lumina is a strategic design agency helping brands tell their story.
        </p>
      </div>
      
      {/* Image Container */}
      <div className="mt-16 w-full aspect-[21/9] rounded-lg overflow-hidden bg-stone-200">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
          alt="Lumina Studio Office Workspace"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </section>
  )
}
