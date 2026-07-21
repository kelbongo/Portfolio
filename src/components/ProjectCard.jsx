import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import EduAscent from "../assets/EduAscent.png"
import adowptme from "../assets/adowptme.png";

const patterns = {
  '01': 'linear-gradient(135deg, #8B5CF6 0%, #4C1D95 100%)',
  '02': 'linear-gradient(135deg, #F5B942 0%, #B8781E 100%)',
  '03': 'linear-gradient(135deg, #2DD4BF 0%, #0F766E 100%)',
  '04': 'linear-gradient(135deg, #F472B6 0%, #9D174D 100%)',
}

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/work/${project.slug}`}
      className="group block bg-surface border border-border rounded-xl overflow-hidden hover:border-border-strong transition-colors"
    >
        <img
          src={project.image}
          alt={project.title}
          className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <span className="font-mono text-xs text-white/80 bg-black/20 rounded px-2 py-1 ml-2">
          {/* ganti div ini dengan <img src="/images/..." /> saat sudah ada screenshot */}
          Project {parseInt(project.number)}
        </span>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <p className="font-display text-lg text-text-primary">{project.title}</p>
          <ArrowUpRight
            size={18}
            className="text-text-muted group-hover:text-violet-light transition-colors shrink-0 mt-1"
          />
        </div>
        <p className="font-body text-sm text-text-secondary leading-relaxed mb-4">
          {project.tagline}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tools.split(',').map((tool) => (
            <span
              key={tool}
              className="font-mono text-[11px] text-violet-light bg-violet/10 border border-violet/20 rounded px-2 py-1"
            >
              {tool.trim()}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
