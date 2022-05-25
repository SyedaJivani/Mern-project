// const car =['corolla','toyota','alto','cultus'];
// const models=['2000','2001','2012','2015'];
// console.log(car);
// console.log(...car);
// console.log(...car,...models);

// let a=[1,2,3];
// let b=[...a];
// a=[...a,...b];


//  a=[1,2,3];
//  b=[...a];
 

//  const num =2;
//  for(let i=1;i<=10;i++){
//      console.log(num*i);
//  }
 
const  num =[1,2,3,4,5];
const value =2;
// eslint-disable-next-line no-unused-vars
const [a,b,...args]=num;
// console.log(a,b,...args);
var table = value * b;
console.log(table);
for (let i =0; i<num.length;i++){
    console.log(num[i])
}

//  function table(value,...num){
//     num.forEach(element=>{
//         let multiply = value * element;
//         console.log(multiply);
//     })

//  }
//  console.log(table(2,1,2,3,4,5));


