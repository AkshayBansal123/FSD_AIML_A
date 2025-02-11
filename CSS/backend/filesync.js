const fs=require("node:fs");
try{
    const data=fs.readFileSync("dummy.txt");
    if(err)
    {
        throw err;
    }
    console.log("file data",data);
}
catch(err)
{
    console.log(err.message);
}