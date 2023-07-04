// const names = [
//     {
//         name: "Sachin",
//         age: 20,
//         department: "Jr. IT intern"
//     },
//     {
//         name: "Nexan",
//         age: 35,
//         department: "IT"
//     },
//     {
//         name: "Xona",
//         age: 26,
//         department: "IT"
//     },
//     {
//         name: "Ronit",
//         age: 25,
//         department: "IT"
//     }
// ]

// // const ageWiseOut = names.map((arr) => {
// //     if (arr.age >= 25){
// //         return arr.name;
// //     }
// //     else{
// //         return arr.department
// //     }
// // })
// const ageWiseOut = names.filter(value => value.age >= 25).map(value => value.name).find((value => value==='Nexan'))

// console.log(ageWiseOut);

//----------------------------------


// let a = [{ a: 10, b: 20 }, { a: 20, b: 23 }, { a: 23, b: 3 }]
// let a = [[10, 12], [10, 23], [23, 13]]

// let b = a.map((val => val.a)).reduce((p, c) => {return p-c })
// let b = a.map(((val, i, arr) => { return arr[i][0] + arr[i][1] })).reduce((p, c) => { return p + c })
// let b = a.map((value => value.reduce((p, c) => p + c))).reduce((p, c) => p + c)
// console.log(a);
// console.log(b);


//----------------------------------


// let a = [{ a: 10, b: 2 }, [7, 3], { a: 10, b: 2 }, [7, 3], { a: 23, b: 2 }, [7, 3]]
// let b = a.map((arr) => {
//     if (Array.isArray(arr)) {
//         let red = arr.reduce((p, c) => p + c)
//         return red;
//     }
//     else if (typeof arr === 'object') {
//         return arr.b;
//     }
// }).reduce((p,c)=>p*c)
// console.log(b);


//----------------------------------


// let a = [{ a: 10, b: 12, c: 23 }, { a: 11, b: 12, c: 23 }, { a: 12, b: 12, c: 23 }, { a: 13, b: 12, c: 21 , d:24}]

//----------------------------------

// let b = a.map((value) => {
//     if (typeof value === 'object') {
//         let a = 0;
//         for (const key in value) {
//             // console.log(value[key])      // print all values in numbers
//             a = value[key]          // last value access
//             // return value[key]          // first value access
//             // a+= value[key]       // plus all the values
//         }
//         return a;
//     }
// })

//----------------------------------

// let b=a.map((value)=>{

// })
// console.log(b);
// console.log(a);




// let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];
// let uniqueAgeGroup = ageGroup.reduce(function (p, c) {
//   if (p.indexOf(c) === -1) {
//     p.push(c);
//   }
//   return p;
// }, []);
// console.log(uniqueAgeGroup); // [ 18, 21, 1, 51, 5, 7, 10 ]


// let a=[10,23,24,23]
// let b=a.lastIndexOf(23)
// console.log(b);
// console.log(a);