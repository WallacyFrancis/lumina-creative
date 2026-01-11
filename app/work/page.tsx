import { supabase } from '@/lib/supabase'
import { ProjectCard } from '@/components/ui/ProjectCard'
import type { Project } from '@/types'

export default async function WorkPage() {
  const { data: projects, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching projects:', error)
    return (
      <div className="container mx-auto px-6 py-24">
        <h1 className="font-serif text-5xl mb-12 text-stone-900">Selected Work</h1>
        <p className="text-stone-500">Error loading projects. Please try again later.</p>
      </div>
    )
  }

  if (!projects || projects.length === 0) {
    return (
      <div className="container mx-auto px-6 py-24">
        <h1 className="font-serif text-5xl mb-12 text-stone-900">Selected Work</h1>
        <p className="text-stone-500 text-lg">Coming Soon</p>
        <p className="text-stone-400 mt-2">
          We're currently working on some amazing projects. Check back soon!
        </p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-6 py-24">
      <h1 className="font-serif text-5xl mb-12 text-stone-900">Selected Work</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
        {projects.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
