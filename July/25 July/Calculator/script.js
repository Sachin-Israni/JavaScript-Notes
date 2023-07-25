// let input = document.getElementsByTagName('input')[0].value
// console.log(input);
// // let th=document.querySelectorAll('th')
// // console.log(th);
// let th2 = document.getElementsByTagName('th')
// console.log(th2);
// let inputVal = input
// console.log(inputVal);
// for (i = 0; i < th2.length; i++) {
//     th2[i].addEventListener('click', () => {
//         for (i = 0; i < th2.length; i++) {
//             input = th2[i].innerText
//             console.log(input);
//             // console.log(th2[i].innerText);
//         }
//     })
// }


function clr() {
    document.getElementById('result').value = ''
}
function display(val) {
    document.getElementById('result').value += val
}
function equate() {
    let x = document.getElementById('result').value
    let y = eval(x)
    document.getElementById('result').value = y
}