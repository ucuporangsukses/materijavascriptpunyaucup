const mahasiswa = {
    alice: { math: 85, english: 90, science: 88 },
    bob: { math: 78, english: 85, science: 82 },
    carol: { math: 92, english: 89, science: 94 }
};

const mahasiswa1 = {
    alice: { math: 85, english: 90, science: 88 },
    bob: { math: 78, english: 85, science: 82 },
    carol: { math: 92, english: 89, science: 94 }
};


const namaMahasiswa = Object.keys(mahasiswa);
console.log("// 1. Nama mahasiswa:", JSON.stringify(namaMahasiswa));


let rataRataOutput = [];
for (const [nama, nilai] of Object.entries(mahasiswa)) {
    const arrNilai = Object.values(nilai);
    const rata2 = arrNilai.reduce((a, b) => a + b, 0) / arrNilai.length;
    rataRataOutput.push(`${nama} rata-rata: ${rata2.toFixed(2)}`);
}
console.log("// 2.", rataRataOutput.join(", "));


let detailOutput = [];
for (const [nama, { math, english, science }] of Object.entries(mahasiswa)) {
    detailOutput.push(`${nama}: math=${math}, english=${english}, science=${science}`);
}
console.log("// 3.", detailOutput.join(", "));


const dataTambahan = { david: { math: 88, english: 91, science: 85 } };
const gabungan = { ...mahasiswa, ...dataTambahan };
console.log("// 4. Object gabungan dengan 4 mahasiswa", gabungan);


//2.
const playlist1 = [
    { judul: "Al-Fatihah", qari: "Mishary Rashid", durasi: 42, juz: 1 },
    { judul: "Al-Baqarah", qari: "Abdul Rahman As-Sudais", durasi: 7380, juz: 1 },
    { judul: "Ar-Rahman", qari: "Saad Al-Ghamdi", durasi: 810, juz: 27 },
    { judul: "Al-Mulk", qari: "Maher Al Muaiqly", durasi: 540, juz: 29 }
];
const playlist2 = [
    { judul: "Al-Fatihah", qari: "Mishary Rashid", durasi: 42, juz: 1 },
    { judul: "Al-Baqarah", qari: "Abdul Rahman As-Sudais", durasi: 7380, juz: 1 },
    { judul: "Ar-Rahman", qari: "Saad Al-Ghamdi", durasi: 810, juz: 27 },
    { judul: "Al-Mulk", qari: "Maher Al Muaiqly", durasi: 540, juz: 29 }
];

// 1. Filter murottal Juz 1
const juz1 = playlist1.filter(({ juz }) => juz === 1).map(({ judul }) => judul);
console.log("// 1.", juz1);

// 2. Total durasi semua murottal
const totalDurasi = playlist1.reduce((acc, { durasi }) => acc + durasi, 0);
const menit = (totalDurasi / 60).toFixed(1);
const jam = (totalDurasi / 3600).toFixed(2);
console.log(`// 2. Total: ${totalDurasi} detik (${menit} menit atau ${jam} jam)`);

// 3. List "Surat - Qari"
const listSuratQari = playlist2.map(({ judul, qari }) => `${judul} - ${qari}`);
console.log("// 3.", listSuratQari);

// 4. Cari murottal terpanjang
const terpanjang = playlist2.reduce((max, current) => 
    current.durasi > max.durasi ? current : max
);
console.log(`// 4. ${terpanjang.judul} (${terpanjang.durasi} detik atau ${(terpanjang.durasi/60).toFixed(0)} menit)`);

// 5. Tambah murottal baru di awal
const murottalBaru = { judul: "Yasin", qari: "Al-Afasy", durasi: 1500, juz: 23 };
const playlistBaru = [murottalBaru, ...playlist2];
console.log("// 5.", playlistBaru);


