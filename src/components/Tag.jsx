export default function Tag({ children }) {
  return (
    <span className="font-mono text-xs uppercase tracking-wide text-violet-light bg-violet/10 border border-violet/20 rounded px-2.5 py-1">
      {children}
    </span>
  )
}
