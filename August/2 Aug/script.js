let input = document.getElementById('input')
let inp = document.getElementById('in')
let change = document.getElementById('change')
let keyp = document.getElementById('keyp')
let keyd = document.getElementById('keyd')
let keyu = document.getElementById('keyu')

color2.addEventListener('input', () => {
    document.body.style.backgroundColor = color2.value
    color.value = color2.value
    demo.innerText = ''
})
input.addEventListener('input', () => {
    inset.innerText = input.value
    // input.style.backgroundColor = 'purple'
})
input.addEventListener('change', () => {
    change.innerText = input.value
})
input.addEventListener('blur', () => {
    input.style.backgroundColor = 'yellow'
})
input.addEventListener('focus', () => {
    input.style.backgroundColor = 'red'
})
input.addEventListener('keypress', () => {
    keyp.innerText = input.value
})
input.addEventListener('keydown', () => {
    keyd.innerText = input.value
})
input.addEventListener('keyup', () => {
    // input.style.backgroundColor = 'purple'
    keyu.innerText = input.value
})



// ------------------ make array unfalt

let arr = [1, 2, 3, 4, 5, 6]
let arr2 = [];
for (i = 0; i < arr.length; i += 2) {
    let arr4 = [];
    arr4.push(arr[i], arr[i + 1])
    arr2.push(arr4)
}
console.log(arr);
console.log(arr2);

// i = 0;
// let arr2 = arr.map((e, i, arr) => {
//     let arr4 = [];
//     e = arr[i]
//     arr4.push(arr[i], arr[i] + 1);
//     i = i + 2;
//     console.log(arr4);
//     // console.log(i);
//     return arr4
// })

// ----------------- color changer with color name and rgb correct format 

color.addEventListener('change', () => {
    let x = color.value

    document.body.style.backgroundColor = x

    if (document.body.style.backgroundColor == x) {
        document.body.style.backgroundColor = x
        demo.innerText = ''
    }

    else if (x.startsWith('#')) {
        rgbConverter(x)
        function rgbConverter(y) {
            r = parseInt(x.slice(1, 3), 16)
            g = parseInt(x.slice(3, 5), 16)
            b = parseInt(x.slice(5, 7), 16)
            y = 'rgb(' + r + ', ' + g + ', ' + b + ')'
            document.body.style.backgroundColor = y
            console.log(y);
            demo.innerText = ''
            if (y.includes('NaN')) {
                document.body.style.backgroundColor = 'white'
                demo.innerText = 'Input color incorrect'
            }
        }
    }

    else {
        document.body.style.backgroundColor = 'white'
        demo.innerText = 'Input color incorrect'
    }

})


// --------------- Color changing background , array unfalt  and key events
console.log(parseInt('ffff'.slice(0, 2), 16));
console.log(parseInt('ff33'.slice(2, 4), 16));
console.log(parseInt('ff33ee'.slice(4, 6), 16));
console.log();
window.addEventListener('wheel', (e) => {
    if (e.deltaY < 0) {
        console.log('Scroll Up');
        // console.log(e.deltaY);
    }
    else {
        console.log('Scroll Down');
        // console.log(e.deltaX);
    }
})
// window.addEventListener('scroll',()=>{
//     console.log('Scrolling');
// })

window.addEventListener('click', (e) => {
    console.log(e.clientX);
    console.log(e.clientY);
    // e.preventdefault();
})

// client.addEventListener('click', () => {
//     window.scroll(0,0)
// })