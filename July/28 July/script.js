let boxes = document.getElementById('boxes')
let box = document.getElementsByClassName('box')
let turnBtn = document.getElementById('turnBtn')
let turn = 'X'
let gameOver = false;

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
            turnBtn.innerText = turn + 'Won'
            console.log(turn);
            gameOver = true
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
            winnerDec()
            if (!gameOver) {
                turnBtn.innerText = 'Turn for ' + turn
            }
            turn = changeTurn()
        }
        // console.log(changeTurn());
        // console.log(xo);
    })

})

// console.log(Array.from(box)[0].innerText);
// e.textContent == 'X' ? e.textContent = '' : e.textContent = 'X'