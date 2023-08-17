const can = document.getElementsByName('cancelBtn')[0]
const date = document.getElementById('date')
const days = document.getElementById('days')
const starter = document.getElementById('popUp')
const form = document.getElementById('form')
const form2 = document.getElementById('form2')
const form3 = document.getElementById('form3')
const table = document.getElementById('table')
const rack = document.getElementById('rack')
const batch = document.getElementById('batch')
const forDate = document.getElementById('forDate')
const forManu = document.getElementById('forManu')
const model = document.querySelector('.model1')
const input = document.getElementsByTagName('input')
const record = document.getElementById('record')
const outRecord = document.getElementById('outRecord')

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

let allData = [
    // {
    //     medcine: "dolo",
    //     quantity: 12,
    //     Expiry_date: "2023-08-25",
    //     rack: 3,
    //     batch: "A3",
    // },
    // {
    //     medcine: "jolo",
    //     quantity: 24,
    //     Expiry_date: "2023-10-18",
    //     rack: 5,
    //     batch: "A5",
    // },
]

form.style.display = "none"
form2.style.display = "none"
form3.style.display = "none"

// --------------------------------- clear input function

function allClear() {
    form.reset()
    forDate.style.display = "none"
    forManu.style.display = "none"
}

// --------------------------------- Add medicine Popup button function

starter.addEventListener('click', () => {
    form.elements.submitBtn.style.display = "inline"
    form.elements.updateBtn.style.display = "none"
    form.style.display = "block"
    form2.style.display = "none"
    form3.style.display = "none"
    allClear()
    form.elements.cancelBtn.addEventListener('click', () => form.style.display = "none")
    // table.remove()
})

record.addEventListener('click', () => {
    form.style.display = "none"
    form2.style.display = "block"
    form3.style.display = "none"
    form2.elements.cancelBtn.addEventListener('click', () => form2.style.display = "none")
})
outRecord.addEventListener('click', () => {
    form.style.display = "none"
    form2.style.display = "none"
    form3.style.display = "block"
    form3.elements.cancelBtn.addEventListener('click', () => form3.style.display = "none")
})

// ----------- sending the date of racks in the options 

racks.forEach((e) => {
    rack.innerHTML += `<option value="${e.id}">id:${e.id}, num:${e.num} </option>`
})
form.elements.batch1.value = '';

// ----------- min date for expire - Today's Date 

const a = new Date()
const month_val = Number(a.getMonth() + 1)
const month = month_val >= 10 ? month_val : `0${month_val}`
const date_val = Number(a.getDate())
const mainDate = date_val >= 10 ? date_val : `0${date_val}`

const b = a.getFullYear() + '-' + month + '-' + mainDate
form.elements.expDate.min = b


var as;

// ------------------------------------- data and days input display block/none

date.addEventListener('click', () => {
    forDate.style.display = 'block'
    forManu.style.display = 'none'
})
days.addEventListener('click', () => {
    forDate.style.display = 'none'
    forManu.style.display = 'block'
})


// ------------------------------------- sending batch number using rack option

rack.addEventListener('input', () => {
    let mainvaa = batchs.find(e => {
        if (e.rack_id == rack.value) {
            form.elements.batch1.value = e.batch
        }
    })
})


// ------------------------------------- chacking all validation

