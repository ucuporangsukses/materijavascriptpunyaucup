// 1. Bikin variabel namaLengkap buat nyimpen nama
let namaLengkap = "Yusuf Ramadhani"; 
console.log(namaLengkap); // nampilin isi variabel namaLengkap ke console

// 2. Bikin angka1 dan angka2, lalu hitung tambahannya
let angka1 = 15; // angka pertama
let angka2 = 5;  // angka kedua
let hasilTambah = angka1 + angka2; // variabel baru buat nyimpen hasil penjumlahan
console.log("Hasil tambah: " + hasilTambah); // nampilin hasil penjumlahan

// 3. Ubah angka1 jadi 20, lalu hitung hasil kali dengan angka2
angka1 = 20; // ganti nilai angka1 jadi 20
let hasilKali = angka1 * angka2; // nyimpen hasil perkalian
console.log("Hasil kali: " + hasilKali); // nampilin hasil perkalian

// 4. Bikin x dan y, lalu tampilkan sisa bagi (modulus)
let x = 10; // angka pertama
let y = 3;  // angka kedua
console.log("Sisa bagi: " + (x % y)); // operator % dipake buat cari sisa bagi

// 5. Bikin saldo lalu kurangi dengan 25000
let saldo = 100000; // saldo awal
saldo = saldo - 25000; // kurangi saldo
console.log("Sisa saldo: " + saldo); // nampilin sisa saldo

// 6. Bikin isStudent buat nyimpen data true/false
let isStudent = true; 
console.log("Apakah aku student? " + isStudent); // nampilin nilai boolean

// 7. Bikin panjang, lebar, tinggi, lalu hitung volume balok
let panjang = 5;
let lebar = 4;
let tinggi = 3;
let volume = panjang * lebar * tinggi; // rumus volume balok
console.log("Volume balok: " + volume); // nampilin volume balok

// 8. Bikin harga lalu tambahin 10000 pakai +=
let harga = 50000; 
harga += 10000; // sama artinya harga = harga + 10000
console.log("Harga sekarang: " + harga); // nampilin harga baru

// 9. Bikin greeting lalu tambahin " Pagi"
let greeting = "Selamat"; 
greeting += " Pagi"; // sama artinya greeting = greeting + " Pagi"
console.log(greeting); // nampilin greeting terbaru

// 10. Bikin totalPembelian lalu kasih diskon 10%
let totalPembelian = 150000; 
totalPembelian *= 0.9; // sama artinya totalPembelian = totalPembelian * 0.9
console.log("Total setelah diskon: " + totalPembelian); // nampilin harga setelah diskon


// soal ke 2

// 1. Cek apakah Budi lebih muda dari Andi
let umurBudi = 25; // variabel umur Budi
let umurAndi = 30; // variabel umur Andi
if (umurBudi < umurAndi) { // cek apakah umurBudi lebih kecil dari umurAndi
  console.log("Budi lebih muda dari Andi"); // tampilkan kalau benar
} else {
  console.log("Budi tidak lebih muda dari Andi"); // tampilkan kalau salah
}

// 2. Cek password
let password = "rahasia123"; // variabel password
if (password === "rahasia123") { // cek apakah password sama dengan "rahasia123"
  console.log("Password benar!"); // tampilkan jika benar
} else {
  console.log("Password salah!"); // tampilkan jika salah
}

// 3. Cek nilai ujian di antara 80 dan 90
let nilaiUjian = 85; // variabel nilai ujian
if (nilaiUjian >= 80 && nilaiUjian <= 90) { // cek nilai di antara 80 dan 90
  console.log("Nilai berada di antara 80 dan 90"); // tampilkan jika sesuai
} else {
  console.log("Nilai di luar range"); // tampilkan jika tidak sesuai
}

// 4. Cek cuaca hujan atau ada payung pakai OR
let cuaca = "hujan"; // variabel cuaca
let adaPayung = true; // variabel kondisi ada payung
if (cuaca === "hujan" || adaPayung === true) { // cek apakah hujan atau ada payung
  console.log("Aman keluar rumah"); // tampilkan jika salah satu benar
} else {
  console.log("Bahaya keluar rumah"); // tampilkan jika keduanya salah
}

