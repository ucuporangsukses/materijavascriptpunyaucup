// // kasir.js
// export default function hitungTotal(kasir) {
//   return kasir.reduce((acc, curr) => acc + curr, 0);
// }

//no2
export const ambilNama = (mahasiswa) => mahasiswa.nama;
export const ambilNIM = (mahasiswa) => mahasiswa.nim;
export const ambilJurusan = (mahasiswa) => mahasiswa.jurusan;

//no3
export default function hitungTotalPoin(poinArray) {
  return poinArray.reduce((total, nilai) => total + nilai, 0);
}

export const POIN_MAKSIMAL = 1000;
export const POIN_BONUS = 50;

//soal no 4
// Pisah nama dan nomor (jadi array)
export const pisah = (kontakLengkap) => kontakLengkap.split(' - ');

// Gabung nama + nomor jadi satu string
export const gabung = (nama, nomor) => `${nama} - ${nomor}`;

// soal 5

export default function hitungBuku(n) {
  hitungBuku: 
}
 