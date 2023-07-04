// Write a code that adds new key in each object named           // Question 1
// full_name: first_name + last_name

// const names = [
//     { first_name: "Handnm", last_name: "L demo" },
//     { first_name: "Q Wei", last_name: "Alxezx" },
//     { first_name: "Pqwern", last_name: "Ruse" },
//     { first_name: "Wiruyn", last_name: "Ruby" },
//     { first_name: "Erpso", last_name: "Loal" },
//     { first_name: "Demors", last_name: "Poet" },
//     { first_name: "Aleos", last_name: "Lkeu" },
// ]

// for (let values in names){
//     names[values].full_name = names[values].first_name +"" + names[values].last_name
// }
// console.log(names);

// let arr = names.filter(x => x.fullname = x.first_name + x.last_name);
// console.log(arr);
// console.log(names);

//    Write a code that adds new key in each object named: isMature     // Question 2


// const users = [
//     { first_name: "Handnm", last_name: "L demo", age: 17 },
//     { first_name: "Q Wei", last_name: "Alxezx", age: 30 },
//     { first_name: "Pdeq Twern", last_name: "Ruse", age: 22 },
//     { first_name: "Widfruyn", last_name: "Ruby", age: 11 },
//     { first_name: "Erdfg Pso", last_name: "Loal", age: 34 },
//     { first_name: "Dedfgmors", last_name: "Poet", age: 60 },
//     { first_name: "Ale4tos", last_name: "Lkeu", age: 16 },
// ]

// numusers = users.map((val, i, arr) => {
//     if (arr[i].age >= 18) {
//         arr[i].isMature = 'Yes'
//     }
//     else {
//         arr[i].isMature = 'No'
//     }
// })

// console.log(users);

// for (let key in users) {
//     if (users[key].age >= 18) {
//         users[key].isMature = "Yes"
//     }
//     else {
//         users[key].isMature = "no"
//     }

// }

// console.log(users);



// let arr = [1,2,3,5]                              // Question 3
// console.log(arr[-1]); //?


//   => print all items of nested array             // Question 4

// const nestedArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];

// a = nestedArray.flat();
// for (let key in nestedArray.flat()) {
//     console.log(nestedArray.flat()[key]);
// }
// for (let value of nestedArray.flat()) {
//     console.log(value);
// }
// console.log(a);


//  => print all items of this object in line                   // Question 5
//  //Output:
//  Vishal Kukreja
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
//         state: "MH",
//     },
//     hobbies: ["reading", "drawing", "gardening"],
// };

// for (let value in nestedObject) {
//     if (Array.isArray(nestedObject[value])) {
//         for (let i = 0; i < nestedObject[value].length; i++) {
//             console.log(nestedObject[value][i]);
//         }
//     }
//     else if (typeof nestedObject[value] === 'object') {
//         for (let second in nestedObject[value]) {
//             console.log(nestedObject[value][second]);
//         }
//     }
//     else {
//         console.log(nestedObject[value]);
//     }
// }



// for(let keys in nestedObject){
//     console.log(nestedObject.values);
// }

// -------------------- Question 6

// Write a program to check if an array contains any number (strictly) or not.
// Input:  [1,2,3] => true
// [“1”, “a”, “h”] => false
// [“a”, 3, “gh”] => true
// [“a”, ‘3df’, “gh”] => false

// let arr1 = [1, 2, 3];
// let arr2 = ["1", "a", "h"];
// let arr3 = ["a", 3, "gh"];
// let arr4 = ["a", "3df", "gh"];
// checkNum(arr1);
// checkNum(arr2);
// function checkNum(value) {
//     if (value === Number(value)) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(arr1.map(checkNum).some(value => value === true));
// console.log(arr2.map(checkNum).some(value => value === true));
// console.log(arr3.map(checkNum).some(value => value === true));
// console.log(arr4.map(checkNum).some(value => value === true));


// -------------------- Question 7
// => convert all number to string in given array


// const numbers = [1, 2, 3, 4];
// let a=numbers.map(String)
// console.log(a);


// -------------------- Question 8

// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map((num, index, array) => {
//   array.push(num * 2);
//   return num * 2;
// });
// console.log(numbers, doubled);

// -------------------------------------------- Question 10

// Get name initials
// input = "George Raymond Richard Martin"; Output: “GRRM”
// input = “george raymond Richard Martin”; Output: “ GRRM”


// function getNameFirst(name) {
//     const names = name.split(' ');
//     const first = names.map(name => name.charAt(0).toUpperCase());
//     return first.join('');
// }

// let a="George Raymond Richard Martin";
// let b="george raymond Richard Martin"
// console.log(getNameFirst(a));
// console.log(getNameFirst(b));



// -------------------- Question 14

// Make a function that returns the grouped data based on first letter of the string.
// For Example: [“Jeel”, “Prakhar”, “Bhakti”, “Vansh”, “Meghna”, “Bhaumik”, “Pujan”, “Rudra”, “Sachin”, “Dhruval”]
// Output: {
//     J: [“Jeel”],
//         P: [“Pakhar”, “Pujan”],
//             B: [“Bhakti”, “Bhaumik”],
// 		…….. And so on
// }

