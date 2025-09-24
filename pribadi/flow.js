// console.log("Halo Javascript")
// // /dipake buat nampilin teks atau nilai di console browser. Ini ga muncul di halaman, cuma di dev tools aja.
// console.log(100-50);
// console.log(10*5); 
// // /Setiap console.log() otomatis bikin baris baru di console.
// console.log("Nama lengkap: Yusuf Ramadhani")
// console.log("usia:18th")
// // /Console adalah alat debugging yang tersedia di browser untuk melihat output atau pesan sementara dari program JavaScript.
// alert("selamat datang")
// // /bikin pop-up di browser. Biasanya dipake buat info singkat ke user.
// alert("15 + 20");
// // /Di sini JS otomatis ngehitung 15 + 20 dulu baru ditampilin di alert.
// let buahFavorit = prompt("Masukkan nama buah favoritmu:");
// console.log("Buah favorit: " + buahFavorit);
// // /penjelasan : bikin user bisa input teks. Bisa disimpan di variabel untuk dipakai nanti.
// let kota = prompt("Masukkan nama kotamu:");
// alert("Anda berasal dari " + kota);
// // /penjelasan : User input disimpan di kota, terus digabung ke string di alert pakai +.
// document.getElementById("pesan").innerHTML = "ini adalah pesan dari java script"
// document.getElementById("judul").innerHTML = "Tugas selesai"
// document.getElementById("hasil-hitung").innerHTML = "HASIL"





// let nama ="kim yusuf"
// console.log("Halo, "+ nama + "!")
// let barang1 = 50000;
// let barang2 = 1000;
// let total   =(barang1 + barang2)
// console.log("Total harga: " + total);
// let angka = Number(prompt("Masukkan sebuah angka:"));
// angka *=2;
// console.log("jumlah perkalian:" + angka)
// let kata = prompt("masukan sebuah kata:");
// let pesanuser= prompt("apa kata yang lo ingin sampaikan")
// alert(pesanuser)
// let setuju = confirm("apakah kalian setuju dengan kebijakan kami")
// console.log(setuju)
// let ketik = prompt("ketik nama lo di sini:");
// console.info("informasi pengguna " + ketik)

// // /angka
// let angkapertama = prompt("masukan angka pertama: ")
// let angkakedua = prompt("masukan angka kedua: ")
// document.getElementById("hasil-kali").innerText = angkapertama * angkakedua


document.getElementById
console.warn("peringatan! website ini sedang mengalami perbaikan")
function tampilkanError() {
    console.error("ini adalah pesan error!");
}
let salam ="selamat";
let waktu ="malam";
console.log(salam + waktu);









// /level 3(10 soal)
// ===level 3 soal 1===

let angka = Number(prompt("Masukkan angka:"));

// Cek angka ganjil / genap
if (angka % 2 === 0) {
  console.log(angka + " adalah GENAP");
} else {
  console.log(angka + " adalah GANJIL");
}
// no2.nilai ujian
let nilai = Number(prompt("Masukkan nilai ujian:"));

if (nilai < 0 || nilai > 100) {
  console.warn("Nilai harus berada di antara  dan 100");
} else if (nilai >= 90) {
  console.info("Nilai A");
} else if (nilai >= 80) {
  console.info("Nilai B");
} else if (nilai >= 70) {
  console.info("Nilai C");
} else if (nilai >= 60) {
  console.info("Nilai D");
} 
// ===no3.siapakah pencipta java script===
let jawaban = prompt("siapa pencipta JavaScript?");
console.log("isi jawaban ini bre:" + jawaban)
// mengecek jawaban
if(jawaban==="Brendan eich"){
    alert("wah jawaban lo benar,keren bingits!!!");
    console.log("jawaban benar")
}else{
    alert("ceilah bre jawaban lo salah, nt dah nt")
    console.log("jawaban salah")

}
// ===no4.mengelempokkan data===
console.group("Data Saya");   // buka grup
console.log("Nama: Yusuf Ramadhani");
console.log("Usia: 18 tahun");
console.log("Pekerjaan: Pelajar");
console.groupEnd();           // tutup grup
// /mengelompokkan data pribadi saya 
// ===no.5.membuat dua prompt meminta dua angka
// /fungsi bantu untuk minta angka dari user dengan sedikit cleaning/validasi

let angka1 = prompt("Masukkan angka pertama:");
let angka2 = prompt("Masukkan angka kedua:");

angka1 = Number(angka1);
angka2 = Number(angka2);

let hasil;
if (angka1 > angka2) {
  hasil = "Angka pertama lebih besar";
} else if (angka1 < angka2) {
  hasil = "Angka pertama lebih kecil";
} else {
  hasil = "Kedua angka sama";
}

console.table({
  "Angka Pertama": angka1,
  "Angka Kedua": angka2,
  "Hasil Perbandingan": hasil
});
// / memasukan angka pertama dan kedua 

//===no.6.meminta pengguna akun memasukan usia dengan menggunakan tampilan alert.

let usia = Number(prompt("masukan usia anda"))
usia = Number(usia);
// cek umur apakah sudah mencukupi umur atau belum.
if (usia >= 18 && usia <=21){
  alert("lo belum masuk umur remaja");
  
}else {
  alert("lo sudah masuk umur remaja");

}
//===.no.7.menjumlah total belanja bulanan
let totalbelanjabulanan = prompt("masukkan total belana bulanan lo");
totalbelanjabulanan = Number(totalbelanjabulanan);
//cek belanja bulanan apakah melebihi dari 10000.000
if (totalbelanjabulanan >=30000.000) {
  alert("WOW SELAMAT!!LO HARI INI NYAMPE DUA HARI KE DEPAN MENDAPATKAN DISKON SEBESAR 5%")
} else {
  alert("sering sering belaja di toko kami di jamin bakal mendapatkan diskon lebih besar lagi")
}
//===.no.8.===
let lanjut = confirm("apakah lo mau melanjutkan?");
let statusP = document.getElementById("status");  
if (lanjut) {
  statusP.innerText = "anda melanjutkan";
} else {
  statusP.innerText = "anda tidak melanjutkan";
}
//===.no.9.menggunakan console time()dan console.timeEnd untuk mengukur waktu yang di butuhkan java script
// console.time("waktu");
// for (let i = 0; i <= 1000; i++) {
  // console.log(i);
// }
// console.timeEnd("waktu");
//===.no.10.pengguna harus memasukkan nama pengguna dan tanggal lahir pengguna dengan tampilan console log()
let tahunLahir = 2007
let usiaSekarang = new Date().getFullYear() - tahunLahir
console.log("Halo saya yusuf ramadhani, usia Anda adalah " + usiaSekarang + " tahun.")
