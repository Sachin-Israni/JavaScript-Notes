// ---------------------------------------------------------------------------- 1
// Write a code that adds new key in each object named 


// const names = [
//     { first_name: "Handnm", last_name: "L demo" },
//     { first_name: "Q Wei", last_name: "Alxezx" },
//     { first_name: "Pqwern", last_name: "Ruse" },
//     { first_name: "Wiruyn", last_name: "Ruby" },
//     { first_name: "Erpso", last_name: "Loal" },
//     { first_name: "Demors", last_name: "Poet" },
//     { first_name: "Aleos", last_name: "Lkeu" },
// ]

// let updatedNames = names.map((val) => {
//     val.full_name = val.first_name + " " + val.last_name
//     return val
// })

// console.log(updatedNames);
// console.log(names);


//---------------------------- func()

// function addFullName(arr) {
//     return arr.map((val) => {
//         val.full_name = val.first_name + " " + val.last_name
//         return val
//     })
// }
// console.log(addFullName(names));



// ---------------------------------------------------------------------------- 2
// Write a code that adds new key in each object named : isMature

// const users = [
//     { first_name: "Handnm", last_name: "L demo", age: 17 },
//     { first_name: "Q Wei", last_name: "Alxezx", age: 30 },
//     { first_name: "Pdeq Twern", last_name: "Ruse", age: 22 },
//     { first_name: "Widfruyn", last_name: "Ruby", age: 11 },
//     { first_name: "Erdfg Pso", last_name: "Loal", age: 34 },
//     { first_name: "Dedfgmors", last_name: "Poet", age: 60 },
//     { first_name: "Ale4tos", last_name: "Lkeu", age: 16 },
// ]

// function isMature(arr) {
//     return arr.map((val, i, arr) => {
//         if (val.age >= 18) {
//             val.isMature = "Yes"
//             return val
//         }
//         else {
//             val.isMature = "No"
//             return val
//         }
//     })
// }

// console.log(isMature(users));

// ---------------------------------------------------------------------------- 4
// => print all items of nested array

// const nestedArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];

// function nesArr(arr) {
//     arr.flat().forEach((val) => {
//         console.log(val);
//     });
// }
// nesArr(nestedArray)


// ---------------------------------------------------------------------------- 5
// => print all items of this object in line
// //Output:
// Vishal Kukreja
// 32
// 123 Mumbai fashion St
// Midtown
// MH
// reading
// drawing
// gardening


// const nestedObject = {
//     name: "Vishal Kukreja",
//     age: 32,
//     address: {
//         street: "123 Mumbai fashion St",
//         city: "Midtown",
//         state: { as: "MH" },
//     },
//     hobbies: ["reading", "drawing", "gardening"],
// };

// let a = Object.values(nestedObject)
// let b = a.forEach(ele => {
// if (typeof ele == 'object') {
//     let b = Object.values(ele)
// function objectFind(ele) {
// if (typeof ele == 'object') {
//     let b = Object.values(ele)
//     let c = b.forEach(val => val == 'object' ? objectFind(val) : console.log(val))
// return c
// }
// return ele;
// }
// else {
//     console.log(ele);
// }
// })

// objectFind(a)

// ---------------------------------------------------------------------------- 6

// Write a program to check if an array contains any number (strictly) or not.

// function checkNumber(arr) {
//     return arr.some(ele => {
//         if (typeof ele === 'number') {
//             return true
//         }
//         else {
//             return false
//         }
//     });
// }

// console.log(checkNumber([1,2,3]))      // => true
// console.log(checkNumber(["1", "a", "h"]))      // => false
// console.log(checkNumber(["a", 3, "gh"]))      // => true
// console.log(checkNumber(["a", "3df", "gh"]))      // => false


// ---------------------------------------------------------------------------- 7
// 	=> convert all number to string in given array

// const numbers = [1, 2, 3, 4];
// let num = numbers.map(String)
// let num = numbers.map(val => val = String(val))
// console.log(num);


// ---------------------------------------------------------------------------- 8

// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map((num, index, array) => {
//   array.push(num * 2);
//   return num * 2;
// });
// console.log(numbers, doubled);


// ---------------------------------------------------------------------------- 9
// Array - https://codebeautify.org/jsonviewer/y23d22c85



