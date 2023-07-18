//----------------------------------------1

// Write the syntax for declaring a JavaScript function called sayHello that doesn't take any parameters and doesn't return any value.

function sayHello() {
    console.log('Hey,there!');    
}
sayHello()

//----------------------------------------2

// What is the syntax for declaring a JavaScript function called calculateSum that takes two parameters num1 and num2, and returns their sum? (write all four types of functions as we discussed in session)

//------------------------------

function calculateSum(num1,num2){
    return num1+num2
}
console.log(calculateSum(1,9));

//------------------------------

function calculateSum(){
    num1=1
    num2=19
    return num1+num2
}
console.log(calculateSum());

//------------------------------

function calculateSum(num1, num2) {
    console.log(num1 + num2);
}
calculateSum(1, 9)

//------------------------------

function calculateSum() {
    num1 = 1
    num2 = 19
    console.log(num1 + num2);
}
calculateSum()

//----------------------------------------3

// Create a function called printArray that takes an array called arr as a parameter and prints the array. Write the syntax for this function.

function printArray(arr) {
    console.log(arr);
}
let a=[1,2,3,4,5]
printArray(a)

//----------------------------------------4

// Write the syntax for declaring an anonymous JavaScript function and assigning it to a variable called multiply that takes two parameters a and b, and returns their multiplication.

const multiply = function (a,b) {
    return a*b
}

console.log(multiply(10,10));

//----------------------------------------5

// What is the syntax for calling a function named myFunction that doesn't take any parameters?

function myFunction() {

}
myFunction()

//----------------------------------------6

// Create a JavaScript arrow function called squareNumber that takes a parameter num and returns the square of that number. Write the syntax for this arrow function.

const squareNumber = (num) => {
    return num * num
}
console.log(squareNumber(5));

//----------------------------------------7

// Write the syntax for declaring a JavaScript function called getFullName that takes two parameters firstName and lastName, and returns the full name as a string.

function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName
}
console.log(getFullName('Israni', 'Sachin'))

//----------------------------------------8

// What is the syntax for declaring a JavaScript function called calculateArea that takes two parameters length and width, and returns the area of a rectangle?

function calculateArea(lenght, width) {
    return lenght * width
}
console.log(calculateArea(10,5));

//----------------------------------------9

//Write the syntax for declaring a JavaScript function called isEven that takes a single parameter num and returns true if the number is even, and false otherwise.

function isEven(num) {
    if (num % 2 == 0) {
        return true
    }
    return false
}

console.log(isEven(10));
console.log(isEven(11));
console.log(isEven(8));
console.log(isEven(8125));

//----------------------------------------10

// Write a function that takes three parameters and returns the maximum number of three.(use ternary operator and if..else as well) (Also make all four types of function as we discussed in session) (total: 8 functions definition)

//---------------------------------

function maxNum(a, b, c) {
    return a > b ? (a > c ? 'A is Big' : 'C is Big') : (b > c ? 'B is Big' : 'C is Big');
}

// console.log(maxNum(1001,1152,1143))

//---------------------------------

function maxNum(a,b,c){
    if(a>b){
        if(a>c){
            return 'A is Big';
        }
        else{
            return 'C is Big';
        }
    }
    else{
        if(b>c){
            return 'B is Big';
        }
        else{
            return 'C is Big';
        }
    }
}

console.log(maxNum(14,0.12,36));


//----------------------------------------11

// Create a JavaScript function called calculatePrice that takes a two parameter price, discount and returns discounted price. 	(defaultDiscount = 10%)


// Write the syntax for this arrow function.

const calculatePrice = (price, discount) => {
    return price-(price*discount/100)
}
console.log(calculatePrice(100,29));

// Write the syntax for normal function.

function calculatePrice1(price,discount) {
    return price-(price*discount/100)
}
console.log(calculatePrice1(1999,10))
console.log(calculatePrice1(1000,60))

//----------------------------------------12

// Write the syntax for declaring a JavaScript function called isEven that takes a single parameter num and returns true if the number is even, and false otherwise.

function isEven(num) {
    if (num % 2 == 0) {
        return true
    }
    return false
}

console.log(isEven(10));
console.log(isEven(11));
console.log(isEven(8));
console.log(isEven(8125));


//----------------------------------------13

// What is the syntax for declaring a JavaScript function called calculateMultiply that takes two parameters num1 and num2, and returns their multiplication? (make sure that never give an error if i passed anything) (if not pass anything then return 1)

// With normal function (write all four types of functions as we discussed in session)

function calculateMultiply(num1, num2) {
    if (typeof num1 == "number" && typeof num2 == "number") {
        return num1 * num2
    }
    else {
        return 1
    }
}
console.log(calculateMultiply(10, 2));
console.log(calculateMultiply(101, 2));

// With arrow function (write all four types of functions as we discussed in session)

const calculateMultiply1 = (num1 = 1, num2 = 1) => {
    if (typeof num1 == "string" || typeof num2 == "string") {
        return 1;
    }
    return num1 * num2
}
console.log(calculateMultiply1(10, 2));
console.log(calculateMultiply1(101, 2));
console.log(calculateMultiply1('sachin'));

//----------------------------------------14

// Write the syntax for declaring a JavaScript function called greet that takes parameters and doesn't return any value. (if not passed an argument then prints ‘Anonymous’)

function greet(anything="Anonymous") {
        console.log(anything);
}

greet("sachin")
greet(12345)
greet()

//----------------------------------------15

// Write the syntax for declaring a JavaScript function called exponent that takes parameters and returns an exponent of passed parameters. (if not passed an argument then returns power 2)

function exponent(num, power = 2) {
    return num**power
}

console.log(exponent(10,3));
console.log(exponent(3));
console.log(exponent(3,3));