/**
 * MarginPin + MarginNote — catatan pinggir yang selalu terlihat di kolom
 * margin (desktop) atau menyatu di bawah section (mobile). Elemen ciri
 * khas: memaksa alasan di balik keputusan desain ditulis dan ditampilkan,
 * bukan disembunyikan di balik hover.
 */
export function MarginPin({ n }) {
  return <sup className="marginalia-pin">[{n}]</sup>
}

export function MarginNote({ n, note }) {
  return (
    <div className="border-l-2 border-amber pl-3 py-1">
      <p className="font-mono text-[11px] text-violet-light mb-1">[{n}] catatan</p>
      <p className="font-mono text-xs text-text-muted leading-relaxed">{note}</p>
    </div>
  )
}
