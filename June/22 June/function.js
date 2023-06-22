// // --------------------- Anonymous Functions -------------------

// // --------------------- Type 1

// (function(){
//     console.log("Jai Shree Ram");
// })();

// // --------------------- Type 2

// // setTimeout function is already defined by the JavaScript

// setTimeout(function(){
//     console.log("Jai Shree Krishna");
// })

// // --------------------- Type 3

// let Radhe = () => {
//     console.log("Radhe Radhe");
// }

// Radhe()

// ------------------ Conf Que 1

// const a={b:10};
// const arr=[a];
// console.log(arr[0]);
// a.b=15;
// console.log(arr[0]);

// ------------------ Conf Que 2
// ----------- calling object in function 

// const obj = {
//     a: 10,
//     b: 12
// }

// console.log(obj);

// var obj1 = { ...obj };         /// doubt complicated

// function abc(obj) {
//     obj1.b = 20;
//     console.log(obj.b);  // if we comment this then obj1.b work
//     console.log(obj);
//     console.log(obj1);
// }
// abc(obj)


// abc(obj1)

// abc(obj1.b)    //////// will not run because object is not


// ------------------ Conf Que 3

// const a=10;
// let b=20;
// var c=30;

// const sum = () => {             // doubt

// }

// (function(){

// })

// function abc() {

// }

// ------------------ Conf Que 4

// var s=Number('abc');
// console.log(s);
// var sa=Number('250');
// console.log(sa);

// ------------------ Conf Que 5
// NaN type = Number

// console.log(NaN==NaN);
// console.log(NaN===NaN);
// console.log(NaN!=NaN);
// console.log(NaN!==NaN);

// ------------------------------------ function arguments

// function names(arg) {

// }

// console.log(names(arguments));



// -------------------------------------------   != , =!

// console.log(10!=20);
// console.log(10=!20);   ////////////  syntax error
// console.log(10==!120); ////////// Flase everytime
// // console.log(!(10=20)); ///////// syntax error 
// console.log(!(10==20));   ////// !(flase)=true
// console.log(!(10!=20));   ////// !(true)=flase
// console.log(!(10!=10));   ////// !(false)=true

// -------------------------------------

// console.log(0 || 1);
// console.log(4 && 5);
// console.log("hi" && "hello");
