// create read update delete

// create /createusers
// get /users
// get /user/id
//update put ,patch  

// json.stringify
// json.parse\

// server is stateless

// const http=require("http")
// const port=3003;
// const server=http.createServer((req,res)=>{
//  const data=[{
//     id:1001,
//     name:"Akshay Bansal",
//     email:"ab@gmail.com"
//  }];
//  const url=req.url;
//  if(url=="/users" && req.method=="GET")
//  {
//     res.writeHead(200,{"Content-Type":"application/json"})
//     res.write(JSON.stringify(data));
//  }
//  else if(url=="/user" && req.method=="POST")
//  {
//   let body="";
//   req.on("data",(chunk)=>{
//     body+=chunk;
//   })
//   req.on("end",()=>{
//     const parseddata=JSON.parse(body);
//     const {name,email}=parseddata;
//     const newid=data.length>0?(data[data.length-1].id+1):1001;
//     const newuser={
//       id:newid,
//       name:name,
//       email:email
//     }
//     data.push(newuser);
    
//   })
//     res.writeHead(404,{"Content-Type":"application/json"})
//     res.write(JSON.stringify({status:"success",message:"user created successfully"}))
//  }
//  else{
//   res.writeHead(201,{"Content-Type":"application/json"})
//   res.write(JSON.stringify({status:"fail",message:"page not found"}))
//  }
//  res.end();
// })

// server.listen(port,(err)=>{
//   try{
//       if(err)
//         throw err;
//     console.log(`server is running on port ${port}`);
//   }
//   catch(err){
//     console.log("Server error ",err.message);
//   }
// })

const http = require('http');

const data = [
    {
        id: 1,
        name: 'Vijit Verma',
        email: 'ABC@gmail.com'
    }
];

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/users' && req.method === "GET") {
        res.writeHead(200, { 'Content-Type': "application/json" });
        res.end(JSON.stringify(data));
    } 
    else if (url === '/users' && req.method === "POST") {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            try {
                const parsedData = JSON.parse(body);
                const { name, email } = parsedData;

                if (!name || !email) {
                    res.writeHead(400, { 'Content-Type': "application/json" });
                    return res.end(JSON.stringify({ status: 'fail', msg: "Name and email are required" }));
                }

                const newId = data.length > 0 ? (data[data.length - 1].id + 1) : 1;
                const newUser = { id: newId, name, email };

                data.push(newUser);

                res.writeHead(201, { 'Content-Type': "application/json" });
                res.end(JSON.stringify({ status: 'success', msg: "User created", user: newUser }));
            } catch (error) {
                res.writeHead(400, { 'Content-Type': "application/json" });
                res.end(JSON.stringify({ status: 'fail', msg: "Invalid JSON format" }));
            }
        });
    } 
    else {
        res.writeHead(404, { 'Content-Type': "application/json" });
        res.end(JSON.stringify({ msg: "Something went wrong" }));
    }
});

server.listen(3000, (err) => {
    if (err) {
        console.error("Server Error:", err);
    } else {
        console.log("Server is running on port 3000");
}
});