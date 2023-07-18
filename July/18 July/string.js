// -------------------- at() / charAt()

let a = 'Sachin'

// a.at(1)     // unmutable
// a.charAt(1) // unmutable
// a.charCodeAt(1) // unmutable

console.log(a); // Sachin
// console.log(a.at(1));   // a
// console.log(a.at(-1));   // a


// console.log(a.charAt());   // S
// console.log(a.charAt(-1));   // __

// console.log(a.charCodeAt(1));   // 97
// console.log(a.charCodeAt(0));   // 83
// console.log(a.charCodeAt());   // 83
// console.log(a[1]);  // a

// console.log("s😂w😂d😂😂".charAt(0));
// console.log("s😂w😂d😂😂".charAt(1));
// console.log("s😂w😂d😂😂".charAt(2));
// console.log("s😂w😂d😂😂".charAt(3));
// console.log("s😂w😂d😂😂".charAt(4));
// console.log("s😂w😂d😂😂".charAt(5));
// console.log("s😂w😂d😂😂".charAt(6));
// console.log("s😂w😂d😂9😂".charAt(7));
// console.log("s😂w😂d😂9😂".charAt(8));
// console.log("s😂w😂d😂9😂".charAt(9));


//----------------------------------- convert upperCase to lowerCase string

// let str = 'Sachin'

// let sp = str.split('')

// let upDown = sp.map(ele => {
//     if (ele == ele.toUpperCase()){
//         return ele.toLowerCase()
//     }
//     else{
//         return ele.toUpperCase()
//     }
// })
// console.log(upDown);
// console.log(upDown.join(''));


//----------------------------------- function to convert upperCase to lowerCase string

// function upDown(str) {
//     let sp = str.split('').map(ele => {
//         if (ele == ele.toUpperCase()) {
//             return ele.toLowerCase()
//         }
//         else {
//             return ele.toUpperCase()
//         }
//     }).join('')
//     return sp
// }

// console.log(upDown('Sachin Israni'));

// ----------------------------- function for uncamelized

function insert(str, separation = ' ') {

    let sp = str.split('').map((ele, i, arr) => {
        if (i == 0) {
            return ele
        }
        else if (ele == ele.toUpperCase()) {
            return separation + ele.toLowerCase()
        }
        else {
            return ele
        }
    }).join('')

    console.log(sp);
}
insert('DchinIsraniPujanJani')
insert('SachinIsraniPujanJani', '-')
insert('SachinIsraniPujanJani', '_')

