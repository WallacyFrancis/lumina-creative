import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/work/${project.id}`} className="group block">
      <div className="mb-4 aspect-[4/3] rounded-lg overflow-hidden bg-stone-200 relative">
        {project.image_url ? (
          <Image
            src={project.image_url}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-stone-200 via-stone-300 to-stone-200" />
        )}
      </div>
      
      <div className="space-y-2">
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="text-stone-400 text-xs tracking-widest uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <h3 className="font-serif text-2xl text-stone-900 group-hover:underline decoration-stone-400">
          {project.title}
        </h3>
        
        {project.client_name && (
          <p className="text-sm text-stone-500">{project.client_name}</p>
        )}
      </div>
    </Link>
  )
}
