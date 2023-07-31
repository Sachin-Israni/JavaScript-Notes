
// let a = 'sachin'
// console.log('' + typeof a); // string
// console.log(typeof a === 'string');  // true
// console.log(!typeof a === 'string');    // false
// let arr=[1]
// let arr2=[1]
// console.log(arr===arr2);    //false
// console.log(arr[0]===arr2[0]);  // true

let table = document.getElementById('tab')
let Fname = document.getElementById('name')
let email = document.getElementById('email')
let mob = document.getElementById('mob')
let submit = document.getElementById('sub')
let emObj = {}

submit.addEventListener('click', () => {
    emObj.Name = Fname.value;
    emObj.Email = email.value;
    emObj.Phone = mob.value;
    table.innerHTML += `<tr>
                        <td>${emObj.Name}</td>
                        </tr>`
    console.log(emObj);
    event.preventDefault();
})