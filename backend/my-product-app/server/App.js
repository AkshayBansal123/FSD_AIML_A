// const express=require("express")
// const fs=require("fs/promises")
// const app=express()
// const port=3002;
// const m1=(req,res,next)=>{
//     const age=req.query.age;
//     if(!age)
//     {
//         res.status(400).send("Enter age in url");
//     }
//     else{
//         if(age<18)
//             {
//                 res.status(401).send("User not authorised");
//             }
//             else{
//                 next();
//             }
//     }
    
// }

// const users=[];

// app.use(express.json());

// //app.use(m1);  // application level middleware

// app.get("/users",async(req,res)=>{
//     try{
//         const data=await fs.readFile("./users.json","utf-8");
//         res.status(200).json(JSON.parse(data));
//     }
//     catch(err){
//         res.status(400).send("file not found");
//     }
// })

// app.post("/createuser",m1,async(req,res)=>{
//    const {name,email}=req.body;
//    if(!name || !email)
//    {
//        res.status(400).json({status:"fail",message:"name and email is required"})
//    }
//    else{
//     const newId=Date.now();
//     const newUser={
//      id:newId,
//      name,email
//     }
//     const data=await fs.readFile("./users.json","utf-8");
//     users.push(JSON.parse(data));
//     users.push(newUser);
//     await fs.writeFile("./users.json",JSON.stringify(users));
//     res.status(201).json({status:"success",message:"user created",data:newUser})
//    }
   
// })

// app.patch("/edituser/:id",(req,res)=>{
// const uid=req.params.id;
// const {name,email}=req.body;
// if(!name || !email)
// {
//   res.status(400).json({status:"fail",message:"name and email is required"})
// }
// const index=users.findIndex(ind=>ind.id==uid);
// if(index==-1)
// {
//   res.status(400).json({status:"fail",message:"user not found"})
// }
// else{
//     users[index].name=name;
//     users[index].email=email;
//     res.status(200).json({status:"success",message:"user updated",data:users[index]})
// }
// })

// app.get("/user/:id",(req,res)=>{
//   const uid=req.params.id;
//   const index=users.findIndex(ind=>ind.id===uid);
//   if(index==-1)
//   {
//     res.status(400).json({status:"fail",message:"user not found"})
//   }
//   else{
//     res.status(200).json({status:"success",message:"user found",data:users[index]})
//   }
// })


// app.delete("/deleteuser/:id",(req,res)=>{
//   const uid=req.params.id;
//   const index=users.findIndex(ind=>ind.id==uid);
//   if(index==-1)
//   {
//     res.status(400).json({status:"fail",message:"user not found"});
//   }
//   else{
//     users.splice(index,1);
//     res.status(200).json({status:"success",message:"user deleted"});
//   }
// })
// app.listen(port,()=>{
//     console.log(`Server is running on port ${port}`)
// })



const express=require("express");
const fs=require("fs/promises")
app.use(cors({
  origin:"https://localhost:5173"
}));
const cors=require("cors")
const app=express();
const port=3002;
let users=[];
const loadUsers=async ()=>{
    try{
       const userdata=await fs.readFile("./users.json","utf-8");

       users=JSON.parse(userdata);
   }
   catch(err){
    users=[];

   }


}

const saveUser=async ()=>{
  try{
    await fs.writeFile("./users.json",JSON.stringify(users));
  }
catch(err){
  console.log(err);
}

}
// app.use(m1);
app.use(express.json())
loadUsers();
app.get("/users",async(req,res)=>{
    try{
    const data=await fs.readFile("./users.json","utf-8")
    res.status(200).json(JSON.parse(data));
    }
    catch(err){
        res.status(400).send("file not found")
    }
})
app.get("/user/:id",(req,res)=>{
    const uid=req.params.id;
    const index=users.findIndex(ind=>ind.id==uid);
    if(index==-1){
        res.status(400).json({status: "fail", message: "User not found"}); 
    }
    else{
res.status(200).json({status: "success", message: "User found", data: users[index]});    
    }
})
app.post("/createuser",async(req,res)=>{
    const {name,email}=req.body;
    const newId=Date.now();
    const newUser={
        id: newId,name,email
    }
    const data=await fs.readFile("./users.json","utf-8");
    users.push(JSON.parse(data));
    users.push(newUser);
    saveUser();
    await fs.writeFile("./users.json",JSON.stringify(users))
    res.status(201).json({status:"success",message: "user created Successfully",data: newUser})
})
app.patch("/edituser/:id",(req,res)=>{
    const uid=req.params.id;
    const {name,email}=req.body;
    if(!name || !email){
    res.status(400).json({status: "fail",message: "All Fields Required"})
    }
    else{
        const index=users.findIndex(ind=>ind.id==uid);
        if(index==-1){
            res.status(400).json({status: "fail", message: "User not found"});   
        }
        else{
            users[index].name=name;
            users[index].email=email;
            saveUser();
            res.status(200).json({status:"success",message: "user Edited Successfully",data: users[index]})   
        }
    } 
})
app.delete("/deleteuser/:id",(req,res)=>{
    const uid=req.params.id;
    const index=users.findIndex(ind=>ind.id==uid)
    if(index==-1){
        res.status(400).json({status: "fail", message: "User not found"});   
    }
    else{
       const deldata= users.splice(index,1);
       saveUser();
        res.status(200).json({status:"success",message: "User Deleted Successfully",data: deldata})
    }
})
app.listen(port,()=>{
    console.log(`Server is Running on port${port}`)
})

