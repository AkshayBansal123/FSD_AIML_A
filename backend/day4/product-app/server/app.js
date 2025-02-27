const express = require("express");
const app = express();
const port = 3001;
const products = [
  {
    id: 1001,
    title: "Laptop",
    Price: 45000,
    quantity: 10,
  },
  {
    id: 1002,
    title: "Mobile",
    Price: 15000,
    quantity: 10,
  },
];

// app.get('/products',(req,res){
//   product.forEach((p)=>{
//     console.log(" the id is ",p.id)
//   })
app.use(express.json());
app.get("/products", (req, res) => {
  res.status(200);
  res.json(products);
});

app.get("/product/:id", (req, res) => {
   
  const pid = parseInt(req.params.id, 10); // Convert the ID to a number
  const index = products.findIndex((ind) => ind.id === pid); // Use strict equ
   if(index==-1)
   {
    res.status(404).json({status:"fail", message:"product not found"});
   }
   else{
    res.status(200).json({status:"success",message:"product found",data:products[index]
    })
   }
});
app.post("/product", (req, res) => {
  const { title, price, quantity } = req.body;
  if (!title || !price || !quantity) {
    res.status(400).json({ status: "error", message: "Invalid request" });
  } else {
    
    const newid = products.length > 0 ? products[products.length - 1].id + 1 : 1001;
    const newProduct = { id: newid, title, price, quantity };
    products.push(newProduct);
    res
      .status(201)
      .json({ status: "success", message: "product added successfully" });
  }
});
app.listen(port, (err) => {
  try {
    if (err) throw err;
    else console.log(`Server is running on port ${port}`);
  } catch (err) {
    console.log("Server error", err.nessage);
  }
});

app.patch("/editproduct/:id", (req,res)=>{
  const pid=req.params.id;
  const {title,price,quantity}=req.body;
  if(!title || !price || !quantity){
    res.status(400).json({status:"fail" , message:"all data required"})
  }
  else{
    const index=products.findIndex((ind)=>ind.id==pid)
  products[index].title=title;
  products[index].price=price;
  products[index].quantity=quantity;
  res.status(200).json({status:"success",message:"product updated successfully",data:products[index]})
  } 
})

app.delete("/deleteproduct/:id",(req,res)=>{
  const pid=req.params.id;
  const index=products.findIndex((ind)=>ind.id==pid);
  if(index==-1)
  {
    res.status(400).json({status:"fail" , message:"all data required"})
  }
  else{
    products.splice(index,1);
    res.status(200).json({status:"success",message:"product deleted successfully"})
  }
})
