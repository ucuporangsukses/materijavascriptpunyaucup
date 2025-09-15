let obj1 = {
    "Key1":"Value1",
    "Key2":"Value2",
    "Key3":"Value3",
    "sopo":"Bambang",
}

let arr = [0,5,62,26,64,];

console.log(typeof arr);


console.log(obj1.Key3);
console.log(obj1['Key3']);
console.table(obj1);
console.table(arr);


let obj = {
    "Key1":"Value1",
    "Key2":"Value2",
    "Key3":"Value3",
    "sopo":"Bambang",
} 

let arr1 = [0,5,62,26,64,];

arr[2] = "Edit 62";

// Inisialiasi Ulang
obj1.sopo = "Edit Bambang";
obj1['sopo'] = "Edit Lagi Bambang";

// Add Property for Object {}
obj1.key4 = "Zidanucup";
obj1['key5'] = "Ucupzidan";


// Add Property for Array []
arr[5] = "Value Index 5";
arr.push("Value 6");

console.log(typeof arr);
console.log(typeof obj1);

console.log(obj1.sopo);
console.log(obj1['Key3']);

console.table(obj1);
console.table(arr);

// 1. Mendekalrasi sebuah Object {}
// 2. Mengenali Perbedaan Array dan Object {}
// 3. Mengenali apa itu Index,Property,Key,Value,Element 
// 4. Interksi Spesifik Property pada object {}
// 5. Interaksi  Spesifik Element pada array []
// 6. Metode Inisialisasi ulang pada Property {}
// 7. Metode Inisialisasi ulang pada Element di array []
// 8. Metode Add new Key + Value Pada Object {} 
// 9. Metode Add new index Pada array []

//==============================================================\\

let obj1 = {
    "Key1":"Value1",
    "Key2":"Value2",
    "Key3":"Value3",
    "sopo":"Bambang",
} 

let arr = [0,5,62,26,64,];

arr[2] = "Edit 62";

// Inisialiasi Ulang
obj1.sopo = "Edit Bambang";
obj1['sopo'] = "Edit Lagi Bambang";

// Add Property for Object {}
obj1.key4 = "Zidanucup";
obj1['key5'] = "Ucupzidan";


// Add Property for Array []
arr[5] = "Value Index 5";
arr.push("Value 6");

// console.log(typeof arr);
// console.log(typeof obj1);

// console.log(obj1.sopo);
// console.log(obj1['Key3']);

// console.table(obj1);
// console.table(arr);

// 1. Mendekalrasi sebuah Object {}
// 2. Mengenali Perbedaan Array dan Object {}
// 3. Mengenali apa itu Index,Property,Key,Value,Element 
// 4. Interksi Spesifik Property pada object {}
// 5. Interaksi  Spesifik Element pada array []
// 6. Metode Inisialisasi ulang pada Property {}
// 7. Metode Inisialisasi ulang pada Element di array []
// 8. Metode Add new Key + Value Pada Object {} 
// 9. Metode Add new index Pada array []
// 10. Metode Object di dalam Object => Nested Obejct



let obj2 = {
    nama : 'Nama'
} 
let obj3 = {
    "nama" : 'Nama'
} 
let obj4 = {
    1 : 'Nama'
} 
let obj5 = {
    true : 'Nama'
} 

let obj6 = {
    dataSantri : {
        nama : "Bambang",
        alamat : "Tangsel",
        umur : 17,
        wa : "089512345678",
        email : "zidanucup@gmail.com" 
    },
    dataWalisantri : {
        nama : "Wali Bambang",
        alamat : "Jakrta",
        umur : 99,
        wa : "089123456789",
        email : "bambangkucinta@gmail.com"
    },
    dataUstadz : {
         nama : "Ustadz Bambang",
        alamat : "Jakrta",
        umur : 99,
        wa : "089123456789",
        email : "sayaustadz@gmail.com"
    },
    dataStaff : {
         nama : "Staff Bambang",
        alamat : "Jakrta",
        umur : 99,
        wa : "089123456789",
        email : "sayastaff@gmail.com"
    },
    dataProperty : {
        lt3 : {
            kelas1 : {
                meja : "Meja Putih",
                kursi : "Kursi Kondangan",
            },
            kelas2 : {
                meja : "Meja Putih",
                kursi : "Kursi Kondangan",
            }
        },
        lt2 : {
            kantor : {
                ac : "LG",
                kursi : "Kursi Kantor Hitam",
                totalSPA : 90,
                isActive : true
            }
        }
    }
}

