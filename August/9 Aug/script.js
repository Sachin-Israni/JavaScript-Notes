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

let data=[
    {name:"Sachin",Profession:"Actor"},
    {name:"MS Dhoni",Profession:"Sports Man"}
]

function getData(){
    setTimeout(()=>{
        data.forEach((value)=>{
            console.log(value.name);
        })
    },1000)
}

function addData(newData,mainData){
    setTimeout(()=>{
        data.push(newData)
        mainData()
    },200)
}
addData({name:"Rudra",Profession:"Manager"},getData)

