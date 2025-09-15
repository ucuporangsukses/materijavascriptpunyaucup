// // const products = ["Laptop", "Mouse", "Keyboard"];
// // console.table(products);
// // console.log(products[0]);
// // console.log(`panjang data dalam array adalah : ${products.length}`)
// // for(i=0;i<products.length;i++){
// //     console.log(`${i+1}. ${products[i]}`)




// // //EXAMPLE CLASS 2


// // let laci = [];
// // const fruits = ["apel", "jeruk",];
// // fruits = ["mangga"]
// // console.log(fruits);




// let data = "Ini Data";
// let data2 = ["Simple Array1", "Simple Array2", "Simple Array3"];
// console.log(data2[1]); // Siple Array2

// let data3 = ["Simple Array1", "Simple Array2", ["Simple Array3", "Simple Array4"]];
// console.log(data3[2][1]); // Simple Array4

// let data4 = ["Simple Array1", "Simple Array2", ["Simple Array3", ["Simple Array4", "Simple Array5"]]];
// console.log(data4[2][1][0]); // Simple Array4

// // let mobil = ['Avanza', 'Merah', 150000000, ['nos', 'sayap', "center", ['Avanza b1', "avanza  b2", "Avanza b3"]]];
// console.log(mobil[3][3][1]);

// console.table(mobil);

// // console.log(Array.isArray(mobil));

// function renderArray3(arr) {
//     let hasil2 = [];
//     if (Array.isArray(arr)) {
//         // for (start = 0; start < arr.length; start++) {
//         //     if (Array.isArray(arr[start])) {
//         //         for (start2 = 0; start2 < arr[start].length; start2++) {
//         //             if (Array.isArray(arr[start][start2])) {
//         //                 for (start3 = 0; start3 < arr[start][start2].length; start3++) {
//         //                     hasil2.push(arr[start][start2][start3]);
//         //                 }
//         //             } else {
//         //                 hasil2.push(arr[start][start2]);
//         //             }
//         //         }
//         //     } else {
//         //         hasil2.push(arr[start]);
//         //     }
//         // }
//     } else {
//         return "Ini Bukan Array";
//     }
//     return hasil2;
// }

// renderArray3(mobil);
// console.table(renderArray3(mobil));













// // EXAMPLE case 4

// const numbers = [1, 2, 3, 4, 5];

// function printArray(a,b,c) {
//     console.log(c[b]);
//     console.log(`Index ke ${b} pada data array : ${a}`)
// }
    
//     numbers.forEach(printArray) 

    
















//     const tasks = ["coding"]



let penjualan = [6,5,4,3,2,1,15]
let totalpenjualan = penjualan.reduce(function(a,b,c,d){
    console.log(`${a} + ${b} = ${a+b}`)
    return a*b

},1);
console.log(totalpenjualan);

let nama =["kim-youjung","yu-jimin","nam-jo-hyuk","kim-tae-ri"]
let daftarnama = nama.reduce(function(a,b,c,d){
    console.log(`${a} + ${b} = ${a+b}`)
})