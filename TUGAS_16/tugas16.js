// function tambah(a, b) {
//     return new Promise((resolve, reject) => {
//         // cek dulu, kalo bukan angka langsung tolak
//         if (typeof a !== "number" || typeof b !== "number") {
//             reject("Input harus angka bre!");
//         } else {
//             // simulasi proses async, misalnya delay 2 detik
//             setTimeout(() => {
//                 let hasil = a + b;
//                 resolve(hasil);
//             }, 5000);
//         }
//     });
// }

// // contoh pemakaian
// tambah(5, 7)
//     .then((hasil) => {
//         console.log("Hasil penjumlahan:", hasil);
//     })
//     .catch((err) => {
//         console.error("Error:", err);
//     });


// // soal ke 8
// // Fungsi async
// async function getNumber() {
//   return 42;
// }

// // Panggil dengan await + try..catch..finally
// async function main() {
//   try {
//     const hasil = await getNumber();
//     console.log("Hasil:", hasil);
//   } catch (error) {
//     console.log("Terjadi error:", error.message);
//   } finally {
//     console.log("Proses selesai"); 
//   }
// }

// main();


// // soal ke 8
// async function ambilTafsir(params) {
//     try {
//         const response = await fetch ("https://equran.id/api/v2/tafsir/112");
//         const data = await response. json();
//         const tafsirAyat = data.data.tafsirAyat
//         tafsirAyat.array.forEach(params => {
//             console.log(`Ayat ${ayat.teks}`);
//             console.log(ayat.teks);
//             console.log("---------------------------------------")
            
            
            
//         });
//     } cantch (error) {
//         console.error("terjadi error:", error.message);
        
//     }
// }



// // Fungsi async untuk ambil data tafsir
// async function ambilTafsir() {
//   try {
//     // Fetch data dari API
//     const response = await fetch("https://equran.id/api/v2/tafsir/112");
//     const data = await response.json();

//     // Ambil hasil tafsir per ayat
//     const tafsirAyat = data.data.tafsir;

//     // Looping tiap ayat
//     tafsirAyat.forEach((ayat) => {
//       console.log(`Ayat ${ayat.ayat}:`);
//       console.log(ayat.teks); 
//       console.log("--------------------------------------------------");
//     });
//   } catch (error) {
//     console.error("Terjadi error:", error.message);
//   } finally {
//     console.log("Proses selesai");
//   }
// }

// // Panggil fungsi
// ambilTafsir();



// // Fungsi async untuk ambil data tafsir
// async function ambilTafsir() {
//   try {
//     // Fetch data dari API
//     const response = await fetch("https://equran.id/api/v2/tafsir/112");
//     const data = await response.json();

//     // Ambil hasil tafsir per ayat
//     const tafsirAyat = data.data.tafsir;

//     // Looping tiap ayat
//     tafsirAyat.forEach((ayat) => {
//       console.log(`Ayat ${ayat.ayat}:`);
//       console.log(ayat.teks); 
//       console.log("--------------------------------------------------");
//     });
//   } catch (error) {
//     console.error("Terjadi error:", error.message);
//   } finally {
//     console.log("Proses selesai");
//   }
// }




















//     function tambah(a, b) {
//     return new Promise((resolve, reject) => {
//         // cek dulu, kalo bukan angka langsung tolak
//         if (typeof a !== "number" || typeof b !== "number") {
//             reject("Input harus angka bre!");
//         } else {
//             // simulasi proses async, misalnya delay 2 detik
//             setTimeout(() => {
//                 let hasil = a + b;
//                 resolve(hasil);
//             }, 0,100);
//         }
//     });
// }

// // contoh pemakaian
// tambah(5, 7)
//     .then((hasil) => {
//         console.log("Hasil penjumlahan:", hasil);
//     })
//     .catch((err) => {
//         console.error("Error:", err);
//     });



