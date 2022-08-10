// No.1 Cek angka ganjil atau genap
const cekAngkaGanjilGenap = angka => {
    return new Promise((resolve, reject) => {
            if (angka % 2 === 0) {
                resolve(angka)
            } else {
                reject(angka)
            }
        })
        .then(value => {
            console.log(`${value} adalah bilangan GENAP`)
        })
        .catch(value => {
            console.log(`${value} adalah bilangan GANJIL`)
        })
}


const validasiAngka = async (angka) => {
    try {
        if (angka == '') throw `pastikan semua field terisi`
        if (!Number(angka)) throw `input harus berupa angka`
        const coba = await cekAngkaGanjilGenap(angka)
        return coba
    } catch (error) {
        console.log(error)
    }
}


validasiAngka(8)


// No .2 Oprasi hitung kali & bagi
// const hitungKaliBagi = (oprasi, angka1, angka2) => {
//     return new Promise((resolve, reject) => {
//             switch (oprasi) {
//                 case 'kali':
//                     resolve(angka1 * angka2);
//                     break;

//                 case 'bagi':
//                     resolve(angka1 / angka2);
//                     break;

//                 default:
//                     reject(`Oprasi tidak tersedia`)
//                     break;
//             }
//         })
//         .then(res => {
//             console.log(res)
//         }).catch(err => {
//             console.log(err)
//         })
// }



// hitungKaliBagi('bagi', 8, 2)