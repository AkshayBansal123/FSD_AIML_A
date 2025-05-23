// const http=require("http");
// const server=http.createServer((req,res)=>{
//   const url=req.url;
//   res.writeHead(200, { "Content-Type": "text/html" });
//   if(url=="/home")
//   {
//     res.write("<h1>My home page</h1>");
//   }
//   else if(url==="/about")
//   {
//     res.write("<h1>About page</h1>");
//   }
//   else{
//     res.write("<h1>Error page</h1>");
//   }
//   res.end();
// }
// );
// server.listen(3001,()=>{
//     console.log("server is running on port 3001")
// })

const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  res.writeHead(200, { "Content-Type": "text/html" });

  if (url === "/home" && req.method=='GET') {
    res.write("<h1>My home page</h1>");
  } else if (url === "/about" && req.method=='POST') {
    res.write("<h1>About page</h1>");
  } else {
    res.write("<h1>Error page</h1>");
  }
  res.end();
});

server.listen(3001, () => {
  console.log("Server is running on port 3001");
});
