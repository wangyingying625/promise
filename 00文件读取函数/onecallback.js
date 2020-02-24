//一个读取文件的方法并且返回的方法

const  fs=require('fs');
const path=require('path');

/*fs.readFile(path.join(__dirname,'1.txt'),'utf-8',(err,datastr)=>{
    if(err) throw err;
    else
console.log(datastr);
})*/
function  readFile(fpath,callback) {
    fs.readFile(fpath,'utf-8',(err,datastr)=>{
        if(err) callback(err);
else
    callback(null,datastr);
})
}
readFile(path.join(__dirname,'10.txt'),(err,data)=>{
    if(err)
        console.log(err.message);
    else
    console.log(data);
})