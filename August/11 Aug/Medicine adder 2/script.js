const starter = document.getElementById('popUp')
const form = document.getElementById('form')
const addDetails = document.getElementById('addDetails')
const medName = document.getElementById('medName')
const table = document.getElementById('table')
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

const quan = document.querySelector('#quan')


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

form.remove()

starter.addEventListener('click', () => {
    model.append(form)
    const cancel = document.getElementById('can');
    cancel.addEventListener('click', () => form.remove())
    // table.remove()
})

// ----------- sending the date of racks in the options 

racks.forEach((e) => {
    rack.innerHTML += `<option value="${e.id}">id:${e.id}, num:${e.num} </option>`
})
rack.value = 0;
bat.value = '';

// ----------- date for expire 

const a = new Date()
const month_val = Number(a.getMonth() + 1)
const month = month_val >= 10 ? month_val : `0${month_val}`
const date_val = Number(a.getDate())
const mainDate = date_val >= 10 ? date_val : `0${date_val}`

const b = a.getFullYear() + '-' + month + '-' + mainDate
dateIn.min = b
var as;

// dateIn.addEventListener('change', () => {
//     if (dateIn.value < b) {
//         demo1.innerText = 'Enter Valid Date'
//         demo1.style.top = '6%'
//         demo1.style.backgroundColor = "rgba(225, 0, 0, .5)"
//         // dateIn.focus()
//     }
//     else {
//         as = dateIn.value
//         console.log(as);
//     }
// })

date.addEventListener('click', () => {
    forDate.style.display = 'block'
    forManu.style.display = 'none'
})
days.addEventListener('click', () => {
    forDate.style.display = 'none'
    forManu.style.display = 'block'
})


// -------------------------------------

rack.addEventListener('input', () => {
    let mainvaa = batchs.find(e => {
        if (e.rack_id == rack.value) {
            bat.value = e.batch
        }
    })
})


//-------------------------------- validation 1

// function medicineValidation() {
//     console.log(medName.value);
//     if (medName.value == '') {
//         demo1.innerText = "Please Enter Medicine Name"
//         demo1.style.top = '6%'
//         demo1.style.backgroundColor = "rgba(225, 0, 0, .5)"
//         return false

//     }
//     else {
//         if (allMeds.includes(medName.value)) {
//             demo1.innerText = "Medicine already exists"
//             demo1.style.top = '6%'
//             demo1.style.backgroundColor = "rgba(225, 0, 0, .5)"
//             return false
//         }
//         else {
//             return true
//         }
//     }
// }
// function quanValidation() {
//     if (quan.value == '') {
//         demo1.innerText = "Please Write Quantity"
//         demo1.style.top = '6%'
//         demo1.style.backgroundColor = "rgba(225, 0, 0, .5)"
//         return false
//     }
//     else {
//         if(quan.value<1){

//             demo1.innerText = "Invalid quantity"
//             demo1.style.top = '6%'
//             demo1.style.backgroundColor = "rgba(225, 0, 0, .5)"
//             return false
//         }
//         else{
//             return true
//         }
//     }
// }


//-------------------------------- validation 2

