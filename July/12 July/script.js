// let a = new Date()
// console.log(a.getFullYear() + "/" + a.getMonth() + "/" + a.getDate());

// let a='123abc'
// console.log(typeof (12.234.toFixed(2)));

//----------------------------- Conf answers

// let arr = [0, 1, 2, 3, 4]
// arr.reduce(a => a) || arr.map(a => a * 3)
// console.log(arr);  // [0, 1, 2, 3, 4]

//----------------------------- Conf answers

// function abcd() {
//     return () => {
//         return "15";
//     }
// }
// let ab = abcd()
// console.log(ab);    // () => {     return "15";  }
// console.log(ab());  // 15

// ------------------ Format Function()

// 1

// function transformation(type) {
//     let a = new Date()
//     let obj = {
//         YYYY: a.getFullYear(),
//         DD: a.getDate(),
//         MM: a.getMonth() + 1
//     }
//     type = type.replaceAll(" ", "")
//     if (type == "YYYY-DD-MM") console.log(obj.YYYY + "-" + obj.DD + "-" + obj.MM);
//     if (type == "YYYY-MM-DD") console.log(obj.YYYY + "-" + obj.MM + "-" + obj.DD);
//     if (type == "DD-MM-YYYY") console.log(obj.DD + "-" + obj.MM + "-" + obj.YYYY);
//     if (type == "DD-YYYY-MM") console.log(obj.DD + "-" + obj.YYYY + "-" + obj.MM);
//     if (type == "MM-YYYY-DD") console.log(obj.MM + "-" + obj.YYYY + "-" + obj.DD);
//     if (type == "MM-DD-YYYY") console.log(obj.MM + "-" + obj.DD + "-" + obj.YYYY);
//     if (type == "YYYY/DD/MM") console.log(obj.YYYY + "/" + obj.DD + "/" + obj.MM);
//     if (type == "YYYY/MM/DD") console.log(obj.YYYY + "/" + obj.MM + "/" + obj.DD);
//     if (type == "DD/MM/YYYY") console.log(obj.DD + "/" + obj.MM + "/" + obj.YYYY);
//     if (type == "DD/YYYY/MM") console.log(obj.DD + "/" + obj.YYYY + "/" + obj.MM);
//     if (type == "MM/YYYY/DD") console.log(obj.MM + "/" + obj.YYYY + "/" + obj.DD);
//     if (type == "MM/DD/YYYY") console.log(obj.MM + "/" + obj.DD + "/" + obj.YYYY);
// }

// transformation("YYYY-DD-MM")
// transformation("YYYY-MM-DD")
// transformation("DD-MM-YYYY")
// transformation("DD-YYYY-MM")
// transformation("MM-YYYY-DD")
// transformation("MM-DD-YYYY")
// transformation("YYYY/DD/MM")
// transformation("YYYY/MM/DD")
// transformation("DD/MM/YYYY")
// transformation("DD/YYYY/MM")
// transformation("MM/YYYY/DD")
// transformation("MM/DD/YYYY")


// function transformation(type) {
//     let a = new Date()
//     let obj = {
//         YYYY: a.getFullYear(),
//         DD: a.getDate(),
//         MM: a.getMonth() + 1
//     }
//     type = type.replaceAll(" ", "")
//     switch (type) {
//         case "YYYY-DD-MM": console.log(obj.YYYY + "-" + obj.DD + "-" + obj.MM); break;
//         case "YYYY-MM-DD": console.log(obj.YYYY + "-" + obj.MM + "-" + obj.DD); break;
//         case "DD-MM-YYYY": console.log(obj.DD + "-" + obj.MM + "-" + obj.YYYY); break;
//         case "DD-YYYY-MM": console.log(obj.DD + "-" + obj.YYYY + "-" + obj.MM); break;
//         case "MM-YYYY-DD": console.log(obj.MM + "-" + obj.YYYY + "-" + obj.DD); break;
//         case "MM-DD-YYYY": console.log(obj.MM + "-" + obj.DD + "-" + obj.YYYY); break;
//         case "YYYY/DD/MM": console.log(obj.YYYY + "/" + obj.DD + "/" + obj.MM); break;
//         case "YYYY/MM/DD": console.log(obj.YYYY + "/" + obj.MM + "/" + obj.DD); break;
//         case "DD/MM/YYYY": console.log(obj.DD + "/" + obj.MM + "/" + obj.YYYY); break;
//         case "DD/YYYY/MM": console.log(obj.DD + "/" + obj.YYYY + "/" + obj.MM); break;
//         case "MM/YYYY/DD": console.log(obj.MM + "/" + obj.YYYY + "/" + obj.DD); break;
//         case "MM/DD/YYYY": console.log(obj.MM + "/" + obj.DD + "/" + obj.YYYY); break;

//         default: console.log(obj.DD + "-" + obj.MM + "-" + obj.YYYY); break;
//     }
// }

