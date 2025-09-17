// // SOAL 1: Rekap Absensi Santri Harian

// function hitungAbsensi(absensiArr) {
//     // Validasi: array harus minimal 1 data
//     do {
//         if (absensiArr.length < 1) return "Data absensi tidak boleh kosong!";
//     } while (false);

//     let hadir = 0, alpa = 0, izin = 0; // counter untuk tiap status

//     // Loop semua data absensi
//     for (let i = 0; i < absensiArr.length; i++) {
//         if (absensiArr[i] === "Hadir") hadir++;
//         else if (absensiArr[i] === "Alpa") alpa++;
//         else if (absensiArr[i] === "Izin") izin++;
//     }

//     // Hitung persentase hadir
//     let persenHadir = Math.round((hadir / absensiArr.length) * 100);

//     // Print hasil dengan forEach
//     [
//         `Hadir: ${hadir} kali`,
//         `Alpa: ${alpa} kali`,
//         `Izin: ${izin} kali`,
//         `%Hadir: ${persenHadir}%`
//     ].forEach(row => console.log(row));

//     return `Hadir: ${hadir} kali, Alpa: ${alpa} kali, Izin: ${izin} kali. %Hadir: ${persenHadir}%.`;
// }


// // SOAL 2: Laporan Santri Lulus IT Fundamental

// function laporanKelulusan(namaArr, nilaiArr) {
//     do {
//         if (namaArr.length !== nilaiArr.length) return "Data tidak sejajar!";
//     } while (false);

//     let hasil = [];

//     for (let i = 0; i < namaArr.length; i++) {
//         let status = nilaiArr[i] >= 70 ? "LULUS" : "TIDAK LULUS"; // ternary operator
//         hasil.push(`${namaArr[i]}: ${status} (nilai ${nilaiArr[i]})`);
//     }

//     hasil.forEach(h => console.log(h));
//     return hasil.join("\n");
// }


// // SOAL 3: Analisa Hafalan Quran Mingguan

// function analisaHafalan(hafalanArr) {
//     while (hafalanArr.length < 1) return "Data kosong!";

//     let hasil = [];
//     let total = 0;

//     for (let i = 0; i < hafalanArr.length; i++) {
//         let status;
//         switch (true) {
//             case hafalanArr[i] >= 12: status = "Bagus"; break;
//             case hafalanArr[i] >= 10: status = "Cukup"; break;
//             default: status = "Perlu Usaha";
//         }
//         hasil.push(`Minggu ke-${i+1}: ${hafalanArr[i]} ayat, status ${status}`);
//         total += hafalanArr[i];
//     }

//     let rata = (total / hafalanArr.length).toFixed(1);
//     hasil.push(`Rata-rata: ${rata} ayat.`);

//     hasil.forEach(h => console.log(h));
//     return hasil.join(". ");
// }


// // SOAL 4: Rekap Usia dan Generasi Santri

// function rekapUsia(usiaArr) {
//     do {
//         if (usiaArr.some(u => u < 0)) return "Ada usia negatif!";
//     } while (false);

//     let hasil = [];

//     for (let i = 0; i < usiaArr.length; i++) {
//         let kategori;
//         switch (true) {
//             case usiaArr[i] < 13: kategori = "Anak-anak"; break;
//             case usiaArr[i] < 20: kategori = "Remaja"; break;
//             default: kategori = "Dewasa";
//         }
//         hasil.push(`Santri ${i+1}: ${kategori} (${usiaArr[i]} th)`);
//     }

//     hasil.forEach(h => console.log(h));
//     return hasil.join("\n");
// }


// // SOAL 6: Filter Nilai Santri Digital Class

// function filterNilai(namaArr, nilaiArr, batas) {
//     while (namaArr.length !== nilaiArr.length) return "Data tidak sejajar!";

//     let lulus = [];
//     for (let i = 0; i < namaArr.length; i++) {
//         if (nilaiArr[i] >= batas) lulus.push(namaArr[i]);
//     }

