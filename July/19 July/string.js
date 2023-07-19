// ----------------------------------------------------------------

// const words = "apple, banana, orange";
// const fruits = words.split(", ");
// console.log(fruits);  // Output: ['apple', 'banana', 'orange']

// ----------------------------------------------------------------

// const sentence = "I love JavaScript!";
// console.log(sentence.split("o"));   // Output: ['I l', 've JavaScript!']

// ----------------------------------------------------------------

// const sentence = "JavaScript is powerful!";
// console.log(sentence.split("").length); // 23
// console.log(sentence.split(" ").length);    // 3
// console.log(sentence.split("  ").length);    // 1

// ----------------------------------------------------------------

// const text = "Hello, World!";
// console.log(text.search("W"));  // 7

// ----------------------------------------------------------------

// const sentence = "JavaScript is versatile!";
// console.log(sentence.split(" ").reverse());      //      ['versatile!', 'is', 'JavaScript']
// let as = sentence.split(" ")
// console.log(as);                //    ['JavaScript', 'is', 'versatile!']
// let ad=as.map(ele=>{
//     return ele.split('').reverse().join('')
// })
// console.log(ad);            // ['tpircSavaJ', 'si', '!elitasrev']

// ----------------------------------------------------------------

// const text = "Hello, World!";
// console.log(text.indexOf("l", 4));  // 10 2-l,3-l,10,l

// ----------------------------------------------------------------

// Write a JavaScript function to check whether an 'input' is a string or not.
// function is_string(str) {
//     if(typeof str=="string"){
//         return true
//     }
//     else{
//         return false
//     }
// }
// Test Data :
// console.log(is_string('w3resource')); // true
// console.log(is_string([1, 2, 4, 0])); // false
// console.log(is_string('1')); // true

// ---------------------------------------------------------------- console.error

// str='sachin'
// console.error(str.toUpperCase());
// str=[1,2,3,4,5]
// console.error(str.map(ele=>ele*2));

// ----------------------------------------------------------------

// Write a JavaScript function to check whether a string is blank or not.

// function is_Blank(str) {
//     str=str.trim()
//     if(str==''){
//         return true
//     }
//     return false
// }

// Test Data :
// console.log(is_Blank('')); // true
// console.log(is_Blank('  s')); // false
// console.log(is_Blank('  ')); // true
// console.log(is_Blank('abc')); // false

// ----------------------------------------------------------------

// Write a JavaScript function to split a string and convert it into an array of words.

// function string_to_array(str) {
//     return str.split(' ')
// }

// Test Data :
// console.log(string_to_array("Robin Singh")); // ["Robin", "Singh"]

// ----------------------------------------------------------------

// Write a JavaScript function to extract a specified number of characters from a string.

// function truncate_string(str, position = str.length ) {
//     return str.slice(0,position)
// }

// Test Data :
// console.log(truncate_string("Robin Singh",4)); // "Robi"
// console.log(truncate_string("Robin Singh")); // "Robin Singh"

// ----------------------------------------------------------------

// Write a JavaScript function that hides email addresses to prevent unauthorized access.

// function protect_email(str) {
//     let a=str.slice(0,5)
//     let b=str.slice(6,str.indexOf('@'))
//     let c=b.replace(b,'....')
//     let d=str.slice(str.indexOf('@'))
//     let e=a.concat(c,d)
//     console.log(e);

// ----------------------------------------------------------------

//     return str.slice(0, 5) + '...' + str.slice(str.indexOf('@'))
// }

// Test Data :
// console.log(protect_email("robin_singh@example.com"));
// Output:  "robin...@example.com"

// ----------------------------------------------------------------

// Write a JavaScript function to parameterize a string.
// function string_parameterize(str) {
//     return str.replaceAll(' ','-').toLowerCase()
// }

// Test Data :
// console.log(string_parameterize("Robin Singh from USA."));
// Output: "robin-singh-from-usa"

// ----------------------------------------------------------------

//   Write a JavaScript function to capitalize the first letter of a string.

// function capitalize(str) {
//     return str[0].toUpperCase() + str.slice(1)
// }

// Test Data :
// console.log(capitalize('js string exercises'));
// Output: "Js string exercises"

// --------------------------------- 67

// Write a JavaScript function to capitalize the first letter of each word in a string.

// function capitalize_Words(str) {
//     let a = str.split(' ').map(ele=>ele[0].toUpperCase()+ele.slice(1)).join(' ')
//     return a
// }

// console.log(capitalize_Words('js string exercises'));
// "Js String Exercises"

// --------------------------------- 68

// Write a JavaScript function to insert a string within a string at a particular position (default is 1).
// Test Data :

// function insert(str, add = '', position = 0) {

//     if (add == '' && position == 0) {
//         return str;
//     }
//     let a = str.slice(0, position)
//     let b = a.concat(add)
//     let c = b.concat(str.slice(position))
//     return c;

//     -----------------------------------------------------------

//     return str.slice(0, position) + add + str.slice(position)

// }



// console.log(insert('We are doing some exercises.'));
// console.log(insert('We are doing some exercises.', 'JavaScript '));
// console.log(insert('We are doing some exercises.', 'JavaScript ', 18));
// Output: "We are doing some exercises."
// "JavaScript We are doing some exercises."
// "We are doing some JavaScript exercises.”