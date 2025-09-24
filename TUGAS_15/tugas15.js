function operasiAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Operasi berhasil!");
        }, 2000); // 2 detik
    });
}

// Panggil fungsi
operasiAsync()
    .then((hasil) => {
        console.log(hasil); // Output: Operasi berhasil!
    });


// no2
function prosesData() {
    return new Promise((resolve, reject) => {
        let sukses = false; // coba ganti true/false

        setTimeout(() => {
            if (sukses) {
                resolve("Data berhasil diproses");
            } else {
                reject("Operasi gagal");
            }
        }, 2000);
    });
}

// Panggil fungsi
prosesData()
    .then((hasil) => {
        console.log("✅ Berhasil:", hasil);
    })
    .catch((error) => {
        console.log("❌ Error:", error);
    });


// no3

let angka = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5); // setelah 1 detik kasih nilai 5
    }, 1000);
});

angka
    .then((n) => {
        return n * 2;
    })
    .then((n) => {
        return n + 10;
    })
    .then((n) => {
        console.log("Hasil akhir:", n);
    })
    .catch((err) => {
        console.log("Error:", err);
    });


//no 4
fetch("https://equran.id/api/v2/surat/114")
    .then((response) => {
        return response.json(); // ubah response ke JSON
    })
    .then((data) => {
        console.log(data); // cetak seluruh data ke console
    })
    .catch((error) => {
        console.log("Error:", error);
    });


// no 5
fetch("https://equran.id/api/v2/surat/114")
    .then((response) => {
        if (!response.ok) {
            throw new Error("API gagal diambil"); // lempar error kalau response bukan 200
        }
        return response.json(); // kalau sukses, ubah ke JSON
    })
    .then((data) => {
        console.log(data); // cetak data API
    })
    .catch((error) => {
        console.log("❌ Error:", error.message); // tangani error
    });


// no6

fetch("https://equran.id/api/v2/surat/114")
    .then((response) => {
        if (!response.ok) {
            throw new Error("API gagal diambil");
        }
        return response.json();
    })
    .then((data) => {
        console.log("✅ Data berhasil diambil:", data);
    })
    .catch((error) => {
        console.log("❌ Error:", error.message);
    })
    .finally(() => {
        console.log(" Proses selesai, apapun hasilnya");
        // Contoh: di real case lo bisa matiin loading spinner disini
    });

// N07

const api1 = fetch("https://api.myquran.com/v2/husna/semua");
const api2 = fetch("https://api.myquran.com/v2/hadits/arbain/semua");

Promise.race([api1, api2])
    .then((result) => {
        console.log("API tercepat berhasil:", result);
    })
    .catch((error) => {
        console.log("Terjadi error:", error);
    });


// NO8
const  shibal = fetch ("https://api.myquran.com/v2/quran/surat/semua")
const A = fetch ("https://api.myquran.com/v2/husna/semua")
const B = fetch ("https://api.myquran.com/v2/husna/salah")
Promise.allSettled ([shibal,A,B])
.then (hasil =>{
    hasil.forEach 
}) 


//no 9

// Fungsi utama dashboard
async function dashboard() {
  try {
    
    const suratAPI = fetch("https://equran.id/api/v2/surat");
    const asmaulhusnaAPI = fetch("https://api.myquran.com/v2/husna/semua");
    const arbainAPI = fetch("https://api.myquran.com/v2/hadits/arbain/semua");

    
    const responses = await Promise.all([suratAPI, asmaulhusnaAPI, arbainAPI]);

    
    const datas = await Promise.all(responses.map(res => res.json()));

    
    console.log("Dashboard siap!");
    console.log("📖 Data Surat:", datas[0]);
    console.log("🕌 Asmaul Husna:", datas[1]);
    console.log("📜 Hadits Arbain:", datas[2]);
  } catch (error) {
    // 5. Kalau ada salah satu error
    console.log("Gagal memuat dashboard.");
    console.error(error);
  }
}

// Jalankan fungsi
dashboard();


// soal no 10

async function fetchWithTimeout() {
  
  const fetchAPI = fetch("https://equran.id/api/v2/surat/1")
    .then(res => res.json()); // convert langsung ke JSON

  // 2. Bikin promise timeout (5 detik)
  const timeout = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Timeout: API terlalu lama"));
    }, 5000);
  });

  try {
    
    const result = await Promise.race([fetchAPI, timeout]);

    
    console.log("✅ Data API berhasil diambil:");
    console.log(result);
  } catch (error) {
    
    console.error(error.message);
  }
}

// Jalankan fungsi
fetchWithTimeout();
