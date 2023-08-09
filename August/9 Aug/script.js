//--------------- setTimeout()

// let a = setTimeout(() => {
//     alert('Hey I am here!')
// }, 5000)

// b = prompt('Do yu want to run the setTimeout')

//--------------- clearTimeout()

// if (b == 'no') {
//     clearTimeout(a)
//     console.log(b);
// }

//--------------- setInterval()

// c = 0;
// function sum(a, b) {
//     c++
//     console.log("The Answer is: " + (a + b));
//     console.log(c);

//--------------- clearInterval()

//     if (c == 5) {
//         clearInterval(int)
//     }
// }

// let int = setInterval(sum, 1000, 12, 23)
// let int2 = setTimeout(sum, 2000, 12, 23)

//--------------- for loop

// for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 2000)
// }

// for (var i = 0; i < 5; i++) {       // doubt
//     setTimeout(() => {
//         console.log(i);
//     }, 2000)
// }

// for (var i = 0; i < 5; i++) {
//     ((i) => {
//         setTimeout(() => {
//             console.log(i);
//         }, 2000)
//     })(i)
// }

//------------------------ Async Await

// let data = [
//     { name: "Sachin", Profession: "Actor" },
//     { name: "MS Dhoni", Profession: "Sports Man" }
// ]

// function getData() {
//     setTimeout(() => {
//         data.forEach((value) => {
//             console.log(value.name);
//         })
//     }, 1000)
// }

// function addData(newData, mainData) {
//     setTimeout(() => {
//         data.push(newData)
//         mainData()
//     }, 200)
// }
// addData({ name: "Rudra", Profession: "Manager" }, getData)

//----------------------- async / await
// function dataa() {
//     return new Promise((resolve, reject) => {
//         data.forEach(val => {
//             // reject = "ERROR"
//             // console.log(reject);
//             let a = val.name

//             // resolve(console.log(a))

//             reject('Not found such data')
//         })
//     })
// }
// async function getData() {
//     try {
//         let result = await dataa()
//         // console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getData()

//------------ 1st and 2nd Way

// function Register(cb){

//     setTimeout(()=>{
//         console.log("Register");
//         cb()
//     },2000)

// }
// function Email(cb){

//     setTimeout(()=>{
//         console.log("Email");
//         cb()
//     },2000)

// }
// function Login(cb){

//     setTimeout(()=>{
//         console.log("Login");
//         cb()
//     },2000)

// }
// function allDone(cb){

//     setTimeout(()=>{
//         console.log("allDone");
//         cb()
//     },5000)

// }
// function Welcome(){

//     setTimeout(()=>{
//         console.log("Welcome");
//     },2000)

// }

//-------- 1st way

// Email();
// Login();
// allDone();
// Welcome();

//-------- 2nd way- Callback hell

// Register(function(){
//     Email(function(){
//         Login(function(){
//             allDone(function(){
//                 Welcome()
//             })
//         })
//     })
// });

//-------- 3rd way-Using promises

// function Register() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Register");
//             resolve()
//         }, 3000)
//     })
// }
// function Email() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             return reject('erorrrrrrrrrrrrrrrrr')
//             console.log("Email");
//             resolve()
//         }, 1000)
//     })
// }
// function Login() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Login");
//             resolve()
//         }, 1000)
//     })
// }
// function allDone() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("allDone");
//             resolve()
//         }, 2000)
//     })
// }
// function Welcome() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Welcome");
//             resolve('ajsbk')
//             reject('ajsbk')
//         }, 1000)
//     })
// }

// ------------- Promises with channing then

// Register()
//     .then(Email).then((slove)=>console.log("solve"),(err)=>console.log(err))
//     .then(Login)
//     .then(allDone)
//     .then(Welcome).then(resolve=>console.log(resolve))

// --------------------- Async / await

// ---------------------------------------------------

// async function newFun(){
//     await Register()
//     await Email()
//     await Login()
//     await allDone()
//     await Welcome()
// }

// newFun().then(()=>{
//     console.log("Allllllll Doooonnnnneeeeeeeee");
// }).catch((err)=>{
//     console.log(err);
// })

// ---------------------------------------------------

// async function newFun() {
//     try {
//         await Register()
//         await Email()
//         await Login()
//         await allDone()
//         await Welcome()
//     } catch (error) {
//         console.log(error);
//         throw new Error()
//     }
// }

// newFun().then(() => {
//     console.log("Allllllll Doooonnnnneeeeeeeee");
// }).catch((err)=>{
//     console.log(err);
// })


// --------------------------------- spread

// let obj = { name: "Sachin", age: 15 }
// let obj4={city:"Ahemdabad",voter:"NO"}
// let obj2 = { ...obj, ...obj4 }
// console.log([obj2]);

// --------------------------------- rest

// function sum(...rest) {
//     sum = 0
//     for (let num of rest) {
//         sum += num
//     }
//     console.log(sum);
// }

// console.log(sum(1, 2, 3, 2, 2));
// sum(1, 2, 3, 2, 2)


// function time() {
//     setTimeout(() => {
//         console.log('sachin');
//     },5000)
// }

// async function newTime() {
//     let a = await time()
    
// }

newTime()

function time() {
    setTimeout(() => {
        console.log('sachin');
    },5000)
}

async function newTime() {
    let a = await time()
  console.log('sac414144hin');
}

newTime()