// ---------------------------------- Question 1 ----------------------------

// function sayHello() {

// }
// sayHello()

// ---------------------------------- Question 2 ----------------------------

// // --------------------------- With argument, with return

// function calculateSum(num1,num2){
//     return num1+num2;
// }
// console.log(calculateSum(10,12));

// // --------------------------- With argument, without return

// function calculateSum(num1,num2){
//     console.log(num1+num2);
// }
// calculateSum(10,12)

// // --------------------------- Without argument, with return

// function calculateSum(){
//     num1=10;
//     num2=12;
//     return num1+num2;
// }
// console.log(calculateSum());

// // --------------------------- Without argument, without return

// function calculateSum(){
//     console.log(10+12);
// }
// calculateSum()

// ---------------------------------- Question 3 ----------------------------

// function printArray (arr) {
//     arr[0]=45;
//     return arr;
// }

// console.log(printArray([0]));

// function printArray(arr) {
//     arr[0] = 30;
// }

// const array = [45];

// console.log(array[0]); // 45
// printArray(array);
// console.log(array[0]); // 30


// ---------------------------------- Question 4 ----------------------------

// let multiply = function (a, b) {
//     return a * b;
// }
// console.log(multiply(2, 2));

// ---------------------------------- Question 5 ----------------------------

// function myFunction() {

// }
// myFunction();

// ---------------------------------- Question 6 ----------------------------

// let squareNumber = (num) =>{
//     return num*num;
// }

// console.log(squareNumber(20));

// ---------------------------------- Question 7 ----------------------------

// let getFullName  = (firstName , lastName ) =>{
//     return (firstName + lastName);
// }

// console.log(getFullName("Israni ","Sachin"))

// ---------------------------------- Question 8 ----------------------------

// function calculateArea(lenght , width) {
//     return lenght*width;
// }

// console.log(calculateArea(10,15))

// ---------------------------------- Question 9 ----------------------------

// function isEven(num) {
//     if(num%2==0){
//         console.log("True")
//     }
//     else{
//         console.log("Flase")
//     }
// }

// isEven(4)

// ---------------------------------- Question 10 ----------------------------

// --------- Ternory operator

// with argument, with return --------------

// function maxbet3(a, b , c) {
//     let max = (a > b)  ? ((a>c)? "A is big": "C is big" ) : ((b>c) ?"B is big":"C is Big" )
//     return max;
// }
// console.log(maxbet3(13,158,145))

// with argument, without return --------------

// function maxbet3(a, b , c) {
//     let max = (a > b)  ? ((a>c)? "A is big": "C is big" ) : ((b>c) ?"B is big":"C is Big" )
//     console.log(max)
// }
// maxbet3(193,158,145);

// without argument, with return --------------

// function maxbet3() {
//     a=29;
//     b=34;
//     c=276;
//     let max = (a > b)  ? ((a>c)? "A is big": "C is big" ) : ((b>c) ?"B is big":"C is Big" )
//     return max;
// }
// console.log(maxbet3())

// without argument, without return --------------

// function maxbet3() {
//     a=29;
//     b=34;
//     c=276;
//     let max = (a > b)  ? ((a>c)? "A is big": "C is big" ) : ((b>c) ?"B is big":"C is Big" )
//     console.log(max);
// }
// maxbet3();

// -------------------- if...else

// with argument, with return --------------

// function maxbet3(a,b,c) {
//     if(a>b && a>c){                    // With three conditions
//         return "A is big";
//     }
//     else if(b>c && b>a){
//         return "B is big";
//     }
//     else{
//         return "C is big";
//     }

//     if(a>b){                                // With nested if else
//         if(a>c){
//             return "A is big";
//         }
//         else{
//             return "C is big";
//         }
//     }
//     else{
//         if(b>c){
//             return "B is big";
//         }
//         else{
//             return "C is big";
//         }
//     }
// }
// console.log(maxbet3(100,20000,3000));



// with argument, without return --------------

// function maxbet3(a,b,c) {
//     if(a>b && a>c){                    // With three conditions
//         console.log("A is big");
//     }
//     else if(b>c && b>a){
//         console.log("B is big");
//     }
//     else{
//         console.log("C is big");
//     }

//     if(a>b){                                // With nested if else
//         if(a>c){
//             console.log("A is big");
//         }
//         else{
//             console.log("C is big");
//         }
//     }
//     else{
//         if(b>c){
//             console.log("B is big");
//         }
//         else{
//             console.log("C is big");
//         }
//     }
// }
// maxbet3(100,20000,3000);


// without argument, with return --------------

// function maxbet3() {

//     a=2500;
//     b=3055;
//     c=78;

