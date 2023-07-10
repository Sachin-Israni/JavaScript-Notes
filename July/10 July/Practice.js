// let a = "The me is the less of the more"
// console.log(a.match("the"));
// console.log(...a.matchAll("the"));
// console.log(a.padEnd(50,"."));
// console.log(a.padStart(50,"."));



// ------------------ Get Date Method

// let a = new Date(1688980562920)
// let a = new Date(0)
// console.log(a);
// console.log(a.getFullYear());  // 2023
// console.log(a.getMonth());  // 6 - july
// console.log(a.getDate());  // 10 
// console.log(a.getHours());  // 12
// console.log(a.getMinutes());  // 15 
// console.log(a.getSeconds());  // 14  
// console.log(a.getMilliseconds());  //  657 
// console.log(a.getTime());  //   
// console.log(a.getDay());  // 1-Monday

// ------------------ Set Date Method

// let a = new Date()
// console.log(a);
// console.log(a.getUTCDate());
// console.log(a.getDate());

// a.setDate(35)
// console.log(a.getDate());
// a.setFullYear(2090)
// console.log(a.getFullYear());
// a.setHours(14,12,13)
// console.log(a.getHours());
// a.setMilliseconds(123)
// console.log(a.getMilliseconds());
// a.setMinutes(23)
// console.log(a.getMinutes());
// a.setMonth(2)
// console.log(a.getMonth());
// a.setSeconds(22)
// console.log(a.getSeconds());
// a.setTime(17,43,23)
// console.log(a.getTime());
// a.setUTCDate(10)
// console.log(a.getUTCDate());

// console.log(a);

// console.log(a.toString());
// console.log(a.toDateString());
// console.log(a.toISOString());


// --------------------------- Date constructor
// console.log(Math.abs(5,3));

// let a = new Date(3030, 9, 25, 12, 23, 45, 2345)
// console.log(a);

// let a = [1,2,3,4,5]

// console.log(Math.max(...a));

// ---------------- Practice of Functions

// 1. Write a JavaScript function that reverses a number.


// function reverse_a_number(n) {
//     n = n + "";
//     return n.split("").reverse().join("");
// }
// console.log(Number(reverse_a_number(32243)));
// console.log(reverse_a_number(32243));




// --------------------- moment.js

// var moment = require('moment')
// let a = moment().format('MMMM Do YYYY, h:mm:ss a'); // July 10th 2023, 5:16:01 pm
// console.log(a);



// let obj = {
//     name: "Sachin",
//     age: 20,
//     College: "SOU"
// }

// function ava(onject) {
// let newObj = {}
// for (let i = 0; i < Object.entries.length; i++) {
// let val = Object.values(onject)
// let key = Object.keys(onject)
// newObj= Object.values(onject)[i] + ":" + Object.keys(onject)[i] + "\n"
// console.log(i);
// }
// return newObj
// let val = Object.values(onject)
// let key = Object.keys(onject)
// console.log(key + val);
// }
// console.log(ava(obj))
// console.log(Object.values(obj));
// console.log(obj);


// -----------------------------

let a = [1, 2, 3, 4, 5, 12, 23, 12, 12, 1, 34]
let b = [1, 2, 3, 4, 5, 12, 45, 12, 1, 1, 12]

function sum(a, b) {
    let c = []
    if (a.length != b.length) {
        if (a.length > b.length) {
            for (i = 1; i <= a.length; i++) {
                b.push(0)
            }
            a.forEach((val, i) => {
                c.push(val + b[i])
            });
        }
        else {
            for (i = 1; i <= b.length; i++) {
                a.push(0)
            }

            b.forEach((val, i) => {
                c.push(val + a[i])
            });
        }
    }

    else {
        a.forEach((val, i) => {
            c.push(val + b[i])
        });
    }
    return c
}

console.log(sum(a, b));