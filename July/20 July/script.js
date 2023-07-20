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
    }
    else {
        para.style.display = 'block'
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
    resize.innerHTML=Math.random()
})


