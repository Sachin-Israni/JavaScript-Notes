// ---------------------------

let arr = [
    { type: 'name', value: 20 },
    { type: 'other', value: 10 },
    { type: 'audio', value: 18 },
    { type: 'video', value: 22 },
    { type: 'name', value: 2 },
    { type: 'other', value: 25 },
    { type: 'audio', value: 30 }
]

const { type, value } = arr[0]
console.log(type);
console.log(value);

// -------------------------- type value 

// let sumByType = {sname:20};
// let newA={type:'sname',noty:'other'}
// const {type,noty}=newA
// console.log(sumByType[type]);

//----------------------------

let sumByType = {};
arr.forEach(item => {
    const { type, value } = item;
    // console.log(sumByType[type]);
    sumByType[type] = (sumByType[type] || 0) + value;
});
    // console.log(sumByType[type] = (sumByType[type] || 0) + value);
    // sumByType[type] = type +'   ' + (sumByType[type] || 0) + value;
    // console.log(sumByType[type] || 0);
console.log(sumByType);

let output = Object.keys(sumByType).map(type => ({
    type: type,
    value: sumByType[type]
}));


console.log(output);



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
let send2 = document.getElementById('send2')
let main = document.getElementsByClassName('pParent')[0]
let main2 = document.getElementsByClassName('pParent2')[0]

let input = document.getElementById('input')
let input2 = document.getElementById('input2')
send.addEventListener('click',()=> {
    main.innerHTML+=`<div class='main2'><p>${input.value}</p><div>`
    main2.innerHTML+=`<div class='main2 align-left'><p>${input.value}</p><div>`
    input.value=''
})      

send2.addEventListener('click',()=> {
    if(input2.value==''){

    }
    else{
        main2.innerHTML+=`<div class='main2'><p>${input2.value}</p><div>`
        main.innerHTML+=`<div class='main2 align-left'><p>${input2.value}</p><div>`
        input2.value=''
    }
})      





