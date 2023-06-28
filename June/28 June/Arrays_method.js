// ----------------- map()

// let a=["Apple","Stawberry","Orange","Banana"]

// b=a.map((item)=> {return "banana";} )

// console.log(b);
// console.log(a);

// ----------------- foreach()          doubt

// let a=["Apple","Stawberry","Orange","Banana"]
// // console.log(typeof a);
// b=a.forEach((item)=> {console.log(item)} )
// console.log(typeof b);
// // console.log(a);


// ----------------- findIndex()          

// let a=[1,2,3,"Sachin","Vansh","Bhaumik"]
// let b=a.findIndex((item)=>{
//     return  item == "Sachin"
//     return  item == 2 

// })
// console.log(b);

// ----------------- some()          

// let a=[1,2,3,"Sachin","Vansh","Bhaumik"]
// let b=a.some((item)=>{
//     return  item === "Sachin"
//     return  item !== "achin"
//     return  item == 2 

// })
// console.log(b);

// ----------------- every()          

// let a=[1,2,3,"Sachin","Vansh","Bhaumik"]
// let c=[1,1,1,1,1]
// let b=a.every((item)=>{
//     return  item === "Sachin"     // false
//     return  item !== "achin"  // true
//     return  item == 2        //false
// })  
// let d=c.every((item)=> {return item === 1})
// console.log(d);
// console.log(b);

// ----------------- fill()

// let a = [0, 1, 2, 3, 4, 5, 6, 7]
// b = a.fill(2,1,3)
// console.log(b);

// ----------------- isArray()

// arr = Array.isArray(a)
// arr = Array.isArray(b)
// arr = Array.isArray(c)   // c is not dedined 
// console.log(arr);

// ----------------- flat()

// let a=[0,1,2,3,4,[5,[6,7,[8,[54,[12,[111]]]]]],122]

// let b=a.flat(6)
// let b=a.flat()
// console.log(b);
// console.log(a);

// ----------------- -----------------------




// function isStringContainsNum(a) {
//     if (typeof a == Number) {
//         console.log(true);
//     }
//     else {
//         console.log(false);
//     }
// }

// isStringContainsNum("aswq"); // false
// isStringContainsNum("agfh1"); // true
// isStringContainsNum("ag1sdf"); // true
// isStringContainsNum("111"); // true

// let obj ={
//     0: 1,
//     1: 2,
//     2: 3
// }
// let a=Object.keys[obj]
// console.log(obj);
// console.log(a);



// ----------------- Question 8

// function numOdd(a){
//     for(i=1;i<a;i++){
//         if(i%2!=0){
//             console.log(i);
//         }
//     }
// }
// numOdd(22)


// ----------------- Question 9

// function numEven(a){
//     for(i=1;i<a;i++){
//         if(i%2==0){
//             console.log(i);
//         }
//     }
// }
// numEven(22)