// let names = ['Sachin', 'Bhaumik', 'Vansh', 'Pujan', 'Rudra', 'Meghana', 'Bhakti', 'Prakhar', 'Jeel', 'Dhruval']

// let a = names.sort()
// // let b = a.map((val, i, arr) => {
// //     for (i = 0; i < arr.length; i++) {
// //         if (val.startsWith(Z)) {
// //             console.log(val);
// //         }
// //     }
// // })
// let b = a.find((val)=>{
//     if(val.match("B")){
//         console.log(val);
//     }
// })
// console.log(a);
// console.log(b);


// let a = ["bsa", 'asb', 'loc', 'edd']
// let b = toString(a)
// let a="Sachin"
// let b=a.charAt(0)
// console.log(b);


// -------------------- Question 14

// const names = ["Jeel", "Prakhar", "Bhakti", "Vansh", "Meghna", "Bhaumik", "Pujan", "Rudra", "Sachin", "Dhruval"];

// function firstLetterGroupData(data) {
//     const groupData = {};

//     let b = data.map((val, i, arr) => {
//         const name = data[i];
//         const firstLetter = name[0];

//         if (groupData[firstLetter]) {
//             groupData[firstLetter].push(name);
//         } else {
//             groupData[firstLetter] = [name];
//         }
//     })


//     return groupData;
// }

// function firstLetterGroupData(data) {
//     const groupData = {};

// let b = data.filter((val, i, arr) => {
//     const name = data[i];
//     const firstLetter = name[0];
//     let fl=firstLetter.toUpperCase()

//     if (groupData[fl]) {
//         groupData[fl].push(name);
//     } else {
//         groupData[fl] = [name];
//     }
// })

// return groupData;
// }

// const groupNames = firstLetterGroupData(names);

// console.log(groupNames);


// ----------------------------------------- Question 15

// Make flat function manually (with depth and without depth)

// -- without depth

// let arr = [1, 2, 3, [4, 5, [5, 6, 7]]]
// // let arr1=arr.flat(2)
// let arr1 = [];
// function flatArray(array) {
//     array.filter(element => {
//             if(Array.isArray(element)){
//                 flatArray(element)
//             }
//             else{
//                 arr1.push(element)
//             }
//     })
//     return arr1;
// }
// console.log(flatArray(arr));

// -- with depth

// let arr = [1, 2, 3, [4, 5, [6, 7, [8]]]]

// let arr1 = []

// function flatArray(arr, depth = 1) {
//     arr.filter(element => {
//         if (Array.isArray(element) && depth > 0) [
//             flatArray(element, depth - 1)
//         ]
//         else{
//             arr1.push(element)
//         }
//     })
//     return arr1;
// }

// console.log(flatArray(arr));

// ----------------------------------------- Question 16

// Make filter function manually


// function filter(array, callback) {
//     const filteredNewArray = [];

//     for (let i = 0; i < array.length; i++) {
//         if (callback(array[i], i, array)) {
//             filteredNewArray.push(array[i]);
//         }
//     }

//     return filteredNewArray;
// }

// let a = [8, 9, 6, 7, 5]

// let c = filter(a, (num => num % 2 == 0));
// console.log(c);

// ----------------------------------------- Question 17

// Make map function manually


// function map(array, callback) {
//     const arrayMap = [];

//     for (let i = 0; i < array.length; i++) {
//         arrayMap.push(callback(array[i], i, array));
//     }

//     return arrayMap;
// }

// const a = [1, 2, 3, 4, 5];

// const b = map(a, (num) => num * 2);

// console.log(b);

// ----------------------------------------- Question 18

// const input = [
//     { name: "John", salary: 50000, department: "IT" },
//     { name: "Jane", salary: 60000, department: "HR" },
//     { name: "Bob", salary: 55000, department: "IT" },
//     { name: "Sophie", salary: 75000, department: "HR" },
//     { name: "Mike", salary: 65000, department: "IT" },
//     { name: "Emily", salary: 80000, department: "HR" },
//     { name: "David", salary: 70000, department: "IT" },
// ];
//   => make this data groupBy with first letter of the name(same as Que: 14)
// Output::
// {
//     J: [{ name: "John", salary: 50000, department: "IT" }, { name: "Jane", salary: 60000, department: "HR" },],
//   ….. and so on….
// }

// const groupedData = {};

// input.forEach((item) => {
//   const firstLetter = item.name.charAt(0);

//   if (!groupedData[firstLetter]) {
//     groupedData[firstLetter] = [];
//   }

//   groupedData[firstLetter].push(item);
// });

// console.log(groupedData);



//   => make this data groupBy with department name
// Output: {
//               “IT”: [.....items of array which are from IT department],
//               “HR”: [.....items of array which are from HR department],
//             }



// const groupedData = {};

// input.forEach((item) => {
//     const department = item.department;

//     if (!groupedData[department]) {
//         groupedData[department] = input.filter((x) => x.department === department);
//     }
// });

// console.log(groupedData);