//     lulus.forEach(l => console.log(l));
//     return `${lulus.join(" & ")} mendapatkan nilai di atas ${batas}.`;
// }


// // SOAL 7: Rekap Kegiatan Pembinaan IT

// function rekapKegiatan(kegiatanArr) {
//     do {
//         if (kegiatanArr.length < 1) return "Data kosong!";
//     } while (false);

//     let counter = {};

//     for (let i = 0; i < kegiatanArr.length; i++) {
//         counter[kegiatanArr[i]] = (counter[kegiatanArr[i]] || 0) + 1;
//     }

//     let hasil = [];
//     Object.keys(counter).forEach(k => hasil.push(`${k} ${counter[k]}`));

//     hasil.forEach(h => console.log(h));
//     return hasil.join(", ");
// }


// // SOAL 8: List Santri Mukim dan Online

// function listSantri(statusArr, namaArr) {
//     while (statusArr.length !== namaArr.length) return "Data tidak sejajar!";

//     let mukim1 = [], online = [];
//     for (let i = 0; i < statusArr.length; i++) {
//         switch (statusArr[i]) {
//             case "Mukim": mukim1.push(namaArr[i]); break;
//             case "Online": online.push(namaArr[i]); break;
//         }
//     }

//     let hasil = `Santri mukim1: ${mukim1.join(", ")} | Santri Online: ${online.join(", ")}`;
//     console.log(hasil);
//     return hasil;
// }


// // SOAL 9: Nilai Tertinggi Ujian

// function nilaiTertinggi(namaArr, nilaiArr) {
//     while (namaArr.length !== nilaiArr.length) return "Data tidak sejajar!";

//     let max = nilaiArr[0];
//     let nama = namaArr[0];

//     for (let i = 1; i < nilaiArr.length; i++) {
//         if (nilaiArr[i] > max) {
//             max = nilaiArr[i];
//             nama = namaArr[i];
//         }
//     }

//     return `Nilai tertinggi ${nama}: ${max}`;
// }


// // SOAL 10: Filter NIS Santri Valid

// function filterNIS(nisArr) {
//     do {
//         if (nisArr.length < 1) return "Data kosong!";
//     } while (false);

//     let valid = [], invalid = [];
//     for (let i = 0; i < nisArr.length; i++) {
//         if (nisArr[i].length === 6) valid.push(nisArr[i]);
//         else invalid.push(nisArr[i]);
//     }

//     return `NIS valid: ${valid.join(", ")}; NIS invalid: ${invalid.join(", ")}`;
// }


// SOAL 11: Akumulasi Partisipasi

// function totalKegiatan(partArr) {
//     do {
//         if (partArr.length < 1) return "Data kosong!";
//     } while (false);

//     let total = 0;
//     let max = partArr[0], min = partArr[0];

//     for (let i = 0; i < partArr.length; i++) {
//         total += partArr[i];
//         if (partArr[i] > max) max = partArr[i];
//         if (partArr[i] < min) min = partArr[i];
//     }

//     let rata = total / partArr.length;
//     return `Total partisipasi: ${total} kali, rata-rata ${rata}/hari, max ${max}, min ${min}`;
// }


// SOAL 12: Statistik Jam Belajar

// function statJam(jamArr) {
//     do {
//         if (jamArr.length < 1) return "Data kosong!";
//     } while (false);

//     let total = 0;
//     let max = jamArr[0], min = jamArr[0];

//     for (let i = 0; i < jamArr.length; i++) {
//         total += jamArr[i];
//         if (jamArr[i] > max) max = jamArr[i];
//         if (jamArr[i] < min) min = jamArr[i];
//     }

//     let rata = total / jamArr.length;
//     return `Jam belajar terbanyak ${max}, tersedikit ${min}, rata-rata ${rata}`;
// }


// SOAL 13: Selisih Hafalan

// function selisihHafalan(hafalanArr) {
//     do {
//         if (hafalanArr.length < 2) return "Data kurang!";
//     } while (false);

