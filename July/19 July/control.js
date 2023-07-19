// ----------------------------------------------------------------

// Write a code for returning the greeting message as per current time.

// function greetOnTime(time) {
//     if(time>0){
//         if(time>0 && time<=4 ){
//             console.log('Good Night');
//         }   
//         else if(time>4 && time<=12){
//             console.log("Good Morning");
//         }
//         else if(time>12 && time<=16){
//             console.log("Good Afternoon");
//         }
//         else{
//             console.log("Good Evening");
//         }
//     }
//     else{

//     }
// }
// greetOnTime(8)
// greetOnTime(11)
// greetOnTime(13)
// greetOnTime(17)
// greetOnTime(18)
// greetOnTime(22)

// ----------------------------------------------------------------

// Write a code for returning the day name based on the digit. (like 1 for monday and so on.)

// Write a program that prints following pattern



function dateFormat(date) {
    // return date.replace('dd',date=new Date().getDate()) && date.replace('mm',date=new Date().getMonth()) && date.replace('yyyy',date=new Date().getFullYear())
    date = new Date()
    let dd = date.getDate()
    let mm = date.getMonth()
    let yyyy = date.getFullYear()
    console.log(dd, mm, yyyy);
}
console.log(dateFormat());


// Write a program that prints following pattern







// Write a program that prints following pattern







// Write a program for returning the number of days in the particular month. 
// For example, getNumberOfDays(1); returns the 31 (1 stands for january)

// Write a program that prints the 1 to 10.

// Write a function that prints the odd number of given range
// For example, printOddNumbers(1,10); prints 1,3,5,7,9

// Write a function that prints the even number of given range

// Write a function that takes 3 arguments and returns the result based on the given operation. (operation will be sum, subtraction, multiplication, division, modulo)
// 	For example: calculate(‘+’, 5, 6); // 11
// 			calculate(‘-’, 10, 6); // 4

// Write a function that takes marks as argument and returns the grade according to marks.

//  Write a function that takes a currency_code and amount as an argument and 
// returns the amount of money in INR.

//  Write a function for reversing the string.

// Write a function that takes an object and prints all keys and values in the console.
// Write a function that returns boolean on condition if the string contains a number or not.
// For example: isStringContainsNum(“assad”); // false
// 		isStringContainsNum(“agfh1”); // true
// 		isStringContainsNum(“ag1sdf”); // true
// isStringContainsNum(“111”); // true

//  Write a function that prints messages based on condition if the string contains a number or not.
// 	For example: For “1212” => string is number
// 			For “sadfsd” => string not contains number
// 			For “sad2q” => string contains number


// Write a function that returns the position of the first occurrence of digit in string.

//  Write a function that returns the position of the first capital letter in string. (For this string only contains A-Z, a-z)



// ----------------------------------------------------------------

// Modify following code to work perfectly.
// function printOdd(start, end) {
//     for (let i = start; i < end; i++) {
//         if (i % 2 != 0) {
//             console.log(i);
//         }
//     }
// }
// printOdd(1,10)
// 		points to be noted:
// Code prints only odd number

// ----------------------------------------------------------------

// Modify following code to work perfectly.
// function printOdd(start, end) {
//     let count = 0
//     for (let i = start; i < end; i++) {
//         if (i % 2 != 0 && count<10) {
//             console.log(i);
//             count++
//         }
//     }
// }
// 		points to be noted:
// Code prints only odd number
// Code must be prints only 10 instance

// printOdd(1, 30)