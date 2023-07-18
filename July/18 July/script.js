// const str = 'sachin'
// const str2 = new String("sachin")
// const str3 = String("sachin")
// console.log(typeof str);    // string
// console.log(typeof str2);   // object
// console.log(typeof str3);   // string
// console.log(str);   // sachin
// console.log(str2);  // String ('sachin)
// console.log(str3);  // sachin

// charAt
// console.log(str[0]);   // s
// console.log(str.charAt(0));   // s
// console.log('Z' < 'X');   // false
// console.log('Z' < 'x');   // true

//-----------------------------------------------------------------


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// function primeFun(array) {
//     return array.filter(ele => ele % 2 != 0 && ele % 3 != 0);
// }
// console.log(primeFun(arr));

//-----------------------------------------------------------------

function isPower(num, power) {
    let numList = []
    if (power % num == 0){
        for (let i = 1; i < power / 50; i++) {
            numList.push(num ** i)
        }
    }
    // console.log(numList);
    if (numList.includes(power)) {
        return true
    }
    return false
}
console.log(isPower(2, 512))
// console.log(Math.sqrt(9));

//-----------------------------------------------------------------

// function yourPrime(st = 1, end) {
//     let arr = []
//     for (i = st; i <= end; i++) {
//         if (i <= 10 ) {
//             arr.push(2,3,5,7,9)
//         }
//         if (i > 10) {
//             if (i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0) {
//                 arr.push(i)
//             }                // 2,3,5,7 is not inculded here solution error
//         }
//     }
//     return arr
// }
// console.log(yourPrime(1, 100));

//-----------------------------------------------------------------

// {
//     const live = function (sqr) {
//         let s = sqr;
//         return s * s;
//     }
//     console.log(live(5))
// }

//-----------------------------------------------------------------

// function sum(a,b,...rest){
//     let sum=0;
//     for(let i=0; i < arguments.length; i++){
//       sum += arguments[i];
//     }
//     return sum;
// }
// console.log(sum(10,20,30,40,50));


// function sum(a,b,...rest){
//     let sum=0;
//     let arr = [a,b,...rest]
//     for(let i=0; i < arr.length; i++){
//       sum += arr[i];
//     }
//     return sum;
// }
// console.log(sum(10,20,30,40,50));

//------------------- plus all argument , infinite arguments and paramethers

// function sum(a, b, ...rest) {
//     let arr = [a, b, ...rest]
//     console.log(arr);
//     let arr2=arr.reduce((a, c) => a + c)
//     return arr2
// }
// console.log(sum(10, 20, 30, 40, 50, 50, 50, 50, 50, 50, 50))


//------------------- concat all argument , infinite arguments and paramethers

// function sum(a, b, ...rest) {
//     let arr = [a, b, ...rest]
//     console.log(arr);
//     let arr2=arr.reduce((a, c) => a + c)
//     return arr2
// }
// console.log(sum("sachin ","sachin ","sachin ","sachin"))

// --------------------------------------- function for split each word in same number

// function string_chop(str, length = str.length) {
//     let strArr = str.split('');
//     let arr = [];
//     for (i = 0; i < strArr.length; i += length) {
//         arr.push(strArr.slice(i, i + length).join(''));
//     }
//     return arr;
// }
// console.log(string_chop('w3resource'));
// console.log(string_chop('w3resource', 2));
// console.log(string_chop('w3resource', 3));

// let a=Number('123')
// let b=new Number('123')
// console.log(a);
// console.log(b);
// console.log(typeof a);
// console.log(typeof b);

// function abc(a,b) {
//     function a(){
//         return a
//     }
//     function b() {
//         return b
//     }
//     return a()+b()
// }

// console.log(abc());