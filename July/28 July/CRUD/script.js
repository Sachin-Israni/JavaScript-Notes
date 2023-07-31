let arrOfObj=[
    {
        user:'sachin',
        first_name:'aqwasde',
        last_name:'jads',
        email:'xyz@gmail.com',
        mobile_no:189622
    },
    {
        user:'kajdna',
        first_name:'cqsaswe',
        last_name:'akjsa',
        email:'aknsoak@gmail.com',
        mobile_no:903870
    },
    {
        user:'ojuij',
        first_name:'vqwse',
        last_name:'skjdkc',
        email:'akdis@gmail.com',
        mobile_no:375927
    },
    {
        user:'asadj',
        first_name:'bqwe',
        last_name:'akjksn',
        email:'iuncdhu@gmail.com',
        mobile_no:547387
    },
    {
        user:'bhduf',
        first_name:'eqwe',
        last_name:'jucnd',
        email:'tnejncd@gmail.com',
        mobile_no:463892
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
            <td>${e.last_name}</td>
            <td>${e.email}</td>
            <td>${e.mobile_no}</td>
            </tr>`
            
            // <td>${e.last_name}</td>
            // <td>${e.email}</td>
            // <td>${e.phone}</td>
    });
}
// crud=create table,read table,update table and delete entry using form validation

foo(arrOfObj)