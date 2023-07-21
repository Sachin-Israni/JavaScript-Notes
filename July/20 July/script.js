// let p = document.getElementsByTagName('p')
// document.getElementById('demo').innerHTML =
//     'This is the demo of joinig two paras with getElementsByTagName ' + p[0].innerHTML
let p = document.getElementById('intro')
function colorRed() {
    p.style.color = 'red'
}
p.addEventListener('click', colorRed)



//-------------------------------- Click Event

let btn = document.getElementById('btn')
let para = document.getElementById('para')
btn.addEventListener('click', () => {
    if (para.style.display != 'none') {
        para.style.display = 'none'
        btn.innerHTML = 'Click Me Again'
    }
    else {
        para.style.display = 'block'
        btn.innerHTML = 'Click Me'
    }
})

//-------------------------------- Mouseover Event

// let paraOmouse = document.getElementById('p2')
// paraOmouse.addEventListener('mouseover', () => {
//     alert('Mouse over on para')
// })

//-------------------------------- Mouseout Event

// let paraOutmouse = document.getElementById('p2')
// paraOutmouse.addEventListener('mouseout', () => {
//     alert('Mouse out on para')
// })

//-------------------------------- Mouseup Event

// let paraOmouse = document.getElementById('p2')
// paraOmouse.addEventListener('mouseup', () => {
//     alert('Mouse up on para')
// })

//-------------------------------- Mousedown Event

// let paraOmouse = document.getElementById('p2')
// paraOmouse.addEventListener('mousedown', () => {
//     alert('Mouse down on para')
// })

//-------------------------------- Mouseenter Event

// let paraOmouse = document.getElementById('p2')
// paraOmouse.addEventListener('mouseenter', () => {
//     alert('Mouse enter on para')
// })

//-------------------------------- Mouseleave Event

// let paraOmouse = document.getElementById('p2')
// paraOmouse.addEventListener('mouseleave', () => {
//     alert('Mouse leave on para')
// })

//-------------------------------- Mousemove Event

// let paraOmouse = document.getElementById('p2')
// paraOmouse.addEventListener('mousemove', () => {
//     alert('Mouse move on para')
// })

let btnOmouse = document.getElementById('mover')
let dbl = document.getElementById('dbl')

//-------------------------------- Click Event

let paraOmouse = document.getElementById('p2')
btnOmouse.addEventListener('click', () => {
    alert('Mouse clicked on button')
})

//-------------------------------- Double Click Event

let paradbmouse = document.getElementById('p2')
dbl.addEventListener('dblclick', () => {
    alert('Mouse double Clicked on button')
})

//-------------------------------- Context Menu Event

let paraContMenu = document.getElementById('p2')
dbl.addEventListener('contextmenu', () => {
    alert('Context Menu')
})

//-------------------------------- Resize Event

let resize = document.getElementById('resize')
window.addEventListener('resize', () => {
    resize.innerHTML = '<b>Here I Am!</b>'
})

// --------------------------------onchange Event

function myFunction() {
    var x = document.getElementById("letdoit").value;
    document.getElementById("demo").innerHTML = "You selected: " + x;
}

// function foo(ele) {
//     console.log(ele.getAttribute());
// }
// --------------------------------Context Menu Event

// let ids = document.getElementById('letdoit')
// ids.addEventListener('change', () => {
//     resize.innerHTML = 'You entered' + ids

// })

// --------------------------------Copy,Paste & Cut Event

let ids = document.getElementById('letdoit')
ids.addEventListener('copy', () => {
    ids.style.backgroundColor = 'aqua'
})
ids.addEventListener('paste', () => {
    ids.style.backgroundColor = 'lightgreen'
})
ids.addEventListener('cut', () => {
    ids.style.backgroundColor = 'red'
})

// ------------------------------------ setTimeout
function greet(name) {
    console.log('Good Morning' + name);
    console.log('Example of setTimeout');
}
setTimeout(greet, 3000, ' Sachin')


//------------------------------------------ prevent default event

let asd = document.getElementById('asd')
let checking = document.getElementById('checking')
// checking.addEventListener('click', (e) => {
//     e.preventDefault()
// })
// function check() {
//     if (checking.hasAttribute('checked')) {
//         checking.removeAttribute('checked')
//         asd.innerHTML = 'NO'
//     }
//     else if (!checking.hasAttribute('checked')) {
//         checking.setAttribute('checked', '')
//         asd.innerHTML = 'Yes'
//     }
    // checking.getAttribute('checked') ? checking.removeAttribute('checked') : checking.setAttribute('checked', '')
    // asd.innerHTML = 'YES'
// }
asd.addEventListener('click', () => {
    // check() {
    // if (checking.hasAttribute('checked')) {
    //     checking.removeAttribute('checked')
    //     asd.innerText = 'NO'
    // }
    // else {
    //     checking.setAttribute('checked', '')
    //     asd.innerText = 'Yes'
    // }
    // asd.innerHTML = 'YES'
    checking.hasAttribute('checked') ? checking.removeAttribute('checked') : checking.setAttribute('checked', '')
    // }
})

// console.log(checking.hasAttribute('checked'));
// console.log(document.getElementById('para').innerHTML)
// console.log(document.getElementById('para').innerText)
// console.log(document.getElementById('para').textContent)

// // let getId = document.querySelector('body')
// let getId = document.getElementsByTagName('body')[0].children
// // console.log(getId);
// for (let i = 0; i < getId.length; i++) {
//     getId[i].addEventListener('click', (e) => {
//         if (e.target.id == '') {
//             document.getElementById('getID').innerText = "No ID"
//         }
//         else {
//             document.getElementById('getID').innerText = e.target.id
//         }
//     })
// }