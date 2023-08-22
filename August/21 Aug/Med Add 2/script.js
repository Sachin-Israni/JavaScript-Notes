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
const record = document.getElementById('record')
const outrecord = document.getElementById('outrecord')
const f2can = document.getElementById('f2can')
const f3can = document.getElementById('f3can')
const form2 = document.getElementById('form2')
const form3 = document.getElementById('form3')
const f2med = document.getElementById('f2med')
const f3med = document.getElementById('f3med')
const show = document.getElementById('show')
const showmain = document.getElementById('showmain')
const f2quan = document.getElementById('f2quan')
const f3quan = document.getElementById('f3quan')
const Slot = document.getElementById('Slot')
const table2 = document.getElementById('table2')
const table3 = document.getElementById('table3')
const addrecordf2 = document.getElementById('addrecordf2')
const addrecordf3 = document.getElementById('addrecordf3')
const purpose = document.getElementById('purpose')

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


function allClear() {
    let allIn = document.querySelectorAll('input')
    // allIn.forEach((e) => e.value = "")
    // addDetails.value = "ADD MEDICINE"
    // can.value = "CANCEL"
    // rack.value = 0
    // date.checked = false
    // days.checked = false
    form.reset()
    forDate.style.display = "none"
    forManu.style.display = "none"
}


