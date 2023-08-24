// const myForm = document.getElementById('myForm')

// myForm.addEventListener('submit', (e) => {
//     e.preventDefault()

//     const formData = new FormData(myForm);

//     fetch('login.php', {
//         method: 'post',
//         body: formData
//     })
//         .then((res) => res.text())
//         .then((text) => console.log(text))
//         .catch(err => console.log(err))
// })

// // ----------------------------------------------- get api from the post method put some other data in it

// let fetching = async () => {

//     const options = {
//         method: 'post',
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//         })
//     }
//     let a = await fetch('https://jsonplaceholder.typicode.com/posts', options)
//     let response = await a.json()
//     return response;

// }

// // ----------------------------------------------- getting the particular data by id

// let getbyid = async (id) => {
//     let a = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
//     let response = await a.json()
//     return response;

// }

// // ----------------------------------------------- deleting the particular data by id

// let del = async () => {
//     let a = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
//         method: 'DELETE',
//     });
//     let response = a.json()
//     return response;
// }

// // ----------------------------------------------- give the data which have same userId

// let userId = async () => {
//     let a = await fetch('https://jsonplaceholder.typicode.com/posts?userId=2')
//     let response = await a.json()
//     return response;
// }

// // ----------------------------------------------- listing nested resource

// // This is equivalent to /comments?postId=1
// let nested = async () => {
//     // let a = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
//     let a = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
//     let response = await a.json()
//     return response;
// }


// // ----------------------------------------------- main function for calling all function

// let mainFunc = async () => {
//     let last = await fetching()
//     console.log(last);
//     console.log(await getbyid(1));
//     console.log(await del());
//     console.log(await userId());
//     console.log(await nested());
//     console.log(await getbyid(10));
// }

// mainFunc()

// ----------------------------------------------- get api from the post method put some other data in it

// let fetching = async () => {

//     const options = {
//         method: 'post',
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//         })
//     }
//     let a = await fetch('https://data.covid19india.org/v4/min/data.min.json', options)
//     let response = await a.json()
//     return response;

// }

// ----------------------------------------------- getting the particular data by id

// let getbyid = async (id) => {
//     let a = await fetch('https://data.covid19india.org/v4/min/data.min.json/' + id)
//     let response = await a.json()
//     return response;

// }

// ----------------------------------------------- deleting the particular data by id

// let del = async () => {
//     let a = await fetch('https://data.covid19india.org/v4/min/data.min.json', {
//         method: 'DELETE',
//     });
//     let response = a.json()
//     return response;
// }

// ----------------------------------------------- give the data which have same userId

// let userId = async () => {
//     let a = await fetch('https://data.covid19india.org/v4/min/data.min.json')
//     let response = await a.json()
//     return response;
// }

// ----------------------------------------------- listing nested resource

// This is equivalent to /comments?postId=1
// let nested = async () => {
//     // let a = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
//     let a = await fetch('https://data.covid19india.org/v4/min/data.min.json')
//     let response = await a.json()
//     return response;
// }


// ----------------------------------------------- main function for calling all function

// let mainFunc = async () => {
//     let last = await fetching()
//     console.log(last);
//     console.log(await getbyid(1));
//     console.log(await del());
//     console.log(await userId());
//     console.log(await nested());
//     console.log(await getbyid(10));
// }

// mainFunc()

// -----------------------------------------------

// async function enter() {
//     let input = document.getElementById('input')
//     let State = input.value
//     console.log(State);
//     // let city = prompt("Please enter city name")
//     // console.log(city);
//     await fetch('https://data.covid19india.org/v4/min/data.min.json')
//         .then(res => res.json())
//         .then(last => {
//             let arr = []
//             let list = arr.push(last)
//             console.log(arr[0]);
//         })


// .then(res => {
//     // let as = `res.${State}.districts.${city}.meta.tested.date`
//     // let aa = `res.${State}.districts.${city}.total`
//     // console.log(as)
//     let main = res
//     console.log(main.GJ);
//     console.log(main.State);
//     console.log(typeof main);
//     for (const key in main) {
//         if(key==State){

