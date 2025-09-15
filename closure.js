    const gudang = (function() {
    let barang = [];
    return {
        tambah: function(item) { barang.push(item); },
        tampil: function() { return barang.join(', '); },
        kurang: function(item) {
        let index = barang.indexOf(item);
        if (index !== -1) {
            barang.splice(index, 1);
        }
        }
    }
    })();

    gudang.tambah("Buku1");
    gudang.tambah("Pensil1");
    gudang.tambah("Penghapus1");
    gudang.tambah("Pensil2");

    console.log(gudang.tampil()); 
    gudang.kurang('Pensil1'); 
    console.log(gudang.tampil());

    let dataData = {
        nama: 'zidan',
        umur: 20,
        alamat: 'ciamis'
    }

