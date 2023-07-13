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

document.body.style.background = "red"

var h1 = document.getElementById('h1')
h1.textContent = "Harry";
h1.innerText = "Red";
h1.innerHTML = "<p>Jai Ho</p>";
h1.style.borderBottom='2px solid aqua'