let ripple = document.getElementById('ripple')

ripple.addEventListener('mousemove', function(e)  {
    let x = e.clientX 
    let y = e.clientY 
    let span = document.createElement('span')
    span.style.left = x + 'px'
    span.style.top = y + 'px'
    console.log(x);
    console.log(y);
    ripple.append(span)
    setTimeout(()=>{
        span.remove()
    },700)
})