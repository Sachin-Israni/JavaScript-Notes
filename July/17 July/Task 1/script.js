// let alink = document.getElementsByTagName('a')
// let alink = document.querySelectorAll('a')

// function bgc() {
//     if (ele.style.backgroundColor != 'red') {
//         ele.style.backgroundColor = 'red'
//     }
//     else {
//         ele.style.backgroundColor = 'white'
//     }
//     // ele.style.color='red'
// }
// console.log(alink);
// for (i = 0; i <= alink.length; i++ ) {

//     alink[i].style.color = 'red'
// }
// alink.forEach(ele => {
//     ele.addEventListener('click', function bgc() {
//     if (ele.style.backgroundColor != 'red') {
//         ele.style.backgroundColor = 'red'
//     }
//     else {
//         ele.style.backgroundColor = 'white'
//     }
//     // ele.style.backgroundColor='white'
// })
// })

//---------- nav-list color change

// alink.forEach(ele => {
//     ele.addEventListener('click', () => {
//         document.querySelector('.active')?.classList.remove('active');
//         ele.classList.add('active')
//     });
// });


// let fan = document.getElementById('fa')
// fan.addEventListener('click', fa)
// function fa() {
//     document.body.style.backgroundColor = 'red'
//     let logo = document.getElementsByClassName('logo')
//     logo[0].style.visibility = 'hidden'

//     let faa = document.getElementById('fa')
//     if (faa.innerHTML != '<i class="fa fa-close">') {
//         faa.innerHTML = '<i class="fa fa-close" onclick="fas()">'
//     }
// }
// function fas() {
//     document.body.style.backgroundColor = 'white'
// }

//--------------------------------------------------- 

// const a = [1, 2, 3, 4, 5]
const a = [{id:1},{id:2}]
const b = [
    { id: 2, name: 'hi' },
    { id: 3, name: 'hi' },
    { id: 1 },
    { id: 4, name: 'hi' },
    { id: 20, name: 'hi' },
    { id: 20, name: 'hi' },
]

// const c = b.filter(ele => {
//     if (!a.includes(ele.id)){
//         return ele.id
//     }
// })
const num=a.map(ele=>ele.id)
console.log(num);
const c = b.filter(ele => !num.includes(ele.id))
// const c = b.filter(ele => a.includes(ele.id))

console.log(c);

//--------------------------------------------------- 

// function lw(){
//     var wer=10;
// }
// console.log(wer);


//--------------------------------------------------- 


// let as=98;
// function qbsw(){
//     let x=10;
//     function abs(){
//         let as=10
//         console.log(as);
//     }
//     abs()
// }
// qbsw()

//--------------------------------------------------- 

// let obj = { a: 10, c: 12, s: 23, p: 24 }
// let { a, c, ...rest } = obj
// console.log(a);
// console.log(rest.s);
// console.log(rest);

//--------------------------------------------------- 43

// Write a JavaScript program to check if an array is a factor chain or not.
//  A factor chain is an array in which the previous element is a factor of the next    consecutive element. The following is a factor chain:

// 2 is a factor of 4  // 4 is a factor of 8  // 8 is a factor of 16  // 16 is a factor of 32
// Test Data :
// ([2, 4, 8, 16, 32]) -> true          ([2, 4, 16, 32, 68]) -> false
// ([2, 4, 16, 32, 64]) -> true

// [2, 4, 8, 16, 32]

// function factorArr(arr) {
//     return arr.every((val, i, arr) => {
//         if (arr[i+1] == undefined) {
            
//         }
//         else {
//             arr[i + 1] == arr[i] * 2
//         }
//     })
// }
// let arr = [2, 4, 8, 16, 32]
// console.log(factorArr(arr));