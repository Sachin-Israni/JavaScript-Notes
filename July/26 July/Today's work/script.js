// console.log('Age: ' + a);
// var a = 10
// console.log('Age: ' + a);

//-----------------------------------------------

// let str = 'noon sat asg everything'

// let a = str.split(' ').map(e => {
//     if (e.length > 3) {
//         return e.charAt(0) + `${e.length - 2}` + e.at(-1)
//     }
//     return e
// }).join(' ')
// console.log(a);

//-----------------------------------------------

// let btn=document.getElementById('btn')
// console.log(btn);

// confirm(btn)

//-----------------------------------------------

// ------------ TO-DO List Function
let body=document.querySelector('body')
let ul = document.createElement('ul')
let input = document.getElementById('input')
let click = document.getElementById('click')

// console.log(ul);
// li.textContent = 'sachin'
// console.log(li); // <li>sachin</li>
// ul.append(li)
// console.log(li.innerText); // sachin

click.addEventListener('click',toDoList)

function toDoList() {
    let li = document.createElement('li')
    li.textContent = input.value
    if (li.textContent.trim().length > 2) {
        let a = confirm('This item will be added in your list')
        if (a == true) {
            ul.style.padding = '20px'
            ul.append(li)
        }
    }
    // console.log(li.textContent.trim().length > 1)
    body.append(ul)
    console.log('akjdvh'+ul.childNodes.length);
}