let valid = () => {
    let newMed = form.elements.Medicine.value
    if (newMed == "" || form.elements.Quantity.value == "" || allMeds.includes(newMed) || rack.value == 0 || form.elements.Quantity.value < 1) {

        newMed = form.elements.Medicine.value.trim()
        if (newMed == "") {
            demo1.innerText = "Please Enter Medicine Name"
            form.elements.Medicine.focus()
        }
        else if (allMeds.includes(newMed)) {
            demo1.innerText = "Medicine already exists"
            form.elements.Medicine.focus()
        }
        else if (rack.value == 0) {
            demo1.innerText = "Please Select Rack"
            rack.focus()
        }
        else if (form.elements.Quantity.value == "") {
            demo1.innerText = "Please Enter Quantity"
            form.elements.Quantity.focus()
        }
        else if (form.elements.Quantity.value < 1) {
            demo1.innerText = "Quantity cannot be negative"
            form.elements.Quantity.focus()
        }
        demo1.style.top = '6%'
        return false
    }
    else if (!date.checked && !days.checked) {
        demo1.innerText = "Please select Expiry by Days/Date"
        demo1.style.top = '6%'
        date.focus()
        return false
    }
    else if (date.checked || days.checked) {
        if (date.checked) {
            if (form.elements.expDate.value == "") {
                demo1.innerText = "Please Enter Expiry Date"
                form.elements.expDate.focus()
            }
            else if (form.elements.expDate.value < b) {
                demo1.innerText = 'Please Enter Valid Date'
                form.elements.expDate.focus()
            }
            else {
                as = form.elements.expDate.value
                return true
            }
        }
        else if (days.checked) {
            if (form.elements.manufacture.value == "") {
                demo1.innerText = "Please select Manufacture Date"
                form.elements.manufacture.focus()
            }
            else if (form.elements.daysAftManu.value == "") {
                demo1.innerText = "Please enter days"
                form.elements.daysAftManu.focus()
            }
            else if (form.elements.daysAftManu.value < 1) {
                demo1.innerText = "Please enter correct days"
                Adform.elements.daysAftManuaform.elements.daysAftManuy.focus()
            }
            else {
                let newDate = new Date(form.elements.manufacture.value)
                newDate.setDate(newDate.getDate() + Number(form.elements.daysAftManu.value))
                as = newDate.toLocaleDateString();
                return true
            }
        }
        demo1.style.top = '6%'
        return false
    }
    else {
        // as = form.elements.expDate.value
        return true
    }
}



// form.elements.submitBtn.addEventListener('click', (event) => {

//     if (!valid()) {
//         timeOut(demo1)
//     }
//     else {
//         // add = 'add' + i
//         // table.innerHTML += `<tr id="${add}">
//         // <td>${form.elements.Medicine.value.trim().toLowerCase()}</td>
//         // <td>${form.elements.Quantity.value}</td>
//         // <td>${as}</td>
//         // <td>${rack.value}</td>
//         // <td>${form.elements.batch1.value}</td>
//         // <td><button class="del">Del</button> <button class="edit">EDIT</button></td>
//         // </tr>`
//         // i += 1
//         // allMeds.push(form.elements.Medicine.value)
//         // console.log(allMeds);

//         // const dele = document.getElementsByClassName('del')
//         // Array.from(dele).forEach((e) => {
//         //     e.addEventListener('click', () => {
//         //         tr = document.getElementById(e.parentElement.parentElement.id)
//         //         let delVal = tr.children[0].innerText
//         //         allMeds = allMeds.filter(e => e != delVal)
//         //         form.style.display = "none"
//         //         tr.remove()
//         //         demo3.innerText = `${delVal} Medicine Successfully Deleted`
//         //         demo3.style.top = '10%'
//         //         timeOut(demo3)
//         //     })
//         // })

//         // const edit = document.getElementsByClassName('edit')
//         // Array.from(edit).forEach((e) => {
//         //     e.addEventListener('click', () => {

//         //         form.elements.submitBtn.style.display = "none"
//         //         form.elements.updateBtn.style.display = "inline"
//         //         form.append(can)

//         //         td = document.getElementById(e.parentElement.parentElement.id)
//         //         let trChild = Array.from(td.children)
//         //         trChild.map((val, i, arr) => {
//         //             form.elements.Medicine.focus()
//         //             date.checked = "on"
//         //             forDate.style.display = "block"
//         //             form.elements.Medicine.value = arr[0].innerText
//         //             form.elements.Quantity.value = arr[1].innerText
//         //             form.elements.expDate.value = arr[2].innerText
//         //             rack.value = arr[3].innerText
//         //             form.elements.batch1.value = arr[4].innerText
//         //         })

