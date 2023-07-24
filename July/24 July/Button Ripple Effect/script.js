let ripple = document.getElementById('ripple')
let rippleIN = document.getElementById('ripple').innerHTML
console.log(rippleIN);


// ripple.addEventListener('mousedown', ripp)
// function ripp() {
//     ripple.style.backgroundColor = 'white'
//     ripple.style.zIndex = '1'
//     ripple.style.boxShadow = 'inset 0px 0px 0px rgb(52,52,52),-13px -15px 15px 5px rgb(76, 76, 76)'
//     // rippleIN.style.color='red'
//     setTimeout(() => {
//         ripple.remove()
//     }, 1000)
// }
// ripple.addEventListener('mouseup', () => {
//     ripple.style.backgroundColor = 'rgb(52, 52, 52)'
//     ripple.style.zIndex = '2'
//     ripple.style.boxShadow = 'inset -20px -20px 15px rgb(76, 76, 76),-13px -15px 15px 5px rgb(76, 76, 76)'
// })

ripple.addEventListener('click', function(e)  {
    let x = e.clientX - e.target.offsetLeft
    let y = e.clientY - e.target.offsetTop
    let span = document.createElement('span')
    span.style.left = x + 'px'
    span.style.top = y + 'px'
    this.append(span)
    setTimeout(()=>{
        span.remove()
    },650)
})

// mouse out for relase the bgcolor , mouseup output=click and release , mousedown 