const donuts = [
    {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "ppu": 0.55,
        "batters":
        {
            "batter":
                [
                    { "id": "1001", "type": "Regular" },
                    { "id": "1002", "type": "Chocolate" },
                    { "id": "1003", "type": "Blueberry" },
                    { "id": "1004", "type": "Devil's Food" }
                ]
            },
        "topping":
        [
            { "id": "5001", "type": "None" },
            { "id": "5002", "type": "Glazed" },
            { "id": "5005", "type": "Sugar" },
            { "id": "5007", "type": "Powdered Sugar" },
            { "id": "5006", "type": "Chocolate with Sprinkles" },
            { "id": "5003", "type": "Chocolate" },
            { "id": "5004", "type": "Maple" }
        ]
    },
    {
        "id": "0002",
        "type": "donut2",
        "name": "Raised",
        "ppu": 0.55,
        "batters":
        {
            "batter":
                [
                    { "id": "1001", "type": "Regular" }
                ]
        },
        "topping":
        [
                { "id": "5001", "type": "None" },
                { "id": "5002", "type": "Glazed" },
                { "id": "5005", "type": "Sugar" },
                { "id": "5003", "type": "Chocolate" },
                { "id": "5004", "type": "Maple" }
            ]
    },
    {
        "id": "0003",
        "type": "donut3",
        "name": "Old Fashioned",
        "ppu": 0.55,
        "batters":
        {
            "batter":
            [
                { "id": "1001", "type": "Regular" },
                    { "id": "1002", "type": "Chocolate" }
                ]
            },
            "topping":
            [
                { "id": "5001", "type": "None" },
                { "id": "5002", "type": "Glazed" },
                { "id": "5003", "type": "Chocolate" },
                { "id": "5004", "type": "Maple" }
            ]
    },
    {
        "id": "0004",
        "type": "donut1",
        "name": "Old Fashioned",
        "ppu": 0.55,
        "batters":
        {
            "batter":
                [
                    { "id": "1001", "type": "Regular" }
                ]
        },
        "topping":
            [
                { "id": "5001", "type": "None" },
                { "id": "5002", "type": "Glazed" },
                { "id": "5003", "type": "" },
                { "id": "5004", "type": "Maple" }
            ]
    }
]
    
    

//--------------------------------------------------------------- => filter donuts based on which have topping  Chocolate


// let findChoco=donuts.filter((val,i)=>{
// return val.topping.filter((val)=>val.type==="Chocolate").length 

// })
// let findChoco=donuts.filter((val,i)=>val.topping.findIndex((val)=>val.type==="Chocolate")!==-1)
// let findChoco=donuts.filter((val,i)=>val.topping.find((val)=>val.type==="Chocolate"))
// console.log(findChoco);



//---------------------------------------------------------------- => filter donuts based which have batter type is regular and topping have Chocolate





//---------------------------------------------------------------- => filter donuts based on which have topping chocolate and Sugar
//---------------------------------------------------------------- => filter donuts based on ppu > 0.5
//---------------------------------------------------------------- => bring all batters for all donuts in single array
//---------------------------------------------------------------- => filter donuts based on which have 2 and more than 2 batter in it
    
    

// Get name initials
// input = "George Raymond Richard Martin"; Output: “GRRM”
// input = “george raymond Richard Martin”; Output: “ GRRM”

// Get output like example
// input = "Every developer likes to mix kubernetes and javascript";
// output = "E3y d7r l3s to mix k8s and j8t"

// const products = [
    //   { name: "Product 1", price: 20, category: "Electronics" },
    //   { name: "Product 2", price: 30, category: "Clothes" },
    //   { name: "Product 3", price: 40, category: "Electronics" },
    //   { name: "Product 4", price: 50, category: "Clothes" },
    //   { name: "Product 5", price: 60, category: "Clothes" },
    //   { name: "Product 6", price: 70, category: "Electronics" },
    //   { name: "Product 7", price: 80, category: "Clothes" },
    //   { name: "Product 8", price: 90, category: "Electronics" },
    // ];
// Note: 2 questions
// Que1 => output:
// 	{
//    Clothes: 4,
//    Electronics: 4
// 	}
// Que 2 => count the total average of each category price.






