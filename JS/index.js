var a=12;
/*if(a>10)
{
    a=30;
    var b=67;
    console.log(a);
    console.log(b);
}
console.log(a);
console.log(b);*/
const person={
    name:"xyz",
    age:20,
}
const newPerson={...person,name:"ABC"};
newPerson.age=35;
console.log(person.age);
console.log(newPerson.age);
console.log(person.name);
console.log(newPerson.name);
const emp=["xyz",30,10101.50];
const newEmp=[...emp];
const newEmp1=[1,...emp];
console.log(emp[0]);
console.log(newEmp[0]);
console.log(newEmp1[0]);//using the spread operator
//template literal
const firstName="Achiever";
const lastName="Success";
console.log(`${firstName}  ${lastName}`);