//         //         console.log(td);
//         //         console.log(trChild);
//         //         form.elements.updateBtn.addEventListener('click', () => {
//         //             trChild = trChild.map((val, i, arr) => {
//         //                 arr[0].innerText = form.elements.Medicine.value
//         //                 arr[1].innerText = form.elements.Quantity.value
//         //                 arr[2].innerText = myFun()
//         //                 arr[3].innerText = rack.value
//         //                 arr[4].innerText = form.elements.batch1.value
//         //             })
//         //             allClear()
//         //             form.style.display = "none"
//         //         })
//         //     })
//         // })

//         demo2.style.top = '7%'
//         demo2.innerText = "Medicine Added"
//         allClear()
//         timeOut(demo2)
//         form.style.display = "none"
//     }
//     event.preventDefault()

// })

// ------------------------------- time for error updation and deletion

function timeOut(a) {
    setTimeout(() => {
        a.style.top = '-7%'
    }, 2000)
}

// ------------------------------- date and days validation for update function

function myFun() {
    if (date.checked) {
        if (form.elements.expDate.value == "") {
            demo1.innerText = "Please Enter Expiry Date"
            form.elements.expDate.focus()
        }
        else if (form.elements.expDate.value < b) {
            demo1.innerText = 'Please Enter Valid Date'
            form.elements.expDate.focus()
        }
        else {
            as = form.elements.expDate.value
            return as
        }
    }
    else if (days.checked) {
        if (form.elements.manufacture.value == "") {
            demo1.innerText = "Please select Manufacture Date"
            form.elements.manufacture.focus()
        }
        else if (form.elements.daysAftManu.value == "") {
            demo1.innerText = "Please enter days"
            form.elements.daysAftManu.focus()
        }
        else if (form.elements.daysAftManu.value < 1) {
            demo1.innerText = "Please enter correct days"
            form.elements.daysAftManu.focus()
        }
        else {
            let newDate = new Date(form.elements.manufacture.value)
            newDate.setDate(newDate.getDate() + Number(form.elements.daysAftManu.value))
            as = newDate.toLocaleDateString();
            return as
        }
    }
    demo1.style.top = '6%'
    timeOut(demo1)
    return false
}


// ------------------------------- Main submit btn function

