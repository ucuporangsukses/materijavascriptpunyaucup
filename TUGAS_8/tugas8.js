// console.table({
//     Tugas:"Silahkan Explorasi Metode Metode ini",
//     Tugas_1:"Inisialisai Ulang Array By Index",
//     Tugas_2:"Pahami .push()" ,
//     Tugas_3:"Pahami .pop()",
//     Tugas_4:"Pahami .shift()",
//     Tugas_5:"Pahami .unshift()",
//     Tugas_6:"Pahami .splice()",
//     Tugas_7:"Pahami .slice()",
//     Tugas_8:"Pahami .map()",
//     Tugas_9:"Pahami .forEach()",
//     Tugas_10:"Pahami .indexOf()",
//     Tugas_11:"Pahami .includes()",
//     Tugas_12:"Pahami .concat()",
//     Tugas_13:"Pahami .join()",
//     Tugas_14:"Pahami .reverse()",
//     Tugas_15:"Pahami .sort()",
//     Tugas_16:"Pahami .filter()",
//     Tugas_17:"Pahami .reduce()",
//     Tugas_18:"Pahami .find()",
//     Tugas_19:"Pahami .some()",
//     Tugas_20:"Pahami .every()",
//     Tugas_21:"Pahami .findIndex()",
//     Tugas_22:"Pahami .flat()",
//     Tugas_23:"Pahami .flatMap()",
//     Tugas_24:"Pahami Spread [...buah, ...sayur,]",
//     Tugas_25:"Pahami Destructuring Array",
// })


// soal 1 inisialisasi ulang//
let jadwalpelajaran = ["bahasa inggris","programer full stack","bahasa korea"]
jadwalpelajaran[0]
console.log(jadwalpelajaran)

// soal 2 push//
let nama = ["Nam-Jo-Hyuk","Kim-Taeri"];
console.log(nama)

nama.push("Goyounjung","Ma-Dong-Seok","ji-chang-wook","kim yusuf")
console.log(nama)

// soal 3 pop
let buah = ["mangga","anggur","jeruk"]
buah.pop()
console.log(buah)

// soal 4 shift//
let data = ["data1","data2","data3"]
data.shift()
console.log(data)

// soal 5 unshift//
let absensi = ["yusuf","zidan","zaki","irgi"]
absensi.unshift("tsaqif")
console.log(absensi)

// soal 6 spiles//
let warna = ["merah","kuning","hijau","biru"]
warna.splice(1,2)
console.log(warna)

//soal 7 slice//
let daftardrama = ["vilgilante","lost","fight for my way","bloodhouds"]
kdrama = daftardrama.slice(1,3)
console.log(kdrama)



//soal 8 map//
let angka = [1,2,3,4,5,6,15]
let hasil = angka.map(function(a,b,c,d){
    return a*2
})
console.log(hasil)

//soal 9 forEach//
let makanan = ["dimsum","wagyu A5","nasi goreng kambing","cordon bleu"]
makanan.forEach(function(a,b,c){
    console.log(`makanan ke ${b+1} adalah ${a}`)
})

//soal 10 indexOf//
let teman = ["zidan","faiz","zalfa","zaki"]
console.log(teman.indexOf("zidan"))
console.log(teman.indexOf("xena"))

//soal 11 includes//.
let aktivitas= ["sholat","ngaji","coding","nonton film","olahraga"]
console.log(aktivitas.includes("sholat"))
console.log(aktivitas.includes("nyapu halaman"))

//soal 12 concat//
let namdep = "irgi"
let nambel = "defense"
let namaLengkap = namdep.concat(nambel)
console.log(namaLengkap)

//soal 13 join
let minuman = ["Redvelvet","Cappucino","Chocolatte","Espresso","Hazelnut","BrownSugarcoffe","Matcha"]
console.log(minuman.join(""))
console.log(minuman.join("|"))
console.log(minuman.join(","))

// soal no 14reverse
let angkaurut =[1,2,3,4,5,,6,7,8,9,10]
angkaurut.reverse()
console.log(angkaurut)

//soal

// soal no 15 sort//
let hari = ["senin","selasa","rabu","kamis","jumat","sabtu","minggu"]
hari.sort()
console.log(hari)

//soal

// soal no 16  filter
let nama1 = ["Budi", "Andi", "Sari", "Dewi", "Alexander"];

// Cari nama yang panjangnya > 4 huruf
let hasil2 = nama1.filter(function(n) {
  return n.length > 4;
});

console.log(hasil2);


//soal 17 reduce
let angka1 = [10, 20, 30, 40];

let total = angka1.reduce(function(acc, current) {
  return acc + current;
}, 0);

console.log(total); 

// 18 soal find
let nilai = [55, 68, 72, 45, 90];
let nilaiLulus = nilai.find(function(skor) {
    return skor >= 70;
});
console.log("Nilai pertama yang lulus:", nilaiLulus);

let namaTeman = ["Ari", "Bambang", "Cici", "Dewi"];
let namaPanjang = namaTeman.find(function(nama) {
    return nama.length > 5;
});
console.log("Nama pertama yang lebih dari 5 huruf:", namaPanjang);

let angka2 = [2, 4, 6, 8];
let angkaBesar = angka2.find(function(num) {
    return num > 10;
});
console.log("Angka lebih dari 10:", angkaBesar);

//soal 19 
let persiapanBarang = ["laptop","handphone","charger","headphone","mouse","keyboard"]
let adaBarang = persiapanBarang.some(function(B) {
    
    return  B === "zidan"
})
console.log(adaBarang)

//soal 20 every

let tinggibadan = [170,175,165,180]
let tinggi = tinggibadan.every(function (n){
    return n > 170
}) 

console.log(tinggi)

//soal 21 findIndex

let nilaiujian = [70,85,90,75]
let ujian = nilaiujian.findIndex(function (n){
    return n === 80
})
console.log(ujian)

// soal 22 flat 

let menu = ["Burger",["Pizza",["frencfries"]]]
let resto = menu.flat(2)
console.log(resto);

// soal ke 23 flatmap
let angka4 = [1,2,3]
let hasilmap = angka4.map(x=> [x * 8])
console.log(hasilmap)

let angka5 = [1,[2],3] 
let hasilmap1 = angka5.flatMap(function (j){
    return j * 2
})
console.log(hasilmap1)

// soal ke 24
let menu1 = ["nasigoreng","tongseng","ayambakar"]
let menu2 = ["es teh manis","kukubima","wedang jahe"]

let gabung = [...menu1,...menu2]
console.log(gabung)

// soal ke 25
let namaorang = ["gerrard zidan",8,18]
let [orang,,umur,] = namaorang
console.log(orang)
console.log(umur);


let antrian = [];
antrian[0]
antrian[1]
antrian[2]
antrian[3]
antrian[4]
console.log("awal:",antrian)

let pasien = ["zidan","zaki","faiz"]
console.log(pasien)

pasien.push("irgi","xena","tsaqif");
console.log(pasien);

 pasienSembuh = [];
pasien.pop();
console.log(pasien);

pasien.shift();
console.log(pasien);

pasien.unshift("zidan","zaki");
console.log(pasien);











