const siswa =  {
    nama: "zidan cihuy",
    umur: "19", 
    jurusan: "Programer FULL Stack"
};
const jsonstr = JSON.stringify(siswa)
console.log(jsonstr);


const Barang = {
    produk: "Laptop",
    harga: "7500000",
    stok: "10"
}
const jsonstr1 = JSON.stringify(Barang)
console.log(jsonstr1)


const belanjaan = {
    nama: "Indomie Goreng", jumlah: 3, harga: 3000,
    nama: "Beras Sekarung", jumlah: 2, harga: 800000,
};
const jsonstr2 = JSON.stringify(belanjaan)
console.log(jsonstr2)

//soal no 4
const mahasiswa = `{
    "nama":"zidan aselole",
    "umur":"63",
    "status":"Mahasiswa"
}`;
const jsonstr3 = JSON.parse(mahasiswa)
console.log(jsonstr3.nama);
console.log(jsonstr3.status);


//soal no
const jsonstr4 = `["pisang", "apel", "jeruk"]`
const buahArray = JSON.parse (jsonstr4);
buahArray.forEach((buah) => {
  console.log(buah);

})

// soal no
const mobilJSON = `{
    "merk": "honda",
    "model": "civic",
    "tahun": "2022"
}`
const mobil = JSON.parse(mobilJSON); // parse ke object

for (let key in mobil) {
    console.log(key + " : " + mobil[key]); // akses value pake [key]
}


// no
function sapaNama(nama,callback) {
    console.log("Halo" + nama)
    callback()
}
sapaNama("ZIDAN", function(){
    console.log("selamat belajar json!")
})


//no
function hitungLuas(lebar,panjang,callback) {
    const luas = panjang*lebar;
    callback(luas)
}
 hitungLuas(5,3, function (hasil){
    console.log("luas persegi panjang:", hasil)
 })


 //no 
 let data = [1,2,3,4,7687]
 function ProsesData(data,callback) {
    const panjang = data.length
    callback(panjang)
 }
 function bebek(panjang) {
    console.log(panjang)    
 }
 ProsesData(data,bebek)


 //no
 function sapaNama(nama,callback) {
    console.log("Halo" + nama)
    callback()
}
sapaNama("Aisyah", function(){
    console.log("selamat Tinggal!")
})


//no
// bikin fungsi
function kirimPesan(pesan, callback) {
  callback(pesan); // jalankan callback sambil bawa pesan
}

// panggil fungsi dengan callback anonim
kirimPesan("halo bre belajar json asik pisan", function(pesan) {
  console.log(pesan.toUpperCase());
});

// no
// bikin fungsi
function prosesAsync(callback) {
  setTimeout(() => {
    callback("Proses selesai setelah 2 detik");
  }, 2000); // 2000 ms = 2 detik
}


prosesAsync(function(pesan) {
  console.log(pesan);
});


//soal
// bikin fungsi
function ambilData(callback) {
  console.log("Mengambil data dari server...");
  setTimeout(() => {
    const data = { id: 1, nama: "Laptop" }; // data yang "diambil"
    callback(data); // kirim ke callback
  }, 3000); // 3 detik
}

// panggil fungsi dengan callback anonim
ambilData(function(result) {
  console.log("Data diterima:", result);
});



