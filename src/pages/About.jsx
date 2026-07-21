export default function About() {
  return (
    <main className="max-w-xl mx-auto px-6 pt-16 pb-24 ">
      <p className="font-mono text-xs uppercase tracking-wide text-violet-light mb-4">About Me</p>
      <h1 className="font-display text-3xl sm:text-4xl tracking-tight mb-8">
        Sedikit tentang saya
      </h1>

      <div className="text-justify font-body text-lg leading-relaxed text-text-secondary space-y-5 max-w-xl">
        <p>
          Aku sekarang umur 20 dan sedang menjalani kuliah di Bina Nusantara University.
          Selama perkuliahan, aku mengikuti organisasi berupa Binus Finance Club dan sudah jadi mentor selama 3 semester
          sering juga mengikuti berbagai perlombaan UI/UX dan Business Case Competition. Best achievement aku adalah
          menjadi finalist di study2challenge, dan bertemu dengan Norman Nielsen saat di Binus. Untuk 
          bahasa, aku juga dulu sempat lulus les bahasa mandarin. <br></br><br></br>
          Ketika bertemu dengan Norman Nielsen langsung,
          aku jadi tertarik menganalisis tingkah user karena terasa relatable ketika aku mengalami sendiri. Aku 
          juga tertarik jadi project dan product manager karena menjadi penyambung antara programmer dan product
          owner. Aku selalu open terhadap penggunaan Arificial Intelligence untuk efisiensi pekerjaan dan aku
          biasanya adaptive terhadap lingkungan dan pekerjaan.
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-border">
        <p className="font-mono text-xs uppercase tracking-wide text-text-muted mb-3">
          Tools
        </p>
        <p className="font-body text-base text-text-secondary">
          Figma, React, Tailwind, Excel/Power Pivot
        </p>
      </div>
    </main>
  )
}
