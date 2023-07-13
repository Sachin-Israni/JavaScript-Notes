// //-------------------------- Math()

// console.log(Math.PI);   // 3.141592653589793
// console.log(Math.SQRT1_2);  // 0.7071067811865476
// console.log(Math.SQRT2);    //  1.4142135623730951

// // null = 0  
// console.log(Math.abs(10 / null));       // Infinity
// console.log(Math.abs(10 * null));       // 0
// console.log(Math.abs(10 + null));       // 10
// console.log(Math.abs(10 - null));       // 10
// console.log(Math.abs(10 ** null));      // 1
// // undefined = NaN                      
// console.log(Math.abs(10 / undefined));  // all NaN
// console.log(Math.abs(10 * undefined));
// console.log(Math.abs(10 + undefined));
// console.log(Math.abs(10 - undefined));
// console.log(Math.abs(10 ** undefined));
// // true = 1
// console.log(Math.abs(10 / true));   // 10
// console.log(Math.abs(10 * true));   // 10
// console.log(Math.abs(10 + true));   // 11
// console.log(Math.abs(10 - true));   // 9
// console.log(Math.abs(10 ** true));  // 10
// //false = 0
// console.log(Math.abs(10 / false));  // Infinity
// console.log(Math.abs(10 * false));  // 0
// console.log(Math.abs(10 + false));  // 10
// console.log(Math.abs(10 - false));  // 10
// console.log(Math.abs(10 ** false)); // 1

// console.log(Math.abs(-Infinity));// Infinity
// console.log(Math.abs(-1));// 1
// console.log(Math.abs(-0));// 0
// console.log(Math.abs(0));// 0
// console.log(Math.abs(1));// 1
// console.log(Math.abs(Infinity));// Infinity

// console.log(Math.abs(null));    // 0
// console.log(Math.abs({}));      // NaN
// console.log(Math.abs([]));      // 0
// console.log(Math.abs(""));      // 0
// console.log(Math.abs([1]));     // 1
// console.log(Math.abs());        // NaN

// document.body.style.background = "red"

//----------------------------------------------------- getElementByID

// var h1 = document.getElementById('h1')      
// h1.textContent = "Harry";
// h1.innerText = "Red";
// h1.innerHTML = "<p>Jai Ho</p>";
// h1.style.borderBottom = '2px solid aqua'

//----------------------------------------------------- getElementsByTagName

// var h1 = document.getElementsByTagName('h1')
// h1[0].textContent = 'Radhey Rahdey';
// h1[0].style.color = 'white'


//----------------------------------------------------- getElementsByClassName

// var p = document.getElementsByClassName('p')
// for (let i = 0; i < p.length; i++) {
//     p[i].textContent = "This text is changed by getElementsByClassName  "
// }

//----------------------------------------------------- querySelector

// var p = document.querySelector('p:nth-last-child(2)')
// p.textContent = 'Sachin'
// p.style.color = 'white'




//----------------------------------------------------- querySelectorAll

// var ad = document.querySelectorAll('p')
// ad[0].textContent='Sachin'
// ad[0].style.color='white'
// ad[1].style.color='white'

// for (let i = 0; i < ad.length; i++) {
//     ad[i].style.background = 'grey'

// }


// function green() {
//     document.getElementById('as').style.background='black'
//     document.getElementById('s').style.background='grey'
// }
// function grey() {
//     document.getElementById('as').style.background='grey'    
//     document.getElementById('s').style.background='black'    
// }
