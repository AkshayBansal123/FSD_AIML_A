function register(cb){

  setTimeout(()=>{
    console.log("Register end");
    cb();
  },3000);
}
function sendemail(cb){
    setTimeout(()=>{
        console.log("Register end");
        cb();
      },3000);
}
function login(cb){
    setTimeout(()=>{
        console.log("Register end");
        cb();
      },3000);
}
function getdata(cb){
    setTimeout(()=>{
        console.log("Register end");
        cb();
      },3000);
}
function displaydata(){
    setTimeout(()=>{
        console.log("Register end");
      },3000);
}
function waitforthreesec(){  //for sychronous programming
    const ms=3000+new Date().getTime();
    while(ms>new Date())
    {

    }
}
console.log("other application");
//callback hell
register(function(){
    sendemail(function(){
        login(function(){
            getdata(function(){
                displaydata();
            });
        });
    });
});
