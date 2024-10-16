const student={
    name:"XYZ",
    branch:"CSE",
    sec:"A",
}
console.log(student);
const newStudent=student;//referencing
newStudent.name="ABC";
console.log(newStudent);
console.log(student);// the values of the Student have been changed
const newStudent2={id:101,...student,sec:'B'};//using spread operator we can avoid copying by reference
newStudent2.branch="AIML";
console.log(newStudent2);
console.log(student);// the values of student have been retrieved
const emp=[5,7,2,45,21];
console.log(emp);
newEmp=emp;
console.log(newEmp);
newEmp[0]=100;
console.log(emp);
newEmp2=[101,...emp];
console.log(newEmp2);
console.log(emp);
const execute=(a=2,b=4)=>(a*b);
console.log(execute(8));
const person={
    name:"XYZ",
    Age:45,
    Salary:11464,
}
console.log(person.name);
console.log(person.Age);
console.log(person.Salary);
const person2={
    Salary:1145,
}
//destructuring on object
const{name,Age,Salary}=person2;
console.log(name);
console.log(Age);
console.log(Salary);
//destructuring on an array
const array=[23,72,91,100,12];
const [first,second,third,fourth,fifth]=array;
console.log(first);
console.log(second);
