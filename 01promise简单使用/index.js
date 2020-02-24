const fp=require('fs');
const path=require('path');

function readFile(fpath) {
    var promise=new Promise(function (resolve,reject) {
        fp.readFile(fpath,'utf-8',(err,data)=>{
            if(err) reject(err);
            else
                resolve(data)
        })
    })
    return promise;
}
var p=readFile(path.join(__dirname,'01.txt'));
p.then(function (data) {
    console.log(data)
},function (err) {
    console.log(err.message)
})