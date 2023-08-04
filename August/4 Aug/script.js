// ---------------------------

// let arr = [
//     { type: 'name', value: 20 },
//     { type: 'other', value: 10 },
//     { type: 'audio', value: 18 },
//     { type: 'video', value: 22 },
//     { type: 'name', value: 2 },
//     { type: 'other', value: 25 },
//     { type: 'audio', value: 30 }
// ]

// const { type, value } = arr[0]
// console.log(type);
// console.log(value);

// let sumByType = {};
//--- type value 
// let sumByType = {sname:20};
// let newA={type:'sname',noty:'other'}
// const {type,noty}=newA
// console.log(sumByType[type]);

// arr.forEach(item => {
//     const { type, value } = item;
//     sumByType[type] = type +'   ' + (sumByType[type] || 0) + value;
//     // console.log(sumByType[type] || 0);
//     console.log(sumByType[type]);
// });


// let output = Object.keys(sumByType).map(type => ({
//   type,
//   value: sumByType[type]
// }));

// console.log(output);
// console.log(sumByType);



// let b = arr.filter((v, i, arr) => {
//     // return e.type.includes('name')
//     return arr.indexOf(v) === i.type
// })
// let c = b.map(e => e.value).reduce((a, b) => a + b)
// console.log(b);
// console.log(c);
// let emtArr = []
// let a=[]
// let arr2 = arr.map((ele,i) => {
//     // emtArr.push(ele)
//     // emtArr.push(arr[i].type)
//     // console.log(emtArr);
//     if (arr.map(e=>e.type).includes(ele.type)) {
//         return ele.value + ele.value
//     }
//     else {
//         a.push(ele)
//     }
// })
// // console.log(['sname'].includes('sname'));
// console.log(arr2);
// console.log(emtArr);
// console.log(a);




let send = document.getElementById('send')
let main = document.getElementsByClassName('pParent')[0]

let input = document.getElementById('input')
send.addEventListener('click',()=> {
    main.innerHTML+=`<div class='main2'><p>${input.value}</p><div>`
    input.value=''
})      