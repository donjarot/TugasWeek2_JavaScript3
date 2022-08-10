const getMonth = () => {
    return new Promise ((resolve, reject) => {
    setTimeout(() => {
            let error = false;
            let months = ['January', "Febuary", "Maret", "April", "Mei", "Juni", "Agustus", "September", "Oktober", "November", "Desember"]
            if(!error){
                resolve(months);
            }else{
                reject('Sorry Data Not Found');
            }
        }, 1000);
    })
}

const showMonths = async () => {
    try{
        const months = await getMonth();
        months.map(month => console.log(month));

    }catch(err){
        console.log(err);
    }
}

showMonths();