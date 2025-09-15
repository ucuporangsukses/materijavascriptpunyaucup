
## Masukan md ini ke dalam folder day3 nya ya 
***
# SOAL DAY 3

***
## Soal 1
Buat Catatan Yang Rapih Lengkap Dan Mudah Di pahami pada day 3 ini Yang Pada Setiap Sintaksnya ada Penjelasan Detail nya



## Soal 2 
Kerjakan Soal Latihan ini dengan catatan di dalam viscode dari detail kegunaan dan flownya pada masing masing soal

## If Else

1. **Cek Waktu Shalat**
Buat fungsi `cekWaktuShalat(jam)` yang menerima angka jam (0-23).
Output: "Waktu Subuh" (4-5), "Dzuhur" (12-13), "Ashar" (15-16), "Maghrib" (18-19), "Isya" (19-20), atau "Bukan waktu shalat".
Clue: gunakan if-else bertingkat, `console.log()`.
2. **Validasi Usia Santri Baru**
Buat fungsi `validasiUsia(usia)` yang menerima angka usia.
Output: "Layak mondok" jika usia 12–18, "Tidak layak mondok" selainnya.
Clue: if-else.
3. **Nilai Akhlak Santri**
Fungsi input angka 0-100, output "Akhlak mulia" jika nilai ≥ 85, "Perlu pembinaan" jika < 85.
Clue: if-else.
4. **Perlengkapan Shalat**
Fungsi menerima 3 boolean: pakaiSarung, pakaiKopiah, bawaSajadah.
Output "Siap shalat" jika semua true, tulis item kurang jika ada false, misal "Belum pakai kopiah".
Clue: if else dengan cek boolean.
5. **Cek Izin Keluar Pondok**
Fungsi input string alasan.
Output "Izin diterima" jika alasan "sakit", "keluarga", "prestasi", else "Izin ditolak".
Clue: lower case string dengan `toLowerCase()`, if-else.

***

## Switch

6. **Jadwal Kegiatan Harian**
Fungsi input angka 1-7 (hari Senin sampai Minggu).
Outputkan nama kegiatan utama pesantren di hari tersebut dengan switch-case.
7. **Menu Kantin Santri**
Input angka 1-5, outputkan menu makanan/minuman (1=Nasi Goreng, ..., 5=Aqua Botol).
Clue: switch.
8. **Kode Kamar Asrama**
Input digit pertama kode kamar, keluar nama asrama dengan switch.
9. **Tingkat Pelanggaran**
Input kode 1-4. Output sanksi sesuai kode: 1=Nasihat, 2=Hafalan Taubat, 3=Kerja Sosial, 4=Skors.
10. **Jabatan Pengurus Pondok**
Input jabatan, output tugas utama jabatan menggunakan switch-case.

***

## For Loop

11. **Daftar Santri Hadir**
Input array nama santri, tampilkan semua nama menggunakan for loop dan console.log.
12. **Total Hafalan Mingguan**
Input array jumlah hafalan ayat per hari (7 hari), output total hafalan minggu itu.
13. **Tabel Jadwal Shalat**
Input array jam dan nama shalat, tampilkan tabel di console: "[Jam] - [Shalat]".
14. **Motivasi Santri**
Input angka N, tampilkan "Semangat Santri!" sebanyak N kali.
15. **Pola Bintang Segitiga**
Input N, tampilkan pola segitiga bintang sisi siku kanan sebanyak N baris.

***

## Operator (Aritmatika, Comparison, Logic)

16. **Hitung Zakat**
Input nominal harta santri, hitung zakat 2.5% jika harta ≥ nisab (misal 85 gram emas).
Output jumlah zakat atau "Belum wajib zakat".
Clue: if, operator aritmatika.
17. **Validasi Login Santri**
Input username dan password, bandingkan dengan data tersimpan, output "Login berhasil" atau "Login gagal".
18. **Capaian Hafalan dan Akhlak**
Input jumlah ayat hafalan dan nilai akhlak.
Output "Lulus" jika hafalan ≥ 10 dan akhlak ≥ 80, "Belum Lulus" jika tidak.
19. **Diskon Buku Kitab**
Input usia dan total belanja.
Diskon 10% jika usia < 18 atau belanja > 1 juta, else tidak diskon.
20. **Validasi Password Kompleks**
Input password, valid jika panjang ≥8, ada huruf kapital, huruf kecil, angka.
Clue: string `.length`, `.match()` regex.

