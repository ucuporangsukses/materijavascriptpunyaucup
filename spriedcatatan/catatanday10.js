const manageData = {
    dataPengunjung : [],

    dataPerpus : [],

    add: function (key,value,data) {
        if (!data) {
            console.error('Masukan Data Nya kemana ?');
        }
        else if (data == "perpus") {
            this.dataPerpus.push({[key]: value});
        } else if (data == "pengunjung"){
            this.dataPengunjung.push({[key]: value});
        } else {
            console.error('Data nya ngk ada?');
        }
    },
    infoData: function () {
        return [[...this.dataPengunjung], [...this.dataPerpus]];
    }
}

manageData.add("Nama", "Bambang Pengunjung","pengunjung");
manageData.add("Alamat", "Bekasi","pengunjung");
manageData.add("Phone", "089502433722","pengunjung");

manageData.add("Nama", "Bambang perpus","perpus");
manageData.add("Alamat", "Bekasi","perpus");
manageData.add("Phone", "089502433722","perpus");

console.log(manageData.infoData());