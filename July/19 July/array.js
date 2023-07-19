// const names  = [
//     {first_name: "Handnm", last_name: "L demo"},
//     {first_name: "Q Wei", last_name: "Alxezx"},
//     {first_name: "Pqwern", last_name: "Ruse"},
//     {first_name: "Wiruyn", last_name: "Ruby"},
//     {first_name: "Erpso", last_name: "Loal"},
//     {first_name: "Demors", last_name: "Poet"},
//     {first_name: "Aleos", last_name: "Lkeu"},
//     ]
//     Write a code that adds new key in each object named 
//     full_name: first_name + last_name

//     const users  = [
//      {first_name: "Handnm", last_name: "L demo", age: 17},
//      {first_name: "Q Wei", last_name: "Alxezx", age: 30},
//      {first_name: "Pdeq Twern", last_name: "Ruse", age: 22},
//      {first_name: "Widfruyn", last_name: "Ruby", age: 11},
//      {first_name: "Erdfg Pso", last_name: "Loal", age: 34},
//      {first_name: "Dedfgmors", last_name: "Poet", age: 60},
//      {first_name: "Ale4tos", last_name: "Lkeu", age: 16},
//     ]
//     Write a code that adds new key in each object named : isMature

//     let arr = [1,2,3,5]
//     console.log(arr[-1]); //?

//     const nestedArray = [
//       [1, 2, 3],
//       [4, 5, 6],
//       [7, 8, 9],
//     ];
//     => print all items of nested array




//     const nestedObject = {
//        name: "Vishal Kukreja",
//        age: 32,
//        address: {
//          street: "123 Mumbai fashion St",
//          city: "Midtown",
//          state: "MH",
//        },
//        hobbies: ["reading", "drawing", "gardening"],
//      };
//     => print all items of this object in line 
//     //Output:
//     Vishal Kukreja
//     32
//     123 Mumbai fashion St
//     Midtown
//     MH
//     reading
//     drawing
//     gardening


//     Write a program to check if an array contains any number (strictly) or not.
//     Input:  [1,2,3] => true
//     [“1”, “a”, “h”] => false
//     [“a”, 3, “gh”] => true
//     [“a”, ‘3df’, “gh”] => false

//     const numbers = [1, 2, 3, 4];
//         => convert all number to string in given array

//     const numbers = [1, 2, 3, 4];
//     const doubled = numbers.map((num, index, array) => {
//       array.push(num * 2);
//       return num * 2;
//     });
//     console.log(numbers, doubled);



//     Array - https://codebeautify.org/jsonviewer/y23d22c85
//     => filter donuts based on which have topping  Chocolate
//     => filter donuts based which have batter type is regular and topping have Chocolate
//     => filter donuts based on which have topping chocolate and Sugar
//     => filter donuts based on ppu > 0.5
//     => bring all batters for all donuts in single array
//     => filter donuts based on which have 2 and more than 2 batter in it

//     Get name initials
//     input = "George Raymond Richard Martin"; Output: “GRRM”
//     input = “george raymond Richard Martin”; Output: “ GRRM”

//     Get output like example
//     input = "Every developer likes to mix kubernetes and javascript";
//     output = "E3y d7r l3s to mix k8s and j8t"

//     const products = [
//       { name: "Product 1", price: 20, category: "Electronics" },
//       { name: "Product 2", price: 30, category: "Clothes" },
//       { name: "Product 3", price: 40, category: "Electronics" },
//       { name: "Product 4", price: 50, category: "Clothes" },
//       { name: "Product 5", price: 60, category: "Clothes" },
//       { name: "Product 6", price: 70, category: "Electronics" },
//       { name: "Product 7", price: 80, category: "Clothes" },
//       { name: "Product 8", price: 90, category: "Electronics" },
//     ];
//     Note: 2 questions
//     Que1 => output: 
//         {
//        Clothes: 4,
//        Electronics: 4
//         }
//     Que 2 => count the total average of each category price.






