// let call = document.getElementById('call')
// let cloth = document.getElementById('cloth')
// call.addEventListener('click', () => {
//     cloth.classList.add('none')
//     console.log('a');
// })
// call.addEventListener('click',()=>{
//     console.log('a');
// })


// const numbers = [1,2, 2, 3, 4, 4, 5];
// let filterArray = numbers.filter((a,b,c)=>{
//     return c.indexOf(a)===b;
// });
// console.log(filterArray);


let arr = [
    { type: 'name', value: 20 },
    { type: 'other', value: 10 },
    { type: 'audio', value: 18 },
    { type: 'video', value: 22 },
    { type: 'name', value: 2 },
    { type: 'other', value: 25 },
    { type: 'audio', value: 30 }
]
// let b=arr.filter((e)=>{
//     return e.type.includes('name')
// })
// let c=b.map(e=>e.value).reduce((a,b)=>a+b)
let obj = {}
let b = arr.map(e => {
    return e.type
})
let c = b.filter((v, i, arr) => {
    return arr.indexOf(v) === i
})
let d=arr.map((v,i,arr)=>{})
console.log(b);
console.log(c);


//---------------------------

// let b = arr.filter((v, i, arr) => {
//     // return e.type.includes('name')
//     return arr.indexOf(v) === i.type
// })
// let c = b.map(e => e.value).reduce((a, b) => a + b)
// console.log(b);
// console.log(c);
// let emtArr = []
// let arr2 = arr.map((ele) => {
//     emtArr.push(ele)
//     a = emtArr
//     console.log(a);
//     // if (!a.includes(ele.type)) {
//     //     emtArr.push(ele)
//     // }
//     // else {
//     //     emtArr.value + ele.value
//     // }
// })
// // console.log(['sname'].includes('sname'));
// // console.log(arr2);