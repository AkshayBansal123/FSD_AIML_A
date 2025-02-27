const fs=require("fs");
function myReadFile(){
    try{
        fs.readFile("dummy.txt","utf-8",(err,data)=>{
            if(err)
                throw err;
            else
               console.log("file data",data);
        });
    }
    catch(err){
        console.log(err.message);
    }
}
myReadFile();

function myWriteFile(data){
    try{
    fs.writeFile("dummy.txt",data,(err,data)=>{
        if(err)
            throw err;
        else
           console.log("file data is written");
    });
}
catch(err){
    console.log(err.message);
}
}
myReadFile();
myWriteFile("bye bye");
myReadFile();