const pengeluaran = [
    { hari: "Senin", kategori: "makan", jumlah: 25000 },
    { hari: "Senin", kategori: "transport", jumlah: 15000 },
    { hari: "Selasa", kategori: "makan", jumlah: 30000 },
    { hari: "Selasa", kategori: "hiburan", jumlah: 50000 },
    { hari: "Rabu", kategori: "makan", jumlah: 20000 }
];



//3.
// 1. Total pengeluaran semua menggunakan reduce() + destructuring
const total = pengeluaran.reduce((acc, { jumlah }) => acc + jumlah, 0);
console.log("// 1. Total: Rp " + total.toLocaleString("id-ID"));

// 2. Group berdasarkan kategori menggunakan reduce() + spread
const byKategori = pengeluaran.reduce((acc, { kategori, jumlah }) => {
    return { ...acc, [kategori]: (acc[kategori] || 0) + jumlah };
}, {});
console.log("// 2.", byKategori);

// 3. Pengeluaran per hari menggunakan reduce()
const byHari = pengeluaran.reduce((acc, { hari, jumlah }) => {
    return { ...acc, [hari]: (acc[hari] || 0) + jumlah };
}, {});
console.log("// 3.", byHari);

// 4. Cari pengeluaran terbesar menggunakan reduce()
const terbesar = pengeluaran.reduce(
    (max, current) => (current.jumlah > max.jumlah ? current : max),
    pengeluaran[0]
);
console.log("// 4.", terbesar);

// 5. Filter pengeluaran >= 25000 menggunakan filter()
const besar = pengeluaran.filter(({ jumlah }) => jumlah >= 25000);
console.log(`// 5. [${besar.length} pengeluaran >= 25000]`);
// (optional: detail array)
console.log("//    Detail:", besar);



// Data awal
const kontakLama = { mama: "08123456789", papa: "08987654321" };
const kontakBaru = [["adik", "08111222333"], ["kakak", "08444555666"]];

// 1. Gabungkan kontak lama dan baru
const gabungan1 = { ...kontakLama, ...Object.fromEntries(kontakBaru) };
console.log("// 1.", gabungan1);

// 2. Extract semua nomor telepon
const semuaNomor = Object.values(gabungan1);
console.log("// 2.", semuaNomor);

// 3. Format tampilan "Nama: Nomor"
const formatKontak = Object.entries(gabungan1) // ⬅️ tadi lo pake gabungan ❌
  .map(([nama, nomor]) => `${nama[0].toUpperCase() + nama.slice(1)}: ${nomor}`);
console.log("// 3.", formatKontak);

// 4. Tambah prefix +62
const denganPrefix = Object.entries(gabungan1) // ⬅️ ini juga harus gabungan1 ✅
  .map(([nama, nomor]) => `${nama[0].toUpperCase() + nama.slice(1)}: +62${nomor.slice(1)}`);
console.log("// 4.", denganPrefix);



// 5
// Data awal
const nilaiKelas = [
    { nama: "Alice", tugas: [80, 85, 90], uts: 88, uas: 92 },
    { nama: "Bob", tugas: [75, 80, 85], uts: 82, uas: 86 },
    { nama: "Carol", tugas: [90, 95, 88], uts: 91, uas: 89 }
];

// 1. Rata-rata tugas tiap siswa
const rataTugas = nilaiKelas.map(({ nama, tugas }) => {
    const rata = tugas.reduce((a, b) => a + b, 0) / tugas.length;
    return `${nama}: ${rata.toFixed(0)}`;
});
console.log("// 1.", rataTugas.join(", "));

// 2. Nilai akhir (30% tugas, 30% UTS, 40% UAS)
const nilaiAkhir = nilaiKelas.map(({ nama, tugas, uts, uas }) => {
    const rataTugas = tugas.reduce((a, b) => a + b, 0) / tugas.length;
    const akhir = rataTugas * 0.3 + uts * 0.3 + uas * 0.4;
    return { nama, akhir: parseFloat(akhir.toFixed(1)) };
});
console.log("// 2.", nilaiAkhir.map(s => `${s.nama}: ${s.akhir}`).join(", "));

