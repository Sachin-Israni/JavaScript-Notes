// -------------------------------------------------------------  conf questions

// let a = [0, 1, 2, "3", 4, 5]

// let b = -3
// let c = a.at(b)
// // console.log(a.join(","));
// console.log(a.toString());

// let ac = ["JS", "CSS", "JQUERY"]


// let ad = "JS, CSS, JQUERY"
// console.log(ad.split(","));   //  ['JS', 'CSS', 'JQUERY']

// console.log(ac.toString());

// -------------------------------------------------------------  conf questions
// -------------------------- 2 + 5 = 7 , 3 + 4 = 7    OUTPUT

// let a = [1, 2, 3, 4, 5]

// function plus7(arr,sum) {
//     let a=0;
//     let b=0;
//     if(arr[]){

//     }
// }

// -------------------------------------------------------------  outDuplicateValues

// let b = a.filter((a, b, c) => {
//     return c.indexOf(a) === b;
// })

// console.log(b);

// -------------------------------------------------------------  conf questions

// let a = ["Hello World"]  // Output:"olleH dlroW"
// let b = a.join()
// console.log(a);

// -------------------------------------------------------------  

// function upper(A) {
//     return A.toUpperCase()
// }

// let b=(upper('Sachin'))
// console.log(b);

// -------------------------------------------------------------  

// var a = 10;
// function nsd() {
//     console.log(a);
//     var b = 20;
//     console.log(b);
// }
// nsd()
// console.log(a);

// ------------------------------------------------------ Question 32

// make a function that takes two parameter (arrayOfArray, array) and returns boolean based on following example:

// function fun_name(arrayOfArray, array) {
//     let a = arrayOfArray.some(val => val.sort().every((ele, i) => ele == array.sort()[i]))
//     return a;
// }

// function jon(arr)

// function fun_name(arrayOfArray, array) {
//     // let a = arrayOfArray.some((val, i, arr) => {
//     //     return arr[i]=val
//     // })
//     // let a = arrayOfArray.flat().some((ele,i) => ele == array[0])
//     // let a = arrayOfArray.at(0)
//     let a = arrayOfArray.filter((val, i,arr) => {
//        if( arr[i] === array[i]){
//         return true
//        }
//        else return false
//     })
//     console.log(a);
// }


// function fun_name(arrayOfArray, array) {
//     for (i = 0; i < arrayOfArray.length; i++) {
//         let subArr = arrayOfArray[i]
//         if ( subArr.every((ele, i) => ele == array[i])){
//             return true
//         }
//         else{
//             return false
//         }
//     }
// }



// console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [1, 2])) // => true
// console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [2, 1])) // => true
// console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [22, 15])) // => false
// console.log(fun_name([[1, 2], [34, 67], [67, 77], [22, 90, 15], [88, 90]], [22, 15, 90])) // => true



// ------------------------------------------------------ Question 33

// make a function that takes two parameter (arrayOfArray, array) and returns boolean based on following example:


// function fun_name(arrayOfArray, array) {
//     let a = arrayOfArray.some(val => val.every((ele, i) => ele == array[i]))
//     return a;
// }


// console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [1, 2])) // => true
// console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [2, 1])) // => false
// console.log(fun_name([[1, 2], [34, 67], [67, 77], [88, 90]], [22, 15])) // => false
// console.log(fun_name([[1, 2], [34, 67], [67, 77], [22, 90, 15], [88, 90]], [22, 15, 90])) // => false



// ------------------------------------------------------ Question 34

// Write a JavaScript program to compute the union of two arrays.


// function union(arr1, arr2) {
//     let a = arr1.concat(arr2)
//     let bd = a.filter((val, i, array) => {
//         return array.indexOf(val) === i;
//     })
//     let sort = bd.sort((a, b) => a - b)
//     return sort;
// }

// console.log(union([1, 2, 3], [100, 2, 1, 10]));             // Output: [1, 2, 3, 10, 100]


// ------------------------------------------------------ Question 35

// Write a JavaScript function to find the difference between two arrays.
// Test Data :

function difference(arr1, arr2) {
    let a = arr1.concat(arr2)
    let bd = a.filter((val, i, array) => {
        return array.indexOf(val) === i;
    })
    let sort = bd.sort((a, b) => a - b)
    return sort;
}





console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// Output: ["3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// Output: ["6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// Output: ["3", "10", "100"]



// ------------------------------------------------------ at()  // Returns index num value

// let arr=[1,2,3,4]
// let abc = function () { }
// let b=arr.at(abc())
// console.log(arr);
// console.log(b);

// ------------------------------------------------------ concat()  // Returns new array

// let arr=[1,2]
// let b=arr.concat({a:abc()}, abc(), "Sachin")
// console.log(arr);
// console.log(b);


// ------------------------------------------------------ concat()  // change both arr with push/pop

// let arr=[[1],2,3,4,5]
// let arr1=[[11],12,13,14,15]
// let arr2=[11,12,13,14,15]
// let arr3=arr.concat(arr1,arr2)
// arr1[0].pop()
// arr2[0]=123
// arr3[5].push(2435)
// console.log(arr);
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// ------------------------------------------------------

// let obj = () => ({a:10})
// console.log(obj());


// ------------------------------------------------------ every()

// let a = [1, 2, 3, 4, 5]
// let b = a.every(val => val < 10)
// console.log(a);

// let b = a.map(val => val * 2)
// console.log(b);
