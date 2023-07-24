let main = document.getElementById('main')
let btn = document.getElementById('btn')
let not = document.getElementById('notification')
let noti = ["Hi there", "Have A Nice Day", "Thanks!", "Follow Me"]
console.log(noti[1]);
let noti2 = document.createElement('div')

btn.addEventListener('mouseenter', function noway() {
    let random = noti[Math.floor(Math.random() * noti.length)]
    noti2.innerText = random
    noti2.style.color = 'white'
    not.append(noti2)
    setTimeout(() => {
        not.firstChild.remove()
        // not.lastChild.remove()
    }, 1000);
})
// for (let i = 0; i < btn.addEventListener('click', noway); i++) {
    // div.style.rigth += 100
    // console.log(i + '\n');
// }


// btn.addEventListener('dblclick', (e) => {
//     let div = document.createElement('div')
//     div.innerHTML = 'How are you?'
//     div.style.backgroundColor = '#fff'
//     div.style.Color = 'black'
//     main.append(div)
//     setTimeout(() => {
//         div.remove()
//     }, 1000)
// })