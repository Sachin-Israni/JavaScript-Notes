// Write a code that adds new key in each object named
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


//    Write a code that adds new key in each object named: isMature


// const users = [
//     { first_name: "Handnm", last_name: "L demo", age: 17 },
//     { first_name: "Q Wei", last_name: "Alxezx", age: 30 },
//     { first_name: "Pdeq Twern", last_name: "Ruse", age: 22 },
//     { first_name: "Widfruyn", last_name: "Ruby", age: 11 },
//     { first_name: "Erdfg Pso", last_name: "Loal", age: 34 },
//     { first_name: "Dedfgmors", last_name: "Poet", age: 60 },
//     { first_name: "Ale4tos", last_name: "Lkeu", age: 16 },
// ]


// for (let key in users) {
//     if (users[key].age >= 18) {
//         users[key].isMature = "Yes"
//     }
//     else {
//         users[key].isMature = "no"
//     }

// }

// console.log(users);



// let arr = [1,2,3,5]
// console.log(arr[-1]); //?


//   => print all items of nested array

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


//  => print all items of this object in line
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

// for(let keys in nestedObject){
//     console.log(nestedObject.values);
// }

// let arr=[1,2,3,4]

// let arr1=arr.map((value,i,arri)=>{
//     arri.push(value)
// })
// console.log(arr,arr1);
// function toString (values){
//     String(values)    
// }
// let a = value =() => String(value)
// let b=arr.map(a)
// console.log(b);










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

// -------------------------------------------- Question 11

// Get output like example
// input = "Every developer likes to mix kubernetes and javascript";
// output = "E3y d7r l3s to mix k8s and j8t"

function first1last(name) {
    let a = name.split(' ')
    return a;
}

console.log(first1last('This is not a necessary game'));


// -------------------------------------------- Question 12

const products = [
    { name: "Product 1", price: 20, category: "Electronics" },
    { name: "Product 2", price: 30, category: "Clothes" },
    { name: "Product 3", price: 40, category: "Electronics" },
    { name: "Product 4", price: 50, category: "Clothes" },
    { name: "Product 5", price: 60, category: "Clothes" },
    { name: "Product 6", price: 70, category: "Electronics" },
    { name: "Product 7", price: 80, category: "Clothes" },
    { name: "Product 8", price: 90, category: "Electronics" },
];



function makeNewObject(arrayName) {
    let newObject = {};
    let Clothes = arrayName.filter(value => value.category == "Clothes");
    let Electronics = arrayName.filter(value => value.category == "Electronics");
    let a = Clothes.length;
    let b = Electronics.length;
    newObject.Clothes = a;
    newObject.Electronics = b;
    return newObject;
}
let newObj = makeNewObject(products);
console.log(newObj);