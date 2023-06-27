// var time = 12;                   // Question 1

// if (time >= 4 && time < 12) {
//     console.log("Good Morning");
// }
// else if (time >= 12 && time < 16) {
//     console.log("Good Afternoon");
// }
// else if (time >= 16 && time < 20) {
//     console.log("Good Evening");
// }
// else {
//     console.log("Good night");
// }

// var a=new Date()
// // console.log(a.getHours());

// if (a.getHours() >= 4 && a.getHours() < 12) {
//     console.log("Good Morning");
// }
// else if (a.getHours() >= 12 && a.getHours() < 16) {
//     console.log("Good Afternoon");
// }
// else if (a.getHours() >= 16 && a.getHours() < 20) {
//     console.log("Good Evening");
// }
// else {
//     console.log("Good night");
// }

// ----------------------------------------------------------------------

// var d=new Date()                     // Question 2
// console.log(d.getDay());

// var day=1;

// switch (d.getDay()) {
// switch (day) {
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;

//     default:
//         console.log("Saturday");
//         break;
// }

// ----------------------------------------------------------------------

// let n=5;                        // Question 3
// let star = "";
// for (let i = 0; i < n; i++) {
//     for (j = 0; j < n; j++) {
//        star += " * ";
//     }
//     star += "\n";
// }
// console.log(star);

// ----------------------------------------------------------------------

// let n = 5;                         // Question 4
// let star = "";
// for (let i = 1; i <= n; i++) {
//     for (let j = 0; j < i; j++) {
//         star += " * ";
//     }
//     star += "\n";
// }

// console.log(star);

// ----------------------------------------------------------------------

// let n = 5;                              // Question 5
// let star = "";
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - i; j++) {
//         star += "*";
//     }
//     star += "\n";
// }
// console.log(star);

// ----------------------------------------------------------------------

// let month = 8;                      // Question 6
// if(month == 2){
//     console.log(28);
// }
// else if(month > 12){
//     console.log("Month does not exist");
// }
// else if (month%2 == 0){
//     console.log(30);
// }
// else{
//     console.log(31);
// }

// ----------------------------------------------------------------------

// for(let i=1 ; i<=10 ; i++){            // Question 7
//     console.log(i);
// }

// ----------------------------------------------------------------------







// function printOddNumbers(num1, num2) {           // Question 8
//     for (let i = num1; i <= num2; i++) {
//         for (j = num1; j <= num2; j++) {
//             if (num2 % 2 != 0) {
//                 console.log(num2);
//                 i += "\n"
//             }
//         }
//     }
// }

// printOddNumbers(4, 9)






// ----------------------------------------------------------------------


// ----------------------------------------------------------------------


// ----------------------------------------------------------------------

// let objs ={2,2}
// console.log(objs);

// function assign(obj1,obj2) {
//     return Object.assign(obj1,obj2)
// }

// let obj1={a:10}
// let obj2={b:20}
// let obj3=assign(obj1,obj2)
// obj3.a=20;
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);