///===========================================\\\

// console.log(obj6);

obj6.dataSantri.isActive = false;

obj6.dataProperty.lt2.kantor.isActive = false;

console.table(obj1);

delete obj1.sopo;

console.table(obj1);


// console.log(obj6.dataProperty.lt2.kantor);



for (let a in obj6) {
    if (typeof obj6[a] == "object") {
        for (let aa in obj6[a]) {
            if (typeof obj6[a][aa] == 'object') {
                for (let aaa in obj6[a][aa]) {
                    if (typeof obj6[a][aa][aaa] == 'object') {
                        for (let aaaa in obj6[a][aa][aaa]) {
                            console.log(`Ini adalah AAAA sebagai key => (${aaaa}) 
                            Ini adalah Value dari (${aaaa}) => ${obj6[a][aa][aaa][aaaa]} \n`);
                        }
                    } else {
                        console.log(`Ini adalah AAA sebagai key => (${aaa}) 
                        Ini adalah Value dari (${aaa}) => ${obj6[a][aa][aaa]} \n`);
                    }
                }
            } else {
                console.log(`Ini adalah AA sebagai key => (${aa}) 
                Ini adalah Value dari (${aa}) => ${obj6[a][aa]} \n`);
            }
        }
    } else {
        console.log(`Ini adalah A sebagai key => (${a}) 
        Ini adalah Value dari (${a}) => ${obj6[a]} \n`);
    }
}

///==========================================================================/

// let perpus = {};
let perpus = [];
// let listPengunjung = {};
let listPengunjung = [];
let infoData = []


const manageData = {
    perpus: function (key, value) {
        // perpus[key] = value;
        perpus.push({[key]: value});
    },
    pengunjung:
        function (key, value) {
            // listPengunjung[key] = value;
               listPengunjung.push({[key]: value});
        },
    infoData: function () {
        // let info = {...listPengunjung,...perpus};
        return [[...perpus], [...listPengunjung]];
    }
}

manageData.pengunjung("Nama", "Bambang Pengunjung");
manageData.pengunjung("Alamat", "Bekasi");
manageData.pengunjung("Phone", "089502433722");

manageData.perpus("Nama", "Bambang Perpus");
manageData.perpus("Alamat", "Bekasi");
manageData.perpus("Phone", "089502433722");

let data1 = [];
data1["d1"] = "ISI";
data1["d2"] = "ISI 2";

let data2 = ["data3",...data1];

// let data4 = [...data1,...data2];

// console.log(data1.length);


// console.table(perpus);
// console.table(listPengunjung);

console.log(manageData.infoData().length);


const manageData1 = {
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

const manageData2 = {

    dataPengunjung_1 : [],

    dataPerpus_2 : [],

    add:function (key,value,data) {
        if (!data) {
            console.error('Masukan Data Nya kemana ?');
        }
        else if (data == "1") {
            this.dataPerpus_2.push({[key]: value});
        } else if (data == "2"){
            this.dataPengunjung_1.push({[key]: value});
        } else {
            console.error('Data nya ngk ada?');
        }
    },

    delete: function(){},
    infoData: function (data) {
         if (!data) {
            console.error('Masukan Data Nya kemana ?');
        } else if(data == "1") {
            return [[...this.dataPengunjung_1]];
        } else if (data == "2") {
            return [[...this.dataPerpus_2]];
        } else if (data == "all") {
            return [[...this.dataPengunjung_1],[...this.dataPerpus_2]];
        }
    }
}

manageData.add("Nama", "Bambang Pengunjung","1");
manageData.add("Alamat", "Bekasi","1");
manageData.add("Phone", "089502433722","1");

manageData.add("Nama", "Bambang perpus","2");
manageData.add("Alamat", "Bekasi","2");
manageData.add("Phone", "089502433722","2");

console.log(manageData.infoData('all'));


// SPREAD 
const arr = [1,2,3];
console.log(...arr); 
console.log(`Ini tanpa ... ${arr}`); 

// REST 
function collect1(...a){
    return a;
}
function collect2(a){
    return Ini (`Tanpa .... ${a}`);
}

console.log(collect1("Parameter 1","Parameter 2"));
console.log(collect2("Parameter 1","Parameter 2"));