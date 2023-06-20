// this is the valid method
// var sname=100;
// {
//     let sname = 'sachin';
//     {
//         const sname=10;
//         console.log(sname);
//     }
//     console.log(sname);
// }
// console.log(sname);


// var age=309; // this will also run
// {
//     let age=10;
//     {
//         const age=30; // this is right
//         {
//             // var age=22; // but this will not run
//             console.log(age);
//         }
//     }
// }

// {
//     const obj = { // this will not work because of const
//         // s: 10,  // if we remove brackets then it will work
//         a: 20,
//         w: 23,
//         b: 54
//     }
// }

// {
//     let sname = "s";
//     console.log(obj[sname]);
// }

// {
//     let obj = {  // this will also not work because of let
//         // s: 10,  // if we remove brackets then it will work
//         a: 20,
//         w: 23,
//         b: 54
//     }
// }

// {
//     let sname = "s";
//     console.log(obj[sname]);
// }    

{
    var obj = {  // this will work
        // s: 10,  
        a: 20,
        w: 23,
        b: 54
    }
}

{
    const sname = "s";
    console.log(obj[sname]);
}