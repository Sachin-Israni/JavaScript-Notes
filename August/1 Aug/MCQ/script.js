let one = document.getElementsByClassName('one')
let sub = document.getElementById('submit')
let timer = document.getElementById('timer')
let main = document.getElementsByClassName('main')[0]
// console.log(main);

sec = 30
setInterval(() => {
    sec--
    timer.innerText = sec
    if (sec < 0) {
        timer.innerText = 0
    }
    stop()
}, 1000)

let newArr = Array.from(one)
newArr.forEach((e) => {
    e.addEventListener('click', () => {

        document.querySelector('.hoverColor')?.classList.remove('hoverColor')
        e.classList.add('hoverColor')

    })
})

sub.addEventListener('click', check)
function check() {
    main.classList.add('main2')
    if (document.querySelector('.hoverColor').innerText == '(a) Hydrogen gas and iron chloride are produced.') {
        document.querySelector('.hoverColor').style.backgroundColor = 'aqua'
        timer.innerText = 30 + sec - 30;
        sec = timer.innerText
        console.log(timer.innerText);
        console.log(sec);
        sub.removeEventListener('click', check)
    }
    else {
        let a = document.querySelectorAll('.one')
        Array.from(a).forEach((e) => {
            if (e.innerText == '(a) Hydrogen gas and iron chloride are produced.') {
                e.style.backgroundColor = 'aqua'
            }
        })
        document.querySelector('.hoverColor').style.backgroundColor = 'red'


        sub.removeEventListener('click', check)
    }
}

function stop() {
    if (main.classList.contains('main2')) {
        // console.log('Hello');
        clearInterval()
        sec = (30 + sec) - sec
    }
}