// 3. Filter siswa yang lulus (>= 80)
const lulus = nilaiAkhir.filter(({ akhir }) => akhir >= 80);
console.log("// 3.", lulus.length === nilaiAkhir.length ? "[Semua siswa lulus]" : lulus);

// 4. Cari siswa terbaik
const terbaik = nilaiAkhir.reduce((max, current) =>
    current.akhir > max.akhir ? current : max
);
console.log(`// 4. ${terbaik.nama} (nilai akhir tertinggi)`);

// 5. Laporan lengkap
const laporan = nilaiAkhir.map(({ nama, akhir }) =>
    `${nama}: ${akhir} (${akhir >= 80 ? "Lulus" : "Tidak Lulus"})`
);
console.log("// 5.", laporan);














//======================================= master zdan/

const menuMakanan = {
  data: [],
  nextId: 1,
  tambahBanyak: function (...makanan) {
    console.log(`akan menambah ✅  ${makanan.length} makanan`);

    makanan.forEach((item) => {
      if (item) {
        const menu = {
          id: this.nextId++,
          nama: item.nama,
          harga: item.harga,
          tersedia: true,
        };
        this.data.push(menu);
        console.log(`✅ ${item.nama} ditambahkan`);
      }
    });
  },
  lihat: function () {
    console.log("=== M E N U   M A K A N A N ===");

    if (this.data.length === 0) {
      console.log("Tidak ada makanan");
      return;
    }

    this.data.forEach((item, idx) => {
      const { id, nama, harga, tersedia } = item;
      const status = tersedia ? "tersedia" : "habis";
      console.log(`${idx + 1}. [${id}] ${nama} - ${harga} ✅ ${status}`);
    });
  },
  editHarga: function (updateData) {
    const index = this.data.findIndex((item) => item.id === updateData.id);

    if (index === -1) {
      console.log(`menu makanan ${updateData.id} tidak ada`);
      return;
    }
    this.data[index] = {
      ...this.data[index],
      harga: updateData.harga,
    };
    console.log(`Harga menu [ID ${updateData.id}] ✅ berhasil di update`);
  },
  hapusBanyak: function (...ids) {
    const penumbalan = [];

    ids.forEach((id) => {
      const index = this.data.findIndex((item) => item.id === id);
      if (index !== -1) {
        const { nama } = this.data[index];
        this.data.splice(index, 1);
        penumbalan.push(nama);

      }
    });
    console.log(`${penumbalan} ✅ berhasil sudah dihapus`);
  },
  
  salinMenu: function (...pilihId) {
    if (pilihId.length === 0) {
      return [...this.data];
    }
    const yangTerpilih = this.data.filter((item) => pilihId.includes(item.id));
    return [...yangTerpilih];
  },
};

console.log("🚀 TESTING MENU MAKANAN");

// 1. REST OPERATOR: tambah banyak makanan sekaligus
menuMakanan.tambahBanyak(
  { nama: "Nasi Goreng", harga: 25000 },
  { nama: "Mie Ayam", harga: 20000 },
  { nama: "Es Teh", harga: 5000 },
  { nama: "Ayam Bakar", harga: 35000 }
);

// 2. DESTRUCTURING: lihat semua
menuMakanan.lihat();

// 3. SPREAD OPERATOR: edit harga
menuMakanan.editHarga({ id: 1, harga: 28000 });

menuMakanan.editHarga({ id: 3, harga: 6000 });

// 4. REST + DESTRUCTURING: hapus banyak
menuMakanan.hapusBanyak(2);

menuMakanan.hapusBanyak(4);

// 5. Lihat hasil akhir
menuMakanan.lihat();

// 6. SPREAD: salin menu
const menuBackup = menuMakanan.salinMenu(); // copy semua

const menuPilihan = menuMakanan.salinMenu(1); // copy ID 1 dan 3

console.log("Backup semua menu:", menuBackup);

console.log("Menu pilihan:", menuPilihan);
