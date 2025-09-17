// import hitungTotal, { ambilJurusan, dataMahasiswa } from "./export.js";
// import kasir from "./export.js";

// const dataHarga = [15000, 25000, 8000, 12000]
// console.log("Total Belanja", hitungTotal(dataHarga));

//no 2
import { ambilNama, ambilNIM, ambilJurusan } from './export.js';

const mahasiswa = {nama: "Sari Dewi", nim: "2024001", jurusan: "Informatika", ipk: 3.8};
console.log(ambilNama(mahasiswa)); // "Sari Dewi"
console.log(ambilNIM(mahasiswa)); // "2024001"
console.log(ambilJurusan(mahasiswa)); // "Informatika"


//no3
import hitungTotalPoin, { POIN_MAKSIMAL, POIN_BONUS } from './export.js';

const skor = [200, 150, 300, 180, 120];

console.log("Total Poin:", hitungTotalPoin(skor)); // 950
console.log("Poin Maksimal:", POIN_MAKSIMAL);     // 1000
console.log("Poin Bonus:", POIN_BONUS);           // 50

//no4
import { pisah as pisahNamaKontak, gabung as gabungDataKontak } from './export.js';

// Contoh data
const kontakLengkap = "Sari Dewi - 081234567890";

// Pisah
console.log("Pisah Kontak:", pisahNamaKontak(kontakLengkap)); 
// ["Sari Dewi", "081234567890"]

// Gabung
console.log("Gabung Kontak:", gabungDataKontak("Budi", "089876543210")); 
// "Budi - 089876543210"
