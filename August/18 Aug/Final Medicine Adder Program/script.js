const form1 = document.getElementById('form1')
const table1 = document.getElementById('table1')
const f1day = document.getElementById('f1day')
const f1date = document.getElementById('f1date')
const forDate = document.getElementById('forDate')
const forManu = document.getElementById('forManu')
const f1med = form1.elements.f1med
const f1rack = form1.elements.f1rack
const f1quantity = form1.elements.f1quantity
const f1expdate = form1.elements.f1expdate
const f1manudate = form1.elements.f1manudate
const f1days = form1.elements.f1days
const f1batch = form1.elements.f1batch

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

racks.forEach((e) => {
    f1rack.innerHTML += `<option value="${e.id}">id:${e.id}, num:${e.num} </option>`
})
f1batch.value = '';


f1rack.addEventListener('input', () => {
    let mainvaa = batchs.find(e => {
        if (e.rack_id == f1rack.value) {
            f1batch.value = e.batch
        }
    })
})

f1date.addEventListener('click', () => {
    forDate.style.display = 'block'
    forManu.style.display = 'none'
})
f1day.addEventListener('click', () => {
    forDate.style.display = 'none'
    forManu.style.display = 'block'
})

const a = new Date()
const month_val = Number(a.getMonth() + 1)
const month = month_val >= 10 ? month_val : `0${month_val}`
const date_val = Number(a.getDate())
const mainDate = date_val >= 10 ? date_val : `0${date_val}`

const b = a.getFullYear() + '-' + month + '-' + mainDate
f1expdate.min = b


var as;

let allData = getData() || []
let allMeds = []


function m1add() {
    form1.style.display = "block"
}

function medValid() {
    let mainmed = f1med.value.trim().toLowerCase();
    console.log(mainmed);
    if (mainmed == "") {
        demo1.innerText = "Please Enter Medicine Name"
        f1med.focus()
    }
    else if (allMeds.includes(mainmed)) {
        console.log(allMeds);
        demo1.innerText = "Medicine already exists"
        f1med.focus()
    }
    demo1.style.top = '6%'
}

// function daysValid(){
//     if (f1date.checked) {
//         if (!f1expdate.value) {
//             console.log(f1expdate.value);
//             demo1.innerText = "Please Enter Expiry Date"
//             f1expdate.focus()
//         }
//         else if (f1expdate.value < b) {
//             console.log(f1expdate.value);
//             console.log(b);
//             console.log(typeof f1expdate.value);
//             console.log(typeof b);
//             demo1.innerText = 'Please Enter Valid Date, Expiry date cannot be past '
//             f1expdate.focus()
//         }
//         else {
//             as = f1expdate.value
//         }
//     }
//     else if (f1day.checked) {
//         if (f1manudate.value == "") {
//             console.log(f1manudate.value);
//             demo1.innerText = "Please select Manufacture Date"
//             f1manudate.focus()
//         }
//         else if (f1days.value == "") {
//             console.log(f1days.value);
//             demo1.innerText = "Please enter days"
//             f1days.focus()
//         }
//         else if (f1days.value < 1) {
//             console.log(f1days.value);
//             demo1.innerText = "Please enter correct days"
//             f1days.focus()
//         }
//         else {
//             let newDate = new Date(f1manudate.value)
//             newDate.setDate(newDate.getDate() + Number(f1days.value))
//             as = newDate.toLocaleDateString();
//         }
//     }
//     demo1.style.top = '6%'
// }

function validation() {
    // let mainmed = f1med.value.trim().toLowerCase();
    if (f1med.value.trim().toLowerCase() == "" || allMeds.includes(f1med.value.trim().toLowerCase())) {
        medValid();
        return false;
    }
    else if (f1rack.value == 0) {
        demo1.innerText = "Please Select Rack"
        demo1.style.top = '6%'
        f1rack.focus();
        return false;
    }
    else if (f1quantity.value < 0 || f1quantity.value == 0) {
        demo1.innerText = "Please enter quantity more than 0"
        demo1.style.top = '6%'
        console.log(f1quantity.value);
        f1quantity.focus()
        return false;
    }
    // else if (!f1date.checked && !f1day.checked) {
    //     demo1.innerText = "Please select Expiry by Days/Date"
    //     demo1.style.top = '6%'
    //     f1date.focus()
    //     return false
    // }

    // else if (f1date.checked || f1day.checked) {
    //     daysValid()
    //     return false
    // }

    else {
        return true;
    }
}


