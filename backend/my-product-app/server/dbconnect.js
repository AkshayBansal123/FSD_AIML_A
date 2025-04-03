// const {MongoClient}=require("mongodb")
// const mongo_URL="mongodb://127.0.0.1:27017";
// const db_name="FSD_AIML_A"
// const db_connect=async()=>{
//     const client=new MongoClient(mongo_URL);
//     try{
//         await client.connect();
//         console.log("DB connected");
//         const db=client.db(db_name);
//         const usercol=db.collection("users");
//         const res=await usercol.find().toArray();
//         console.log("Data ",res);
//     }
//     catch(err){
//         console.log(err.message);
//     }
// }

// db_connect();

const mongoose = require("mongoose");
const mongo_url="mongodb://127.0.0.1:27017/FSD_AIML_A";
mongoose.connect(mongo_url)
.then(()=>{
    console.log("MongoDB connected");
})
.catch((err)=>{
    console.log("DB error",err.message);
})

const studentSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    age: {type:Number,required:true}
})

const Student=mongoose.model("students",studentSchema);
const createStudent=async()=>{
    try{
        const newStudent=new Student({name:"Akshay",email:"ab@gmail.com",age:21});
        await newStudent.save();
        console.log("Student created successfully");
    }
    catch(err){
        console.log("Data creation error ",err.message);
    }
   
}
// createStudent();

const getStudents=async()=>{
    try{
        const students=await Student.find();
        console.log("Students data ",students);
    }
    catch(err)
    {
        console.log("Data fetching error ",err.message);
    }
}

// getStudents();

const updateStudent=async()=>{
    try{
        const updatedStudent=await Student.findOneAndUpdate({email:"ab@gmail.com"},{$set:{age:22}},{new:true});
        console.log("Student updated successfully",updatedStudent);
    }
    catch(err){
        console.log(" Student update error", err.message);
    }
}
// updateStudent();


const deleteStudent=async()=>{
    try{
        const deletedStudent=await Student.deleteOne({age:22});
        console.log("Student deleted successfully");
    }
    catch(err){
        console.log("Student deletion error",err.message);
    }
}

deleteStudent();
