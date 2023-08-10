const starter = document.getElementById('popUp')
const form = document.getElementById('form')
const addDetails = document.getElementById('addDetails')
const medName = document.getElementById('medName')
const table = document.getElementById('table')
const quan = document.getElementById('quan')
const manu = document.getElementById('manu')
const rack = document.getElementById('rack')
const batch = document.getElementById('batch')
const bat = document.getElementById('bat')
const date = document.getElementById('date')
const days = document.getElementById('days')
const forDate = document.getElementById('forDate')
const forManu = document.getElementById('forManu')
const dateIn = document.getElementById('dateIn')
const model = document.querySelector('.model')
const input = document.getElementsByTagName('input')



const racks = [
    { id: 1, num: 10 },
    { id: 2, num: 20 },
    { id: 3, num: 30 },
    { id: 4, num: 40 },
    { id: 5, num: 50 }
]

const batchs = [
    { rack_id: 1, batch: "A1" },
    { rack_id: 2, batch: "A2" },
    { rack_id: 3, batch: "A3" },
    { rack_id: 4, batch: "A4" },
    { rack_id: 5, batch: "A5" }
]

// form.remove()

starter.addEventListener('click', () => {
    // model.append(form)
    // table.remove()
})

// ----------- sending the date of racks in the options 

racks.forEach((e) => {
    rack.innerHTML += `<option value="${e.id}">id:${e.id}, num:${e.num} </option>`
    // Array.from(opt).addEventListener('change', () => {
    //     console.log(rack.id);
    // })
})

// ----------- date for expire 

const a = new Date()
const month_val = Number(a.getMonth() + 1)
const month = month_val >= 10 ? month_val : `0${month_val}`
const date_val = Number(a.getDate())
const mainDate = date_val >= 10 ? date_val : `0${date_val}`

const b = a.getFullYear() + '-' + month + '-' + mainDate
dateIn.min = b
var as;
dateIn.addEventListener('blur', () => {
    if (dateIn.value < b) {
        alert('Enter Valid Date')
    }
    else {
        as = dateIn.value
        console.log(as);
    }
})
date.addEventListener('click', () => {
    forDate.style.display = 'block'
    forManu.style.display = 'none'
})
days.addEventListener('click', () => {
    forDate.style.display = 'none'
    forManu.style.display = 'block'
})


// let opt = document.getElementsByTagName('option')
// rack.addEventListener('click', () => {
// rack_val = Number(rack.value)
// console.log(rack_val);
// racks_id = racks.map(e=>e.id)
// if(racks_id.includes(rack_val)){
//     console.log();
// }
// console.log(racks_id.includes(rack_val));

// Array.from(opt).forEach((e) => {
// racks_id = racks.filter((e)=>{
//     return e.id
// })
// bat.innerText 
// console.log(e.value);
// })
// console.log(opt);
// console.log(e);
// })
// console.log(rack.value);
// a = racks.filter(obj => obj.id)
// console.log(a);

// console.log(rack);
// medName.addEventListener('change', () => {
//     demo.innerText = medName.value
// })

// form.addEventListener('change',(event)=>{
//     if(medName.value!=''){
//     }
// })

// rack.addEventListener('change', () => {
//     demo.innerText = rack.value
// })


// ------------- adding the new medicine function
rack.addEventListener('input', () => {
    let mainvaa = batchs.find(e => {
        if (e.rack_id == rack.value) {
            bat.input = e.batch

            bat.value = e.batch

        }
    })
})
// console.log(mainvaa);
// console.log(rack.value);

i = 0;
const adding = (event) => {

    // del = 'del' + i
    // model.append(table)
    // let vaa = batchs.map(e => {
    //     return e.rack_id
    // })
    // let mainvaa = vaa.filter(e=>e==rack.value)

    Array.from(input).forEach((e) => {
        if(e.value==''){
            alert("Please fill input fields")
        }
    
    })
    add = 'add' + i
    table.innerHTML += `<tr id="${add}">
    <td>${medName.value}</td>
    <td>${quan.value}</td>
    <td>${as}</td>
    <td>${rack.value}</td>
    <td>${bat.input}</td>
    <td><button class="del">Del</button></td>
    </tr>`
    i += 1
    // console.log(i);

    const dele = document.getElementsByClassName('del')
    // console.log(dele);
    Array.from(dele).forEach((e) => {
        e.addEventListener('click', () => {
            td = document.getElementById(e.parentElement.parentElement.id)
            // console.log(td);
            td.remove()
            // console.log(e.parentElement.parentElement.id);
        })
    })
    // form.remove()
    event.preventDefault()
    demo.innerText = "Medicine Added"

}
addDetails.addEventListener('click', adding)


// let arr = [1, 2, 3, 4, 5]

// let bs = arr.find(e => {
//     if (e == 3) {
//         let as = arr.indexOf(e)
//         let arr2 = arr.slice(0, as)
//         arr2.push(arr.slice(as+1, arr.length))
//         console.log(arr2.flat());
//         console.log(as);
//     }
// })

// console.log(arr);