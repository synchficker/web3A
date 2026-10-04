# Panduan Ukuran Gambar – 3A Billiard & Lounge

Ukuran di bawah dihitung untuk layar retina (±2x dari ukuran tampil), jadi tetap tajam di HP dan desktop.
Gambar otomatis di-*crop* ke tengah (`object-fit: cover`), jadi letakkan objek utama di bagian tengah foto.

| No | Elemen konten | File / lokasi | Ukuran upload (W x H) | Rasio | Tampil di layar | Format & berat maks |
|----|---------------|---------------|-----------------------|-------|-----------------|---------------------|
| 1 | Logo navbar | `images/logo.png` | **384 x 384 px** | 1:1 | 46 px (38 px di HP) | PNG transparan, 50 KB |
| 2 | Logo hero (atas) | `images/logo-hero.png` | **800 x 800 px** (min. 640 x 640) | 1:1 | maks 420 px (220 px di HP) | PNG transparan, 150 KB |
| 3 | Our Story | section `#about`, gambar pertama | **960 x 1200 px** | 4:5 (potret) | ±440 x 550 px desktop, lebar penuh di HP (maks 420 px) | JPG/WebP, 250 KB |
| 4 | Exclusive Lounge | section `#about`, baris 1 | **1200 x 900 px** | 4:3 (lanskap) | ±640 x 480 px desktop | JPG/WebP, 250 KB |
| 5 | VIP Room | section `#about`, baris 2 | **1200 x 900 px** | 4:3 | ±640 x 480 px desktop | JPG/WebP, 250 KB |
| 6 | Peralatan RASSON | section `#about`, baris 3 | **1200 x 900 px** | 4:3 | ±640 x 480 px desktop | JPG/WebP, 250 KB |
| 7 | Pelayanan Terbaik | section `#about`, baris 4 | **1200 x 900 px** | 4:3 | ±640 x 480 px desktop | JPG/WebP, 250 KB |
| 8 | Event (6 foto slider) | section `#galeri` | **800 x 600 px** per foto | 4:3 | ±370 x 277 px desktop, 2 kolom di tablet, 86% lebar di HP | JPG/WebP, 150 KB |
| 9 | Menu (semua item) | `images/menu/*.svg` | **400 x 400 px** per foto | 1:1 (persegi) | 96 x 96 px (84 x 84 px di HP) | JPG/WebP, 60 KB |

## Cara mengganti gambar
1. Siapkan gambar sesuai ukuran di tabel.
2. Ganti nilai `src="..."` pada tag `<img>` di `index.html` (contoh: `images/fasilitas/lounge.jpg`).
3. Untuk menu: file lama berformat `.svg`. Jika memakai foto `.jpg`/`.webp`, ubah juga ekstensi di `src`.
4. Isi `alt` dengan deskripsi singkat gambar. Atribut `width` dan `height` sudah sesuai tabel, jangan diubah.

Setiap slot gambar di `index.html` juga sudah diberi komentar `UKURAN GAMBAR ...` sebagai pengingat.

## Tips
- Gunakan WebP atau JPG kualitas 75–80 agar website cepat dibuka di HP.
- Jangan menaruh teks penting di tepi gambar karena bisa terpotong di layar HP.
- Elemen lain (ulasan Google, peta, ikon kontak) tidak memakai gambar upload.
