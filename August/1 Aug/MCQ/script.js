let one = document.getElementsByClassName('one')
let sub = document.getElementById('submit')
let timer = document.getElementById('timer')
let main = document.getElementsByClassName('main')[0]
let next = document.getElementById('next')
let answer = document.querySelector('.answer')
console.log(answer.innerText);
// console.log(main);

sec = 30
let set = setInterval(() => {
    sec--
    timer.innerText = sec
    if (sec < 0) {
        timer.innerText = 0
    }
    // stop()
}, 1000)

let newArr = Array.from(one)
newArr.forEach((e) => {
    e.addEventListener('click', () => {

        if (sub.innerText == 'Next') {
            e.removeEventListener('click')
        }
        document.querySelector('.hoverColor')?.classList.remove('hoverColor')
        e.classList.add('hoverColor')

    })
})
console.log(newArr.filter(e => e.innerText.startsWith('(a)')));
sub.addEventListener('click', check)
function check() {
    // main.classList.add('main2')
    // if (document.querySelector('.hoverColor').innerText == '(a)') {
    if (document.querySelector('.hoverColor').innerText == newArr.filter(e => e.innerText.startsWith(answer.innerText))) {
        document.querySelector('.hoverColor').style.backgroundColor = 'greenyellow'
    }
    else {
        let a = document.querySelectorAll('.one')
        Array.from(a).forEach((e) => {
            console.log(e.innerText.includes(answer.innerText));
            if (e.innerText.includes(answer.innerText)) {
                e.style.backgroundColor = 'greenyellow'
            }
        })
        document.querySelector('.hoverColor').style.backgroundColor = 'red'
    }

    sub.removeEventListener('click', check)
    clearInterval(set)
    sub.classList.add('none')
    next.classList.remove('none')
}

next.addEventListener('click', () => {
    sub.classList.remove('none')
    next.classList.add('none')
})
// i=0;index
// i++