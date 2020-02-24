const fs=require('fs');
const path=require('path');

function readFile(fpath) {
    return new Promise(function (resolve,reject) {
        fs.readFile(fpath,'utf-8',(err,data)=>{
            if(err) reject(err);
    else resolve(data)
    })
    })
}

readFile(path.join(__dirname,'1.txt')).then(function (data) {
    console.log(data)
    return readFile(path.join(__dirname,'2.txt'))
}).then(function (data) {
    console.log(data);
    return readFile(path.join(__dirname,'3.txt'))
}).then(function (data) {
    console.log(data)
})