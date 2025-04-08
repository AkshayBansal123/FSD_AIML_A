const {Client}=require("pg")
const client=new Client({
    host:'localhost',
    port:5432,
    database:"MyAppDB",
    user:'postgres',
    password:'root1234'
})

client.connect()
.then(()=>{console.log("Postgres connected");}
)
.catch((err)=>{
    console.log("DB error",err.message);
})

client.query("select * from users",(err,res)=>{
    if(err){
        console.log("error",err.message);
    }else{
        console.log("result",res.rows);
    }
    client.end();
})