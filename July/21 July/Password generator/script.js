let passInput = document.getElementById('pass')
let range = document.getElementById('range')
let up = document.getElementById('UpperCase')
let sc = document.getElementById('SpecialCharacters')
let num = document.getElementById('number')
let demo = document.getElementById('demo')
let reset = document.getElementById('reset')
let btn = document.getElementById('btn')
let lc = document.getElementById('LowerCase')
let LC = document.getElementsByTagName('input')

reset.addEventListener('click', () => {
    location.reload()
})
for (let i = 0; i < LC.length; i++) {
    LC[i].addEventListener('click', () => {
        if (!LC[i].hasAttribute('checked')) {
            LC[i].setAttribute('checked', '')
        }
        else {

            LC[i].removeAttribute('checked')
        }
    })
}


// btn.addEventListener('click', () => {
//     var storePass = '';
//     for (i = 0; i < range.value; i++) {
//         let randomNum = Math.floor(Math.random() * 100)
//         if (randomNum < 35) {
//             storePass += randomNum
//         }
//         else {
//             storePass += String.fromCharCode(randomNum)
//         }
//         passInput.value = storePass.slice(0, range.value)
//     }
//     console.log(passInput.value);
//     console.log(passInput.value.length);
// })



// console.log(String.fromCharCode(33-47,58-64,91-96,123-126));// sc
// console.log(String.fromCharCode(48-57));// num
// console.log(String.fromCharCode(65-90));// uc
// console.log(String.fromCharCode(97-122));// lc


//------------------------------------- Generate random code

btn.addEventListener('click', () => {
    let str = '';

    // --------------- if not check any box
    // if (demo.style.display == 'block') {
    //     demo.style.display = 'none'
    // }

    // else {
    //     demo.style.display = 'block'
    // }

    

    // ---------------- Upper Case
    if (up.hasAttribute('checked')) {
        for (let i = 65; i <= 90; i++) {
            str += String.fromCharCode(i)
        }
    }

    // --------------- Lower Case 
    if (lc.hasAttribute('checked')) {
        for (let i = 97; i <= 122; i++) {
            str += String.fromCharCode(i)
        }
    }

    // --------------- Number
    if (num.hasAttribute('checked')) {
        for (let i = 48; i <= 57; i++) {
            str += String.fromCharCode(i)
            str += String.fromCharCode(i)
        }
    }

    // --------------- Special Character
    if (sc.hasAttribute('checked')) {
        for (let i = 33; i <= 47; i++) {
            str += String.fromCharCode(i)
        }
    }


    let pass = '';
    for (let i = 0; i < range.value; i++) {
        let mixValue = str.charAt(Math.floor(Math.random() * str.length))
        pass += mixValue
    }
    passInput.value = pass
    // console.log(str);
    // console.log(pass);
    console.log(pass.length);
})


//------------------------------------- Text Convertor

let inValue = document.getElementById('inValue')
let upTheCase = document.getElementById('toUpperCase')
let lowTheCase = document.getElementById('toLowerCase')
let camelCase = document.getElementById('CamelCase')
upTheCase.addEventListener('click', () => {
    let store = inValue.value
    inValue.value = store.toUpperCase()
})
lowTheCase.addEventListener('click', () => {
    let store = inValue.value
    inValue.value = store.toLowerCase()
})

camelCase.addEventListener('click', () => {
    let store = inValue.value
    store = store.split(' ')
    let newVal = store.map((val, i, arr) => {
        if (i == 0) {
            return arr[i][0].toLowerCase() + arr[i].slice(1).toLowerCase()
            // return arr[i]     
        }
        else {
            return arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase()
        }
    })
    // console.log(store);
    // console.log(newVal);
    // inValue.value = newVal.join('')
    inValue.value = newVal.join(' ')

})


let show = document.getElementById('show')
let pass = document.getElementById('pass')
show.addEventListener('click', () => {
    pass.getAttribute('type') == 'password' ? pass.setAttribute('type', 'text') : pass.setAttribute('type', 'password')
    show.innerHTML == 'Show' ? show.innerHTML = 'Hide' : show.innerHTML = 'Show'
})