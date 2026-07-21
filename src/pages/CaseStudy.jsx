import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { getProjectBySlug, projects } from '../data/projects'
import Tag from '../components/Tag'
import { MarginPin, MarginNote } from '../components/Marginalia'

export default function CaseStudy() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) return <Navigate to="/" replace />

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const next = projects[(currentIndex + 1) % projects.length]

  return (
    <main className="max-w-5xl mx-auto px-6 pt-12 pb-24">
      <Link
        to="/"
        className="font-mono text-xs uppercase tracking-wide text-text-muted hover:text-violet-light transition-colors inline-flex items-center gap-1"
      >
        <ArrowLeft size={14} />
        Index
      </Link>

      {/* Header */}
      <header className="mt-8 pb-8 border-b border-border max-w-3xl">
        <p className="font-mono text-xs text-violet-light mb-2">{project.number} — case study</p>
        <h1 className="font-display text-4xl sm:text-5xl tracking-tight mb-3">
          {project.title}
        </h1>
        <p className="font-body text-lg text-text-secondary mb-6 max-w-xl">
          {project.tagline}
        </p>
        <div className="flex flex-wrap gap-2">
          <Tag>{project.role}</Tag>
          <Tag>{project.timeline}</Tag>
          <Tag>{project.tools}</Tag>
        </div>
        <div className="flex gap-4 mt-5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className="font-mono text-xs uppercase tracking-wide text-violet-light hover:underline inline-flex items-center gap-1"
            >
              Live site <ExternalLink size={12} />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              className="font-mono text-xs uppercase tracking-wide text-violet-light hover:underline inline-flex items-center gap-1"
            >
              Repository <ExternalLink size={12} />
            </a>
          )}
        </div>
      </header>

      {/* Abstract */}
      <section className="mt-10 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-wide text-text-muted mb-3">
          Abstract
        </p>
        <p className="font-body text-lg leading-relaxed text-text-primary">{project.abstract}</p>
      </section>

      {/* Problem */}
      <section className="mt-12 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-wide text-text-muted mb-3">
          01 — Problem
        </p>
        <p className="font-body text-lg leading-relaxed bg-amber/10 border-l-2 border-amber -mx-4 px-4 py-3 rounded">
          {project.problem}
        </p>
      </section>

      {/* Process — content column + always-visible margin note column */}
      <section className="mt-14">
        <p className="font-mono text-xs uppercase tracking-wide text-text-muted mb-5">
          02 — Process
        </p>
        <div className="space-y-10">
          {project.process.map((step, i) => (
            <div key={i} className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-6 lg:gap-10">
              <div className="max-w-3xl">
                <h3 className="font-display text-xl mb-2">
                  {step.heading} <MarginPin n={i + 1} />
                </h3>
                <p className="font-body text-lg leading-relaxed text-text-primary">{step.body}</p>
                <div className="mt-4 aspect-video bg-surface border border-border rounded-lg">
                  {step.image ? (
                    <img src={step.image} alt={step.heading} className="w-full h-full" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-mono text-xs text-text-muted">
                        fig. {i + 1} — belum ada gambar
                      </span>
                    </div>
                  )}
                </div>
                <div className="mt-4 lg:hidden">
                  <MarginNote n={i + 1} note={step.note} />
                </div>
              </div>
              <div className="hidden lg:block lg:sticky lg:top-24 self-start">
                <MarginNote n={i + 1} note={step.note} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Solution */}
      <section className="mt-14 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-wide text-text-muted mb-3">
          03 — Solution
        </p>
        <p className="font-body text-lg leading-relaxed text-text-primary mb-4">{project.solution}</p>
        <div className="aspect-video bg-surface border border-border rounded-lg overflow-hidden">
          {project.solutionImage ? (
            <img src={project.solutionImage} alt={`${project.title} final result`} className="w-full h-full " />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-mono text-xs text-text-muted">
                fig. final — belum ada gambar
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Reflection */}
      <section className="mt-12 pb-10 border-b border-border max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-wide text-text-muted mb-3">
          04 — Reflection
        </p>
        <p className="font-body text-lg leading-relaxed text-text-primary">{project.reflection}</p>
      </section>

      {/* Next project */}
      <Link
        to={`/work/${next.slug}`}
        className="group flex items-center justify-between mt-10 py-4 max-w-3xl"
      >
        <span className="font-mono text-xs uppercase tracking-wide text-text-muted">
          Selanjutnya
        </span>
        <span className="font-display text-xl group-hover:text-violet-light transition-colors flex items-center gap-2">
          {next.title}
          <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
        </span>
      </Link>
    </main>
  )
}
