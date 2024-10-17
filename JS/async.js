function register(cb){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
      console.log("Register end");
      resolve();
        },2000);
      })
  }
  function sendemail(cb){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
      console.log("Email sent");
      resolve();
        },2000);
      })
  }
  function login(cb){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            return reject("Login error")
      console.log("Login end");
      //resolve();
        },2000);
      })
  }
  function getdata(cb){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
      console.log("Data got");
      resolve();
        },2000);
      })
  }
  function displaydata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
      console.log("Display user data");
      resolve();
        },2000);
      })
  }
  function waitforthreesec(){  //for sychronous programming
      const ms=3000+new Date().getTime();
      while(ms>new Date())
      {
  
      }
  }
  console.log("other application");
 async function authenticate(){ 
    try{
        await register();
        await sendemail();
         await login();
       await getdata();
         await displaydata();
      }
      catch(err){
        console.log("error"+ err);
      }
    } //return promise 
   
 authenticate();
console.log("work other application");