// 5. Buat fungsi sapa()
function sapa() { // fungsi tanpa parameter
  console.log("Halo, selamat datang!"); // menampilkan sapaan
}
sapa(); // memanggil fungsi sapa()

// 6. Buat fungsi jumlahkan(a, b)
function jumlahkan(a, b) { // fungsi dengan parameter a dan b
  return a + b; // mengembalikan hasil penjumlahan
}
console.log("Hasil jumlah: " + jumlahkan(5, 7)); // memanggil fungsi dan tampilkan hasilnya

// 7. Cek nilai lulus atau tidak
let nilai = 75; // variabel nilai
if (nilai >= 70) { // cek apakah nilai >= 70
  console.log("Anda lulus!"); // tampilkan jika lulus
} else {
  console.log("Belum lulus"); // tampilkan jika tidak lulus
}

// 8. Cek angka 10 (Genap/Ganjil)
let angka = 10; // variabel angka
if (angka % 2 === 0) { // cek sisa bagi 2, kalau 0 berarti genap
  console.log("Genap"); // tampilkan jika genap
} else {
  console.log("Ganjil"); // tampilkan jika ganjil
}

// 9. Fungsi cekUmur(umur)
function cekUmur(umur) { // fungsi dengan parameter umur
  if (umur > 17) { // cek apakah umur lebih dari 17
    console.log("Anda dewasa."); // tampilkan jika dewasa
  } else {
    console.log("Masih anak-anak."); // tampilkan jika tidak dewasa
  }
}
cekUmur(18); // panggil fungsi cekUmur

// 10. Fungsi cekNilai(nilai)
function cekNilai(nilai) { // fungsi dengan parameter nilai
  if (nilai > 90) { // cek apakah nilai lebih dari 90
    console.log("Nilai Anda A."); // tampilkan jika benar
  } else {
    console.log("Nilai Anda belum A."); // tampilkan jika salah
  }
}
cekNilai(95); // panggil fungsi cekNilai


//SOAL KE 3


// 1. Minta nama pakai prompt
let nama = prompt("Masukkan nama kamu:"); // minta input nama dari user
if (nama) { // cek kalau ada isinya
  console.log("Selamat datang, " + nama + "!"); // tampilkan jika ada isi
} else {
  console.log("Anda tidak memasukkan nama."); // tampilkan jika kosong
}

// 2. Fungsi hitungDiskon(totalBelanja, persenDiskon)
function hitungDiskon(totalBelanja, persenDiskon) { // fungsi dengan 2 parameter
  let hasil = totalBelanja - (totalBelanja * persenDiskon / 100); // hitung total setelah diskon
  return hasil; // kembalikan nilai
}
console.log("Total setelah diskon: " + hitungDiskon(200000, 10)); // contoh pemanggilan

// 3. Fungsi hitungPajak(gaji, persenPajak)
function hitungPajak(gaji, persenPajak) { // fungsi dengan 2 parameter
  let gajiBersih = gaji - (gaji * persenPajak / 100); // hitung gaji bersih
  return gajiBersih; // kembalikan nilai
}
console.log("Gaji bersih: " + hitungPajak(5000000, 5)); // contoh pemanggilan

// 4. Fungsi cekKelayakan(umur, punyaSim)
function cekKelayakan(umur, punyaSim) { // fungsi dengan 2 parameter
  if (umur > 18 && punyaSim === true) { // cek dua syarat: umur > 18 dan punya SIM
    console.log("Anda layak mengemudi."); // tampilkan jika memenuhi
  } else {
    console.log("Anda tidak layak mengemudi."); // tampilkan jika tidak memenuhi
  }
}
cekKelayakan(20, true); // contoh pemanggilan

// 5. Fungsi cekSuhu(suhu)
function cekSuhu(suhu) { // fungsi dengan 1 parameter
  if (suhu > 30) { // jika suhu di atas 30
    console.log("Suhu panas."); 
  } else if (suhu >= 20 && suhu <= 30) { // jika antara 20–30
    console.log("Suhu normal.");
  } else { // jika di bawah 20
    console.log("Suhu dingin.");
  }
}
cekSuhu(28); // contoh pemanggilan

