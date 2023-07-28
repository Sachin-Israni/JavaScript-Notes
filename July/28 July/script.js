let box = document.getElementById('box')
let xo = document.getElementsByClassName('xo')
Array.from(xo).forEach(e => {
    e.textContent='X'
})