//     if(a>b && a>c){                    // With three conditions
//         return "A is big";
//     }
//     else if(b>c && b>a){
//         return "B is big";
//     }
//     else{
//         return "C is big";
//     }

//     if(a>b){                                // With nested if else
//         if(a>c){
//             return "A is big";
//         }
//         else{
//             return "C is big";
//         }
//     }
//     else{
//         if(b>c){
//             return "B is big";
//         }
//         else{
//             return "C is big";
//         }
//     }
// }
// console.log(maxbet3());


// without argument, without return --------------


// function maxbet3() {

//     a=2500;
//     b=3055;
//     c=78;

//     if(a>b && a>c){                    // With three conditions
//         console.log("A is big");
//     }
//     else if(b>c && b>a){
//         console.log("B is big");
//     }
//     else{
//         console.log("C is big");
//     }

//     if(a>b){                                // With nested if else
//         if(a>c){
//             console.log("A is big");
//         }
//         else{
//             console.log("C is big");
//         }
//     }
//     else{
//         if(b>c){
//             console.log("B is big");
//         }
//         else{
//             console.log("C is big");
//         }
//     }
// }
// maxbet3();

// ---------------------------------- Question 11 ----------------------------


// Arrow Function -------------

// let calculatePrice = (price , discount=10) =>{
//     return price - price*discount/100
// }

// console.log(calculatePrice(1090,50))
// console.log(calculatePrice(500))

//   Normal Function ------------

// function calculatePrice (price , discount=10) {
//     return price - price*discount /100
// }

// console.log(calculatePrice(1090,50))
// console.log(calculatePrice(500))

// ---------------------------------- Question 12 ----------------------------

// function isEven(num) {
//     if (num % 2 == 0) {
//         console.log("True")
//     }
//     else {
//         console.log("Flase")
//     }
// }

// isEven(4)

// ---------------------------------- Question 13 ----------------------------

// ---------------------------------------    A

// with argument, with return --------------

// function calculateMultiply (num1,num2) {
//     if (num1==undefined || num2==undefined ) {
//         return 1;
//     }
//     else{
//         return num1*num2;
//     }
// }

// console.log(calculateMultiply(5,8))
// console.log(calculateMultiply())

// with argument, without return --------------

// function calculateMultiply (num1,num2) {
//     if (num1==undefined || num2==undefined ) {
//         console.log(1);
//     }
//     else{
//         console.log(num1*num2);
//     }
// }

// calculateMultiply(5,5)
// calculateMultiply()

// without argument, with return --------------

// function calculateMultiply () {            // doubt if not running
//     num1=10;
//     num2=10;
//     if (num1==undefined || num2==undefined ) {
//         return 1;
//     }
//     else{
//         return num1*num2;
//     }
// }

// console.log(calculateMultiply(5,8))
// console.log(calculateMultiply())

// without argument, without return --------------

// function calculateMultiply () {            // doubt if not running
//     num1=10;
//     num2=10;
//     if (num1==undefined || num2==undefined ) {
//         console.log(1);
//     }
//     else{
//         console.log(num1*num2);
//     }
// }

// calculateMultiply(5,5)
// calculateMultiply()

// ---------------------------------------    B

// with argument, with return --------------

// let calculateMultiply =  (num1,num2) => {
//     if (num1==undefined || num2==undefined ) {
//         return 1;
//     }
//     else{
//         return num1*num2;
//     }
// }

// console.log(calculateMultiply(5,8))
// console.log(calculateMultiply())


// with argument, without return --------------

// let calculateMultiply =  (num1,num2) => {
//     if (num1==undefined || num2==undefined ) {
//         console.log(1);
//     }
//     else{
//         console.log(num1*num2);
//     }
// }

// calculateMultiply(5,5)
// calculateMultiply()

// without argument, with return --------------

// let calculateMultiply =  () => {    // doubt if not running
//     num1=10;
//     num2=10;
//     if (num1==undefined || num2==undefined ) {
//         return 1;
//     }
//     else{
//         return num1*num2;
//     }
// }

// console.log(calculateMultiply(5,8))
// console.log(calculateMultiply())

// without argument, without return --------------

// let calculateMultiply =  () => {    // doubt if not running
//     num1=10;
//     num2=10;
//     if (num1==undefined || num2==undefined ) {
//         console.log(1);
//     }
//     else{
//         console.log(num1*num2);
//     }
// }

// calculateMultiply(5,5)
// calculateMultiply()


// ---------------------------------- Question 14 ----------------------------


// function greet(value) {
//     if(value==null){
//         console.log('Anonymous');
//     }
// }

// greet()
// greet(22)

// ---------------------------------- Question 15 ----------------------------

// function exponent (num , power=2) {
//        return num**power;
// }

// console.log(exponent(4,3))
// console.log(exponent(4))