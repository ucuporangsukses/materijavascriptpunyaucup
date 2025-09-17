//Catatan JavaScript Dasar

// ## 1. IF / ELSE
// Digunakan untuk percabangan logika.
// js
// let angka = 5;
// if (angka > 0) {
//   console.log("Positif");
// } else {
//   console.log("Negatif atau Nol");
// }
// 
// - if → menjalankan blok kode bila kondisi true.
// - else → jalan kalau kondisi false.

// ## 2. ELSE IF
// Digunakan untuk banyak kondisi.
// js
// let nilai = 85;
// if (nilai >= 90) {
//   console.log("A");
// } else if (nilai >= 75) {
//   console.log("B");
// } else {
//   console.log("C");
// }
// 

// ## 3. SWITCH
// Untuk percabangan dengan banyak case.
// js
// let hari = "Senin";
// switch(hari) {
//   case "Senin":
//     console.log("Awal minggu");
//     break;
//   case "Jumat":
//     console.log("Hampir weekend");
//     break;
//   default:
//     console.log("Hari biasa");
// }
// 

// ## 4. FOR LOOP
// Digunakan untuk perulangan dengan jumlah tertentu.
// js
// for (let i = 1; i <= 5; i++) {
//   console.log("Iterasi ke-" + i);
// }
// 

// ## 5. WHILE LOOP
// Perulangan berdasarkan kondisi.
// js
// let i = 0;
// while (i < 3) {
//   console.log("Hello " + i);
//   i++;
// }
// 

// ## 6. FUNCTION
// Blok kode yang bisa dipanggil ulang.
// js
// function sapa(nama) {
//   return "Halo " + nama;
// }
// console.log(sapa("cupz"));
// 

// ## 7. OPERATOR
// - Aritmatika: + - * / %
// - Perbandingan: == != > < >= <=
// - Logika: && || !

// */




//SOAL DAN JAWABAN


//function di javascript digunakan untuk mengulang blok kode sebanyak jumlah tertentu dalam suatu array atau objek, ada beberapa ciri ciri for loop, while loop, do while loop, function declaration, function expression, arrow function


// Ada Berapa Metode Untuk Membuat Function Pada Javascript?


// // 1. Function Declaration
// function luasPersegi(sisi) {       // bikin fungsi bernama luasPersegi dengan parameter sisi
//   return sisi * sisi;              // return hasil perkalian sisi * sisi
// }
// console.log(luasPersegi(4)); // 16  // panggil fungsi dengan sisi=4 → 16

// function cekGanjilGenap(angka) {   // bikin fungsi cekGanjilGenap dengan parameter angka
//   return angka % 2 === 0 ? "Genap" : "Ganjil"; 
//   // pakai operator ternary: kalau habis dibagi 2 → Genap, kalau tidak → Ganjil
// }
// console.log(cekGanjilGenap(7)); // Ganjil

// // // 2. Function Expression
// const luasSegitiga = function(alas, tinggi) { // simpan fungsi di variabel luasSegitiga
//   return 0.5 * alas * tinggi;                 // hitung luas segitiga
// };
// console.log(luasSegitiga(6, 4));              // panggil fungsi → hasil 12

// const tambah = function(a, b) {               // simpan fungsi penjumlahan ke variabel tambah
//   return a + b;                               // kembalikan hasil a+b
// };
// console.log(tambah(3, 5)); // 8

// // 3. Arrow Function
// const luasLingkaran = (r) => 3.14 * r * r;   // arrow function, singkat untuk satu baris return
// console.log(luasLingkaran(7)); // 153.86

// const salam = (nama) => `Halo ${nama}`;      // arrow function dengan template literal
// console.log(salam("cupz")); // Halo cupz

// // // 4. Anonymous Function (langsung dipanggil)
// (function() {                                // fungsi tanpa nama (anonymous)
//   console.log("Halo dari anonymous function");
// })();                                        // langsung dipanggil (IIFE)

// [1, 2, 3].forEach(function(x) {              // anonymous function sebagai argumen forEach
//   console.log(x * 2);                        // output tiap elemen dikali 2
// });

// // 5. Constructor Function
// const kali = new Function("a", "b", "return a * b");  // bikin fungsi baru pakai constructor
// console.log(kali(4, 5)); // 20

// const kurang = new Function("a", "b", "return a - b"); // sama, tapi untuk pengurangan
// console.log(kurang(10, 3)); // 7


// //Buat 5 Study case pada closure

// 1. Counter sederhana
// function buatCounter() {              // deklarasi fungsi induk "buatCounter"
//   let count = 0;                      // variabel lokal count, hanya hidup di dalam fungsi ini
//   return function() {                 // return sebuah fungsi (closure)
//     count++;                          // setiap kali dipanggil, count naik 1
//     return count;                     // hasilnya dikembalikan
//   };
// }
// const hitung = buatCounter();         // bikin "instance" counter baru
// console.log(hitung()); // 1           // pertama kali panggil → count = 1
// console.log(hitung()); // 2           // panggil lagi → count = 2