//     let hasil = [];
//     for (let i = 0; i < hafalanArr.length - 1; i++) {
//         let selisih = hafalanArr[i+1] - hafalanArr[i];
//         let status = selisih > 0 ? `naik ${selisih}` : `turun ${Math.abs(selisih)}`;
//         hasil.push(`Minggu ${i+1}-${i+2}: ${status} ayat`);
//     }
//     return hasil.join(", ");
// }


// SOAL 14: Format Guru Gender

// function formatGuru(namaArr, genderArr) {
//     while (namaArr.length !== genderArr.length) return "Data tidak sejajar!";

//     let hasil = [];
//     for (let i = 0; i < namaArr.length; i++) {
//         switch (genderArr[i]) {
//             case "L": hasil.push(`Ustadz ${namaArr[i]}`); break;
//             case "P": hasil.push(`Ustadzah ${namaArr[i]}`); break;
//         }
//     }
//     return hasil.join("; ");
// }


// SOAL 15: Rekap Santri Tamat Qur'an

// function rekapTamat(khatamArr) {
//     do {
//         if (khatamArr.length < 1) return "Data kosong!";
//     } while (false);

//     let jumlah = 0;
//     khatamArr.forEach(k => { if (k >= 30) jumlah++; });
//     return `${jumlah} santri telah khatam 30 juz`;
// }


// SOAL 16: Status Nilai Ujian

// function statusNilai(nilaiArr) {
//     do {
//         if (nilaiArr.length < 1) return "Data kosong!";
//     } while (false);

//     let hasil = [];
//     for (let i = 0; i < nilaiArr.length; i++) {
//         let status;
//         switch (true) {
//             case nilaiArr[i] >= 80: status = "Baik"; break;
//             case nilaiArr[i] >= 60: status = "Cukup"; break;
//             default: status = "Kurang";
//         }
//         hasil.push(`${nilaiArr[i]}: ${status}`);
//     }
//     return hasil.join(", ");
// }


// // SOAL 17: Hari Izin/Sakit

// function hariIzinSakit(statusArr) {
//     let hari = [];
//     for (let i = 0; i < statusArr.length; i++) {
//         if (statusArr[i] === "Izin" || statusArr[i] === "Sakit") hari.push(i+1);
//     }
//     return `Santri izin/sakit pada hari ke-${hari.join(",")}`;
// }


// SOAL 18: Validasi NIS

// function validasiNIS(nisArr) {
//     do {
//         if (nisArr.length < 1) return "Data kosong!";
//     } while (false);

//     let valid = [], invalid = [];
//     for (let i = 0; i < nisArr.length; i++) {
//         if (nisArr[i].length === 6) valid.push(nisArr[i]);
//         else invalid.push(nisArr[i]);
//     }
//     return `NIS valid: ${valid.join(", ")}; NIS invalid: ${invalid.join(", ")}`;
// }


// SOAL 19: Kelompok Kegiatan Harian

// function kelompokKegiatan(arrKegiatan) {
//     let counter = {};
//     for (let i = 0; i < arrKegiatan.length; i++) {
//         counter[arrKegiatan[i]] = (counter[arrKegiatan[i]] || 0) + 1;
//     }

//     let hasil = [];
//     Object.keys(counter).forEach(k => hasil.push(`${k}: ${counter[k]} kali`));
//     return hasil.join("; ");
// }


// SOAL 20: Angka Paling Sering Muncul

function angkaSeringMuncul(angkaArr) {
    let counter = {};
    angkaArr.forEach(a => counter[a] = (counter[a] || 0) + 1);

    let maxAngka = angkaArr[0], maxFreq = counter[angkaArr[0]];

    for (let key in counter) {
        if (counter[key] > maxFreq) {
            maxAngka = key;
            maxFreq = counter[key];
        }
    }

    return `Angka ${maxAngka} muncul paling sering, sebanyak ${maxFreq} kali`;
 }