let valid = () => {
    let newMed = medName.value.trim()
    if (newMed == "" || quan.value == "" || allMeds.includes(newMed) || rack.value == 0 || quan.value < 1) {
        if (newMed == "") {
            demo1.innerText = "Please Enter Medicine Name"
            medName.focus()
        }
        else if (allMeds.includes(newMed)) {
            demo1.innerText = "Medicine already exists"
            medName.focus()
        }
        else if (rack.value == 0) {
            demo1.innerText = "Please Select Rack"
            rack.focus()
        }
        else if (quan.value == "") {
            demo1.innerText = "Please Enter Quantity"
            quan.focus()
        }
        else if (quan.value < 1) {
            demo1.innerText = "Quantity cannot be negative"
            quan.focus()
        }
        demo1.style.top = '6%'
        demo1.style.backgroundColor = "rgba(225, 0, 0, .5)"
        return false
    }
    else if (!date.checked && !days.checked) {
        demo1.innerText = "Please select Expiry by Days/Date"
        demo1.style.top = '6%'
        demo1.style.backgroundColor = "rgba(225, 0, 0, .5)"
        date.focus()
        return false
    }
    else if (date.checked || days.checked) {
        if (date.checked) {

            if (dateIn.value == "") {
                demo1.innerText = "Please Enter Expiry Date"
                dateIn.focus()
            }
            else if (dateIn.value < b) {
                demo1.innerText = 'Please Enter Valid Date'
                dateIn.focus()
            }
            else {
                as = dateIn.value
                return true
            }
        }
        else if (days.checked) {

            if (manu.value == "") {
                demo1.innerText = "Please select Manufacture Date"
                manu.focus()
            }
            else if (Aday.value == "") {
                demo1.innerText = "Please enter days"
                Aday.focus()
            }
            else if (Aday.value < 1) {
                demo1.innerText = "Please enter correct days"
                Aday.focus()
            }
            else {
                let newDate = new Date(manu.value)
                newDate.setDate(newDate.getDate() + Number(Aday.value))
                as = newDate.toLocaleDateString();
                return true
            }

        }
        demo1.style.top = '6%'
        demo1.style.backgroundColor = "rgba(225, 0, 0, .5)"
        return false
    }
    else {
        // as = dateIn.value
        return true
    }
}

i = 0;
let allMeds = []

addDetails.addEventListener('click', (event) => {

    if (!valid()) {
        timeOut(demo1)
    }
    else {
        add = 'add' + i
        table.innerHTML += `<tr id="${add}">
        <td>${medName.value}</td>
        <td>${quan.value}</td>
        <td>${as}</td>
        <td>${rack.value}</td>
        <td>${bat.value}</td>
        <td><button class="del">Del</button> <button class="edit">EDIT</button></td>
        </tr>`
        i += 1
        allMeds.push(medName.value)
        console.log(allMeds);

        const dele = document.getElementsByClassName('del')
        Array.from(dele).forEach((e) => {
            e.addEventListener('click', () => {
                td = document.getElementById(e.parentElement.parentElement.id)
                let delVal = td.children[0].innerText
                allMeds = allMeds.filter(e => e != delVal)
                // console.log(allMeds);
                // console.log(td.children[0].innerText);
                td.remove()
                demo3.innerText = `${delVal} Medicine Successfully Deleted`
                demo3.style.top = '10%'
                demo3.style.backgroundColor = "rgba(0, 0, 225, .5)"
                timeOut(demo3)
            })
        })

        const edit = document.getElementsByClassName('edit')
        Array.from(edit).forEach((e) => {
            e.addEventListener('click', () => {
                td = document.getElementById(e.parentElement.parentElement.id)
                let editVal = td.children[0].innerText
                allMeds = allMeds.filter(e => e != editVal)
                model.append(form)

            })
        })

        demo2.style.top = '7%'
        demo2.innerText = "Medicine Added"
        demo2.style.backgroundColor = "rgba(0, 220, 0, .5)"

        timeOut(demo2)
        let allIn = document.querySelectorAll('input')
        allIn.forEach((e) => e.value = "")
        addDetails.value = "ADD MEDICINE"
        can.value = "CANCEL"
        rack.value = 0
        date.checked = false
        days.checked = false
        forDate.style.display = "none"
        forManu.style.display = "none"
        form.remove()
    }
    event.preventDefault()

})

function timeOut(a) {
    setTimeout(() => {
        a.style.top = '-7%'
    }, 2000)
}




// ra.addEventListener('click', () => {
//     let td = document.getElementsByTagName('td')[0]
//     console.log(td);
//     console.log("td");
//     td.remove()
// })
// inp.addEventListener('change',()=>{
//     let p=document.createElement('p')
//     p.innerText =inp.value
//     let edit=document.createElement('button')
//     edit.innerText="EDIT"
//     edit.addEventListener('click',()=>{
//         // // input.value=p.innerText
//         // console.log(p.innerText)
//         // inp.value=121212
//         inp.value=p.innerText
//         let up=document.createElement('button')
//         up.innerText="UPDATE"
//         up.addEventListener('click',()=>{
//             p.innerText=inp.value
//         })
//         asd.append(up)
//     })
//     asd.append(p)
//     asd.append(edit)
// })
// inp.addEventListener('blur',()=>{
//     inp.value=''
// })
