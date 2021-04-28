const fs = require('fs');

module.exports = Html => {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./end/index.html', Html, err =>{
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok:true,
                message:'It exists'
            })
        })
    })
}