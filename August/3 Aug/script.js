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

document.addEventListener('keydown', function (event) {
    console.log('Key pressed:', event.key);
});

document.addEventListener('keyup', function (event) {
    console.log('Key released:', event.key);
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        console.log('Enter key pressed!');
    }
});

document.addEventListener('keypress', function (event) {
    if (event.key === 'a') {
        console.log('Letter "a" pressed!');
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && event.shiftKey) {
        console.log('Shift + Enter pressed!');
    }
});

document.addEventListener('keydown', function (event) {
    if (event.keyCode === 37) {
        console.log('Left arrow key pressed!');
    } else if (event.keyCode === 38) {
        console.log('Up arrow key pressed!');
    } else if (event.keyCode === 39) {
        console.log('Right arrow key pressed!');
    } else if (event.keyCode === 40) {
        console.log('Down arrow key pressed!');
    }
});
