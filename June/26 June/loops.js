// for (var a=0 ; a > -100 ; a--)
// {
//     console.log(a);
// }

// for (const a=0 ; a < 100 ; a++)
// {
//     console.log(a);
// }


// for in loop is used for keys

let obj=[
    (sachin=25),
    (sachin=25),
    (sachin=25),
    (sachin=25)
]
// for (const a in obj) {
//     console.log("Marks Of " + a + " is " + obj[a] )
// }

// for(const b in obj){
//     console.log(b);
// }

for (const c of obj) {
    console.log(c);
}



let abc = "Hello World"
abc.replace("World" , " ")
console.log(abc);

// -----------------------  Question 1

// let obj1={a:10,b:20}
// let obj2 = Object.assign({a:12},obj1);
// // let obj2 = Object.assign(obj1,{a:12}); // (target,source)
// obj1.a=22;
// console.log(obj1.a);
// console.log(obj2.a);

// -----------------------  Question 2

let obj1 = {a:15 , b:20}
let obj2 = {a:22}
let obj3 = Object.assign (obj1 ,obj2)
console.log(obj3.a); // 22
obj1.a=25;
console.log(obj3.a); // 25


// let co1 = {
//     name:"Sachin",
//     num:45
// }
// var co2 = {
//     roll:10
// }
// console.log(co2);
// co2 = Object.assign({num:12},co1)
// co1.num=122222222222;
// console.log(co2);
// let co3 = Object.assign(co1,co2)
// co2.roll=20
// console.log(co2);
// console.log(co3);