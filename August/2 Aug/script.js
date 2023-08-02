// let input = document.getElementById('input')
// let inp = document.getElementById('in')
// let change = document.getElementById('change')
// let keyp = document.getElementById('keyp')
// let keyd = document.getElementById('keyd')
// let keyu = document.getElementById('keyu')

// color2.addEventListener('input', () => {
//     document.body.style.backgroundColor = color2.value
// })
// input.addEventListener('input', () => {             // not working
//     inset.innerText = input.value
//     // input.style.backgroundColor = 'purple'
// })
// input.addEventListener('change', () => {
//     change.innerText = input.value
// })
// input.addEventListener('blur', () => {
//     input.style.backgroundColor = 'yellow'
// })
// input.addEventListener('focus', () => {
//     input.style.backgroundColor = 'red'
// })
// input.addEventListener('keypress', () => {
//     keyp.innerText = input.value
// })
// input.addEventListener('keydown', () => {
//     keyd.innerText = input.value
// })
// input.addEventListener('keyup', () => {             // not working
//     // input.style.backgroundColor = 'purple'
//     keyu.innerText = input.value
// })



// ------------------ make array unfalt

let arr = [1, 2, 3, 4, 5, 6]
let arr2 = [];
for (i = 0; i < arr.length; i += 2) {
    let arr4 = [];
    arr4.push(arr[i], arr[i + 1])
    arr2.push(arr4)
}
console.log(arr);
console.log(arr2);

// i = 0;
// let arr2 = arr.map((e, i, arr) => {
//     let arr4 = [];
//     e = arr[i]
//     arr4.push(arr[i], arr[i] + 1);
//     i = i + 2;
//     console.log(arr4);
//     // console.log(i);
//     return arr4
// })

// ----------------- color changer with color name and rgb correct format 

input.addEventListener('change', () => {
    x = input.value
    console.log(x);
    document.body.style.backgroundColor = x
    console.log(document.body.style.backgroundColor);
    if (document.body.style.backgroundColor == x) {
        document.body.style.backgroundColor = x
        demo.innerText = ''
    }
    else {
        document.body.style.backgroundColor = 'white'
        demo.innerText = 'Input color incorrect'
    }

})