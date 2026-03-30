// function outer(){
//     let userName ="govind";

//     function iner(){
//         let users = "mohit"
//     }
// return iner();
//     iner()
// }

//    a = outer()
// console.log(a);

function myName(){
   let name = "govind";

   function lastname(){
     let lastName = "upadhyay";
     return name + " " + lastName; // ✅ return add kiya
   }

   return lastname(); // call karke value return
}

let hy = myName()
console.log(hy); // govind upadhyay ✅