// 2. Tabungan
// function tabunganAwal(saldo) {        // fungsi induk, punya variabel saldo
//   return function(tambah) {           // closure menerima argumen "tambah"
//     saldo += tambah;                  // saldo bertambah setiap kali dipanggil
//     return saldo;                     // return saldo terbaru
//   };
// }
// const tabunganCupz = tabunganAwal(1000); // tabungan awal 1000
// console.log(tabunganCupz(500)); // 1500  // tambah 500 jadi 1500

// 3. Password checker
// function buatLogin(password) {         // fungsi induk, simpan password privat
//   return function(input) {             // closure untuk cek input
//     return input === password ? "Akses diterima" : "Salah password"; // cek kondisi
//   };
// }
// const login = buatLogin("rahasia");    // set password = "rahasia"
// console.log(login("rahasia"));         // input cocok → "Akses diterima"

// 4. Salam khusus
// function buatPenyapa(greeting) {       // fungsi induk simpan kata salam
//   return function(nama) {              // closure menerima nama
//     return `${greeting}, ${nama}!`;    // gabung salam + nama
//   };
// }
// const sapaPagi = buatPenyapa("Selamat pagi"); // set salam pagi
// console.log(sapaPagi("cupz"));         // output: Selamat pagi, cupz!

// 5. Tracker absensi
// function absensi() {                   // fungsi induk
//   let hadir = [];                      // array kosong untuk simpan nama hadir
//   return function(nama) {              // closure menerima nama baru
//     hadir.push(nama);                  // nama masuk ke array hadir
//     return hadir;                      // kembalikan daftar hadir terbaru
//   };
// }
// const hadirHariIni = absensi();        // bikin tracker absensi baru
// console.log(hadirHariIni("cupz"));     // daftar berisi ["cupz"]
// console.log(hadirHariIni("Zeta"));     // daftar berisi ["cupz","Zeta"]
// console.log(hadirHariIni("Lia"));      // daftar berisi ["cupz","Zeta","Lia"]



// Buat 5 eksekusi dengan pendekatan array/object

// // 1. Rekap nilai santri
// let nilaiSantri = [80, 90, 70, 85];  
// // Array berisi nilai beberapa santri

// let rata2 = nilaiSantri.reduce((a, b) => a + b, 0) / nilaiSantri.length;
// // reduce() → menjumlah semua nilai dalam array (a = akumulator, b = elemen berikutnya)
// // dibagi jumlah elemen array → hasilnya rata-rata nilai

// console.log("Rata-rata nilai:", rata2);
// // Cetak hasil rata-rata ke console


// // 2. Data guru pakai object
// let guru = {                // Membuat object guru
//   nama: "Ustadz Ali",       // properti nama
//   mapel: "Matematika",      // properti mata pelajaran
//   pengalaman: 5             // properti pengalaman mengajar (tahun)
// };
// console.log(guru);
// Cetak seluruh object guru


// 3. Daftar kegiatan pakai array
// let kegiatan = ["Sholat", "Ngaji", "Belajar", "Istirahat"];
// // Array berisi daftar kegiatan

// kegiatan.forEach((k, i) => console.log(`${i+1}. ${k}`));
// // forEach → looping tiap item di array
// // k = isi item, i = index (mulai dari 0)
// // ${i+1}. ${k} → format teks: nomor urut + nama kegiatan


// // 4. Filter santri lulus
// let santri = [                          // Array of object → tiap santri punya nama & nilai
//   { nama: "cupz", nilai: 90 },
//   { nama: "Zeta", nilai: 60 },
//   { nama: "Lia", nilai: 75 }
// ];

// let lulus = santri.filter(s => s.nilai >= 70);
// // filter() → ambil hanya santri yang nilainya >= 70

// console.log("Santri lulus:", lulus);
// // Cetak array hasil filter (isi object santri yang lulus)


// // 5. Statistik hafalan
// let hafalan = {             // Object berisi data hafalan ayat
//   juz1: 15,                 // juz1 = 15 ayat
//   juz2: 10,                 // juz2 = 10 ayat
//   juz3: 8                   // juz3 = 8 ayat
// };

// let totalAyat = Object.values(hafalan).reduce((a, b) => a + b, 0);
// // Object.values(hafalan) → ambil semua value jadi array [15, 10, 8]
// // reduce() → jumlahkan semua elemen array

// console.log("Total ayat hafalan:", totalAyat);
// // Cetak jumlah total ayat hafalan


