const addDetails = document.getElementsByName('submitBtn')[0]
const upDetails = document.getElementsByName('updateBtn')[0]
const medName = document.getElementsByName('Medicine')[0]
const manu = document.getElementsByName('manufacture')[0]
const date = document.getElementsByName('exp')[0]
const days = document.getElementById('days')
const dateIn = document.getElementsByName('expDate')[0]
const can = document.getElementsByName('cancelBtn')[0]
const quan = document.getElementsByName('Quantity')[0]
const Aday = document.getElementsByName('daysAftManu')[0]
const batch1 = document.getElementsByName('batch1')[0]
const starter = document.getElementById('popUp')
const form = document.getElementById('form')
const table = document.getElementById('table')
const rack = document.getElementById('rack')
const batch = document.getElementById('batch')
const forDate = document.getElementById('forDate')
const forManu = document.getElementById('forManu')
const model = document.querySelector('.model')
const input = document.getElementsByTagName('input')

const racks = [
    { id: 1, num: 10 },
    { id: 2, num: 20 },
    { id: 3, num: 30 },
    { id: 4, num: 40 },
    { id: 5, num: 50 },
    { id: 6, num: 60 },
    { id: 7, num: 70 },
    { id: 8, num: 80 },
    { id: 9, num: 90 },
    { id: 10, num: 100 }
]

const batchs = [
    { rack_id: 1, batch: "A1" },
    { rack_id: 2, batch: "A2" },
    { rack_id: 3, batch: "A3" },
    { rack_id: 4, batch: "A4" },
    { rack_id: 5, batch: "A5" },
    { rack_id: 6, batch: "A6" },
    { rack_id: 7, batch: "A7" },
    { rack_id: 8, batch: "A8" },
    { rack_id: 9, batch: "A9" },
    { rack_id: 10, batch: "A10" }
]

form.remove()

function allClear() {
    let allIn = document.querySelectorAll('input')
    allIn.forEach((e) => e.value = "")
    addDetails.value = "ADD MEDICINE"
    can.value = "CANCEL"
    rack.value = 0
    date.checked = false
    days.checked = false
    forDate.style.display = "none"
    forManu.style.display = "none"
}


starter.addEventListener('click', () => {
    addDetails.style.display = "inline"
    upDetails.style.display = "none"
    model.append(form)
    const cancel = document.getElementById('can');
    allClear()
    cancel.addEventListener('click', () => form.remove())
    addDetails.disabled = ""
    // table.remove()
})

// ----------- sending the date of racks in the options 

racks.forEach((e) => {
    rack.innerHTML += `<option value="${e.id}">id:${e.id}, num:${e.num} </option>`
})
rack.value = 0;
batch1.value = '';

// ----------- date for expire 

const a = new Date()
const month_val = Number(a.getMonth() + 1)
const month = month_val >= 10 ? month_val : `0${month_val}`
const date_val = Number(a.getDate())
const mainDate = date_val >= 10 ? date_val : `0${date_val}`

const b = a.getFullYear() + '-' + month + '-' + mainDate
dateIn.min = b
var as;

// -------------------------------------

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
            batch1.value = e.batch
        }
    })
})


// -------------------------------------

let valid = () => {
    let newMed = medName.value.trim()
    if (newMed == "" || quan.value == "" || allMeds.includes(newMed) || rack.value == 0 || quan.value < 1) {

        newMed = medName.value.trim()
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
        <td>${batch1.value}</td>
        <td><button class="del">Del</button> <button class="edit">EDIT</button></td>
        </tr>`
        i += 1
        allMeds.push(medName.value)
        console.log(allMeds);

        const dele = document.getElementsByClassName('del')
        Array.from(dele).forEach((e) => {
            e.addEventListener('click', () => {
                tr = document.getElementById(e.parentElement.parentElement.id)
                let delVal = tr.children[0].innerText
                allMeds = allMeds.filter(e => e != delVal)
                form.remove()
                tr.remove()
                demo3.innerText = `${delVal} Medicine Successfully Deleted`
                demo3.style.top = '10%'
                demo3.style.backgroundColor = "rgba(0, 0, 225, .5)"
                timeOut(demo3)
            })
        })

        const edit = document.getElementsByClassName('edit')
        Array.from(edit).forEach((e) => {
            e.addEventListener('click', () => {

                addDetails.style.display = "none"
                addDetails.disabled = "on"
                upDetails.style.display = "inline"
                upDetails.value = "Update Medicine Details"
                form.append(can)
                model.append(form)

                td = document.getElementById(e.parentElement.parentElement.id)
                let trChild = Array.from(td.children)
                trChild.map((val, i, arr) => {
                    medName.focus()
                    date.checked = "on"
                    forDate.style.display = "block"
                    forManu.style.display = "none"
                    medName.value = arr[0].innerText
                    quan.value = arr[1].innerText
                    dateIn.value = arr[2].innerText
                    rack.value = arr[3].innerText
                    batch1.value = arr[4].innerText
                })

                console.log(td);
                console.log(trChild);
                upDetails.addEventListener('click', () => {
                    if (!myFun()) {
                        demo1.style.top = '6%'
                        demo1.style.backgroundColor = "rgba(225, 0, 0, .5)"
                        timeOut(demo1)
                    }
                    else {

                        trChild = trChild.map((val, i, arr) => {
                            arr[0].innerText = medName.value
                            arr[1].innerText = quan.value
                            arr[2].innerText = myFun()
                            arr[3].innerText = rack.value
                            arr[4].innerText = batch1.value
                            // form.reset()
                            form.remove()
                        })
                        allClear()
                    }
                })
            })
        })

        demo2.style.top = '7%'
        demo2.innerText = "Medicine Added"
        demo2.style.backgroundColor = "rgba(0, 220, 0, .5)"
        allClear()
        timeOut(demo2)
        form.remove()
    }
    event.preventDefault()

})

function timeOut(a) {
    setTimeout(() => {
        a.style.top = '-7%'
    }, 2000)
}

function myFun() {
    if (date.checked) {
        if (dateIn.value == "") {
            demo1.innerText = "Please Enter Expiry Date"
            dateIn.focus()
            return false
        }
        else if (dateIn.value < b) {
            demo1.innerText = 'Please Enter Valid Date'
            dateIn.focus()
            return false
        }
        else {
            as = dateIn.value
            return as
        }
    }
    else if (days.checked) {
        if (manu.value == "") {
            demo1.innerText = "Please select Manufacture Date"
            manu.focus()
            return false
        }
        else if (Aday.value == "") {
            demo1.innerText = "Please enter days"
            Aday.focus()
            return false
        }
        else if (Aday.value < 1) {
            demo1.innerText = "Please enter correct days"
            Aday.focus()
            return false
        }
        else {
            let newDate = new Date(manu.value)
            newDate.setDate(newDate.getDate() + Number(Aday.value))
            as = newDate.toLocaleDateString();
            return as
        }
    }
}
