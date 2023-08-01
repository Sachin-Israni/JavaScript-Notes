let userInputAmt = document.getElementById('amount')        // User Input Amount
let amtgst = document.getElementById('amtgst')              // after clicking the submit buttom amount * 18% = amtgst
let pc = document.getElementById('pc')                      // promo code input value 
let check = document.getElementById('check')                // checking promo code is valid or invalid
let demo = document.getElementById('demo')                  // blank paragraph tag for showing the error


let befgst = document.getElementById('befgst')              // Show the amount before deducting with gst in the plce of consultation
let aftgst = document.getElementById('aftgst')              // after the deduction of gst the amount will be shown under the 18% in summary
let disPercen = document.getElementById('disPercen')        // precentage if any applicable on the amount with gst 
let disVal = document.getElementById('disVal')              // Display the amount of deduction after appliying the promo code 
let aftdis = document.getElementById('aftdis')              // After the discount the value is display in the line of total
let aftdis2 = document.getElementById('aftdis2')            // and this value is shown at the end of the page in the line of  pay now button 

function checking() {
    var a = 0;
    var b = 1;
    if (val == 'OFF25') {
        demo.innerText = 'OFF25 Promo Code Applied'
        demo.style.color = 'green'
        disPercen.innerText = "Discount (-25%)"
        a = 25;
        b = 100;
        disVal.innerText = 'Rs.' + (gstAmt * a / b)
        // befgst.innerText = 'Rs.' + userInputAmt.value
        // aftgst.innerText = 'Rs.' + amtgst.value
        // disVal.innerText = 'Rs.' + (amtgst.value * 25 / 100)
        // aftdis.innerText = 'Rs.' + (amtgst.value - (amtgst.value * 25 / 100))
        // aftdis2.innerText = 'Rs.' + (amtgst.value - (amtgst.value * 25 / 100))

    }
    else if (val == 'OFF50' && userInputAmt.value >= 1000) {
        demo.innerText = 'OFF50 Promo Code Applied'
        demo.style.color = 'green'
        disPercen.innerText = "Discount (-50%)"
        a = 50;
        b = 100;
        disVal.innerText = 'Rs.' + (gstAmt * a / b)
        // befgst.innerText = 'Rs.' + userInputAmt.value
        // aftgst.innerText = 'Rs.' + amtgst.value
        // disVal.innerText = 'Rs.' + (amtgst.value * 50 / 100)
        // aftdis.innerText = 'Rs.' + (amtgst.value - (amtgst.value * 50 / 100))
        // aftdis2.innerText = 'Rs.' + (amtgst.value - (amtgst.value * 50 / 100))
    }
    else if (val == 'OFF75' && userInputAmt.value >= 1500) {
        demo.innerText = 'OFF75 Promo Code Applied'
        demo.style.color = 'green'
        disPercen.innerText = "Discount (-75%)"
        a = 75;
        b = 100;
        disVal.innerText = 'Rs.' + (gstAmt * a / b)
        // befgst.innerText = 'Rs.' + userInputAmt.value
        // aftgst.innerText = 'Rs.' + amtgst.value
        // disVal.innerText = 'Rs.' + (amtgst.value * 75 / 100)
        // aftdis.innerText = 'Rs.' + (amtgst.value - (amtgst.value * 75 / 100))
        // aftdis2.innerText = 'Rs.' + (amtgst.value - (amtgst.value * 75 / 100))
    }
    else {
        demo.innerText = 'Invalid Promo Code'
        demo.style.color = 'Red'
        disPercen.innerText = "Discount (0%)"
        disVal.innerText = 'Rs.00'
        // befgst.innerText = 'Rs.' + userInputAmt.value
        // aftgst.innerText = 'Rs.' + amtgst.value
        // aftdis.innerText = 'Rs.' + amtgst.value
        // aftdis2.innerText = 'Rs.' + amtgst.value
    }
    // if (a == "undefined") {
    //     befgst.innerText = 'Rs.' + userInputAmt.value
    //     aftgst.innerText = 'Rs.' + amtgst.value
    //     aftdis.innerText = 'Rs.' + amtgst.value
    //     aftdis2.innerText = 'Rs.' + amtgst.value
    // }
    // else {
    // }
    befgst.innerText = 'Rs.' + userInputAmt.value
    aftgst.innerText = 'Rs.' + gstAmt
    aftdis.innerText = 'Rs.' + (gstAmt - (gstAmt * a / b))
    aftdis2.innerText = 'Rs.' + (gstAmt - (gstAmt * a / b))
    // aftdis.innerText = 'Rs.' + (gstAmt - (gstAmt * a / b))
    // aftdis2.innerText = 'Rs.' + (gstAmt - (gstAmt * a / b))

}

userInputAmt.addEventListener('input', () => {
    gstAmt = (Number(userInputAmt.value) + (userInputAmt.value * 18 / 100)).toFixed(2)
    // gstAmt = Number(amtgst.value)
    pc.addEventListener('input', () => {
        if (pc.value == '') {
            check.setAttribute('disabled', '')
            check.style.opacity = '.7'
            disPercen.innerText = "Discount (0%)"
            disVal.innerText = 'Rs.00'
            aftgst.innerText = 'Rs.' + gstAmt
            aftdis.innerText = 'Rs.' + gstAmt
            aftdis2.innerText = 'Rs.' + gstAmt
        }
        else {
            check.removeAttribute('disabled')
            check.style.opacity = '1'
        }
    })


    if (userInputAmt.value < 0) {
        befgst.innerText = 'Rs.00'
        aftgst.innerText = 'Rs.00'
        aftdis.innerText = 'Rs.00'
        aftdis2.innerText = 'Rs.00'
        disPercen.innerText = "Discount (0%)"
        disVal.innerText = 'Rs.' + "00"
    }

    else if (userInputAmt.value < 500) {
        if (userInputAmt.value == '') {
            befgst.innerText = 'Rs.' + '00'
        }
        else {
            befgst.innerText = 'Rs.' + userInputAmt.value
        }
        aftgst.innerText = 'Rs.' + gstAmt
        aftdis.innerText = 'Rs.' + gstAmt
        aftdis2.innerText = 'Rs.' + gstAmt
        disPercen.innerText = "Discount (0%)"
        disVal.innerText = 'Rs.' + "00"
    }

    else if (userInputAmt.value >= 500 || userInputAmt.value >= 1000 || userInputAmt.value >= 1500) {
        befgst.innerText = 'Rs.' + userInputAmt.value
        aftgst.innerText = 'Rs.' + gstAmt
        aftdis.innerText = 'Rs.' + gstAmt
        aftdis2.innerText = 'Rs.' + gstAmt
        check.addEventListener('click', () => {
            val = pc.value.toUpperCase().split(' ').join('')
            checking()
        })
    }

    // if (userInputAmt.value > 500) {
    //     check.addEventListener('click', () => {
    //         val = pc.value.toUpperCase().split(' ').join('')
    //         checking()
    //     })
    // }
    // if (userInputAmt.value > 1000) {
    //     check.addEventListener('click', () => {
    //         val = pc.value.toUpperCase().split(' ').join('')
    //         checking()
    //     })
    // }
    // if (userInputAmt.value > 1500) {
    //     check.addEventListener('click', () => {
    //         val = pc.value.toUpperCase().split(' ').join('')
    //         checking()
    //     })
    // }
})


// let a = '    off     25'
// console.log(a.split(' ').join(''));

