 console.log("Hello World");
// /Catatan: console.log() fungsinya buat nampilin teks/data ke console.
//2.variabel.
let nama = "bre";
// /catatan let yaitu fungsinya untuk menggunakan/membuat variabel dan bisa mengubah nilai.
//3.Menggunakan string dengan variabel
console.log('halo,nama gue yusuf ramadhani');
// /Catatan: Tanda + dipakai buat gabungin teks dengan variabel.
//4.Warning
console.warn('warn');
// /catatan : bahwasanya console warn itu adalah peringatan/warning mempunyai tanda warna kuning 
//5.Error
console.error("error");
// /catatan : console error memunculkan sebuah pesan yang di sampaikan berwarna merah
//6. Undifined
// /Catatan: hasilnya undefined
//7.
console.assert("data")
// /catatan : mengecek analisis data mana bila tidak eror maka tidak menampilkan apapun, jika error maka akan di tampilkan
//8.
let buah = ["apel", "mangga", "jeruk"]
console.table(buah)
// /catatan :"buah" bakal ditampilin dalam bentuk tabel dengan kolom index dan value.
//9.
let hitung = "waktu"
console.time(hitung)
console.timeLog(hitung)
console.timeEnd(hitung)
// /catatan : console time itu fungsi nya adalah untuk mengukur waktu
//10.
let orang = "irgi"
console.count(orang)
console.count(orang)
console.countReset(orang)
console.count(orang)
// /catatan : untuk ngitung beberapa kali kode di panggil
//11.
console.group()
console.log("manggis")
console.log("kangkung")
console.log("bayam")
console.groupEnd()
// /catatan : untuk membikin group
//12.
alert("Baek Song Min")
// /catatan : itu fungsi bawaan JavaScript yang gunanya buat nampilin kotak pop-up (dialog) ke layar browser.
confirm("Baek Song Min")
// /catatan : untuk mengkonfirmasi 
//13.
prompt("coca cola")
// /catatan : itu fungsi bawaan JavaScript yang gunanya buat nampilin kotak pop-up (dialog) ke layar browser.
//14.
let tampilkan =document.getElementById("tag1")
tampilkan.innerHTML="spritepp"
