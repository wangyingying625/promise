//一个读取文件的方法并且返回的方法

const  fs=require('fs');
const path=require('path');


function  readFile(fpath,success,fail) {
    fs.readFile(fpath,'utf-8',(err,datastr)=>{
        if(err) fail(err);
else
    success(datastr);
})
}
readFile(path.join(__dirname,'1.txt'),function (data) {
    console.log(data)
},function (error) {
    console.log(error.message)
})