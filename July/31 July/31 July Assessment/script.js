let amt = document.getElementById('amount')
let amtgst = document.getElementById('amtgst')
let sub = document.getElementById('submit')
let check = document.getElementById('check')
let pc = document.getElementById('pc')

sub.addEventListener('click', () => {
    amtgst.value = amt.value - (amt.value * 18 / 100)
    if (amtgst.value > 500) {
        check.removeAttribute('disabled')
        check.addEventListener('click', () => {
            val = pc.value.toUpperCase().trim()
            console.log(val);
            if (val == 'OFF25') {
                let demo = document.getElementById('demo')
                demo.innerText = 'Promo Code Applied'
                demo.style.color = 'green'
            }
        })
    }
    if (amtgst.value > 1000) {
        discount = 25
    }
    if (amtgst.value > 500) {
        discount = 25
    }
})
let a = 'off 25'
console.log(a.filter(Boolean));