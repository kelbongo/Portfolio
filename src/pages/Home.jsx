import { GraduationCap, Code2, BookOpen, Target, ArrowRight, Mail, Github, Linkedin } from 'lucide-react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import InfoCard from '../components/InfoCard'
import profile from "../assets/profile.jpeg";

export default function Home() {
  return (
    <main id="top">
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[85vh] max-w-6xl mx-auto px-6 pt-20 pb-20 grid grid-cols-1 lg:grid-cols-[1.05fr_.95fr] items-center
        gap-20">
        <div>
          <span className="inline-flex items-center gap-2 font-mono text-xs text-text-secondary bg-surface border border-border rounded-full px-3 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-light" />
            Halo, saya
          </span>
          <h1 className="font-display text-6xl sm:text-6xl leading-[1.05] tracking-tight mb-4">
            Kelvin
            <br />
            <span className="text-violet-light">Soegiarto</span>
          </h1>
          <p className="font-body text-lg text-text-secondary mb-2">
            Mahasiswa Sistem Informasi · UX &amp; Project
          </p>
          <p className="font-body text-base text-text-muted max-w-md leading-relaxed mb-8">
            Focusing on a real problem based on user's behavior, built
            based on my frontend development understanding with supporting ai tools.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="#work"
              className="font-display text-sm bg-violet-gradient rounded-md px-5 py-2.5 flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              Lihat Project
              <ArrowRight size={16} />
            </a>
            <a
              href="mailto:kelvinsoegiarto@gmail.com"
              className="font-display text-sm border border-border-strong rounded-md px-5 py-2.5 flex items-center gap-2 hover:bg-surface transition-colors"
            >
              Hubungi Saya
              <Mail size={16} />
            </a>
          </div>
          <div className="flex gap-3">
            <a
              href="https://github.com/kelbongo"
              className="w-9 h-9 rounded-md border border-border flex items-center justify-center hover:border-border-strong transition-colors"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/kelvin-soegiarto-b59596326/"
              className="w-9 h-9 rounded-md border border-border flex items-center justify-center hover:border-border-strong transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center w-full h-[500px]">

          {/* Glow (Paling belakang) */}
          <div className="absolute inset-0 flex items-center justify-center -z-20">
            <div className="w-[520px] h-[520px] rounded-full bg-violet-500/20 blur-[160px]" />
          </div>

          {/* Ring belakang */}
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-[420px] h-[420px] rounded-full border border-violet-500/25" />
            <div className="absolute w-[470px] h-[470px] rounded-full border border-violet-500/10" />
          </div>

          {/* Achievement Card */}
          <div className="absolute left-[-20px] top-12 z-20 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 shadow-xl">
            <p className="text-xs text-violet-300">🏆 Achievement</p>
            <h3 className="font-semibold text-white mt-1">Study2Challenge</h3>
            <p className="text-sm text-gray-400">National Finalist</p>
          </div>

          {/* Education Card */}
          <div className="absolute right-[-20px] bottom-2 z-20 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 shadow-xl">
            <p className="text-xs text-violet-300">🎓 Education</p>
            <h3 className="font-semibold text-white mt-1">BINUS University</h3>
            <p className="text-sm text-gray-400">Information Systems</p>
          </div>

          {/* Profile */}
          <img
            src={profile}
            alt="Kelvin Soegiarto"
            className="
              relative
              z-10
              w-[360px]
              h-[360px]
              rounded-full
              object-cover
              border-4
              border-white/10
              shadow-[0_0_80px_rgba(139,92,246,.25)]
              duration-500
              hover:scale-105
            "
          />
        </div>

      </section>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

      <div
          className="
          absolute
          -top-40
          -left-40
          w-[600px]
          h-[600px]
          rounded-full
          bg-violet-500/10
          blur-[180px]
          "
      />

      <div
          className="
          absolute
          bottom-[-250px]
          right-[-150px]
          w-[500px]
          h-[500px]
          rounded-full
          bg-fuchsia-500/10
          blur-[180px]
          "
      />

    </div>

      {/* Info cards */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <InfoCard
            icon={<GraduationCap size={18} className="text-white" />}
            title="Pendidikan"
            body="Mahasiswa Sistem Informatika, tertarik pada teknologi dan produk digital."
          />
          <InfoCard
            icon={<Code2 size={18} className="text-white" />}
            title="Development & Design"
            body="UX design dengan kemampuan frontend development."
          />
          <InfoCard
            icon={<BookOpen size={18} className="text-white" />}
            title="Belajar"
            body="Terus mendalami riset perilaku pengguna dan product thinking."
          />
          <InfoCard
            icon={<Target size={18} className="text-white" />}
            title="Tujuan"
            body="Internship UX / Project / Product yang memberi dampak nyata ke pengguna."
          />
        </div>
      </section>

      {/* Featured projects */}
      <section id="work" className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex items-center justify-between mb-6">
          <p className="font-display text-xl flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-violet-light" />
            Featured Projects
          </p>
          <span className="font-mono text-xs text-text-muted">{projects.length} studi kasus</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  )
}
