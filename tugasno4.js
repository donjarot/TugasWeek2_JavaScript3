let api = require('cross-fetch')

let apiFetch = api('https://jsonplaceholder.typicode.com/users')

let ambilData = new Promise((resolve, reject) => {
    apiFetch.then(respon => { // mengembalikan hasil dari apiFetch
        if (respon.status == 200) {
            resolve('sukses')
            return respon.json()
        } else {
            reject('gagal')
        }
    }).then(nama => {
        nama.map(item => {
            console.log(item.name)
        })
    })
})

let getAllData = () => {
    ambilData.then(nilai => {
        console.log(`fetching ${nilai}`)
    }).catch(err => {
        console.log(`fetching ${err}`)
    })
}

getAllData();