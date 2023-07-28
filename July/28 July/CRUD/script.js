let arrOfObj=[
    {
        user:'sachin',
        first_name:'aqwasde'
    },
    {
        user:'kajdna',
        first_name:'cqsaswe'
    },
    {
        user:'ojuij',
        first_name:'vqwse'
    },
    {
        user:'asadj',
        first_name:'bqwe'
    },
    {
        user:'bhduf',
        first_name:'eqwe'
    },
]

let body=document.getElementsByTagName('body')[0]
let table=document.getElementById('table')
let tr=document.getElementById('tr')
let th=document.getElementById('th')

console.log(body);
function foo(arr) {
    arr.forEach(e => {
        table.innerHTML += `<tr>
            <td>${e.user}</td>
            <td>${e.first_name}</td>
            </tr>`
            
            // <td>${e.last_name}</td>
            // <td>${e.email}</td>
            // <td>${e.phone}</td>
    });
}
// crud=create table,read table,update table and delete entry using form validation

foo(arrOfObj)