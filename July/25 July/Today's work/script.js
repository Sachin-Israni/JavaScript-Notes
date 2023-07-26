// => create a dynamic table 
// has 5 columns 
//   => seriol number
//   => first name
//   => last name
//   => email 
//   => phone number

// data will be in following format

const usersData = [
    // {
    //     id: 432,
    //     first_name: "Asd",
    //     last_name: "paerl",
    //     email: "abc@gmail.com",
    //     phone: "+919394099203"
    // },
    // {
    //     id: 342,
    //     first_name: "dsf",
    //     last_name: "paerl",
    //     email: "sdf@gmail.com",
    //     phone: "+919394099089"
    // },
    // {
    //     id: 765,
    //     first_name: "dfgf",
    //     last_name: "dfg",
    //     email: "muyjgh@gmail.com",
    //     phone: "+919394054345"
    // },
    // {
    //     id: 123,
    //     first_name: "sdxfg",
    //     last_name: "gdfd",
    //     email: "werrew@gmail.com",
    //     phone: "+915464569203"
    // },
    {
        name: 'sachin',
        age: 10
    },
    {
        name: 'aknsdbasd',
        age: 100
    },
    {
        name: 'mkbasdjaachin',
        age: 230
    }
]

let body = document.getElementById('body')
function foo(arr) {
    arr.forEach(e => {
        body.innerHTML += `<tr>
            <td>${e.name}</td>
            <td>${e.age}</td>
        </tr>`
    });
}

foo(usersData)
//------------------------------------------------------

// let table = document.getElementsByTagName('table')[0]
// // console.log(table);
// usersData.map(ele => {
//     let tr = document.createElement('tr')
//     tr.style.textAlign = 'center'
//     for (const key in ele) {
//         let td = document.createElement('td')
//         td.innerHTML = ele[key]
//         td.style.padding = '10px'
//         td.style.boxShadow = "2px 2px 5px 1px red, inset 2px 2px 5px 1px red"
//         // console.log(td);
//         tr.append(td)
//     }
//     table.append(tr)
// })



// tr[0] =usersData[0].id
//     let heading = tr[0]
// console.log(heading);

//------------------------------------------------------------------

// let dynamic = document.getElementById('dynamic')
// let table = document.createElement('table')
// let tr = document.createElement('tr')
// let td = document.createElement('td')

// let arrEm = []

// let heading = usersData.map((ele, i, arr) => {
    // console.log(ele);
    // for (let key in ele) {
        // if (arr[i])
        //     th.append(key)
        //     console.log(arr[i][key]);
    //     arrEm.push(key)
    // }
// })
// let ar2 = arrEm.filter((ele, i, arr) => {
//     return arr.indexOf(ele) === i;
// }).forEach(ele => {
//     let th = document.createElement('th')
//     th.textContent = ele;
//     tr.append(th)
    // console.log(ele);
// })

// console.log(ar2);
// table.append(tr);
// let mianTOR = document.createElement('tr')
// usersData.forEach((ele, i, arr) => {
//     for (let key in ele) {
//         let as = document.createElement('tr')
//         let mainkey = arr[i][key]
//         // as.textContent = mainkey
//         // console.log(mianTR);
//         console.log(mainkey);
//         // mianTR.append(as)
//     }
//     // table.append(mianTR)
// })
// usersData.forEach((ele,i,arr)=>{
//     let mianTR=[]
//     for (let key in ele){
//         mianTR.push(arr[i][key])
//     }
//     console.log(mianTR);
//     mianTR.forEach(ele => {
//         let as = document.createElement('th')
//         as.textContent = ele;
//         mianTOR.append(as)
//         // console.log(ele);
//         table.append(mianTOR)
//     })
// })
// dynamic.append(table);

//------------------------------------------------------
// console.log(th);

// let abc=ar2.map(ele=>{
//     let a = ar2.pop()
//     console.log(a);
//     // return a
//     // break;
// })

// console.log(body);
// tr.append(th)
// tr.append(td)

// let a = ['123','233']
// let b = [
//     { value: 123 ,asd:'asada'},
//     { value: 121 ,asd:'edff'}
// ]
// console.log(b.filter(e => a.includes(e.value.toString())));