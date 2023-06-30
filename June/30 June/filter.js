let arr = [
    {
        id: "0001",
        type: "donut",
        name: "Cake",
        ppu: 0.55,
        batters:
        {
            batter:
                [
                    { id: "1001", type: "Regular" },
                    { id: "1002", type: "Chocolate" },
                    { id: "1003", type: "Blueberry" },
                    { id: "1004", type: "Devil's Food" }
                ]
        },
        topping:
            [
                { id: "5001", type: "None" },
                { id: "5002", type: "Glazed" },
                { id: "5005", type: "Sugar" },
                { id: "5007", type: "Powdered Sugar" },
                { id: "5006", type: "Chocolate with Sprinkles" },
                { id: "5003", type: "Chocolate" },
                { id: "5004", type: "Maple" }
            ]
    }, 
    {
        id: "0002",
        type: "donut2",
        name: "Raised",
        ppu: 0.55,
        batters:
        {
            batter:
                [
                    { id: "1001", type: "Regular" }
                ]
        },
        topping:
            [
                { id: "5001", type: "None" },
                { id: "5002", type: "Glazed" },
                { id: "5005", type: "Sugar" },
                { id: "5003", type: "Chocolate" },
                { id: "5004", type: "Maple" }
            ]
    },
    {
        id: "0003",
        type: "donut3",
        name: "Old Fashioned",
        ppu: 0.55,
        batters:
        {
            batter:
                [
                    { id: "1001", type: "Regular" },
                    { id: "1002", type: "Chocolate" }
                ]
        },
        topping:
            [
                { id: "5001", type: "None" },
                { id: "5002", type: "Glazed" },
                { id: "5003", type: "Chocolate" },
                { id: "5004", type: "Maple" }
            ]
    },
    {
        id: "0004",
        type: "donut1",
        name: "Old Fashioned",
        ppu: 0.45,
        batters:
        {
            batter:
                [
                    { id: "1001", type: "Regular" }
                ]
        },
        topping:
            [
                { id: "5001", type: "None" },
                { id: "5002", type: "Glazed" },
                { id: "5003", type: "Chocolate" },
                { id: "5004", type: "Maple" }
            ]
    }
]

// let a=arr.filter(item=> item.topping.filter(topping=>topping.type=="Chocolate"))
// console.log(a);


// => filter donuts based on which have topping Chocolate

// function chocoLate(value,i,arr){
//     if(arr[i].topping[i].type=="Sugar"){
//         return arr[i].topping[i]="Sugar";
//     }
//     return true;
// }

// function getChocolate(value, i, arr) {
//     if (arr[i].topping[i].type = "chocolate") {
//         console.log(arr[i]);
//     }
// }

// let ac = arr.filter(getChocolate)
// console.log(ac);
// console.log(arr[0].topping[0].type="red");
// let asdd = arr[0].topping[0].type = "red";
// console.log(asdd);

// -----------------------------------------

// function toppingChocolate(arr) {
//     arr.filter((value) => {
//         for (let key in value) {
//             if (key === "topping") {
//                 for (let index in value[key]) {
//                     for (let subKey in value[key][index]) {
//                         if (subKey == "type") {
//                             if (value[key][index][subKey] == "Chocolate") {
//                                 console.log(value);
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     })
// }
// toppingChocolate(arr);


// ------------------------------------------

// function topChoco(array) {
//     let a = array.filter((value, index, arr) => {
//         let topping = value.topping;
//         for (let i = 0; i < topping.length; i++) {
//             if (topping[i].type == "Chocolate"){
//                 console.log(value.type+":");
//                 console.log(value);
//             }
//         }
//     });
//     console.log(a);
// }
// topChoco(arr)



// --------------------------------------------- => filter donuts based which have batter type is regular and topping have Chocolate

// const result = arr.filter(donut => donut.batters.batter.some(batter => batter.type == 'Regular') && donut.topping.some(topping => topping.type == 'Chocolate'));
// console.log(result);

// ----------------------------------------------------------- => filter donuts based on which have topping chocolate and Sugar


// const result = donuts.filter(donut => donut.topping.some(topping => topping.type === 'Chocolate' || topping.type === 'Sugar'));

// function chocoSugar(value){
//     let a=value.topping.some(topping => topping.type === 'Chocolate' && topping.type === 'Sugar')
//     return a;
// }
// let res=arr.filter(chocoSugar)

// -----------------------------------------------------------------------------------------   => filter donuts based on ppu > 0.5




// let arrs = arr.filter((value, i, arr) => {
//     if(arr[i].ppu>0.5){
//         return arr
//     }
// })

// console.log(arrs);

// const result = [].concat(...donuts.map(donut => donut.batters.batter));

// ----------------------------------

// const ppu=arr.filter(arr=>arr.ppu>0.5)
// console.log(ppu);

// console.log(arr[0].ppu>0.6);

//-----------------------------------







// ------------------------------------------------------------------------------ => bring all batters for all donuts in single array

// const result = arr.map(arr => arr.batters.batter);


// ----------------------------------------------------------------- => filter donuts based on which have 2 and more than 2 batter in it

// const result = arr.filter(donut => {
//     return donut.batters.batter.length >= 2
// });

// console.log(result);

// let batter2 = arr.filter((value, i, arr) => {
//     if(arr[i].batters.batter){
//         return arr
//     }
// })
// console.log(batter2);

// console.log(arr[0].batters.batter[i>=2]);



















// const result = donuts.map(donut => donut.batters.batter);

// console.log(result);



// const result = donuts.filter(donut => donut.batters.batter.length >= 2);

// console.log(result);


// // const result = donuts.filter(donut => donut.batters.batter.some(batter => batter.type === 'Regular') && donut.topping.some(topping => topping.type === 'Chocolate'));


//  const result = donuts.filter(donut => donut.batters.batter.length >= 2);

// const result = [].concat(...donuts.map(donut => donut.batters.batter));



// let obj ={
//     abc:"Sachin"
// }

// function abc(){
//     let arr=[1,2,3,4]
//     return arr;
// }