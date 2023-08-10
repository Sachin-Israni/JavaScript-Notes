let starter = document.getElementById('popUp')
let form = document.getElementById('form')
let addDetails = document.getElementById('addDetails')
let medName = document.getElementById('medName')
let table = document.getElementById('table')
let quan = document.getElementById('quan')
let manu = document.getElementById('manu')
let rack = document.getElementById('rack')
let batch = document.getElementById('batch')

starter.addEventListener('click', () => {
    // alert("I'm Working")
    form.style.display = 'block'
})

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

addDetails.addEventListener('click', (event) => {
    table.innerHTML += `<tr>
                        <td>${medName.value}</td>
                        <td>${quan.value}</td>
                        <td>${manu.value}</td>
                        <td>${rack.value}</td>
                        <td>${batch.value}</td>
    </tr>`
    form.style.display = 'none'
    event.preventDefault()
})