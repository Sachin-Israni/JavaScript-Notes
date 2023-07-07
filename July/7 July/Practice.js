// for (i=0;i<=10;i++){
//     console.log("Hello World");
// }

// for (i = 5; i <= 200; i = i + 5) {
//     console.log(i);
// }

// for (i = 50; i > 4; i = i - 5) {
//     console.log(i);
// }

// let a = "Hello World"  // Output:"olleH dlroW"
// let b = a.split(" ").map(ele =>ele.split("").reverse().join("")).join(" ")
// console.log(b);

// let ac = ["JS", "CSS", "JQUERY"]
// console.log(ac.join(`""`));

// let arr1 = [['JS'], ['Python'], ['Pascal']]

// let obj = {
//     name: "Sachin",
//     arr: arr1.find(e => e.id == 5).lable
//     // arr: arr1.includes(e => e.id).lable
// }

// console.log(obj);

// console.log("".concat({}));



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


let findChoco=donuts.filter((val,i)=>{val.topping.filter((val)=>val.type==="Chocolate").length 

})
// let findChoco=donuts.filter((val,i)=>val.topping.findIndex((val)=>val.type==="Chocolate")!==-1)
// let findChoco=donuts.filter((val,i)=>val.topping.find((val)=>val.type==="Chocolate"))
console.log(findChoco);



//---------------------------------------------------------------- => filter donuts based which have batter type is regular and topping have Chocolate





//---------------------------------------------------------------- => filter donuts based on which have topping chocolate and Sugar
//---------------------------------------------------------------- => filter donuts based on ppu > 0.5
//---------------------------------------------------------------- => bring all batters for all donuts in single array
//---------------------------------------------------------------- => filter donuts based on which have 2 and more than 2 batter in it