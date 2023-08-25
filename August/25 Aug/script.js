// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function test() {
//     for (let i = 0; i < a.length; i++) {
//         console.log(a[i]);
//     }
// }

// test();


let arr = [{ a: 10 }, { b: 20 }]

arr = arr.map(val => { val })
console.log(arr);


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


// function,Array,object,destructuring,rest,spread,API call, structure API

