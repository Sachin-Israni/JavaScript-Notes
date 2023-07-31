let amt = document.getElementById('amount')
let amtgst = document.getElementById('amtgst')
let sub = document.getElementById('submit')
let check = document.getElementById('check')
let pc = document.getElementById('pc')
let demo = document.getElementById('demo')


let befgst = document.getElementById('befgst')
let aftgst = document.getElementById('aftgst')
let aftdis = document.getElementById('aftdis')
let aftdis2 = document.getElementById('aftdis2')
let disVal = document.getElementById('disVal')
let disPercen = document.getElementById('disPercen')

function checking() {
    var a = 0;
    var b = 1;
    if (val == 'OFF25') {
        demo.innerText = 'Promo Code Applied'
        demo.style.color = 'green'
        disPercen.innerText = "(-25%)"
        a = 25;
        b = 100;
        disVal.innerText = 'Rs.' + (amtgst.value * a / b)
        // befgst.innerText = 'Rs.' + amt.value
        // aftgst.innerText = 'Rs.' + amtgst.value
        // disVal.innerText = 'Rs.' + (amtgst.value * 25 / 100)
        // aftdis.innerText = 'Rs.' + (amtgst.value - (amtgst.value * 25 / 100))
        // aftdis2.innerText = 'Rs.' + (amtgst.value - (amtgst.value * 25 / 100))

    }
    else if (val == 'OFF50' && amt.value >= 1000) {
        demo.innerText = 'Promo Code Applied'
        demo.style.color = 'green'
        disPercen.innerText = "(-50%)"
        a = 50;
        b = 100;
        disVal.innerText = 'Rs.' + (amtgst.value * a / b)
        // befgst.innerText = 'Rs.' + amt.value
        // aftgst.innerText = 'Rs.' + amtgst.value
        // disVal.innerText = 'Rs.' + (amtgst.value * 50 / 100)
        // aftdis.innerText = 'Rs.' + (amtgst.value - (amtgst.value * 50 / 100))
        // aftdis2.innerText = 'Rs.' + (amtgst.value - (amtgst.value * 50 / 100))
    }
    else if (val == 'OFF75' && amt.value >= 1500) {
        demo.innerText = 'Promo Code Applied'
        demo.style.color = 'green'
        disPercen.innerText = "(-75%)"
        a = 75;
        b = 100;
        disVal.innerText = 'Rs.' + (amtgst.value * a / b)
        // befgst.innerText = 'Rs.' + amt.value
        // aftgst.innerText = 'Rs.' + amtgst.value
        // disVal.innerText = 'Rs.' + (amtgst.value * 75 / 100)
        // aftdis.innerText = 'Rs.' + (amtgst.value - (amtgst.value * 75 / 100))
        // aftdis2.innerText = 'Rs.' + (amtgst.value - (amtgst.value * 75 / 100))
    }
    else {
        demo.innerText = 'Invalid Promo Code'
        demo.style.color = 'Red'
        disPercen.innerText = "(0%)"
        disVal.innerText = 'Rs.' + "00"
        // befgst.innerText = 'Rs.' + amt.value
        // aftgst.innerText = 'Rs.' + amtgst.value
        // aftdis.innerText = 'Rs.' + amtgst.value
        // aftdis2.innerText = 'Rs.' + amtgst.value
    }
    // if (a == "undefined") {
    //     befgst.innerText = 'Rs.' + amt.value
    //     aftgst.innerText = 'Rs.' + amtgst.value
    //     aftdis.innerText = 'Rs.' + amtgst.value
    //     aftdis2.innerText = 'Rs.' + amtgst.value
    // }
    // else {
    // }
    befgst.innerText = 'Rs.' + amt.value
    aftgst.innerText = 'Rs.' + amtgst.value
    aftdis.innerText = 'Rs.' + (amtgst.value - (amtgst.value * a / b))
    aftdis2.innerText = 'Rs.' + (amtgst.value - (amtgst.value * a / b))

}

sub.addEventListener('click', () => {
    amtgst.value = Number(amt.value) + (amt.value * 18 / 100)
    if (amt.value < 500) {
        check.setAttribute('disabled', '')
        pc.setAttribute('disabled', '')
        befgst.innerText = 'Rs.' + amt.value
        aftgst.innerText = 'Rs.' + amtgst.value
        aftdis.innerText = 'Rs.' + amtgst.value
        aftdis2.innerText = 'Rs.' + amtgst.value
        disPercen.innerText = "(0%)"
        disVal.innerText = 'Rs.' + "00"
    }
    if (amt.value >= 500 || amt.value >= 1000 || amt.value >= 1500) {
        check.removeAttribute('disabled')
        pc.removeAttribute('disabled')
        check.addEventListener('click', () => {
            val = pc.value.toUpperCase().split(' ').join('')
            checking()
        })
    }

    // if (amt.value > 500) {
    //     check.addEventListener('click', () => {
    //         val = pc.value.toUpperCase().split(' ').join('')
    //         checking()
    //     })
    // }
    // if (amt.value > 1000) {
    //     check.addEventListener('click', () => {
    //         val = pc.value.toUpperCase().split(' ').join('')
    //         checking()
    //     })
    // }
    // if (amt.value > 1500) {
    //     check.addEventListener('click', () => {
    //         val = pc.value.toUpperCase().split(' ').join('')
    //         checking()
    //     })
    // }
})


// let a = '    off     25'
// console.log(a.split(' ').join(''));