starter.addEventListener('click', () => {
    addDetails.style.display = "inline"
    upDetails.style.display = "none"
    form.style.display = "block"
    form3.style.display = "none"
    form2.style.display = "none"
    const cancel = document.getElementById('can');
    allClear()
    cancel.addEventListener('click', () => form.style.display = "none")
    addDetails.disabled = ""
    medName.focus()
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

                const month_val = Number(newDate.getMonth() + 1)
                const month = month_val >= 10 ? month_val : `0${month_val}`
                const date_val = Number(newDate.getDate())
                const mainDate = date_val >= 10 ? date_val : `0${date_val}`
                const b = newDate.getFullYear() + '-' + month + '-' + mainDate

                // as = newDate.toLocaleDateString();
                as = b;
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
let allDATA = []
addDetails.addEventListener('click', (event) => {

    if (!valid()) {
        timeOut(demo1)
    }
    else {
        let obj = {};
        obj.medicine = medName.value
        obj.quantity = quan.value
        obj.expiry_data = as
        obj.rack = rack.value
        obj.batch = batch1.value

        allDATA.push(obj)
        // console.log(obj);
        // console.log(allDATA);

        add = 'add' + i
        table.innerHTML += `<tr id="${add}">
        <td>${obj.medicine}</td>
        <td>${obj.quantity}</td>
        <td>${obj.expiry_data}</td>
        <td>${obj.rack}</td>
        <td>${obj.batch}</td>
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
                form.style.display = "none"
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
                form.style.display = "block"

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
                            form.style.display = "none"
                        })
                        form.reset()
                    }
                })
            })
        })

        demo2.style.top = '7%'
        demo2.innerText = "Medicine Added"
        demo2.style.backgroundColor = "rgba(0, 220, 0, .5)"
        allClear()
        timeOut(demo2)
        form.style.display = "none"
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
        dateIn.value = ""
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
            const month_val = Number(newDate.getMonth() + 1)
            const month = month_val >= 10 ? month_val : `0${month_val}`
            const date_val = Number(newDate.getDate())
            const mainDate = date_val >= 10 ? date_val : `0${date_val}`
            const b = newDate.getFullYear() + '-' + month + '-' + mainDate

            // as = newDate.toLocaleDateString();
            as = b;
            // as = newDate.toLocaleDateString();
            return as
        }
    }
}

record.addEventListener('click', () => {
    form.style.display = "none"
    form2.style.display = "block"
    form3.style.display = "none"
    f2med.focus()
    form2.reset()
})

can.addEventListener('click', () => {
    form.style.display = "none"
    form.reset()
})
f2can.addEventListener('click', () => {
    form2.style.display = "none"
    form2.reset()
})
f3can.addEventListener('click', () => {
    form3.style.display = "none"
    form3.reset()
})

let allData2 = []
let data2med = []


f2med.addEventListener('input', () => {

    show.innerHTML = ''
    allMeds.forEach(item => {
        let cur = f2med.value
        if (item.includes(cur)) {
            let li = document.createElement('li')
            li.innerText = item
            show.appendChild(li)
            console.log(li);

            let getobj = allDATA.filter(obj => obj.medicine.includes(cur))
            li.addEventListener('click', () => {


                f2med.value = li.innerText + " | " + getobj.filter(item => item.medicine == li.innerText)[0].quantity + " | " + getobj.filter(item => item.medicine == li.innerText)[0].expiry_data + " | " + getobj.filter(item => item.medicine == li.innerText)[0].rack

                f2quan.value = getobj.filter(item => item.medicine == li.innerText)[0].quantity

                show.innerHTML = ''
            })
        }
        if (f2med.value.trim() == "") {
            show.innerHTML = ''
        }
    })

})


addrecordf2.addEventListener('click', () => {
    let med = f2med.value.slice(0, f2med.value.indexOf('|')).trim()
    let getobj = allDATA.filter(obj => obj.medicine.includes(med))

    let objget = getobj.filter(item => item.medicine == med)[0]

    if (Slot.value == "Select") {
        demo1.innerText = 'Please select slot'
        demo1.style.top = '6%'
        demo1.style.backgroundColor = "rgba(225, 0, 0, .5)"
        timeOut(demo1)
        Slot.focus()
        return;
    }
    if (Number(objget.quantity) == 0) {
        demo1.innerText = `All ${med} meds are sold out`
        demo1.style.top = '6%'
        demo1.style.backgroundColor = "rgba(225, 0, 0, .5)"
        timeOut(demo1)
        form2.reset()
        form2.style.display = "none"
        return;
    }
    if (Number(f2quan.value) > Number(objget.quantity)) {
        demo1.innerText = "Please Enter Valid value"
        demo1.style.top = '6%'
        demo1.style.backgroundColor = "rgba(225, 0, 0, .5)"
        timeOut(demo1)
        f2quan.focus()
    }
    if (Number(f2quan.value) <= Number(objget.quantity)) {
        let recordObj = {}

        if (data2med.includes(med)) {
            if (true) {
                let med = f2med.value.slice(0, f2med.value.indexOf('|')).trim()
                let getobj = allDATA.filter(obj => obj.medicine.includes(med))

                let objget = getobj.filter(item => item.medicine == med)[0]

                objget.quantity = objget.quantity - f2quan.value

                let maina = document.getElementById('table').children;
                let maina2 = Array.from(maina).filter(ele => {
                    if (ele.children[0].innerText == objget.medicine) {
                        return ele.children[1].innerText = objget.quantity;
                    }
                })

            }

            let getobj = allData2.filter(obj => obj.medicine.includes(med))

            let objget = getobj.filter(item => item.medicine == med)[0]
            objget.quantity = Number(objget.quantity) + Number(f2quan.value)

            let maina = document.getElementById('table2').children;
            let maina2 = Array.from(maina).filter(ele => {
                if (ele.children[0].innerText == objget.medicine) {
                    return ele.children[2].innerText = objget.quantity;
                }
            })
            form2.reset()
            form2.style.display = "none"
        }
        else {

            data2med.push(med)
            table2.innerHTML += `<tr>
    <td>${med}</td>
    <td>${Slot.value}</td>
    <td>${f2quan.value}</td>
    </tr>`

            recordObj.medicine = med
            recordObj.slot = Slot.value
            recordObj.quantity = f2quan.value
            allData2.push(recordObj)

            // let cur = med
            objget.quantity = objget.quantity - f2quan.value

            let maina = document.getElementById('table').children;
            let maina2 = Array.from(maina).filter(ele => {
                if (ele.children[0].innerText == objget.medicine) {
                    return ele.children[1].innerText = objget.quantity;
                }
            })

            form2.reset()
            form2.style.display = "none"
        }
    }
    // console.log(allData2);
    // let sameName = allData2.filter(obj => obj.medicine.includes(med))
    // console.log(sameName);
    // let sameNameagain = sameName.filter(item => item.medicine == med)[0]
    // console.log(sameNameagain);


    // if (allData2.filter(item => item.medicine.includes(med))) {
    //     let change = document.getElementById('table2').children
    //     let changing = Array.from(change).filter(ele => {
    //         if (ele.children[0].innerText == sameNameagain.medicine) {
    //             table2.innerHTML += `<tr>
    //             <td>${med}</td>
    //             <td>${Slot.value}</td>
    //             <td>${ele.children[2].innerText + sameNameagain.quantity}</td>
    //             </tr>`
    //             // return ele.children[2].innerText = ele.children[2].innerText + sameNameagain.quantity
    //         }
    //     })

    //     console.log("i am if");

    // } else {

})


let allData3 = []
let data3med = []
f3med.addEventListener('input', () => {
    form3.reset()

    showmain.innerHTML = ''
    data2med.forEach(item => {
        let cur = f3med.value
        if (item.includes(cur)) {
            let li = document.createElement('li')
            li.innerText = item
            showmain.appendChild(li)
            console.log(li);

            let getobj = allData2.filter(obj => obj.medicine.includes(cur))
            li.addEventListener('click', () => {

                f3med.value = li.innerText

                // f3med.value = li.innerText + " | " + getobj.filter(item => item.medicine == li.innerText)[0].quantity + " | " + getobj.filter(item => item.medicine == li.innerText)[0].expiry_data + " | " + getobj.filter(item => item.medicine == li.innerText)[0].rack

                f3quan.value = getobj.filter(item => item.medicine == li.innerText)[0].quantity

                showmain.innerHTML = ''
            })
        }
        if (f3med.value.trim() == "") {
            showmain.innerHTML = ''
        }
    })

})


addrecordf3.addEventListener('click', () => {

    let recordObj = {}

    // let med = f3med.value.slice(0, f2med.value.indexOf('|')).trim()
    let med = f3med.value
    data3med.push(med)

    table3.innerHTML += `<tr>
        <td>${med}</td>
        <td>${purpose.value}</td>
        <td>${f3quan.value}</td>
        </tr>`

    recordObj.medicine = med
    recordObj.purpose = Slot.value
    recordObj.quantity = f2quan.value
    allData2.push(recordObj)

    // let cur = med

    let getobj = allData2.filter(obj => obj.medicine.includes(med))

    let objget = getobj.filter(item => item.medicine == med)[0]
    objget.quantity = objget.quantity - f3quan.value

    let maina = document.getElementById('table2').children;
    let maina2 = Array.from(maina).filter(ele => {
        if (ele.children[0].innerText == objget.medicine) {
            return ele.children[2].innerText = objget.quantity;
        }
    })
    form2.reset()
    form3.style.display = "none"
})

outrecord.addEventListener('click', () => {
    form.style.display = "none"
    form2.style.display = "none"
    form3.style.display = "block"
    f3med.focus()
    form3.reset()
})