// const employees = [
//   { name: "John", salary: 50000, department: "IT" },
//   { name: "Jane", salary: 60000, department: "HR" },
//   { name: "Bob", salary: 55000, department: "IT" },
//   { name: "Sophie", salary: 75000, department: "HR" },
//   { name: "Mike", salary: 65000, department: "IT" },
//   { name: "Emily", salary: 80000, department: "HR" },
//   { name: "David", salary: 70000, department: "IT" },
// ];

// Que1: => count the average salary of each department
// Que 2: =>  output: {
// 			IT: [50000,55000,65000,70000],
// 			HR: [60000,75000, 80000]
//          }

// Make a function that returns the grouped data based on first letter of the string.
// For Example: [“Jeel” , “Prakhar” , “Bhakti”, “Vansh”, “Meghna”, “Bhaumik”, “Pujan”, “Rudra”, “Sachin” , “Dhruval”]
// Output: {
// 		J: [“Jeel”],
// 		P: [“Pakhar”, “Pujan”],
// 		B: [“Bhakti”, “Bhaumik”],
// 		…….. And so on
// 	    }

//  Make flat function manually (with depth and without depth)

//  Make filter function manually
//  Make map function manually

//  const input= [
//   { name: "John", salary: 50000, department: "IT" },
//   { name: "Jane", salary: 60000, department: "HR" },
//   { name: "Bob", salary: 55000, department: "IT" },
//   { name: "Sophie", salary: 75000, department: "HR" },
//   { name: "Mike", salary: 65000, department: "IT" },
//   { name: "Emily", salary: 80000, department: "HR" },
//   { name: "David", salary: 70000, department: "IT" },
// ];
// => make this data groupBy with first letter of the name (same as Que: 14)
// 	Output::
// {
// 	J: [{ name: "John", salary: 50000, department: "IT" },  { name: "Jane", salary: 60000, department: "HR" },],
// ….. and so on….
// 	}
// => make this data groupBy with department name
// 	Output: {
// 			“IT”: [.....items of array which are from IT department],
// 			“HR”: [.....items of array which are from HR department],
// 		  }

//  What is the output of the following code?
// 	let arr1 = [{a: 34}, {a: 45}, {a:12}, {a:5}, {a:78}];
// 	let arr2 = arr1.map(item => item);
// 	arr2[2].b = 45;
// console.log(arr1);  // =>
// 	console.log(arr2);  // =>

// What is the output of the following code?
// let arr1 = [{a: 34}, {a: 45}, {a:12}, {a:5}, {a:78}];
// 	let arr2 = arr1.map(item => item.a * 2);
// console.log(arr1);  // =>
// 	console.log(arr2);  // =>

// What is the output of the following code?
// let arr = [1,2,3,4,5];
// let arr2 = arr.reduce((a, c) => a + c).map(item => item);
// console.log(arr2); // =>

// What is the output of the following code?
// const example = ({ a, b, c }) => {
// console.log(a, b, c);
// };
// example(0, 1, 2);

//  Find the Sum of Squares
// let arr = [1,2,3,4,5] => ans : 55

// const students = [
//   { name: 'Alice', age: 20, grade: 'A' },
//   { name: 'Bob', age: 18, grade: 'B' },
//   { name: 'Charlie', age: 19, grade: 'A' },
//   { name: 'David', age: 20, grade: 'C' },
// ];
// 	=> sort by age
// 	=> sort by grade
// 	=> sort by name
// 	=> average of ages
// 	=> sum of ages
// const nestedArray = [[1, 2], [3, 4], [5, 6]];
// => flat this array using reduce (NOTE: array will be only depth 1)

// Create an array of squares of even numbers from a given array.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Filter out duplicate values from an array.
// const numbers = [1, 2, 2, 3, 4, 4, 5];

// Find the first string that contains the letter 'a' in an array.
// const words = ['apple', 'banana', 'orange'];

// Find the index of the first odd number in an array.
// const numbers = [2, 4, 6, 8, 9, 10];

//  Write a function that returns the factorial of given number

// Find the index of the first person whose name starts with 'A' and age is less than 20.
// const people = [
//   { name: 'Alice', age: 18 },
//   { name: 'Bob', age: 20 },
//   { name: 'Charlie', age: 19 },
//   { name: 'David', age: 21 }
// ];



//  make a function that takes two parameter (arrayOfArray, array) and returns boolean based on following example:

// fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [1, 2]) => true
// fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [2, 1]) => true
// fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [22, 15]) => false
// fun_name([[1, 2], [34, 67], [67, 77], [22, 90, 15], [88, 90]], [22, 15, 90]) => true

//   make a function that takes two parameter (arrayOfArray, array) and returns boolean based on following example:

// fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [1, 2]) => true
// fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [2, 1]) => false
// fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [22, 15]) => false
// fun_name([[1, 2], [34, 67], [67, 77], [22, 90, 15], [88, 90]], [22, 15, 90]) => false

// Write a JavaScript program to compute the union of two arrays.
// Sample Data :
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// Output: [1, 2, 3, 10, 100]

// Write a JavaScript function to find the difference between two arrays.
// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// Output: ["3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// Output: ["6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// Output: ["3", "10", "100"]

// Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.
// (FOR NOW CONSIDER THERE ARE ONLY ONE PAIR WHICH IS POSSIBLE SOLUTION)
// Input: numbers= [10,20,10,40,50,60,70], target=50
// Output: [10, 40] || [40,10]

// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

// Write a function that returns the result like examples
// num_string_range('a', "z", 2) => ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
// num_string_range("Z", "A", 2) => ["Z", "X", "V", "T", "R", "P", "N", "L", "J", "H", "F", "D", "B"]
// num_string_range(0, -5, 1) => [0, -1, -2, -3, -4, -5]
// num_string_range(0, 25, 5) => [0, 5, 10, 15, 20, 25]
// num_string_range(20, 5, 5) => [20, 15, 10, 5]

// Write a JavaScript function to remove a specific element from an array.
// Test data :
// remove_array_element([2, 5, 9, 6], 5); => [2, 9, 6]

// Write a JavaScript function to find an array containing a specific element.
// Test data : (ONLY FOR STRING AND NUMBER)
// arr = [2, 5, 9, 6];
// contains(arr, 5); => True
// contains(arr, 10); => False

//  Write a JavaScript program to count the number of arrays inside a given array.
// Test Data :
// ([2,8,[6],3,3,5,3,4,[5,4]]) -> 2
// ([2,8,[6,3,3],[4],5,[3,4,[5,4]]]) -> 3

//  Write a JavaScript program to find the maximum length of arrays inside a given array.
// Test Data :
// [2,8,[6],3,3,5,3,4,[5,4]] -> 2
// [2,8,[6,3,3],[4],5,[3,4,[5,4]]] -> 3
// [2,8,[6,3,3],[4],5,[3,4,[5,4]], [23,56]] -> 4
// [1,5,2,6,4,23,89] -> 0

//  Write a JavaScript program to check if an array is a factor chain or not.
//  A factor chain is an array in which the previous element is a factor of the next    consecutive element. The following is a factor chain:
//  [2, 4, 8, 16, 32]
// // 2 is a factor of 4  // 4 is a factor of 8  // 8 is a factor of 16  // 16 is a factor of 32
// Test Data :
// ([2, 4, 8, 16, 32]) -> true          ([2, 4, 16, 32, 68]) -> false
// ([2, 4, 16, 32, 64]) -> true











// -------------------------------------- 43


// Write a JavaScript program to find the maximum length of arrays inside a given array.
// Test Data:



// [2, 8, [6], 3, 3, 5, 3, 4, [5, 4]]               //  -> 2
// [2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]]              //   -> 3
// [2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]], [23, 56]]              //   -> 4
// [1, 5, 2, 6, 4, 23, 89]              //   -> 0


// -------------------------------------- 43

// Write a JavaScript program to check if an array is a factor chain or not.
// A factor chain is an array in which the previous element is a factor of the next consecutive element. The following is a factor chain:
// [2, 4, 8, 16, 32]
// 2 is a factor of 4  // 4 is a factor of 8  // 8 is a factor of 16  // 16 is a factor of 32
// Test Data :

// function factChain(arr) {
//     arr = arr.reduce((p, c) => p == c / p, 1)
//     return arr
// }


// console.log(factChain([2, 4, 8, 16, 32])) //  -> true
// console.log(factChain([2, 4, 16, 32, 68])) //  -> false
// console.log(factChain([2, 4, 16, 32, 64])) //  -> true




