//         }
//         console.log(key);
//         for (const keys in key) {
//             console.log(key);
//         }
//     }
//     console.log(typeof main.GJ);
//     console.log(typeof State);
// }).catch(err => console.log(err))
// }

// let main = document.getElementById('main')

// fetch('https://data.covid19india.org/v4/min/data.min.json')
// .then(res => res.json())
// .then(res => {
// let a = res.GJ.districts.Ahmedabad.meta.tested.date
// console.log(a);
// console.log(res);
// let arr1 = []


// a = Object.keys(res).map((e) => {
//     return e
// })
// console.log(a);


// b = Object.entries(res)
// i = 0
// console.log(b);
// let btn = document.getElementById('enter').addEventListener('click', enter)
// function enter() {
// num = 1;
// b.map(e => {
// console.log(e[0]);
// if (e[0] == input.value) {
// console.log(e[1]);
// main.innerHTML += `<tr>
//     <td>${num}</td>
//     <td>${e[1].meta.date}</td>
//     <td>${e[0]}</td>
//     <td>${e[1].total.confirmed}</td>
//     <td>${e[1].total.deceased}</td>
//     <td>${e[1].total.recovered}</td>
//     <td>${e[1].total.vaccinated1}</td>
//     <td>${e[1].total.vaccinated2}</td>
//     </tr>`
// <td>${input.value}</td>
// <td>${e[1].districts}</td>
// num++;
// }
// })
// })
// }
// for (const key in b) {
// console.log(b[0].districts[key]);
// console.log(b[key]);
// let n = b[10].districts
// for (const key in n) {
// console.log(key);
// console.log(i);
// i++
//     }
// }



// let obj = {}
// let obj2 = {}
// a.forEach((v, i, arr) => {

//     b.forEach((val, index, a) => {
//         obj[v] = val
//     })
// })
// num=1;


// for (const key in obj) {

//     // console.log(obj[key]);
//     obj2.push=obj[key]
//     let newObj = obj[key].districts
//     for (const key2 in newObj) {
//         main.innerHTML += `<tr>
//         <td>${num}</td>
//         <td>${obj[key].meta.date}</td>
//         <td>${key}</td>
//         <td>${key2}</td>
//         <td>${newObj[key2].total.confirmed}</td>
//         <td>${newObj[key2].total.deceased}</td>
//         <td>${newObj[key2].total.recovered}</td>
//         <td>${newObj[key2].total.vaccinated1}</td>
//         <td>${newObj[key2].total.vaccinated2}</td>
//         </tr>`
//         num++;
// console.log(obj[i]);
// console.log(newObj[key2].total);
// console.log(newObj[key2]);
//             }

//         }
// console.log(obj2);

// ------------------------------------------------------

// const array = ['value1', 'value2', 'value3'];

// const obj = {};

// array.forEach((item, index) => {
//     const key = `key${index + 1}`;
//     obj[item] = item;
// });

// console.log(obj);

// console.warn("sdknsaknd");
// console.log("sdknsaknd");
// console.error("sdknsaknd");
// console.clear('akns')
// console.log("sdknsaknd");
// console.count("nsaknd");
// console.count("nsaknd");
// console.countReset("nsaknd");
// console.count("nsaknd");
// console.trace("nsaknd");
// console.warn("nsaknd");

// -------------------------------------------------------- Simple data fetch of covid cases list by district from covid19 API

fetch('https://data.covid19india.org/v4/min/data.min.json')
    .then(res => res.json())
    .then(res => {
        let a = res.GJ.districts.Ahmedabad.meta.tested.date
        console.log(a);
        console.log(res);
        b = Object.entries(res)
        console.log(b);
        num = 1;
        b.map(e => {

            main.innerHTML += `<tr>
                <td>${num}</td>
                <td>${e[1].meta.date}</td>
                <td>${e[0]}</td>
                <td>${e[1].total.confirmed}</td>
                <td>${e[1].total.deceased}</td>
                <td>${e[1].total.recovered}</td>
                <td>${e[1].total.vaccinated1}</td>
                <td>${e[1].total.vaccinated2}</td>
                </tr>`
            num++;

        })
    })


// -------------------------------------------------------- PUT Method

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PUT',
//     body: JSON.stringify({
//         id: 1,
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));