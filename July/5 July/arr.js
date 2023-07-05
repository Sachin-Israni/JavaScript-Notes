// let a = [1, 2, 3, 4, 5]
// let b = a.reduce((p, c, i, arr) => {
//     let ac = p + c
//     return ac;
// })

// console.log(b);

// -------------------------------------------

// let a = [{ a: 10 , d:23 }, { b: 10 }, { c: 10 }]

// let b = a.sort((p, c) => {
//     return Object.values(p).length - Object.values(c).length
// })

// console.log(b);

// -------------------------------------------

// let a = [21, 12, 30, 234, 135]
// let b = a.sort()
// let c = b.reduce((p, c) => ([p + c])).map(i => i)
// console.log(b, c);

// -------------------------------------------

// let a = [{ a: 12 }, { b: 13 }, { c: 14 }]
// let b = a.reduce((p, c) => {
//     return Object.assign(p,c)
// // }, [])
// })

// console.log(a, b);

// -------------------------------------------


// function abc({a=234,b=23,c=2}) {
//     console.log(a,b,c);
// }

// abc({a:0,c:1})

// -------------------------------------------

// let a =[23,12,43,32,123]

// a.sort((a,b)=>a-b)

// console.log(a);

// -------------------------------------------

// let a=[NaN,true,false,null,undefined,'Mchin','Sac','sachin',1,2,'32',{a:11},{},[],[1]]
// a.sort()
// console.log(a);

// -------------------------------------------

// function abc() {

// }
// let a =['Sachin','sachin','A','a',102,2,23,12,{},{a:10},['sachin'],abc()]
// a.sort()
// console.log(a);

// ------------------------------------------- Question 23

// Find the Sum of Squares 
// let arr = [1,2,3,4,5] => ans : 55


// let arr = [1, 2, 3, 4, 5]

// let sumOfSquares = arr.map(val => val * val).reduce((p, c) => p + c)
// let sumOfSquares = arr.reduce((p, c) => p + c * c)
// console.log(sumOfSquares);


// ------------------------------------------- Question 24

// const students = [
//     { name: 'Alice', age: 20, grade: 'A' },
//     { name: 'Bob', age: 18, grade: 'B' },
//     { name: 'Charlie', age: 19, grade: 'A' },
//     { name: 'David', age: 20, grade: 'C' },
// ];
// => sort by age

// let sortByAge = students.sort((a, b) => a.age - b.age)
// console.log(sortByAge);

// => sort by grade

// let sortByGrade = students.sort((a, b) => {
//     const gradeA = a.grade.toUpperCase()
//     const gradeB = b.grade.toUpperCase()
//     if (gradeA < gradeB) {
//         return -1
//     }
//     else if (gradeA > gradeB) {
//         return 1
//     }
//     return 0
// })
// console.log(sortByGrade);

// => sort by name

// let sortByName = students.sort((a, b) => {
//     const nameA = a.name.toUpperCase()
//     const nameB = b.name.toUpperCase()
//     if (nameA < nameB) {
//         return -1
//     }
//     else if (nameA > nameB) {
//         return 1
//     }
//     return 0
// })


// console.log(sortByName);

// => average of ages

// let ages = students.map((val) => {
//     return val.age
// }).reduce((p, c) => {
//     let avg = p + c
//     return avg
// })

// let averageOfAges = ages/2

// console.log(averageOfAges);

// => sum of ages

// let sumOfAges = students.map((val) => {
//     return val.age
// }).reduce((p, c) => {
//     let avg = p + c
//     return avg
// })

// console.log(sumOfAges);

// ------------------------------------------- Question 25

// => flat this array using reduce (NOTE: array will be only depth 1)

// const nestedArray = [[1, 2], [3, 4], [5, 6]];


// let flatArr = nestedArray.reduce((p, c) => p.concat(c))
// console.log(flatArr);

// ------------------------------------------- Question 26

// Create an array of squares of even numbers from a given array.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let evenNumbers = numbers.filter((val) => val % 2 == 0).map((val) => val ** 2)
// console.log(evenNumbers);

// let arr = []
// let evenNumbers = numbers.map((val) => {
//     if (val % 2 == 0) {
//         // arr.push(val)
//         return val
//     }
// })

// ------------------------------------------- Question 27

// Filter out duplicate values from an array.
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// let outDuplicateValues = numbers.reduce(function (p, c) {
//     if (p.indexOf(c) === -1) {
//         p.push(c);
//     }
//     return p;
// }, []);
// console.log(outDuplicateValues);

// ------------------------------------------- Question 28

// Find the first string that contains the letter 'a' in an array.
// const words = ['apple', 'banana', 'orange'];
// let findA = words
// .find(ele => ele = 'a')
// .filter((ele) => ele='a')
// console.log(findA);

// ------------------------------------------- Question 29

// Find the index of the first odd number in an array.
// const numbers = [2, 4, 6, 8, 9, 10];

// let firstOddIndex = numbers.findIndex((val) => val % 2 != 0)  // 4
// let firstOddIndex = numbers.filter((val) => val % 2 != 0)    // [9]
// let firstOddIndex = numbers.some((val) => val % 2 != 0)  // true
// console.log(firstOddIndex);


// ------------------------------------------- Question 30

// Write a function that returns the factorial of given number

// function factFun(num) {
//     let result = 1;
//     for (let i = 2; i <= num; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log(factFun(5));


// ------------------------------------------- Question 31

// Find the index of the first person whose name starts with 'A' and age is less than 20.
// const people = [
//     { name: 'Bob', age: 20 },
//     { name: 'Charlie', age: 19 },
//     { name: 'Alice', age: 18 },
//     { name: 'David', age: 21 }
// ];

// let findA = people.findIndex((val) => val.name.at(0) == 'A' && val.age < 20)
// let findA = people.findIndex((val) => val.name.charAt(0) == 'A' && val.age < 20)
// let findA = people.findIndex((val) => val.name[0] == 'A' && val.age < 20)
// console.log(findA);

let a=[1,2,3,4,5]
let b=a.push(1,2,3,4)
// let b=a.pop()
console.log(a);
console.log(b);