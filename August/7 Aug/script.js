// ------------------ Synchronous 

// ------------- Demo Example 

// function fun2() {
//     console.log('Fun2 is starting');
// }

// function fun1() {
//     console.log('Fun1 is starting');
//     fun2();
//     console.log('Fun1 is ending');
// }
// fun1()

// ------------------ Asynchronous 

// ------------- Demo Example 

// function fun2() {
//     setTimeout(()=>{
//         console.log('Fun2 is starting');
//     },2000)
// }

// function fun1() {
//     console.log('Fun1 is starting');
//     fun2();
//     console.log('Fun1 is ending');
// }
// fun1()


//------------------ Promises

// -------- Normal resolve & reject 

// let pro1 = new Promise((resolve, reject) => {
//     resolve('Resolved')
// })
// let pro2 = new Promise((resolve, reject) => {
//     reject('Rejected')
// })

// console.log(pro1);
// console.log(pro2);

// -------- setTimeOut resolve & reject 

let pro1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolved')
    }, 2000)
})
let pro2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Rejected')
    }, 2000)
})

//------------ then & catch

// pro1.then(alert)
// pro1.then((value)=>{
//     console.log(value);
// })
// pro2.catch((error)=>{
    // console.log('Some error occured');
    // console.log(error);
// })

pro2.then((value) => {
    console.log(value);
}
,
(error) => {
    console.log(error);
})

console.log(pro1);
console.log(pro2);

