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
let body = document.querySelector('body');
let ul = document.createElement('ol');
let input = document.getElementById('input');
let click = document.getElementById('click');

// console.log(ul);
// li.textContent = 'sachin'
// console.log(li); // <li>sachin</li>
// ul.append(li)
// console.log(li.innerText); // sachin

let form = document.getElementById('form');
// click.addEventListener("submit", toDoList);
form.addEventListener("submit", toDoList);
// click.addEventListener("click", toDoList);

function toDoList() {
    event.preventDefault();

    if (input.value.trim().length > 2) {
        if (confirm('This item will be added in your list')) {
            let li = document.createElement('li');
            li.textContent = input.value;
            li.setAttribute('draggable',"True")
            let delBtn = document.createElement('button')
            delBtn.innerText = 'DEL';
            delBtn.addEventListener('click', () => {
                li.remove();
                if (ul.childNodes.length == 0) {
                    ul.remove();
                }
            })

            ul.style.padding = '20px';
            li.append(delBtn);
            ul.append(li);
            input.value = '';
            body.append(ul);
        }
        input.value = '';
    }


    // console.log('akjdvh' + ul.childNodes.length);
    // console.log('Hi , I go printed');
    // event.preventDefault();
}





// var a=[0,1,2,3,4,5]
// a.splice(1,3,"hello")
// console.log(a);

// console.log(8 << 3); // a = 8, b = 3  a*(2*2*2)     2 rasie to b
// console.log(8 >> 3); // a = 8, b = 3  a/(2*2*2)     2 rasie to b

// console.log('NaN'=='NaN');  // true
// console.log(NaN===NaN);  // false

// console.log(20 & 1 == 0);  // doubt
// var a = 10, b = '10';
// if (a === b || a != b){
//     console.log('asd');
// }
// else console.log('nthg');


// ----------------------------------------------------------------

// const myList = document.getElementById('myList');
// function itemName(event) {
//     if (event.target.tagName === 'LI') {
//         alert('You clicked: ' + event.target.textContent);
//     }
// }

// myList.addEventListener('click', itemName);

// ----------------------------------------------------------------