function timeOut(a) {
    setTimeout(() => {
        a.style.top = '-7%'
    }, 2000)
}

id = 0;
function f1submit() {
    event.preventDefault()
    if (!validation()) {
        timeOut(demo1)
    }
    else {
        let newObj = {};
        mainmed = f1med.value.trim().toLowerCase()
        allMeds.push(mainmed);
        newObj.medicine = mainmed;
        newObj.quantity = f1quantity.value
        newObj.expdate = f1expdate.value
        newObj.rack = f1rack.value
        newObj.batch = f1batch.value

        console.log(allMeds);
        allData.push(newObj);
        console.log(allData);


        let alldatas = JSON.stringify(allData)
        localStorage.setItem('main', alldatas)
        // getData();

        let allmeds = JSON.stringify(allMeds)
        localStorage.setItem('medicine', allmeds)
        getMeds();

        putData();
        // del();
        // location.reload()
        // console.log(getData());

        form1.style.display = "none"
        form1.reset();
    }
}



if (getData() != null) {
    putData()
}

function getData() {
    return JSON.parse(localStorage.getItem('main'));
}

function getMeds() {
    return JSON.parse(localStorage.getItem('medicine'));
}
// console.log(getData());

function putData() {
    let main = getData()
    // add = 'add' + id

    table1.innerHTML = ""
    main.forEach(item => {

        table1.innerHTML += `<tr ">
        <td>${item.medicine}</td>
        <td>${item.quantity}</td>
        <td>${item.expdate}</td>
        <td>${item.rack}</td>
        <td>${item.batch}</td>
        <td><button onclick="del()" class="del">Del</button> <button class="edit">EDIT</button></td>
        `
        // id += 1
        allMeds.push(item.medicine)


    })

}
function del() {
    const dele = document.getElementsByClassName('del')
    // console.log(dele);
    Array.from(dele).forEach(ae => {
        // console.log("called");
        // console.log("called2");
        ae.addEventListener('click', () => {
            // console.log("called3");
            let tr = ae.parentElement.parentElement;
            allData = getData()
            console.log(allData);
            let allDate = allData.filter(item => item.medcine != tr.firstElementChild.innerText)
            // putData()
            allMeds = allMeds.filter(e => e != tr.firstElementChild.innerText)
            tr.remove()
            // console.log(allData);
            demo3.innerText = `${tr.firstElementChild.innerText} Medicine Successfully Deleted`
            demo3.style.top = '10%'
            timeOut(demo3)
        })
    })
}
// const dele = document.getElementsByClassName('del')
// console.log(dele);

// function del() {
//     Array.from(dele).forEach(ae => {
//         console.log("called");
//         console.log("called2");
//         ae.addEventListener('click', () => {
//             console.log("called3");
//             let tr = ae.parentElement.parentElement;
//             allData = allData.filter(item => item.medcine != tr.firstElementChild.innerText)
//             allMeds = allMeds.filter(e => e != tr.firstElementChild.innerText)
//             tr.remove()
//             console.log(allData);
//             demo3.innerText = `${tr.firstElementChild.innerText} Medicine Successfully Deleted`
//             demo3.style.top = '10%'
//             timeOut(demo3)
//         })
//     })
// }
function cancel() {
    form1.reset()
    form1.style.display = "none"
}

function addObjtects(medname, quantity, expdate, rack) {
    let obj = {};
    obj.medcine = medname,
        obj.quan = quantity,
        obj.exp = expdate,
        obj.rack = rack
    allMeds.push(obj)
}
console.log(JSON.parse(localStorage.main)[0]);