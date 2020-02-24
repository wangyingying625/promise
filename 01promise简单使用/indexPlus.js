const fp=require('fs');
const path=require('path');

function readFile(fpath) {
    return new Promise(function (resolve,reject) {
        fp.readFile(fpath,'utf-8',(err,data)=>{
            if(err) reject(err);
    else
        resolve(data)
    })
    })
    return promise;
}
readFile(path.join(__dirname,'01.txt')).then(function (data) {
    console.log(data)
},function (err) {
    console.log(err.message)
})