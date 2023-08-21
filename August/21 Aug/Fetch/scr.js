// let weather_API = fetch("http://www.7timer.info/bin/astro.php?").then((res) => {
//     console.log(res.status);
//     console.log(res.ok);
//     return res.blob()
// }).then(val => {
//     document.body.innerHTML=val.size
//     console.log(val)
// })
// console.log(weather_API);

// let a = prompt('enter country Name:')
// let another_API = fetch(`https://goweather.herokuapp.com/weather/${a}`).then(val => val.json()).then(val => {
//     // let as=JSON.stringify(val)
//     // as=Array.from(as)
//     document.body.innerHTML=val.forecast[0].day

//     console.log(val)
// })










// -------------------------------------------------------------------

// f2med.addEventListener('input', () => {

//     let cur = f2med.value
//     let getobj = allDATA.filter(obj => obj.medicine.includes(cur))
//     console.log(getobj);
//     console.log(cur);
//     allMeds.forEach(item => {
//         show.innerHTML = ""
//         if (item.includes(cur)) {
//             console.log(item.includes(cur));
//             let li = document.createElement('li')
//             li.innerText = item
//             show.append(li)
//             // if (getobj.length > 1){
//             //     let li=document.createElement('li')

//             // }

//                 li.addEventListener('click', () => {
//                     f2med.value = li.innerText + " | " + getobj[0].quantity + " | " + getobj[0].expiry_data + " | " + getobj[0].rack
//                     f2quan.value = getobj[0].quantity
//                     show.innerHTML = ""

//                     addrecordf2.addEventListener('click', () => {
//                         table2.innerHTML=""
//                         let obj = {}
//                         obj.medicine = li.innerText
//                         obj.slot = Slot.value
//                         obj.quantity = f2quan.value
//                         getobj[0].quantity = getobj[0].quantity - obj.quantity
//                         let maina = document.getElementById('table').children
//                         let maina2 = Array.from(maina).filter(ele => {
//                             if (ele.children[0].innerText == obj.medicine) {
//                                 return ele.children[1].innerText = getobj[0].quantity
//                             }
//                             // console.log(ele.children[1].innerText);
//                         })
//                         console.log(getobj[0].quantity);
//                         table2.innerHTML += `<tr>
//                     <td>${obj.medicine}</td>
//                     <td>${obj.slot}</td>
//                     <td>${obj.quantity}</td>
//                     </tr>`

//                         form2.reset()
//                         form2.style.display = "none"
//                     })
//                 })
//         }
//         if (f2med.value.trim() == "") {
//             show.innerHTML = ""
//         }
//     })
// show.innerHTML += `<li>${allMeds.filter(med => med.includes(f2med.value))}</li>`
// })

// function addrecordf2() {
//     table2.innerHTML += `<tr>
//     <td>${obj.medicine}</td>
//     <td>${obj.slot}</td>
//     <td>${obj.quantity}</td>
//     </tr>`
// }

// console.log(document.getElementsByTagName('tr')[0]);
// console.log(document.getElementsByTagName('tbody')[0]);

// console.log(maina2);
