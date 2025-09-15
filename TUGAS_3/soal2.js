// soal no: 1 

// // Soal 1: cekWaktuShalat
// function cekWaktuShalat(jam) {
//   // validasi input: pastikan jam adalah bilangan bulat antara 0 sampai 23
//   if (typeof jam !== "number" || !Number.isInteger(jam) || jam < 0 || jam > 23) {
//     console.log("Masukin jam 0-23 ya (angka bulat).");
//     return;
//   }

//   // Kita pakai pengecekan berurutan; kalau ada overlap jam (misal 19)
//   // urutan pengecekan menentukan hasil. Di sini gue pilih: Subuh, Dzuhur, Ashar, Isya, Maghrib.
//   if (jam >= 4 && jam <= 5) {
//     console.log("Waktu Subuh");
//   } else if (jam >= 12 && jam <= 13) {
//     console.log("Waktu Dzuhur");
//   } else if (jam >= 15 && jam <= 16) {
//     console.log("Waktu Ashar");
//   } else if (jam >= 19 && jam <= 20) {
//     // pilih Isya dulu untuk jam 19 supaya tidak bentrok dengan Maghrib
//     console.log("Waktu Isya");
//   } else if (jam >= 18 && jam <= 19) {
//     console.log("Waktu Maghrib");
//   } else {
//     console.log("Bukan waktu shalat");
//   }
// }

// // Contoh:
// cekWaktuShalat(4);  // Waktu Subuh
// cekWaktuShalat(12); // Waktu Dzuhur
// cekWaktuShalat(19); // Waktu Isya (karena kita cek Isya dulu untuk jam 19)
// cekWaktuShalat(23); // Bukan waktu shalat
// cekWaktuShalat(18);
// cekWaktuShalat(12);


// soal no: 2
// function validasiUsia(usia) {
//   // Pastikan input angka
//   if (typeof usia !== "number") {
//     console.log("Masukin angka usia, misal 15.");
//     return;
//   }

//   // rentang 12 sampai 18 dianggap layak mondok
//   if (usia >= 12 && usia <= 18) {
//     console.log("Layak mondok");
//   } else {
//     console.log("Tidak layak mondok");
//   }
// }

// // Contoh:
// validasiUsia(15); // Layak mondok



// soal: no:3

// function nilaiAkhlak(nilai) {
//   // Validasi input antara 0 sampai 100
//   if (typeof nilai !== "number" || nilai < 0 || nilai > 100) {
//     console.log("Masukin nilai 0-100 ya.");
//     return;
//   }

//   if (nilai >= 85) {
//     console.log("Akhlak mulia");
//   } else {
//     console.log("Perlu pembinaan");
//   }
// }

// // Contoh:
// nilaiAkhlak(100); // Akhlak mulia
// nilaiAkhlak(75); // Perlu pembinaan


// // soal: no:4 
// function cekPerlengkapan(pakaiSarung, pakaiKopiah, bawaSajadah) {
//   // Buat array buat nampung item yang belum dipakai
//   const kurang = [];

//   // kalau pakaiSarung false/undefined -> tambahin pesan
//   if (!pakaiSarung) kurang.push("Belum pakai sarung");
//   if (!pakaiKopiah) kurang.push("Belum pakai kopiah");
//   if (!bawaSajadah) kurang.push("Belum bawa sajadah");

//   // kalau kosong berarti semua true
//   if (kurang.length === 0) {
//     console.log("Siap shalat");
//   } else {
//     // gabung pesan kekayaan item yang kurang
//     console.log(kurang.join(", "));
//   }
// }

// // Contoh:
// cekPerlengkapan(true, true, true);   // Siap shalat
// cekPerlengkapan(true, false, true);  // Belum pakai kopiah
// cekPerlengkapan(false, false, false); // Belum pakai sarung, Belum pakai kopiah, Belum bawa sajadah


// // soal no: 5.

// function cekIzin(alasan) {
//   if (typeof alasan !== "string") {
//     console.log("Tulis alasan dalam bentuk teks, misal 'sakit'.");
//     return;
//   }

//   const alasanLower = alasan.toLowerCase().trim();

//   // alasan yang diterima
//   if (alasanLower === "sakit" || alasanLower === "keluarga" || alasanLower === "prestasi") {
//     console.log("Izin diterima");
//   } else {
//     console.log("Izin ditolak");
//   }
// }

// // Contoh:
// cekIzin("Sakit");      // Izin diterima
// cekIzin("liburan");    // Izin ditolak
// cekIzin("  KELUARGA "); // Izin diterima (trim dan case-insensitive)


// soal no:6.


function jadwalKegiatan(hari) {
  switch (hariangka){
    case 1:
      console.log("senin: Belajar fundamnetal java script")
      break;
    case 2:
      console.log("selasa: Belajar coding java script")
      break;
    case 3:
      console.log("rabu: Belajar coding java script")
      break; 
    case 4:
    console.log("kamis: Belajar coding java script")
        break;
    case 5:
      console.log("jumat: Belajar coding java script")
      break;
    case 6:
      console.log("sabtu: evaluasi java script")
      break;
      console.log("masukin angka 1-7 ya(senin-minggu")
      

  }
}

// Contoh :
jadwalKegiatan(1); //senin: belajar fundamental java script
jadwalKegiatan(2);// selasa: belajar coding java script
jadwalKegiatan(3);// rabu: belajar coding java script
jadwalKegiatan(4);// kamis: belajar coding java script
jadwalKegiatan(5);// jumat: mengulas materi coding java script
jadwalKegiatan(6);// sabtu: evaluasi materi java script



// soal no:7
let menu = (prompt("Masukkan angka 1-5 untuk memilih menu:"));
switch(menu){
    case 1: console.log("Nasi Goreng"); break;
    case 2: console.log("Mie Ayam"); break;
    case 3: console.log("Sate Ayam"); break;
    case 4: console.log("Teh Manis"); break;
    case 5: console.log("Aqua Botol"); break;
    default: console.log("Menu tidak tersedia");
}


// soal no:8
let kode = prompt("Masukkan digit pertama kode kamar:");
switch(kode){
    case "1": console.log("Asrama A"); break;
    case "2": console.log("Asrama B"); break;
    case "3": console.log("Asrama C"); break;
    default: console.log("Kode tidak valid");
}


// soal no:9
let pelanggaran = parseInt(prompt("Masukkan kode pelanggaran 1-4:"));
switch(pelanggaran){
    case 1: console.log("Nasihat"); break;
    case 2: console.log("Hafalan Taubat"); break;
    case 3: console.log("Kerja Sosial"); break;
    case 4: console.log("Skors"); break;
    default: console.log("Kode salah");
}


// soal no:10
let jabatan = prompt("Masukkan jabatan pengurus:");
switch(jabatan){
    case "ketua": console.log("Memimpin kegiatan pondok"); break;
    case "sekretaris": console.log("Mencatat dan mengarsip surat"); break;
    case "bendahara": console.log("Mengatur keuangan pondok"); break;
    default: console.log("Jabatan tidak ditemukan");
    
}


// SOAL KE 11
let santri = ["Ali", "Budi", "Cici"];
for(let i=0; i<santri.length; i++){
    console.log(santri[i]);
}
//SOAL KE 12
let hafalan = [3, 4, 2, 5, 1, 2, 3];
let total = 0;
for(let i=0; i<hafalan.length; i++){
    total += hafalan[i];
}
console.log("Total hafalan minggu ini: " + total);


// soal no:13

