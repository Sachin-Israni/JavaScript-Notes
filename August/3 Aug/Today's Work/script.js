scrollToTopButton.addEventListener('click', () => {
    scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// mouse events
// keyboard events
// form events
// document/window events

// const body = document.querySelector('body')

// body.addEventListener('keydown', function (event) {
    // console.log('Key pressed:', event.key);
    // body.innerText += event.key
    // console.log(event.key);
// });

// document.addEventListener('keyup', function (event) {
//     console.log('Key released:', event.key);
// });

// document.addEventListener('keydown', function (event) {
//     if (event.key === 'Enter') {
//         console.log('Enter key pressed!');
//     }
// });

// document.addEventListener('keypress', function (event) {
//     if (event.key === 'a') {
//         console.log('Letter "a" pressed!');
//     }
// });

// document.addEventListener('keydown', function (event) {
//     if (event.key === 'Enter' && event.shiftKey) {
//         console.log('Shift + Enter pressed!');
//     }
// });

// document.addEventListener('keydown', function (event) {
//     if (event.keyCode === 37) {
//         console.log('Left arrow key pressed!');
//     } else if (event.keyCode === 38) {
//         console.log('Up arrow key pressed!');
//     } else if (event.keyCode === 39) {
//         console.log('Right arrow key pressed!');
//     } else if (event.keyCode === 40) {
//         console.log('Down arrow key pressed!');
//     }
// });


const slide = document.querySelectorAll(".slide");
var count = 0;
slide.forEach((value, index) => {
    value.style.left = `${index * 100}%`
})
function goPre() {
    if (count > 0) {
        count--;
        slideImage()
    }

}
function goNex() {
    if (count < (slide.length - 1)) {
        count++;
        slideImage()
        if (count == slide.length - 1) {
            count = -1
            console.log(count);
        }
    }
}

function slideImage() {
    slide.forEach((value) => {
        value.style.transform = `translateX(-${count * 100}%)`
    })
}