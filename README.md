# Kelvin — Portfolio

Portofolio UX/PM dibangun dengan React + Vite + Tailwind. Struktur case study
mengikuti format "paper akademik": abstract, problem statement, process
bernomor dengan marginalia (catatan alasan keputusan desain), solution, dan
reflection.

## Cara jalankan lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

## Yang harus kamu isi/ganti

1. **`src/data/projects.js`** — ganti semua teks placeholder. Ini file
   paling penting. Khususnya field `problem`: harus berbasis perilaku user,
   bukan observasi visual/UI (lihat komentar di dalam file).
2. **Gambar** — ganti kotak `fig. X` di `src/pages/CaseStudy.jsx` dengan
   `<img>` screenshot/wireframe asli kamu. Simpan gambar di folder
   `public/images/` lalu reference dengan `/images/nama-file.png`.
3. **`src/components/Footer.jsx`** — ganti link email/GitHub/LinkedIn.
4. **`public/resume.pdf`** — taruh file resume kamu di sini kalau mau link
   "Resume" di navbar berfungsi.
5. **Warna/font** — semua di `tailwind.config.js`, gampang diubah kalau
   mau eksplorasi arah visual lain.

## Deploy ke Vercel

1. Push folder ini ke repo GitHub baru (misal `kelvin-portfolio`)
2. vercel.com → Add New → Project → pilih repo tersebut
3. Framework preset otomatis terdeteksi sebagai Vite, biarkan default
4. Deploy
