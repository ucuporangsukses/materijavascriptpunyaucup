*evaluasi pekan 2 bulan 2*
no 1:
saya selama dua minggu ini sudah mempelajari java script, di minggu pertama saya sudah di ajarkan oleh mentor saya fundamental java script, di minggu pertama di ajarkan debugging melewati inspec di browser, dan di ajarkan juga membuat table di vscode 
selain itu juga saya di ajarkan untuk membikin sebuahh variabel:
-var:
    var adalah suatu variabel yang harus dideklarasikan, jika tidak di deklaraasikan mkaa nilai nya undifined
-let: 
    let adalah sebuah variabell yang tidak bisa di gabung dengan deklarai

-const:
    const itu setau saya selama saya belajar java script dua minggu ini, const tidak jauh berbeda dengan let, sebuah variabel yamg tidak bisa di deklarasikan dan nilai yang tidak bisa di ubah

selain saya sudah mempelajari variabel saya juga sudah mempelajari cara menggunakan function
cara penggunaan sederhana function yang sudah di ajarkan oleh mentor:
function f1(a1,a2){
    let hasil = a1+a2;}
    return hasil;
ini function untuk nilai pertambahan

ini funtion untuk nilai pengurangan
function pengurangan(a1,a2,a3){
    let hasil = a1-a2;
    return a1
}
// console.log(pengurangan(15,59,100));

ini function untuk nilai perkailian
function perkalian(a1,a2,a3,a4){
    let hasil =a1*a2*a3*a4;
    return `perkalian dari ${a1}x${a2}x${a3}x${a4} adalah ${hasil}`
}
console.log(perkalian(10,20,30,40));


selain saya sudah mempelajari juga mempelajari 
cabang if else

if (nilai >= 90) {
   console.log("Grade: A");
 } else if (nilai >= 80) {
   console.log("Grade: B");
 } else if (nilai >= 70) {
  console.log("Grade: C");
 } else {
  console.log("Grade: D");}
  penjelasannya :
  -if di gunakan untuk kondisi pertama 
  -else if untuk kondisi tambahan
  -else untuk kondisi default (jika semuanya salah)

  selain itu masih ada percabangan switch yang sudah di pelajari
 let hari = 3;

 switch (hari) {
   case 1:
     console.log("Hari ini: Senin");
     break;
   case 2:
     console.log("Hari ini: Selasa");
     break;
   case 3:
     console.log("Hari ini: Rabu");
     break;
   default:
     console.log("Hari tidak valid");
     break;
 }

penjelasannya :
- switch cocok untuk banyak pilihan dengan nilai yang pasti
- gunakan break agar tidak lanjut ke case berikutnya

di hari keberapa saya lupa bahwa saya sudah di ajarkan pengulangan/LOOPING
FOR LOOP
for (let i = 1; i <= 5; i++) {
    console.log(For Loop ke-${x});
}
WHILE LOOP
let x = 1;
 while (x <= 5) {
   console.log(While Loop ke-${x});
   x++;
 }
ada satu lagi tapi lupa
penjelasannya : 
- FOR : jumlah perulangan sudah di ketahui
- WHILE :menjalankan selama kondisi benar


Di minggu ke dua kita di ajarkan mendeklarasikan sebuah array
let teman = ['Budi', 'Andi', 'Siti', 'Rina', 'Dewi'];

 Baru deh bisa akses
 console.log("Nama pertama: " + teman[0]);
 console.log("Nama terakhir: " + teman[teman.length - 1]);
 console.log("Total nama: " + teman.length);

 Selain mempelajari mendeklarasi array kita juga sudah mempelajari fitur fitur baru saya kenal minggu ke dua ini seperti push, pop, index of, unshift, shift, concat, dan lain lain

-PUSH
 beberapa fitur yang semoga saja inget terus :
 -let hobi = ["coding","baca buku","nonton film"];
 hobi.push("main bola");
 hobi.push("healing")
 console.log(hobi);
- POP
let matapelajaran = [`bahasa inggris`,`Matematika`,`Ipa`,`Fisika`];
matapelajaran.pop();
console.log(matapelajaran);

- MENCARI ELEMEN DI DALAM ARRAY
let hewan = ['kucing', 'anjing', 'burung'];
let posisi = hewan.indexOf('anjing');
console.log(posisi);

- Mengubah Elemen di dalam array
let makanan = ['nasi', 'mie', 'roti'];
makanan[1] = 'spaghetti';
console.log(makanan);

- UNSHIFT
let transport = ['mobil', 'motor'];
transport.unshift('sepeda');
console.log(transport);

- SHIFT
let hari = ['Senin', 'Selasa', 'Rabu'];
let hariPertama = hari.shift();
console.log(hariPertama);
console.log(hari); 