//     const employees = [
//       { name: "John", salary: 50000, department: "IT" },
//       { name: "Jane", salary: 60000, department: "HR" },
//       { name: "Bob", salary: 55000, department: "IT" },
//       { name: "Sophie", salary: 75000, department: "HR" },
//       { name: "Mike", salary: 65000, department: "IT" },
//       { name: "Emily", salary: 80000, department: "HR" },
//       { name: "David", salary: 70000, department: "IT" },
//     ];

//     Que1: => count the average salary of each department
//     Que 2: =>  output: {
//                 IT: [50000,55000,65000,70000],
//                 HR: [60000,75000, 80000]
//              }

//     Make a function that returns the grouped data based on first letter of the string.
//     For Example: [“Jeel” , “Prakhar” , “Bhakti”, “Vansh”, “Meghna”, “Bhaumik”, “Pujan”, “Rudra”, “Sachin” , “Dhruval”]
//     Output: {
//             J: [“Jeel”],
//             P: [“Pakhar”, “Pujan”],
//             B: [“Bhakti”, “Bhaumik”],
//             …….. And so on
//             }

//      Make flat function manually (with depth and without depth)

//      Make filter function manually
//      Make map function manually

//      const input= [
//       { name: "John", salary: 50000, department: "IT" },
//       { name: "Jane", salary: 60000, department: "HR" },
//       { name: "Bob", salary: 55000, department: "IT" },
//       { name: "Sophie", salary: 75000, department: "HR" },
//       { name: "Mike", salary: 65000, department: "IT" },
//       { name: "Emily", salary: 80000, department: "HR" },
//       { name: "David", salary: 70000, department: "IT" },
//     ];
//     => make this data groupBy with first letter of the name (same as Que: 14)
//         Output::
//     {
//         J: [{ name: "John", salary: 50000, department: "IT" },  { name: "Jane", salary: 60000, department: "HR" },],
//     ….. and so on….
//         }
//     => make this data groupBy with department name
//         Output: {
//                 “IT”: [.....items of array which are from IT department],
//                 “HR”: [.....items of array which are from HR department],
//               }

//      What is the output of the following code?
//         let arr1 = [{a: 34}, {a: 45}, {a:12}, {a:5}, {a:78}];
//         let arr2 = arr1.map(item => item);
//         arr2[2].b = 45;
//     console.log(arr1);  // => 
//         console.log(arr2);  // =>

//     What is the output of the following code?
//     let arr1 = [{a: 34}, {a: 45}, {a:12}, {a:5}, {a:78}];
//         let arr2 = arr1.map(item => item.a * 2);
//     console.log(arr1);  // => 
//         console.log(arr2);  // =>

//     What is the output of the following code?
//     let arr = [1,2,3,4,5];
//     let arr2 = arr.reduce((a, c) => a + c).map(item => item);
//     console.log(arr2); // =>

//     What is the output of the following code?
//     const example = ({ a, b, c }) => {
//     console.log(a, b, c);  
//     };
//     example(0, 1, 2);

//      Find the Sum of Squares 
//     let arr = [1,2,3,4,5] => ans : 55

//     const students = [
//       { name: 'Alice', age: 20, grade: 'A' },
//       { name: 'Bob', age: 18, grade: 'B' },
//       { name: 'Charlie', age: 19, grade: 'A' },
//       { name: 'David', age: 20, grade: 'C' },
//     ];
//         => sort by age
//         => sort by grade
//         => sort by name
//         => average of ages
//         => sum of ages
//     const nestedArray = [[1, 2], [3, 4], [5, 6]];
//     => flat this array using reduce (NOTE: array will be only depth 1)

//     Create an array of squares of even numbers from a given array.
//     const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

//     Filter out duplicate values from an array.
//     const numbers = [1, 2, 2, 3, 4, 4, 5];

//     Find the first string that contains the letter 'a' in an array.
//     const words = ['apple', 'banana', 'orange'];

//     Find the index of the first odd number in an array.
//     const numbers = [2, 4, 6, 8, 9, 10];

//      Write a function that returns the factorial of given number

