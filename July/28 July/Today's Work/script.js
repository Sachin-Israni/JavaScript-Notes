let boxes = document.getElementById('boxes')
let box = document.getElementsByClassName('box')
let turnBtn = document.getElementById('turnBtn')
let play = new Audio('mixkit.wav')
let winSound = new Audio('win.mp3')
let turn = 'X'
let gameOver = false;
turnBtn.innerText = 'Let\'s\ Begin the Game '


function reset() {
    location.reload()
}

// ----------- Winner Declaration
function winnerDec() {
    let xo = document.getElementsByClassName('xo')
    let winner = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    winner.forEach(e => {
        // console.log(xo[1].innerText);
        if ((xo[e[0]].innerText === xo[e[1]].innerText) && (xo[e[2]].innerText === xo[e[1]].innerText) && (xo[e[0]].innerText !== '')) {
            turnBtn.innerText = xo[e[0]].innerText + ' Won'
            winSound.play()
            gameOver = true
            setTimeout(() => {
                location.reload()
            }, 2000)
        }
    })
}

// ------ Changes the turn
function changeTurn() {
    return turn === "X" ? "O" : "X"
}

// --------- Function for moving loop on each element while clicking
Array.from(box).forEach((e) => {

    e.addEventListener('click', () => {

        let xo = e.querySelector('.xo')
        if (xo.innerText === '') {
            xo.innerText = turn;
            turn = changeTurn()
            winnerDec()
            if (!gameOver) {
                play.play()
                turnBtn.innerText = 'Turn for ' + turn
            }
        }
        // console.log(changeTurn());
        // console.log(xo);
    })


})

// console.log(Array.from(box)[0].innerText);
// e.textContent == 'X' ? e.textContent = '' : e.textContent = 'X'

let btn = document.getElementsByTagName('button')[0]
btn.addEventListener('mousedown', () => {
    btn.style.backgroundColor = '#109273'
})
// ---------------- Function for undo btn

let undo = document.getElementById('undo')
undo.addEventListener('click', () => {
    console.log(e)
})


// ------------------------------------

// let a = 'sacg     jjj'
// let b = a.split(' ')
// console.log(b[0] + ' ' + b[b.length - 1]); // sacg jjjj
// console.log('       dsds              sdsdsd       '.split(" ").filter(Boolean).join(" "))

