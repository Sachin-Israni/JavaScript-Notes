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