//     Find the index of the first person whose name starts with 'A' and age is less than 20.
//     const people = [
//       { name: 'Alice', age: 18 },
//       { name: 'Bob', age: 20 },
//       { name: 'Charlie', age: 19 },
//       { name: 'David', age: 21 }
//     ];



//      make a function that takes two parameter (arrayOfArray, array) and returns boolean based on following example:

//     fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [1, 2]) => true
//     fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [2, 1]) => true
//     fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [22, 15]) => false
//     fun_name([[1, 2], [34, 67], [67, 77], [22, 90, 15], [88, 90]], [22, 15, 90]) => true

//       make a function that takes two parameter (arrayOfArray, array) and returns boolean based on following example:

//     fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [1, 2]) => true
//     fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [2, 1]) => false
//     fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [22, 15]) => false
//     fun_name([[1, 2], [34, 67], [67, 77], [22, 90, 15], [88, 90]], [22, 15, 90]) => false

//     Write a JavaScript program to compute the union of two arrays.
//     Sample Data :
//     console.log(union([1, 2, 3], [100, 2, 1, 10]));
//     Output: [1, 2, 3, 10, 100]

//     Write a JavaScript function to find the difference between two arrays.
//     Test Data :
//     console.log(difference([1, 2, 3], [100, 2, 1, 10]));
//     Output: ["3", "10", "100"]
//     console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
//     Output: ["6"]
//     console.log(difference([1, 2, 3], [100, 2, 1, 10]));
//     Output: ["3", "10", "100"]

//     Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.
//     (FOR NOW CONSIDER THERE ARE ONLY ONE PAIR WHICH IS POSSIBLE SOLUTION)
//     Input: numbers= [10,20,10,40,50,60,70], target=50
//     Output: [10, 40] || [40,10]

//     Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
//     Expected result : [15, -22, 47]

//     Write a function that returns the result like examples
//     num_string_range('a', "z", 2) => ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
//     num_string_range("Z", "A", 2) => ["Z", "X", "V", "T", "R", "P", "N", "L", "J", "H", "F", "D", "B"]
//     num_string_range(0, -5, 1) => [0, -1, -2, -3, -4, -5]
//     num_string_range(0, 25, 5) => [0, 5, 10, 15, 20, 25]
//     num_string_range(20, 5, 5) => [20, 15, 10, 5]

//     Write a JavaScript function to remove a specific element from an array.
//     Test data :
//     remove_array_element([2, 5, 9, 6], 5); => [2, 9, 6]

//     Write a JavaScript function to find an array containing a specific element.
//     Test data : (ONLY FOR STRING AND NUMBER)
//     arr = [2, 5, 9, 6];
//     contains(arr, 5); => True
//     contains(arr, 10); => False

//      Write a JavaScript program to count the number of arrays inside a given array.
//     Test Data :
//     ([2,8,[6],3,3,5,3,4,[5,4]]) -> 2
//     ([2,8,[6,3,3],[4],5,[3,4,[5,4]]]) -> 3

//      Write a JavaScript program to find the maximum length of arrays inside a given array.
//     Test Data :
//     [2,8,[6],3,3,5,3,4,[5,4]] -> 2
//     [2,8,[6,3,3],[4],5,[3,4,[5,4]]] -> 3
//     [2,8,[6,3,3],[4],5,[3,4,[5,4]], [23,56]] -> 4
//     [1,5,2,6,4,23,89] -> 0

// ----------------------------------------------------------------

// Write a JavaScript program to check if an array is a factor chain or not.
// A factor chain is an array in which the previous element is a factor of the next    consecutive element. The following is a factor chain:
// [2, 4, 8, 16, 32]
// 2 is a factor of 4  // 4 is a factor of 8  // 8 is a factor of 16  // 16 is a factor of 32
let str='scgdss sachin'
console.log(str.search('d'));
console.log(str.split(''));
console.log(str.split(' '));
console.log(str.split());
// Test Data:
// ([2, 4, 8, 16, 32]) -> true([2, 4, 16, 32, 68]) -> false
// ([2, 4, 16, 32, 64]) -> true