i = 0;
let allMeds = []
form.elements.submitBtn.addEventListener('click', (event) => {
    event.preventDefault()
    if (!valid()) {
        timeOut(demo1)
    }
    else {
        add = 'add' + i

        let e = {};

        e.medcine = form.elements.Medicine.value.trim().toLowerCase()
        e.quantity = form.elements.Quantity.value
        e.Expiry_date = as
        e.rack = rack.value
        e.batch = form.elements.batch1.value
        console.log(e.medcine)

        table.innerHTML += `<tr id="${add}">
            <td>${e.medcine}</td>
            <td>${e.quantity}</td>
            <td>${e.Expiry_date}</td>
            <td>${e.rack}</td>
            <td>${e.batch}</td>
            <td><button class="del">Del</button> <button class="edit">EDIT</button></td>
            </tr>`
        i += 1
        allMeds.push(form.elements.Medicine.value)
        console.log(allData);

        // ------------------------------------------------------------------  delete function

        const dele = document.getElementsByClassName('del')
        console.log(dele);
        Array.from(dele).forEach(ae => {
            ae.addEventListener('click', () => {
                let tr = ae.parentElement.parentElement;
                allData = allData.filter(item => item.medcine != tr.firstElementChild.innerText)
                allMeds = allMeds.filter(e => e != tr.firstElementChild.innerText)
                tr.remove()
                console.log(allData);
                demo3.innerText = `${tr.firstElementChild.innerText} Medicine Successfully Deleted`
                demo3.style.top = '10%'
                timeOut(demo3)
            })
        })

        allData.push(e)
        form.style.display = "none"

        // ------------------------------------------------------------------- Edit function

        const edit = document.getElementsByClassName('edit')
        Array.from(edit).forEach((e) => {
            e.addEventListener('click', () => {

                // -------------------- none/block display

                form.elements.submitBtn.style.display = "none"
                form.elements.updateBtn.style.display = "inline"
                form.elements.cancelBtn.style.display = "inline"
                form.style.display = "block"

                // ------------------- get object of clicked tr from allData Array

                let tr = e.parentElement.parentElement;
                const obj = allData.indexOf(allData.filter(item => item.medcine == tr.firstElementChild.innerText))
                console.log(obj);

                // ------------------- fill the input tags with the clicked tr

                tdTab = document.getElementById(e.parentElement.parentElement.id)

                let trChild = Array.from(tdTab.children);
                trChild.map((val, i, arr) => {
                    form.elements.Medicine.focus()
                    date.checked = "on"
                    forDate.style.display = "block"
                    form.elements.Medicine.value = arr[0].innerText
                    form.elements.Quantity.value = arr[1].innerText
                    form.elements.expDate.value = arr[2].innerText
                    rack.value = arr[3].innerText
                    form.elements.batch1.value = arr[4].innerText
                })
                console.log(trChild);


                // ---------------------------------------------- update the tr in table and obj in array

                form.elements.updateBtn.addEventListener('click', () => {
                    if (!valid()) {
                        timeOut(demo1)
                        console.error("Update");
                    }
                    else {
                        trChild = trChild.map((val, i, arr) => {
                            arr[0].innerText = form.elements.Medicine.value.trim().toLowerCase()
                            arr[1].innerText = form.elements.Quantity.value
                            arr[2].innerText = myFun()
                            arr[3].innerText = rack.value
                            arr[4].innerText = form.elements.batch1.value
                            obj.medcine = form.elements.Medicine.value.trim().toLowerCase()
                            obj.quantity = form.elements.Quantity.value
                            obj.Expiry_date = myFun()
                            obj.rack = rack.value
                            obj.batch = form.elements.batch1.value
                            allClear()
                            form.style.display = "none"
                        })
                    }
                })
            })
        })
        allClear()
        form.style.display = "none"
        demo2.style.top = '7%'
        demo2.innerText = "Medicine Added"
        timeOut(demo2)
    }
})

// console.log(arr.slice(1));


let recordArr = []
form2.elements.medicineData.addEventListener('input', () => {

    mainlist.innerHTML = ''
    allMeds.forEach(item => {
        let cur = form2.elements.medicineData.value
        if (item.includes(cur)) {
            let li = document.createElement('li')
            li.innerText = item
            mainlist.appendChild(li)
            console.log(li);
            let getobj = allData.filter(obj => obj.medcine.includes(cur))
            li.addEventListener('click', () => {
                let recordObj = {}
                recordObj.medicine = li.innerText
                recordObj.quantity = getobj[0].quantity
                form2.elements.slots.addEventListener('input', (e) => {
                    recordObj.slot = form2.elements.slots.value
                    console.log(recordObj);
                })
                recordArr.push(recordObj)
                form2.elements.medicineData.value = li.innerText + " | " + getobj[0].quantity + " | " + getobj[0].Expiry_date + " | " + getobj[0].rack
                mainlist.innerHTML = ''
                form2.elements.addQuantity.value = getobj[0].quantity
                form2.elements.addRecord.addEventListener('click', () => {
                    document.getElementById('recordTab').innerHTML += `<tr>
                    <td>${li.innerText}</td>
                    <td>${recordObj.slot}</td>
                    <td>${recordObj.quantity}</td>`
                    form2.style.display="none"
                    form2.reset()
                })
            })
        }
        if (form2.elements.medicineData.value.trim() == "") {
            mainlist.innerHTML = ''
        }
    })

})


form2.elements.medicineData.addEventListener('focusOut', () => {
    mainlist.innerHTML = ''
})
