const menuMakanan = {
    data: [],
    nextId: 1,
    
    // 1. tambahBanyak(...makanan)
    tambahBanyak: function(...makanan) {
        console.log(`Akan menambah ${makanan.length} makanan:`);
        makanan.forEach((item) => {
            const newItem = {
                id: this.nextId++,
                nama: item.nama,
                harga: item.harga,
                tersedia: true
            };
            this.data.push(newItem);
            console.log(`✅ "${newItem.nama}" ditambahkan ke menu!`);
        });
    },
    
    // 2. lihat()
    lihat: function() {
        console.log("🍽️ === MENU MAKANAN ===");
        if (this.data.length === 0) {
            console.log("Menu masih kosong bre!");
            return;
        }
        this.data.forEach((item, index) => {
            const { id, nama, harga, tersedia } = item;
            const hargaFormat = harga.toLocaleString('id-ID'); // 25.000
            const status = tersedia ? "✅ Tersedia" : "❌ Habis";
            console.log(`${index + 1}. [ID ${id}] ${nama} - Rp ${hargaFormat} ${status}`);
        });
    },
    
    // 3. editHarga(updateData)
    editHarga: function(updateData) {
        const index = this.data.findIndex((item) => item.id === updateData.id);
        if (index !== -1) {
            this.data[index] = { ...this.data[index], harga: updateData.harga };
            console.log(`✅ Harga menu ID ${updateData.id} berhasil diupdate!`);
        } else {
            console.log(`ID ${updateData.id} tidak ditemukan!`);
        }
    },
    
    // 4. hapusBanyak(...ids)
    hapusBanyak: function(...ids) {
        ids.forEach((id) => {
            const index = this.data.findIndex((item) => item.id === id);
            if (index !== -1) {
                const { nama } = this.data[index];
                this.data.splice(index, 1);
                console.log(`✅ "${nama}" dihapus!`);
            } else {
                console.log(`ID ${id} tidak ditemukan!`);
            }
        });
    },
    
    // 5. salinMenu(...pilihId)
    salinMenu: function(...pilihId) {
        if (pilihId.length === 0) {
            return [...this.data];
        } else {
            const filteredData = this.data.filter((item) => pilihId.includes(item.id));
            return [...filteredData];
        }
    }
};
