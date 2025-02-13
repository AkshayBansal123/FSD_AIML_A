
const fs=require("node:fs");
function myReadFile(){
    try{
        const data=fs.readFileSync("dummy.txt","utf-8");
         if(data)
         {
             console.log("file data",data);
         }
         else
         throw err;
    }
    catch(err)
    {
        console.log(err.message);
    }
}
function myWriteFile(data){
    try{
        
        fs.writeFileSync("dummy.txt",data);
    }
    catch(err)
    {
        console.log(err.message);
    } 
}
module.exports={myReadFile:myReadFile,
    myWriteFile:myWriteFile,
username:"Akshay"}
// myReadFile();
// myWriteFile();
// myReadFile();