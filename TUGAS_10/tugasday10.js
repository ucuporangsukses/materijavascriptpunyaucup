// let mobil = ["Alphard","Innova","civic"]
// let [a,b,c] = mobil
// console.log(a)
// console.log(b)

// let mobil1 ={
//     merek : "Limosin",
//     year : "2035",
//     warna : "putih"
// }
// let {merek,year,warna} = mobil1
// console.log(merek)
// console.log(year)
// console.log(warna)


// let menu = ["cordon bleu","nasi goreng kambing","wagyu A5"]
// let menu2 = ["zidan bageur jasa","ucup kasep"]
// let menu3 = ["Ayam goreng", ...menu,...menu2]
// console.log(menu3); 

// function angka(...n) {
//     return n
// }
// console.log(angka(1,2,3,4,5,))



// let buah1 = ["mangga","manggis","rambutan"]
// function buah(u) {
//     console.log(u);
    
// }
// buah(buah1)


// let nama =  ["zidan","faiz"]
// let nama2 = ["zaki","rehan"]
// function name(j,k) {
//     console.log(j,k)
// }
// name(nama, nama2)




/// soal no1
// ===============TUGAS PROGRAM DAFTAR MAKANAN=================

const menuMakanan = {
    data: [],    // Array untuk menyimpan semua daftar menu yang tersedia
    nextid: 1,   //  Angka ID berikutnya (mulai dari 1) — untuk memberi nomor unik

     // const menuMakanan → kita buat object bernama menuMakanan.
     // data → tempat nyimpan daftar makanan (masih kosong).
     // nextid → counter supaya setiap makanan punya ID unik.

    // 1. 

    

    tambahBanyak: function(...makanan) {
        console.log(`Akan menambah ${makanan.length} makanan:`);

     // tambahBanyak → nama method (fungsi di dalam object).
     // (...makanan) → REST parameter: semua argumen yang dikirim akan ditangkap jadi array makanan.
     // console.log → tampilkan jumlah makanan yang akan ditambah.

        makanan.forEach(item => {
            if (item) {

                 // forEach → looping setiap elemen di array makanan.
                 // item → 1 data makanan (object) yang sedang diproses.
                 // if (item) → pastikan datanya ada (bukan null/undefined).

                const menu = {
                    id: this.nextid++,  //  ID = nilai nextid sekarang, lalu nextid ditambah 1
                    nama: item.nama,    //  ambil nama dari object yang dikirim
                    harga: item.harga,
                    tersedia: true
                };
                 // Simpan object menu ke array data
                 this.data.push(menu);

                 // Tampilkan pesan berhasil
                console.log(`✅ "${item.nama}" ditambahkan ke menu!`);
            }
        });
    },
    


    lihat: function() {
        console.log("\n === MENU MAKANAN ===");

        if (this.data.length === 0) {
            console.log("Belom Ada Menu");
            return;
        }

        this.data.forEach((item, index) => {
            const { id, nama, harga, tersedia } = item;
            const status = tersedia ? "Tersedia" : "Tidak Tersedia";
            console.log(`${index + 1}. ID: ${id}, Nama: ${nama}, Harga: ${harga}, Status: ${status}`);
        });

    },


    editHarga: function (updateData) {
        const index = this.data.findIndex(item => item.id=== updateData.id);

        if (index === -1) {
            console.log(`Menu ID ${updateData.id} tidak ditemukan.`);
            return;
        }

        this.data[index] = {
            ...this.data[index],
            harga: updateData.harga,
        };
        console.log(`Harga menu ID ${updateData.id} berhasil diubah.`);
    },

    hapusBanyak: function (...ids)
        ids.forEach(id => {
            const index = this.data.findIndex(item => item.id === id);

            if (index !== -1) {
                this.data.splice(index, 1);
                console.log(`Menu ID ${id} berhasil dihapus.`);
            }
        });
    },
    
    salinMenu: function(...pilihId) {
        if (pilihId.length === 0) {
            return [...this.data];
        }
        
        const filtered = this.data.filter(item => pilihId.includes(item.id));
        return [...filtered];
    }
  
}



console.log("🚀 TESTING MENU MAKANAN");

// 1. Tambah banyak makanan
menuMakanan.tambahBanyak(
    { nama: "Nasi Goreng", harga: 25000 },
    { nama: "Mie Ayam", harga: 20000 },
    { nama: "Es Teh", harga: 5000 },
    { nama: "Ayam Bakar", harga: 35000 }
);

// 2. Lihat semua
menuMakanan.lihat();

// 3. Edit harga
menuMakanan.editHarga({ id: 1, harga: 28000 });
menuMakanan.editHarga({ id: 3, harga: 6000 });

// 4. Hapus banyak
menuMakanan.hapusBanyak(2, 4);

// 5. Lihat akhir
menuMakanan.lihat();

// 6. Salin menu
const menuBackup = menuMakanan.salinMenu();
const menuPilihan = menuMakanan.salinMenu(1, 3);

console.log("Backup semua menu:", menuBackup);
console.log("Menu pilihan:", menuPilihan);

