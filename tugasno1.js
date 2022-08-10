const cekHariKerja = day => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];
            let cek = dataDay.find((item) => {
                return item == day;
            })
            if (cek) {
                resolve(`${cek} adalah hari kerja`)
            } else {
                reject(new Error(`Hari ini bukan hari kerja`))
            }
        }, 1000)
    })
}


function currentDay() {

    const d = new Date()
    const res = d.getDay()
    let day = null
    switch (res) {
        case 1:
            day = "Senin"
            break;
        case 2:
            day = "Selasa"
            break;
        case 3:
            day = "Rabu"
            break;
        case 4:
            day = "Kamis"
            break;
        case 5:
            day = "Jumat"
            break
        case 6:
            day = "Sabtu"
            break;
        case 7:
            day = "Minggu"
            break
        default:
            console.log("Bukan hari")
    }
    return day
}


// cekHariKerja("Senin")
//     .then(value => {
//         console.log(value)
//     })
//     .catch(err => {
//         console.log(err.message)
//     })

async function getDay() {
    try {
        const hari = currentDay()
        const day = await cekHariKerja(hari)
        return day
    } catch (error) {
        return error.message
    }
}


getDay()
    .then(console.log)
    .catch(err => console.log(err))



/* -----Then Catch----- */
// diperuntukan untuk merepresentasikan keberhasilan / kegagalan pada sebuah promise 


/* -----Try Catch----- */
// diperuntukan untuk menghandle suatu error