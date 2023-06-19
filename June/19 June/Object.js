



//  value change by using Object.assign 
// let dev1 = {
//     name: "sachin",
//     skills:'bowling'
// }


// let dev2 = Object.assign({},dev1);

// dev2.name = 'sahil'
// dev2.skills = 'dancing'

// console.log(dev1);
// console.log(dev2);


// Value change by using (...) spread operator 

// let dev1 = {
//     name: "sachin",
// }


// let dev2 = {...dev1 };

// dev2.name = 'sahil'

// console.log(dev1);
// console.log(dev2);

// Value change in nested object using JSON

// let dev1 = {
//     name: "sachin",
//     skills:{primary:'bowling'}
// }


// let dev2 = JSON.parse(JSON.stringify(dev1))

// dev2.name = 'sahil'
// dev2.skills.primary = 'Running'

// console.log(dev1);
// console.log(dev2);

// Value change by JSON but it doesn't work on Functions and Date

// let dev1 = {
//     name: "sachin",
//     skills:{primary:'bowling'},
//     age : function (params) {
//         return 19;
//     },
//     Dateof : new Date()
// }


// let dev2 = JSON.parse(JSON.stringify(dev1))

// dev2.name = 'sahil'
// dev2.skills.primary = 'Running'

// console.log(dev1);
// console.log(dev2);
// console.log(typeof(dev1.age));
// console.log(typeof(dev1.Dateof));
// console.log(typeof(dev2.Dateof));

