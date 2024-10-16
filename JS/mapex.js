const mymap=new Map(
    [
        [45,"John"],
        ["Goal",100]
    ]
);
console.log(mymap.get(45));
mymap.set(1,'Hello');
console.log(mymap.get(1));
//sets
const myset=new Set();
myset.add(24);
console.log(myset);
console.log(24);
console.log(myset);
const numbers=[1,2,3,4,5,6];
const a1=numbers.filter((n)=>(n%2==0));
console.log(a1);