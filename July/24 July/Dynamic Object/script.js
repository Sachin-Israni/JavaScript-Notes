// => create a dynamic table 
// has 5 columns 
//   => seriol number
//   => first name
//   => last name
//   => email 
//   => phone number

// data will be in following format

const usersData = [
    {
        id: 432,
        first_name: "Asd",
        last_name: "paerl",
        email: "abc@gmail.com",
        phone: "+919394099203"
    },
    {
        id: 342,
        first_name: "dsf",
        last_name: "paerl",
        email: "sdf@gmail.com",
        phone: "+919394099089"
    },
    {
        id: 765,
        first_name: "dfgf",
        last_name: "dfg",
        email: "muyjgh@gmail.com",
        phone: "+919394054345"
    },
    {
        id: 123,
        first_name: "sdxfg",
        last_name: "gdfd",
        email: "werrew@gmail.com",
        phone: "+915464569203"
    },
]
let table = document.getElementsByTagName('table')[0]
// console.log(table);
usersData.map(ele => {
    let tr = document.createElement('tr')
    tr.style.textAlign = 'center'
    for (const key in ele) {
        let td = document.createElement('td')
        td.innerHTML = ele[key]
        td.style.padding = '10px'
        td.style.boxShadow = "2px 2px 5px 1px red, inset 2px 2px 5px 1px red"
        // console.log(td);
        tr.append(td)
    }
    table.append(tr)
})