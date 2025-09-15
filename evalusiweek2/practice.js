let nama ="kim yusuf"
console.log("Halo, "+ nama + "!")

if (nilai >= 90) {
   console.log("Grade: A");
 } else if (nilai >= 80) {
   console.log("Grade: B");
 } else if (nilai >= 70) {
  console.log("Grade: C");
 } else {
  console.log("Grade: D");}
  //penjelasannya :
  //-if di gunakan untuk kondisi pertama 
  //-else if untuk kondisi tambahan
  //-else untuk kondisi default (jika semuanya salah)

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

// penjelasannya :
// - switch cocok untuk banyak pilihan dengan nilai yang pasti
// - gunakan break agar tidak lanjut ke case berikutnya

//FOR LOOP
for (let i = 1; i <= 5; i++) {
    console.log(`For Loop ke-${x}`);
}
//WHILE LOOP
let x = 1;
 while (x <= 5) {
   console.log(`While Loop ke-${x}`);
   x++;
 }


 -PUSH
 //beberapa fitur yang semoga saja inget terus :
 let hobi = ["coding","baca buku","nonton film"];
 hobi.push("main bola");
 hobi.push("healing")
 console.log(hobi);
- POP
let matapelajaran = [`bahasa inggris`,`Matematika`,`Ipa`,`Fisika`];
matapelajaran.pop();
console.log(matapelajaran);

//- MENCARI ELEMEN DI DALAM ARRAY
let hewan = ['kucing', 'anjing', 'burung'];
let posisi = hewan.indexOf('anjing');
console.log(posisi);

//- Mengubah Elemen di dalam array
let makanan = ['nasi', 'mie', 'roti'];
makanan[1] = 'spaghetti';
console.log(makanan);

//- UNSHIFT
let transport = ['mobil', 'motor'];
transport.unshift('sepeda');
console.log(transport);

//- SHIFT
let hari = ['Senin', 'Selasa', 'Rabu'];
let hariPertama = hari.shift();
console.log(hariPertama);
console.log(hari); 

let angka = [1,2,3,4,5,6,15]
let hasil = angka.map(function(a,b,c,d){
    return a*2
})
console.log(hasil)

//forEach//
let makanan = ["dimsum","wagyu A5","nasi goreng kambing","cordon bleu"]
makanan.forEach(function(a,b,c){
    console.log(`makanan ke ${b+1} adalah ${a}`)
})

//indexOf//
let teman = ["zidan","faiz","zalfa","zaki"]
console.log(teman.indexOf("zidan"))
console.log(teman.indexOf("xena"))

//includes//.
let aktivitas= ["sholat","ngaji","coding","nonton film","olahraga"]
console.log(aktivitas.includes("sholat"))
console.log(aktivitas.includes("nyapu halaman"))

//concat//
let namdep = "irgi"
let nambel = "defense"
let namaLengkap = namdep.concat(nambel)
console.log(namaLengkap)

// join
let minuman = ["Redvelvet","Cappucino","Chocolatte","Espresso","Hazelnut","BrownSugarcoffe","Matcha"]
console.log(minuman.join(""))
console.log(minuman.join("|"))
console.log(minuman.join(","))

// reverse
let angkaurut =[1,2,3,4,5,,6,7,8,9,10]
angkaurut.reverse()
console.log(angkaurut)



//sort//
let hari1 = ["senin","selasa","rabu","kamis","jumat","sabtu","minggu"]
hari.sort()
console.log(hari1)



//filter
let nama1 = ["Budi", "Andi", "Sari", "Dewi", "Alexander"];

// Cari nama yang panjangnya > 4 huruf
let hasil2 = nama1.filter(function(n) {
  return n.length > 4;
});

console.log(hasil2);
