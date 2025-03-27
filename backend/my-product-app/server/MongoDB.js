const {MongoClient}=require("mongodb");
const mongoURL="mongodb+srv://AkshayBansal:Asd23wer@cluster0.3uoebi2.mongodb.net/FSD_AIML_A?retryWrites=true&w=majority&appName=Cluster0"

MongoClient.connect(mongoURL)
.then(client=>{
    console.log("MongoDB connected");
})
.catch(err=>{
    console.log("DB error",err);
})