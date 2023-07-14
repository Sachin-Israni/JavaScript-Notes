let text = document.getElementsByClassName('myClass')
console.log(text);
let text1 = Array.from(text)
console.log(text1);

// foreach()
// text1.forEach(ele => {
//     return ele.innerHTML = 'New Words'
// });

// map()
// let text2 = text1.map((ele) => ele.innerHTML = ele.innerHTML*2 )
// console.log(text2);

let text2 = text1.filter((ele) => ele.innerHTML == 2)
console.log(text2);