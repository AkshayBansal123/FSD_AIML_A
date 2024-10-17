const data=fetch("https://api.github.com/users");//returns promise
data.then((data1)=>{
   //data1.json();
   return data1.json();
}
).then((res)=>{
console.log(res);
}
);