// ------------------------------ reduce()

// const nums = [1, 2, 3, 4, 5,{b:10}]
// const sun = nums.reduce((total, sum) => total + sum);

// console.log(sun);


// const x= nums?.b.map((value)=> value*2)
// console.log(x);


// function flatten(arr) {
//     let flattened = [];

//     arr.forEach((item,i,arr) => {
//       if (Array.isArray(item)) {
//         flattened = flattened.concat(flatten(item));
//       } else {
//         flattened.push(item);
//       }
//     });

//     return flattened;
// }

//   let a = [1, 2, 3, [4, [5, 6]]]
//   let b=flatten(a)
//   console.log(b);



// function flat(arr) {
//     for (let i = 0; i < arr.length; i++){
//         if(arr[i]==Array){
//             console.log(arr[i]);
//         }
//     }
// }
// let b=flat(a)
// console.log(b);
// a.forEach((value) => {
//     for (i = 0; i < a.length; i++){
//         if(typeof a[i] === 'object'){
//             let b=a.push(value)
//             return b
//         }
//         else if(typeof a[i]=='Array'){
//             console.log("Sachin");
//         }
//     }
// })
// console.log(a);

// let a = [1, 2, 3, 4, 5, 6]

// a.forEach((value) => {

//     console.log(a.push(value * value))

// })
// console.log(a);



// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = [];
// const oddNumbers = [];

// numbers.forEach(function (number) {
//     if (number % 2 === 0) {
//         evenNumbers.push(number);
//     }
//     else {
//         oddNumbers.push(number)
//     }
// });

// console.log(evenNumbers); // Output: [2, 4]
// console.log(oddNumbers); // Output: [1, 3, 5]

// const rawData = [
//     { id: 1, category: 'A', value: 10 },
//     { id: 2, category: 'B', value: 20 },
//     { id: 3, category: 'A', value: 30 },
//     { id: 4, category: 'C', value: 40 },
//     { id: 5, category: 'B', value: 50 },
// ];

// const categorizedData = {};

// rawData.forEach(function (arr) {
//     if (!categorizedData[arr.category]) {
//         categorizedData[arr.category] = [];
//     }
//     categorizedData[arr.category].push({ id: arr.id, value: arr.value });
// });

// console.log(categorizedData);
// console.log(rawData);

// ------------------------- find()

// let a = ["Sachin", "Vansh", "Bhaumik", "Pujan"]
// let b = a.find((item) => item == "Sachin")
// console.log(a);
// console.log(b);

// let a = [
//     {
//         name: "Sachin",
//         age: 20
//     },
//     {
//         name: "Vansh",
//         age: 100
//     },
//     {
//         name: "Bhaumik",
//         age: 50
//     },
//     {
//         name: "Pujan",
//         age: 120
//     }
// ]

// let b = a.find((arr) => arr.name == "Vansh")

// console.log(a);
// console.log(b);
// console.log(b.name);
// console.log(b.age);


// ----------------- findIndex And findLastIndex

// let a = [1, 2, 3, 45, 56]
// let b = a.findIndex((value) => value < 2)
// let c = a.findLastIndex((value) => value < 2)
// let b = a.findIndex((value) => value > 2)
// let c = a.findLastIndex((value) => value > 2)
// let b = a.findIndex((value) => value == 2)
// let c = a.findLastIndex((value) => value == 2)
// console.log(b);
// console.log(c);


//------------------------------- splice 

// let a=[1,2,3,4,[5,5,6,7]]
// let b=a.splice(2,1,11,12,13,14,15,16,17)
// let c=a.splice(-5,3,1234)
// let c=a.splice(-5,3,1234)
// console.log(c);
// console.log(a);
// console.log(b);

// let b=a.slice(1,-2)
// console.log(a);
// console.log(b);

//------------------------------------------------

// Note: 2 questions
// Que1 => output:
// {
//      Clothes: 4,
//      Electronics: 4
// }
//   Que 2 => count the total average of each category price.

// const products = [
//     { name: "Product 1", price: 20, category: "Electronics" },
//     { name: "Product 2", price: 30, category: "Clothes" },
//     { name: "Product 3", price: 40, category: "Electronics" },
//     { name: "Product 4", price: 50, category: "Clothes" },
//     { name: "Product 5", price: 60, category: "Clothes" },
//     { name: "Product 6", price: 70, category: "Electronics" },
//     { name: "Product 7", price: 80, category: "Clothes" },
//     { name: "Product 8", price: 90, category: "Electronics" },
// ];

// let b=products.map((val,i,arr)=>{
//     if(arr[i].category=val){

//     }
// })
// for(let key of products){
//     let a=key.category
//     let b=a.category
//     console.log(a);
//     console.log(b);
// }
// console.log(b);



//------------------------------------------------

// let categorys = products.reduce(function(val, i)  {
//     if (val[i.category]) {
//         val[i.category]++;
//     }
//     else {
//         val[i.category] = 1
//     }
//     return val;
// }, {});
// console.log(categorys);

//------------------------------------------------

// function mainArray(arrName) {
//     let emptyObj = {};
//     let clothes = arrName.filter((value) => value.category == "Clothes");
//     let electronics = arrName.filter((value) => value.category == "Electronics");
//     let a = clothes.length;
//     let b = electronics.length;
//     emptyObj.clothes = a;
//     emptyObj.electronics = b;
//     return emptyObj;
// }
// let secObj = mainArray(products);
// console.log(secObj);

//------------------------------------------------
