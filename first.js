// let a = 4;
// let b = 9;
//    athemetic operter 



// console.log("a + b = ", a + b  );
// console.log("a - b =" , a - b );
// console.log (" a * b = " , a * b );
// console.log (" a / b = ", a/b );
// console.log(" a % b ", a % b );
// console.log(" a ** b ", a ** b);



//                icrement opereter



// console.log(" a ++  = ", a ++ );
// console.log(" a -- = " , a --);


//     assigment opereter 


// a **= 4;  a = 5 ; a -+ = 2; a /= 3;

//    console.log("a = ", a );
  


//   **       comparison opreter 


// let a = 4;
// let b = 4;


// console.log("4== 4", a == b);
//  console.log(" 4 == 4 " , a == b);
//  console.log(" 3 >= 6", a>=b );




//        logical operators 

//       let a = 12 ; 
//        let b = 23;

//        let cond1 = a > b;
//        let cond2 = a == 16 ;
//        console.log("cond1 && cond2", cond1 && cond2);




//            conditional statements 

//         let age = 16;

//        if ( age >= 18 )
//         {
//           console.log("you do voting");
//        }
//        if ( age <18 )
//         {
//         console.log(" you can no vot");
//        }





//              if statment 




//       let a = 33;


//      let b = 77;



//         if ( a < b )

//          {

//              console.log("give a vote ");

//         } 


//         if( a > b)


//         {


//          console.log("given not vote ");



//         }






//                    ***** if else
                   
                   
//                    let a = 166;

//                let b = 77;


//          if ( a < b )


//             {
//                console.log("govind is good");

//             }


//             else ( a > b)


//             {


//                console.log("akhil is good ");



//             }


//          let num = 10;

//          if ( num % 2 === 0 )*
 
//             {
               
//                console.log(num, " is even ");

//          }

//          // else( num % 2 === 0);
//          else 

//           {

//              console.log( num , "is odd");

//           }



//             else if
        
        


//         let age = 33;


//          let result = age >= 18 ? "adult" : "not adult";



//          console.log(result);

// alert("welcome");

//                          prompt(" welcome my website");                                              //  alert and prompt


// let n = prompt("welcome");{ 


// console.log(n);


// }


// let a = prompt("enter a number");

// if (a % 5 === 0)
// {
//    console.log( a , " is a multiple of 5");

// }

// else{
//    console.log(a," is not a mutiple of 5");
// }


//                                    //lecure no 3

//                         for loop

// for ( let i = 1; i<=23; i++)
// {
//    console.log(" govind kumar");
// }


// // 

//  for (let i= 0 ; i<=100; i++){ 

//    if ( i % 2 === 0 )

//  console.log("i = ",i);
// } 




// for ( i % 2; i === 0 ; i++ ){
//    console.log("i",i);
// }





//                 string in js 



//         let str = "govind kumar";

//          console.log(str[3]);





//          ******************* Array ****************//



//          let student = [ "govind","rahul","mohan"];
//            console.log(student);


//                                             ****aaray  method             //
       
       
//        let student  = ["govind", "akhil" ,"mukesh", "manish"];

//     Pop() method (); 

//               push method ();

//     let boy = ["govind","akhil","mohit","mukesh,","rakesh"];




// let girl =["salu","saloni","arshu","kajal","manisha"];

//  let human =boy.concat( girl);
// console.log(human);

// let companies = ["bloomberg", " microsoft","uber","google","iBM","netflix"];






// /  ---------------------function in js ------------




//     function uggovind( hello , n) //-------- parameter  in js  function defintion  



//     {


//         console.log(hello);


    

//     }


//        uggovind("  i love js program" , 100);   //------------ argument in js  function call 



//     function sum( a ,b) 
    
//     {
//        s = a + b;
//        return s ;

//     }


//  let  val = sum(  5 , 7);


//  console.log(val);

// console.log("hello govind");


// synchronous   

// console.log("one");
// console.log("two");


// setTimeout(() => {
//     console.log("hello");
// },40000);

// //console.log("three");
// console.log("four");

//   callback 
// function sum (a , b ){
//     console.log(a +  b);
// }
// function calculator ( a , b ,sumCallback){
//     sumCallback(a , b);
// }

// calculator(7879798 , 3999 ,sum);


//  callback hell


//   / promiss in js 

// let promise = new Promise((resolve , reject) => {
//     console.log("hello i am promise");
//     resolve("success");
// } );



// function getdata(dataid, getNextData) {
//     return new Promise((resolve, reject) => {
//         //console.log("data", dataid);
//         //resolve("success");
//         reject("error");
//         if (getNextData) {
//             getNextData();
//         }
//     }, 7000);




//  function add( a,b)
//  {
//     console.log( "a +b  = ",a +b );

//  }
//   add(3,6);

// console.log(a)
// var a=5;
// console.log(a)

// g()
// function g(){
//     console.log("hello")
// }
// g()


/// without argument and no return types
// function typeOne(){
//     console.log("heyy")
// }
// typeOne()
// // without argument with return type
// function typeTwo(){
//     var a = 2;
//     return a
// }
// let b=typeTwo()
// console.log(b)
// //with argument no return type 

// function typeThree(a){
//     console.log(a)
// }
//     typeThree(4)
    
//with argument and with return

// function typeFour(a){
//     return a
// }
// let d =typeFour(3)
// console.log(d);

a = 10;
b = 19;
console.log(a-b);
