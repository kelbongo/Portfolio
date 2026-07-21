import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <p className="font-display font-medium text-lg mb-2">
            <span className="text-violet-light">Kelvin Soegiarto</span>
          </p>
          <p className="font-body text-sm text-text-secondary max-w-xs leading-relaxed">
            Mahasiswa Sistem Informatika yang tertarik membangun produk digital dan
            memahami masalah pengguna.
          </p>
        </div>
        <div>
          <p className="font-display text-sm text-text-primary mb-3">Quick Path</p>
          <div className="flex flex-col gap-2 font-body text-sm text-text-secondary">
            <Link to="/" className="hover:text-violet-light transition-colors">Home</Link>
            <a href="/#work" className="hover:text-violet-light transition-colors">Projects</a>
            <Link to="/about" className="hover:text-violet-light transition-colors">About</Link>
          </div>
        </div>
        <div>
          <p className="font-display text-sm text-text-primary mb-3">Connect</p>
          <p className="font-body text-sm text-text-secondary mb-4">
            Terbuka untuk kesempatan internship UI/UX, Project/Product Manager.
          </p>
          <div className="flex gap-3">
            <a
              href="https://github.com/kelbongo"
              className="w-9 h-9 rounded-md border border-border-strong flex items-center justify-center hover:bg-surface transition-colors"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/kelvin-soegiarto-b59596326/"
              className="w-9 h-9 rounded-md border border-border-strong flex items-center justify-center hover:bg-surface transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:kelvinsoegiarto@gmail.com"
              className="w-9 h-9 rounded-md border border-border-strong flex items-center justify-center hover:bg-surface transition-colors"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 pb-8 flex items-center justify-between border-t border-border pt-6">
        <p className="font-mono text-xs text-text-muted">
          © {new Date().getFullYear()} Kelvin Soegiarto. All rights reserved.
        </p>
        <a
          href="#top"
          className="w-9 h-9 rounded-md bg-violet-gradient flex items-center justify-center hover:opacity-90 transition-opacity"
          aria-label="Kembali ke atas"
        >
          <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  )
}
