export default function salamKeBanyak(...nama){
    nama.forEach(function(a,b,c){
        console.log(`Halo Bro ${a}`);
    })
}

export  function salamDenganUmur(nama,umur){
    console.log(`Assalamualaikum, ${nama} , Makin Tua ajh lo udah ${umur} ajh`);
}

// export function salamSantai(nama){
//     console.log(Assalamualaikum, Bro ${nama} , dari mana ajh lo);
// }

export function subject(...data){
    return data.split()
}