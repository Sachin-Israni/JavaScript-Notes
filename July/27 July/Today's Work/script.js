// let draggable = document.querySelectorAll('.draggable')
// let container = document.querySelectorAll('.container')

// draggable.forEach(dra => {
//     dra.addEventListener('dragstart', () => {
//         dra.classList.add('dragging')
//     })
//     dra.addEventListener('dragend', () => {
//         dra.classList.remove('dragging')
//     })
// })
// container.forEach(container => {
//     container.addEventListener('dragover',(e)=>{
//         e.preventDefault()
//         const dragaable=document.querySelector('.dragging')
//         container.appendChild(dragaable)
//     })
// })

// ----------------------------------------------------------------------- Updated TO-DO List

let form = document.getElementById('form')
let input = document.getElementById('input')
let edit = document.getElementById('edit')
let del = document.getElementById('del')

let submit = document.getElementById('sub')
let ul = document.getElementsByTagName('ul')[0]

// console.log(ul.classList.add('one'));  // add the class but the log is undefined
// console.log(ul); // <ul class="one"></ul>

// let li=document.createElement('li')
// // console.log(input.value)
// li.append(input.value)
// ul.append(li)
// console.log(arr);

// let arr = []
form.addEventListener('submit', (event) => {
    event.preventDefault()
    if (input.value.trim().length > 2) {
        if (confirm('This item will be added in your list')) {

            ul.innerHTML += `<li>${input.value.trim()}</li>`
            ul.style.padding = '20px';
            input.value = '';

        }
        input.value = '';
    }
})

edit.addEventListener('click', () => {
    for (i = 0; i < document.getElementsByTagName('li').length; i++) {
        // input.value = document.getElementsByTagName('li')[i].textContent
        console.log(document.getElementsByTagName('li'));
        document.getElementsByTagName('li')[i].addEventListener('click', () => {
            // input.value = document.getElementsByTagName('li')[i].textContent
            for (i = 0; i < document.getElementsByTagName('li').length; i++) {

                console.log(document.getElementsByTagName('li')[i].textContent);
            }
        })
    }

})