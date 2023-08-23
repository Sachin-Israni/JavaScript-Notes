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

async function enter() {
    let input = document.getElementById('input')
    let State = input.value
    console.log(State);
    // let city = prompt("Please enter city name")
    // console.log(city);
    await fetch('https://data.covid19india.org/v4/min/data.min.json')
        .then(res => res.json())
        .then(last => {
            let arr = []
            let list = arr.push(last)
            console.log(arr[0]);
        })


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
}

let main = document.getElementById('main')

fetch('https://data.covid19india.org/v4/min/data.min.json')
    .then(res => res.json())
    .then(res => {
        let a = res.GJ.districts.Ahmedabad.meta.tested.date
        // console.log(a);
        // main.innerHTML += `<tr>
        // <td>${res.GJ.districts.Ahmedabad.meta.tested.date}</td>
        // <td>Ahmedabad</td>
        // <td>${res.GJ.districts.Ahmedabad.total.confirmed}</td>
        // <td>${res.GJ.districts.Ahmedabad.total.deceased}</td>
        // <td>${res.GJ.districts.Ahmedabad.total.recovered}</td>
        // <td>${res.GJ.districts.Ahmedabad.total.tested}</td>
        // <td>${res.GJ.districts.Ahmedabad.total.vaccinated1}</td>
        // <td>${res.GJ.districts.Ahmedabad.total.vaccinated2}</td>
        // </tr>`
        console.log(res);
        let arr = []
        // arr.push(res)
        // for (const key in res) {
        //     main.innerHTML += `<tr>
        //     <td>${res.GJ.districts.Ahmedabad.meta.tested.date}</td>
        //     <td>${key}</td>
        //     </tr>`
        // let a = Object.keys(res)
        // console.log(a);
        // let b = Object.values(res)
        // console.log(b);
        // let obj = {}
        // obj.asd=[res]
        // arr.push(obj)
        // }
        // let obj = {}
        // for (const key in res) {
        a = Object.keys(res).map((e)=>{
            return e
        })
        console.log(a);
        b = Object.values(res)
        console.log(b);
        // for (let i = 0; i < a.length; i++) {

            let obj = {
                a: b
            }
            // console.log(a);
            // console.log(b);
            arr.push(obj)
        // }
        // }
        // obj.main = Object.entries(res)
        // arr.push()
        console.log(arr);
        // console.log(arr[1]);
        // console.log(arr[0]);
        // console.log(res.arr[0]);
    })