// soal 1
let  perpustakaan = {};


// soal 2
let daftarPengunjung = [];

// soal 3
//Perbedaan Antara Objek Dan Array
//Objek: menyimpan data dalam bentuk key dengan value
//array: menyimpan data dalam bentuk berurutan dengan index

// soal 4
// No 4
// - Bagian dari object: property (key) dan value
// - Bagian dari array: index dan element
// - Nama identifier dalam object: key (contoh: nama, alamat)
// - Isi dari identifier tersebut: value (contoh: "Perpustakaan Yusuf", "Tangerang")


//BAGIAN KE 2 MEMAANIPULASI DATA
console.log("=========================================")
console.log("    INFORMASI PERPUSTAKAAN DIGITAL")
console.log("========================================")

// SOAL KE 5

perpustakaan.nama = "Perpustakaan Yusuf";
perpustakaan.alamat = "Tangerang";
perpustakaan.tahunBerdiri = 2030;
console.log(perpustakaan);

//soal ke 6
daftarPengunjung.push("zaki","zidan","faiz");
console.log(daftarPengunjung);

// soal ke 7
perpustakaan.nama = "perpustakaan Yusuf";
console.log(perpustakaan.nama);

// soal ke 8 
daftarPengunjung.splice(0, 1, "budi")
console.log(daftarPengunjung);


//soal ke 9
perpustakaan.jumlahBuku = 5000;
console.log(perpustakaan);

//soal ke 10
daftarPengunjung.push("Go-Yoon-Jung");
console.log(daftarPengunjung);


// BAGIAN KE 3

// soal ke 11
let kategoriBuku = [["Fiksi", "Non-Fiksi"], ["Sains", "Sejarah", "Biografi"]];
console.log(kategoriBuku);
console.log(kategoriBuku[0],[1])
console.log(kategoriBuku[1],[2])



// soal ke 12
perpustakaan.FasilitasPerpustakaan =  {
    ruangBacaBuku: {
        kapasitas: 100,
        lantai: 1,      
    },
    RuangKomputer: {
        kapasitas: 30,
        lantai: 2,
    }
}
console.log(perpustakaan);


// soal ke 13

delete perpustakaan.tahunBerdiri;
console.log(perpustakaan);

// soal ke 14
let anggota2023 = {
  jenisKeanggotaan: "Anggota",
  "jenis keanggotaan": "Pelajar",
  "anggota2023": 1200,
  "biaya-pendaftaran": 50000
};
console.log(anggota2023);

// soal ke 15 Loop semua property object perpustakaan
console.log("Semua property perpustakaan:");
for (let key in perpustakaan) {
  console.log(key, ":", perpustakaan[key]);
}

// soal ke 16 
console.log("\nSemua property FasilitasPerpustakaan:");
for (let ruangan in perpustakaan.FasilitasPerpustakaan) {
  console.log(ruangan, ":", perpustakaan.FasilitasPerpustakaan[ruangan]);
}

// soal ke 17
let cabangPerpustakaan = { ...perpustakaan };
cabangPerpustakaan.nama = "Perpustakaan Digital Cabang Selatan";

console.log("\nObject cabangPerpustakaan:");
for (let key in cabangPerpustakaan) {
  console.log(key, ":", cabangPerpustakaan[key]);
}

// soal ke 18
let cabangPerpustakaan = { ...perpustakaan };
cabangPerpustakaan.nama = "Perpustakaan Digital Cabang Selatan";

// ==========================
// BAGIAN OUTPUT TERMINAL RAPIH
// ==========================

// Header Informasi Perpustakaan
console.log("\n========================================");
console.log("    INFORMASI PERPUSTAKAAN DIGITAL");
console.log("========================================\n");

console.log(`📚 Nama Perpustakaan: ${perpustakaan.nama}`);
console.log(`📍 Alamat: ${perpustakaan.alamat}`);
console.log(`📖 Total Koleksi Buku: ${perpustakaan.jumlahBuku} buku`);

// Fasilitas Perpustakaan
console.log("\n========================================");
console.log("           FASILITAS TERSEDIA");
console.log("========================================\n");

for (let ruangan in perpustakaan.FasilitasPerpustakaan) {
  let f = perpustakaan.FasilitasPerpustakaan[ruangan];
  let emoji = ruangan.toLowerCase().includes("komputer") ? "💻" : "🪑";
  console.log(`${emoji} ${ruangan}`);
  console.log(`   • Kapasitas: ${f.kapasitas} orang`);
  console.log(`   • Lokasi: Lantai ${f.lantai}\n`);
}

// Koleksi Buku Terbaru
let koleksiBuku = [
  { judul: "Laskar Pelangi", pengarang: "Andrea Hirata" },
  { judul: "Bumi Manusia", pengarang: "Pramoedya Ananta Toer" }
];

console.log("========================================");
console.log("         KOLEKSI BUKU TERBARU");
console.log("========================================\n");

koleksiBuku.forEach((buku, i) => {
  console.log(`${i + 1}. "${buku.judul}" - ${buku.pengarang}`);
});

// Pengunjung Hari Ini
console.log("\n========================================");
console.log("        PENGUNJUNG HARI INI");
console.log("========================================\n");

daftarPengunjung.forEach(p => console.log(`• ${p}`));
console.log("• [Nama pengunjung lainnya...]");

// Status Sistem
console.log("\n========================================");
console.log("Status Sistem: ✅ Online");
console.log("Terakhir diupdate: 11 September 2025");
console.log("========================================");




