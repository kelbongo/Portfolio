import { Link } from 'react-router-dom'
import { Download } from 'lucide-react'

export default function Nav() {
  return (
    <header className="border-b border-border sticky top-0 z-30 bg-base/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-display font-medium text-lg tracking-tight">
          <span className="text-text-primary">Kelvin</span>{' '}
          <span className="text-violet-light">Soegiarto</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-7 font-display text-sm text-text-secondary">
          <Link to="/" className="hover:text-text-primary transition-colors">
            Home
          </Link>
          <a href="/#work" className="hover:text-text-primary transition-colors">
            Projects
          </a>
          <Link to="/about" className="hover:text-text-primary transition-colors">
            About
          </Link>
        </nav>
        <a
        // jangan lupa ganti bagian ini isi sama cv beneran
          href="/resume.pdf"
          className="font-display text-sm border border-border-strong rounded-md px-4 py-2 hover:bg-surface transition-colors flex items-center gap-2"
        >
          Download CV
          <Download size={14} />
        </a>
      </div>
    </header>
  )
}
