export default function InfoCard({ icon, title, body }) {
  return (
    <div className="bg-surface border border-border rounded-xl p-5 flex gap-4">
      <div className="w-10 h-10 rounded-lg bg-violet-gradient flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <p className="font-display text-sm text-text-primary mb-1">{title}</p>
        <p className="font-body text-sm text-text-secondary leading-relaxed">{body}</p>
      </div>
    </div>
  )
}