***

## Function Sederhana

21. **Jadwal Kajian Rutin**
Function input nama ustadz dan hari, output "Ngaji bersama [ustadz] setiap hari [hari]".
22. **Hitung Luas dan Keliling Lapangan Pesantren**
Input panjang dan lebar, output {luas, keliling} sebagai object.
23. **Konversi Tahun Hijriyah ke Masehi**
Fungsi input tahun hijriyah, output tahun masehi = hijriyah + 622.
24. **Hitung Total Hafalan**
Input array jumlah hafalan harian (angka). Fungsi mengembalikan total hafalan.
25. **Balikkan Nama Santri**
Input string nama, output string dengan urutan karakter terbalik.
Clue: gunakan `split('')`, `reverse()`, dan `join('')`.

***

## Clue Tambahan

- Gunakan `console.log()` untuk output.
- Gunakan `prompt()` (dom/browser) untuk input jika di web.
- Gunakan `toLowerCase()`, `toUpperCase()`, `.length`, `.match()` untuk string.
- Gunakan switch-case untuk pilihan tetap.
- Gunakan `for` untuk iterasi array sederhana.

***

## Soal 3
Kirimkan Link Repo Spesifik pada folder day 3 nya ya pada di folder Catatan Dan Latihannya 




Soal 1: "Mas, saya bingung banget nih. Setiap hari saya jual nasi gudeg 8 ribu, ayam goreng 12 ribu, sama es teh 3 ribu. Tapi saya sering lupa ngitung total uang yang masuk. Kadang gudeg laku 15 porsi, ayam 10 porsi, es teh 20 gelas. Bisakah dibuatkan sesuatu yang otomatis ngitung berapa duit yang saya dapet hari ini?"

Soal 2: "Oh iya mas, saya juga ada sistem diskon nih. Kalau ada yang beli total di atas 50 ribu, saya kasih diskon 10%. Tapi saya sering salah ngitung discountnya. Bisa tolong tambahin ke program tadi biar otomatis ngitung setelah diskon?"

Soal 3: "Mas, saya penasaran nih, dari tiga menu saya, mana sih yang paling laris? Soalnya saya mau fokus promosi yang paling laku. Bisa bikin program yang ngasih tau menu mana yang paling banyak terjual?"

Soal 4: "Saya punya pelanggan tetap nih mas. Ada yang biasa (dapat diskon 5%), member (diskon 10%), sama VIP (diskon 15%). Tapi saya bingung cara ngaturnya biar gak salah kasih diskon. Bisa bikin sistem yang inget level pelanggan dan diskonnya?"

Soal 5: "Mas, saya mau tau rata-rata penjualan saya seminggu terakhir. Kemarin 150 ribu, lusa 200 ribu, 3 hari lalu 175 ribu, 4 hari lalu 180 ribu, 5 hari lalu 165 ribu, 6 hari lalu 190 ribu, seminggu lalu 145 ribu. Tolong bikin yang bisa ngitung rata-ratanya."

Soal 6-10: Pak Joko - Pemilik Toko Baju Online
Soal 6: "Developer, saya punya masalah stok nih. Kaos saya ada 50 pcs harga 75 ribu, celana 30 pcs harga 150 ribu, jaket 15 pcs harga 200 ribu. Saya sering lupa berapa stok yang tersisa. Bisa dibuatin program buat ngecek stok setiap barang?"

Soal 7: "Saya ada sistem poin untuk pelanggan, setiap belanja 10 ribu dapat 1 poin. Tapi saya manual nulis di buku, ribet banget. Bisa bikin sistem yang otomatis nyimpen poin pelanggan dan nambah setiap kali mereka belanja?"

Soal 8: "Oh iya, saya ada aturan khusus nih. Kalau stok barang tersisa kurang dari 10, saya kasih bonus 5% dari harga. Tapi sering kelewat ngasih bonusnya. Bisa diatur otomatis gak ya?"

Soal 9: "Saya sering kehabisan stok mendadak karena gak tau kalau stok udah tipis. Bisa dibikin sistem peringatan kalau stok barang udah kurang dari 20?"

