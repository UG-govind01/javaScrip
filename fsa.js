// function hi (){
//     console.log("Hii")
// }
// hi();

// (function (){
//     console.log("Hello")
// })()
//   understand let const and var

// var a = 20;  // ✅ allowed
// a = 30; 

// console.log(a);
// var alows redeclaration and reassigning





//let b = 10; // ✅ allowed
//b = 15; 
//console.log(b);
// let allows reassigning but not redeclaration
     //const c = 5; // ✅ allowed
// c = 10; //  error: Assignment to constant variable.
// const does not allow reassigning or redeclaration


// { 
//     var a =10;
//     console.log(a); //ye block ke bar v use ho sakta hia 
// };

// console.log(a);

// {
//     let b = 20;
//     console.log(b); //ye block ke andar hi use ho sakta hia
// }

// {
//     const c = 30;
//     console.log(c); //ye block ke andar hi use ho sakta hia
// }
//console.log(c); use nahi kar sakte hia 


function createCounter(n) {
  let count = n;

  return function() {
    let result = count;
    count++;   // next ke liye increase
    return result;
  };
}

const counter = createCounter(5);

console.log(counter()); // 5
console.log(counter()); // 6
console.log(counter()); // 7
console.log(counter());