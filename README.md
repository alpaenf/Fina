# Portofolio Profesional - Fina Julianti

Proyek ini adalah web portofolio profesional untuk **Fina Julianti** yang dibangun menggunakan **Next.js** (App Router), **TypeScript**, dan **Tailwind CSS v4**. Web ini sudah dioptimalkan dan siap untuk langsung dideploy ke **Vercel**.

## Fitur Utama

- **Next.js & TypeScript**: Performa tinggi, pengetikan aman (type-safe), dan struktur modern.
- **Tailwind CSS v4**: Desain responsif, modern, dan sangat cepat menggunakan CSS-first custom theme.
- **Scroll Reveal & Active Navigation State**: Transisi dan menu navigasi yang menyorot otomatis sesuai dengan posisi scroll layar menggunakan React State dan `IntersectionObserver`.
- **Project Carousel**: Menampilkan proyek pilihan secara interaktif dengan kontrol navigasi (prev/next).
- **Interactive Contact Form**: Formulir kontak interaktif dengan state pengiriman (loading) dan umpan balik sukses/error yang realistis.
- **SEO & Metadata**: Dilengkapi dengan metadata SEO dinamis, OpenGraph, keywords, dan tags untuk visibilitas mesin pencari.
- **Next.js Image Optimization**: Membaca gambar dari Google User Content dengan optimasi performa bawaan Next.js.

## Cara Menjalankan Secara Lokal

1. Pastikan Anda memiliki Node.js terinstal.
2. Jalankan perintah berikut untuk menginstal dependensi (jika belum):
   ```bash
   npm install
   ```
3. Jalankan server pengembangan lokal:
   ```bash
   npm run dev
   ```
4. Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

---

## Panduan Deploy ke Vercel (Siap Deploy)

### Cara 1: Menggunakan Git Integration (Paling Direkomendasikan)

1. Buat repositori baru di GitHub, GitLab, atau Bitbucket.
2. Push proyek lokal Anda ke repositori tersebut:
   ```bash
   git add .
   git commit -m "Initial commit - Next.js Portfolio"
   git branch -M main
   git remote add origin <URL-REPOSI-ANDA>
   git push -u origin main
   ```
3. Masuk ke dashboard [Vercel](https://vercel.com).
4. Klik **Add New** -> **Project**.
5. Pilih/impor repositori Git yang baru Anda push.
6. Vercel akan secara otomatis mendeteksi **Next.js**. Anda tidak perlu mengubah setelan Build & Development Settings (biarkan default).
7. Klik **Deploy**. Selesai! Setiap kali Anda push ke `main`, Vercel akan otomatis meng-update web Anda.

### Cara 2: Menggunakan Vercel CLI

Jika Anda ingin mendeploy langsung dari terminal tanpa membuat repositori Git:

1. Install Vercel CLI secara global (jika belum):
   ```bash
   npm install -g vercel
   ```
2. Jalankan perintah deploy di direktori root proyek:
   ```bash
   vercel
   ```
3. Ikuti petunjuk di terminal untuk masuk/login dan mengatur proyek baru.
4. Setelah konfigurasi awal selesai, deploy ke production menggunakan:
   ```bash
   vercel --prod
   ```

---

## Struktur Proyek

- `src/app/page.tsx`: Halaman utama portofolio (Client Component dengan state interaktif).
- `src/app/layout.tsx`: Kerangka layout global, meta tag SEO, dan konfigurasi bahasa.
- `src/app/globals.css`: Konfigurasi global CSS, Tailwind v4 theme, keyframes, dan utility classes.
- `next.config.ts`: Konfigurasi Next.js termasuk aturan `remotePatterns` untuk optimasi gambar Google User Content.