Soal 10: "Pelanggan saya ada yang poinnya banyak, ada yang sedikit. Saya mau bikin level Bronze kalau poin 0-99, Silver 100-499, Gold 500 ke atas. Tapi manual ngeceknya capek. Bisa otomatis gak?"

Soal 11-15: Bu Rina - Guru Kelas 5
Soal 11: "Mas developer, saya guru kelas 5. Setiap ujian saya harus ngitung rata-rata nilai siswa manual, capek banget. Siswa saya 25 orang, nilainya beda-beda. Bisa dibuatin program yang otomatis ngitung rata-rata nilai kelas?"

Soal 12: "Saya juga bingung nentuin grade siswa. Yang 85-100 dapat A, 70-84 dapat B, 60-69 dapat C, di bawah 60 dapat D. Manual ngeceknya lama banget. Bisa dibikin otomatis?"

Soal 13: "Saya punya 25 siswa dengan nama dan nilai masing-masing. Kadang saya lupa siapa yang nilai berapa. Bisa dibuatin sistem yang nyimpen data siswa dan bisa nyari berdasarkan nama?"

Soal 14: "Sekolah kasih reward kalau rata-rata kelas minimal 80. Saya sering lupa ngecek apakah kelas saya berhak dapat reward. Bisa dibikin otomatis ngecek?"

Soal 15: "Saya mau bikin ranking kelas dari nilai tertinggi ke terendah buat motivasi siswa. Tapi manual nyusunnya ribet banget. Ada yang bisa bantu otomatis bikin ranking?"

Soal 16-20: Mas Budi - Pemilik Bengkel Motor
Soal 16: "Bang developer, bengkel saya ada 3 jenis service: ringan 50 ribu (2 jam), sedang 100 ribu (4 jam), berat 200 ribu (8 jam). Setiap hari ada banyak motor masuk, saya bingung ngitung total pendapatan dan waktu yang dibutuhin. Bisa dibantu?"

Soal 17: "Bengkel saya buka cuma 8 jam sehari. Saya sering kebingungan apakah semua motor yang antri bisa selesai dalam sehari atau harus besok. Bisa dibikin program yang ngecek?"

Soal 18: "Antrian motor di bengkel saya sering berantakan. Kadang lupa siapa yang dateng duluan. Bisa dibikin sistem antrian yang rapi dengan nomor urut?"

Soal 19: "Saya kasih garansi: service berat 1 bulan, sedang 2 minggu, ringan 1 minggu. Tapi sering lupa kapan garansinya habis. Bisa dibikin yang otomatis ngitung tanggal berakhir garansi?"

Soal 20: "Mekanik saya dapat komisi: 10% dari service ringan, 15% sedang, 20% berat. Setiap hari saya manual ngitung komisinya, ribet banget. Bisa dibikin otomatis?"

Soal 21-25: Pak Andi - Pemilik Lembaga Kursus
Soal 21: "Developer, lembaga kursus saya ada 3 paket: Basic 500 ribu (4 pertemuan), Standard 800 ribu (8 pertemuan), Premium 1,2 juta (12 pertemuan). Saya bingung ngitung biaya per pertemuan setiap paket. Bisa dibantu?"

Soal 22: "Siswa saya banyak yang minta cicil. Basic bisa 2x, Standard 3x, Premium 4x. Tapi saya sering salah ngitung cicilan dan sisa bayarnya. Bisa dibikin sistem cicilan otomatis?"

Soal 23: "Saya punya 5 ruang kelas dengan kapasitas beda-beda: Ruang A (20 orang), B (15 orang), C (25 orang), D (10 orang), E (30 orang). Setiap pendaftaran baru saya bingung nempatinnya dimana. Bisa dibantu sistem alokasinya?"

Soal 24: "Absensi siswa saya masih manual, ribet banget. Saya mau tau persentase kehadiran setiap siswa buat evaluasi. Bisa dibikin sistem absensi digital yang ngitung persentase otomatis?"

Soal 25: "Bang, saya butuh sistem lengkap yang ngatur semua: pendaftaran siswa baru, pembayaran (tunai/cicil), jadwal kelas, absensi, sampe laporan bulanan. Sekarang semua manual, kepala pusing. Bisa dibikin satu sistem yang ngatur semuanya?"