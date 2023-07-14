// let text = document.getElementsByClassName('myClass')
// console.log(text);
// let text1 = Array.from(text)
// console.log(text1);

// foreach()
// text1.forEach(ele => {
//     return ele.innerHTML = 'New Words'
// });

// map()
// let text2 = text1.map((ele) => ele.innerHTML = ele.innerHTML*2 )
// console.log(text2);

// let text2 = text1.filter((ele) => ele.innerHTML == 2)
// console.log(text2);



// let a = 10;
// b = 20;
// c = sum(20, 10)
// const sum = (a, b) => a + b;
// console.log(c);

// let text = [{ a: 10 }, { a: 11 }, { a: 12 }, { a: 13 }, { a: 2 }]
// text && (text = text.map(an => {an.a = 2}))
// console.log(text);

// console.log(document.body.childElementCount);  // 4-div,1-ul,1-script=6
// console.log(document.body.childNodes);  //
// console.log(document.body.children  );  //

// const a = [{
//     id: 1,
//     slot: [{ dosage: '' },
//     { dosage: 'hi' }
//     ]
// },
// {
//     id: 1,
//     slot: [{ dosage: 'hi' },
//     { dosage: 'hi' }
//     ]
// }
// ]

// for (i = 0; i < a.length; i++){
//     if(a[i].slot[i].dosage==''){
//         console.log(false)
//     }
//     else{
//         console.log(true)
//     }
// }

// let b = a.forEach((ele) =>{
//     if(ele.slot[ele].dosage==''){
//         return false
//     }
//     else{
//         return true
//     }
// })
// let b = a.forEach((ele) =>{
//     if(ele.slot.forEach(ele=>ele.dosage=='')){
//         console.log(false);
//     }
//     else{
//         console.log(true);
//     }
// })
// console.log(b);

// ----------------------------------

// function emptyStr(arr) {
//     if (arr.every(ele => ele.slot.every(ele => ele.dosage != ''))) {
//         return true
//     }  else return false
// }
// console.log(emptyStr(a));

// ----------------------------------   addEventListener - click event

// const buttonElem = document.getElementById("button");

// buttonElem.addEventListener('click', () => {
//   const oldText = buttonElem.innerText;
//   return button.innerText = oldText === "ON" ? "OFF" : "ON";
// });

// ----------------------------------   addEventListener - mouseover event

// const listItems = document.querySelectorAll("#list li");

// const handleHover = (event) => {
//     return event.target.innerText = 'ON';
// };

// if (listItems.length > 1) {
//     listItems.forEach(item => item.addEventListener('mouseover', handleHover));
// }

// ---------------------------------- addEventListener - click event

// const button = document.getElementById('button');
// const input = document.getElementById('input');

// const handleClick = () => {
//     input.value = 'Hello World';
// };

// button.addEventListener('click', handleClick);

// ---------------------------------- addEventListener - mouseover event


// const element = document.getElementById('element');

// const changeText = () => {
//     element.innerText = 'Thanks!';
// };

// element.addEventListener("mouseover", changeText);



// Clicking on the button the font, font size, and color of the paragraph text will be changed.
// function js_style(txt) {
//     txt = document.getElementById("text")
//     txt.style.color='red'
//     txt.style.fontFamily='jokerman'
//     txt.style.fontSize='20px'
// }

//------------------------------------------------------- 

// function getFormvalue()
// {
//   var x=document.getElementById("form1");
//   for (var i=0;i<x.length;i++)
//   {
//    if (x.elements[i].value!='Submit')
//     {
//       console.log(x.elements[i].value);
//      }
//    }
// }

//------------------------------------------------------- 4

// function getName(obj,name) {
//     return obj.key
// }
// const obj1={name:'demo',age:23}
// let name=getName(obj1,'name')
// console.log(name);   // undefined

//------------------------------------------------------- 5

// function abc() {
//     const ab = () => 40;
//     abcd(() => ab())
// }
// function abcd(cb) {
//     let a = cb()
//     console.log(a); //40
// }
// console.log(abc()); // undefined

//------------------------------------------------------- 18

// let obj = { df: 56 };
// let { a: df }=obj
// console.log(df);
// console.log(a);

//------------------------------------------------------- 19

// function fun(str) {
//     let a = Array.from(str)
//     let b = []
//     for (i = 0; i < a.length; i++) {
//         if (Number(a[i])) {
//             b.push(a[i])
//         }
//     }
//     console.log(b);
//     console.log(typeof a[0]);
// -------------------------------------
//     let a=str.split('')
//     console.log(a);
//     return a.filter(el=>Number(el))
// }

// console.log(fun('as4dj1as2asd3n'))
// fun('as4dj1as2asd3n')

//------------------------------------------------------- 