// transformation("YYYY-DD-MM")
// transformation("YYYY-MM-DD")
// transformation("DD-MM-YYYY")
// transformation("DD-YYYY-MM")
// transformation("MM-YYYY-DD")
// transformation("MM-DD-YYYY")
// transformation("YYYY/DD/MM")
// transformation("YYYY/MM/DD")
// transformation("DD/MM/YYYY")
// transformation("DD/YYYY/MM")
// transformation("MM/YYYY/DD")
// transformation("MM/DD/YYYY")


// -------------- 

// function num(type) {
//     return type
// }

// let d = new Date(2015, 10, 1)
// console.log(d);
// console.log(new Date(2015, 10, 1));
// console.log(num(new Date(2015, 10, 1)));  // terminal giving wrong answer

// -------------- Number()

// let num1 = Number("123");
// console.log(num1);  //  123
// console.log(typeof num1);  // number

// let num2 = Number("12.34");
// console.log(num2);  //  12.34
// console.log(typeof num2);  // number

// let num3 = Number("hello");
// console.log(num3);  //  NaN
// console.log(typeof num3);  // number


// -------------- parseInt()

// let num4 = parseInt("123"); 
// console.log(num4);  // 123
// console.log(typeof num4);  //  number

// let num5 = parseInt("12.34");  // Parses the integer part of a string
// console.log(num5);  //  12
// console.log(typeof num5);  // number

// let num6 = parseInt("hello"); 
// console.log(num6);  //  NaN
// console.log(typeof num6);  // Output: number

// let num7 = parseInt("123abc");  // Stops parsing at the first non-digit character
// console.log(num7);  // 123
// console.log(typeof num7);  // number


// -------------- parseFloat()

// let num8 = parseFloat("123"); 
// console.log(num8);  //  123
// console.log(typeof num8);  //  number

// let num9 = parseFloat("12.34");  // Converts a string to a floating-point number
// console.log(num9);  // 12.34
// console.log(typeof num9);  //  number

// let num10 = parseFloat("hello"); 
// console.log(num10);  //  NaN
// console.log(typeof num10);  //  number

// let num11 = parseFloat("123.45abc");  // Stops parsing at the first non-digit character
// console.log(num11);  // 123.45
// console.log(typeof num11);  //  number


// -------------------------  After Lunch


// -------------------------  isFinite()

// console.log(isFinite(1/0));     // false
// console.log(isFinite(20939304));    // true
// console.log(isFinite("20939304"));    // true
// console.log(isFinite(Infinity));    // false
// console.log(isFinite(isFinite));  // false
// console.log(isFinite(isFinite(123)));  // true
// console.log(isFinite(isFinite()));  // true
// console.log(isFinite("abs"));  // false
// console.log(isFinite(NaN));  // false
// console.log(isFinite(null));  // true
// console.log(isFinite(undefined));  // false
// var obj={
//     age:12
// }
// console.log(isFinite(obj));  // false
// console.log(isFinite(obj.age));  // true

// -------------------------  Number.isInteger()

// let a = 12
// console.log(Number.isInteger(a));

// console.log(Number.isInteger(2));  // true
// console.log(Number.isInteger(2.23));  // false
// console.log(Number.isInteger("2"));  // false
// console.log(Number.isInteger("ads"));  // false
// console.log(Number.isInteger(obj));  // false
// console.log(Number.isInteger(obj.age));  // true
// Number.isInteger(5.0000000000000001); // true, because of loss of precision             // Doubt
// Number.isInteger(4500000000000000.1); // true, because of loss of precision             // Doubt



// let a = new Date(1517356800000)
// // let a = new Date(-62167240407001)
// console.log(a); //Sat Jan 01 0000 00:00:00 GMT+0553 (India Standard Time)
// console.log(a.toString()); //Sat Jan 01 0000 00:00:00 GMT+0553 (India Standard Time)


// console.log((15500.3).toPrecision(2));



// function sumFiniteNumbers(...numbers) {
//     for (let number of numbers) {
//         if (!Number.isFinite(number)) {
//             return false
//         }
//     }
//     return true;
// }

// console.log(sumFiniteNumbers(1, 2, 3, 5, 4)); // 10
// console.log(sumFiniteNumbers(1, 2, -Infinity, NaN, 4)); // 7


// function checkIntegers(...values) {
//     for (let value of values) {
//         if (!Number.isInteger(value)) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(checkIntegers(1, 2, 3, 4)); // true
// console.log(checkIntegers(1, 2, 3.5, 4)); // false
// console.log(checkIntegers(1, 2, "3", 4)); // false





// function calculateYourAge(dob) {
//     let a = new Date()
//     let mainBod = new Date(dob)
//     let ret = a.getFullYear() - mainBod.getFullYear()
//     console.log(a.getFullYear());
//     console.log(mainBod.getFullYear());
//     console.log(mainBod.getMonth());
//     console.log(ret);
// }
// calculateYourAge(25, 10, 2004)
// // calculateYourAge('25 Oct 2004')



