const fs=require("fs/promises");
const myReadFile=async()=>{
    try{
        const res=await fs.readFile("dummy.txt","utf-8");
        // res.then((data)=>
        // {console.log(data);})
        // .catch((err)=>{
        //     throw(err);
        // })
         console.log(res);
    }
    catch(err){
    console.log(err.message);
    }
}

const myWriteFile=async()=>{
    try{
    await fs.writeFile("dummy.txt","hello");
    //  res.then(()=>{
    //     console.log("writing successfully");
    //  })
    //  .catch((err)=>{
    //      throw err;
    //  })
    console.log("success");
    }
    catch(err){
        console.log(err.message);
    }
}

const data=" My full stack dev class ";
myReadFile();
myWriteFile();
myReadFile();