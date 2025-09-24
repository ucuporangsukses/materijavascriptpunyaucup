async function helloAsync() {
    return "Halo dari Async"    
}

helloAsync().then((pesan) => {
    console.log(pesan);
});

//no2
// Fungsi yang balikin Promise
function ambilData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data berhasil diambil");
    }, 2000); // delay 2 detik
  });
}


async function jalankan() {
  console.log("Sedang mengambil data...");
  
  const hasil = await ambilData(); 
  console.log(hasil); 
}

jalankan();

// soal ke 3
// Fungsi async yang langsung melempar error
async function throwError() {
  throw new Error("Terjadi kesalahan");
}

// Fungsi utama untuk nangkep error
async function main() {
  try {
    await throwError(); // ini bakal error
    console.log("Kode ini gak bakal jalan"); 
  } catch (err) {
    console.log("Error tertangkap:", err.message);
  }
}

// Jalankan
main();


// mo4
async function getNumber() {
  return 42;
}

async function main() {
  const angka = await getNumber();
  console.log("Hasilnya:", angka);
}

// no5 

function tambahLima(x) {
  return new Promise((resolve) => {
    resolve(x + 5);
  });
}

async function main() {
  let input = 10;
  let hasil = await tambahLima(input);
  console.log("Hasil akhirnya:", hasil);
}

async function throwError() {
  throw new Error("Terjadi kesalahan");
}

async function main() {
  try {
    await throwError();
    console.log("Kode ini gak akan jalan");
  } catch (err) {
    console.log("Error tertangkap:", err.message);
  }
}

// no 6
async function ambilSurat() {
  try {
    const response = await fetch("https://equran.id/api/v2/surat/1");
    const data = await response.json();
    console.log("Nama surat:", data.data.namaLatin);
  } catch (err) {
    console.error("Terjadi error:", err.message);
  }
}

async function ambilSurat() {
  try {
    const response = await fetch("https://equran.id/api/v2/surat/1");
    const data = await response.json();
    console.log("Nama surat:", data.data.namaLatin);
  } catch (err) {
    console.error("Terjadi error:", err.message);
  }
}

ambilSurat();

// no7
async function ambilSurat() {
  try {
    const response = await fetch("https://equran.id/api/v2/surat/1");

    if (!response.ok) {
      throw new Error("Gagal mengambil data");
    }

    const data = await response.json();
    console.log("Nama surat:", data.data.namaLatin);
  } catch (err) {
    console.error("Error tertangkap:", err.message);
  }
}

ambilSurat();

// no8

// Fungsi async yang return angka 42
async function getNumber() {
  return 42;
}

// Fungsi utama
async function main() {
  try {
    const hasil = await getNumber();
    console.log("Hasil:", hasil);
  } catch (error) {
    console.log("Terjadi error:", error.message);
  } finally {
    console.log("Proses selesai");
  }
}

main();

// no 9 

async function ambilTafsir() {
  try {
    const response = await fetch("https://equran.id/api/v2/tafsir/112");

    if (!response.ok) {
      throw new Error("Gagal mengambil data tafsir");
    }

    const data = await response.json();

    // akses tafsir per ayat
    const tafsirAyat = data.data.tafsir;

    // looping tiap ayat
    tafsirAyat.forEach((ayat) => {
      console.log(`Ayat ${ayat.ayat}: ${ayat.teks}`);
    });
  } catch (err) {
    console.error("Error tertangkap:", err.message);
  }
}

ambilTafsir();

// soal 10

async function ambilData() {
  try {
    const response = await fetch("https://equran.id/api/v2/surattidakada");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Terjadi error:", error.message);
  } finally {
    console.log("Proses selesai");
  }
}

ambilData();


//11

async function ambilSurat() {
  try {
    const [res1, res2] = await Promise.all([
      fetch("https://equran.id/api/v2/surat/1"),
      fetch("https://equran.id/api/v2/surat/112")
    ]);

    const [data1, data2] = await Promise.all([
      res1.json(),
      res2.json()
    ]);

    console.log("Surat 1:", data1.data.namaLatin);
    console.log("Surat 112:", data2.data.namaLatin);
  } catch (error) {
    console.error("Terjadi error:", error.message);
  } finally {
    console.log("Proses selesai");
  }
}

ambilSurat();


//no 12

async function racePromise() {
  try {
    const cepat = new Promise((resolve) => {
      setTimeout(() => resolve("Selesai dalam 1 detik"), 1000);
    });

    const lambat = new Promise((resolve) => {
      setTimeout(() => resolve("Selesai dalam 3 detik"), 3000);
    });

    const hasil = await Promise.race([cepat, lambat]);
    console.log("Hasil tercepat:", hasil);
  } catch (error) {
    console.error("Terjadi error:", error.message);
  } finally {
    console.log("Proses selesai");
  }
}

racePromise();


//no 13

async function testAllSettled() {
  // 1. Bikin 3 promise
  const p1 = Promise.resolve("Data 1");
  const p2 = Promise.resolve("Data 2");
  const p3 = Promise.reject("Error 3");

  // 2. Jalankan semua pake Promise.allSettled
  const results = await Promise.allSettled([p1, p2, p3]);

  // 3. Tampilkan status masing-masing
  results.forEach((result, index) => {
    console.log(`Promise ${index + 1}:`, result);
  });
}

// Jalankan fungsi
testAllSettled();


// no 14

async function parallelFetch() {
  try {
    // 1. Fetch semua API sekaligus (belum di-JSON)
    const suratAPI = fetch("https://equran.id/api/v2/surat");
    const asmaulhusnaAPI = fetch("https://api.myquran.com/v2/husna/semua");
    const arbainAPI = fetch("https://api.myquran.com/v2/hadits/arbain/semua");

    // 2. Tunggu semua response
    const responses = await Promise.all([suratAPI, asmaulhusnaAPI, arbainAPI]);

    // 3. Convert semua ke JSON
    const [suratData, asmaulhusnaData, arbainData] = await Promise.all(
      responses.map(res => res.json())
    );

    // 4. Tampilkan jumlah data
    console.log("Jumlah Surat:", suratData.data.length);
    console.log(" Jumlah Asmaul Husna:", asmaulhusnaData.data.length);
    console.log(" Jumlah Hadits Arbain:", arbainData.data.length);
  } catch (error) {
    console.error("Gagal mengambil data:", error);
  }
}

// Jalankan fungsi
parallelFetch();


// no 15

async function fetchSurat(id) {
  try {
    // 1. Validasi input → harus angka
    if (isNaN(id)) {
      throw new Error("ID surat harus angka");
    }

    // 2. Fetch data dari API sesuai ID
    const response = await fetch(`https://equran.id/api/v2/surat/${id}`);

    // 3. Cek kalau response gagal
    if (!response.ok) {
      throw new Error("Gagal mengambil data surat");
    }

    
    const data = await response.json();

    console.log("Data surat berhasil diambil:", data.data);
  } catch (error) {

    console.error("Error:", error.message);
  }
}

fetchSurat(1);    // valid → Surat Al-Fatihah
fetchSurat("abc"); // invalid → lempar error
