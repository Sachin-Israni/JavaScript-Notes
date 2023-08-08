// let a = new Promise((reslove, reject) => {
//     reject('I Have This')
// })

// a.then((value) => {
//     console.log(value + " value");
// }, (error) => {
//     console.log(error + " error");
// });

// new Promise(function (solve, rej) {
//     setTimeout(function () {
//         console.log('Asyn one started');
//         solve();
//     })
// }).then(function () {
//     console.log('Asyn one completed');
// })


// const promiseA = new Promise((resolve, reject) => {
//     resolve(777);
//     console.log('jsbdguha');
// });
// promiseA.then((val) => console.log("asynchronous logging has val:", val));
// console.log("immediate logging");

// const myFirstPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Success!");
//         console.log("fjgrfklnb");
//     }, 250);
// });

// myFirstPromise.then((successMessage) => {

//     console.log(`Yay! ${successMessage}`);
// });

// const THRESHOLD_A = 8;

// function tetheredGetNumber(resolve, reject) {
//     setTimeout(() => {
//         const randomInt = Date.now();
//         const value = randomInt % 10;
//         if (value < THRESHOLD_A) {
//             resolve(value);
//         } else {
//             reject(`Too large: ${value}`);
//         }
//     }, 500);
// }

// function determineParity(value) {
//     const isOdd = value % 2 === 1;
//     return { value, isOdd };
// }

// function troubleWithGetNumber(reason) {
//     const err = new Error("Trouble getting number", { cause: reason });
//     console.error(err);
//     throw err;
// }


// function resolveAfter2Seconds() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     console.log('aksj');
// Expected output: "resolved"
// }

// asyncCall();

// function promiseGetWord(parityInfo) {
//     return new Promise((resolve, reject) => {
//         const { value, isOdd } = parityInfo;
//         if (value >= THRESHOLD_A - 1) {
//             reject(`Still too large: ${value}`);
//         } else {
//             parityInfo.wordEvenOdd = isOdd ? "odd" : "even";
//             resolve(parityInfo);
//         }
//     });
// }

// new Promise(tetheredGetNumber)
//     .then(determineParity, troubleWithGetNumber)
//     .then(promiseGetWord)
//     .then((i) => {
//         console.log(`Got: ${i.value}, ${i.wordEvenOdd}`);
//         return i;
//     })
//     .catch((reason) => {
//         if (reason.cause) {
//             console.error("Had previously handled error");
//         } else {
//             console.error(`Trouble with promiseGetWord(): ${reason}`);
//         }
//     })
//     .finally((i) => console.log("All done"));

// let as=new Date()
// console.log(as.getDate());
// console.log(Date.now());

// function resolveAfter2Seconds() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }


// function asd() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             let a = 100;
//             console.log(a);
//             resolve()
//         }, 5000)
//     })
// }
// async function setting() {
//     const as = await asd();
//     let s = 288;
//     console.log(s);
// }

// setting()


let promise10 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolve Promise");
    }, 0);
    setTimeout(() => {
        reject("ERROR");
    }, 2);
});
promise10
    .then(value => console.log(value))
    .catch(error => console.log(error));

let promise11 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolve Promise");
    }, 10);
    setTimeout(() => {
        reject("ERROR");
    }, 2);
});
promise11
    .then(value => console.log(value))
    .catch(error => console.log(error));


