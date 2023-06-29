// let obj1={a:1,b:2,c:{d:3,e:4}}
// let obj2=Object.assign({},obj1)

// console.log(obj1);
// obj1.a=12
// console.log(obj2);

// const target = { a: { b: { c: 1 } } };      // Question  21
// const source = { a: { b: { d: 2 } } };
// const result = Object.assign(target, source);
// result.a.b.d = 3;
// console.log(source);


// let obj1 = { a: 23, b: 45 };            // Question 23 a
// let arr1 = [{ ...obj1 }];
// let arr2 = arr1;
// arr2[0].c = 5;
// console.log(arr1)

//b
// let obj1 = { a: 23, b: 45, c: { f: 990 } };
// let arr1 = [{ ...obj1 }];
// let arr2 = arr1;
// arr2[0].c = 5;
// obj1.c.f = 30;
// console.log(arr1); 


//c
// let obj1 = { a: 23, b: 45, c: { f: 990 } };
// let arr1 = [{ ...obj1 }];
// let arr2 = arr1;
// obj1.c.f = 30;
// console.log(arr1); 


//d
// let obj1 = { a: 23, b: 45 };
// let arr1 = Object.assign([], [{ ...obj1 }]);
// let arr2 = arr1;
// arr2[0].c = 5;
// console.log(arr1); 

//e
// let obj1 = { a: 23, b: 45 };
// let arr1 = [{ ...obj1 }];
// let arr2 = Object.assign([], arr1);
// arr2[0].c = 5;
// console.log(arr1); 


//f
// let obj1 = { a: 23, b: 45 };
// let arr1 = [{ ...obj1 }];
// obj1.a=233;
// console.log(obj1);
// console.log(arr1);
// let arr2 = Object.assign([], [{...arr1[0]}]);
// arr2[0].c = 5;
// console.log(arr1); 

//g
// let obj1 = { a: 34, b: 56, c: { h: 77, j: 90 } };
// let obj2 = Object.assign({}, obj1);
// let obj3 = Object.assign({ ...obj2 }, { c: { k: 44 } });
// obj2.c.h = 67;
// console.log(obj1, obj2, obj3);

// for (i = 1; i < 11; i++) {
//     console.log(i);
//     break;
// }
// console.log('Sachin');

// let n = 3;                        // Question 3
// for (let i = 0; i <= n; i++) {
//     let star = "";
//     for (j = 0; j < n - i; j++) {
//         star += " * ";
//     }
//     // star += "\n";
//     console.log(star);
// }

// for (let a = 1; a <= 10; a++) {
//     if (a == 3) {
//         break
//     }
//     console.log(a);
// }


// let obj1={a:10,b:20}
// let obj2={a:23,b:122}

// function myAssign(o1,o2){
//     return o2=o1;
// }

// let arr1=[{a:12,b:20}]
// let arr2={...arr1[0]}
// let arr3=arr1[0]
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// let as=arr1.map(value=>({value}))
// console.log(as);


// let sum = (a, b) => a + b;
// console.log(sum(1, 2));


// Write a code that adds new key in each object named
// full_name: first_name + last_name

// const names = [
//     { first_name: "Handnm", last_name: "L demo" },
//     { first_name: "Q Wei", last_name: "Alxezx" },
//     { first_name: "Pqwern", last_name: "Ruse" },
//     { first_name: "Wiruyn", last_name: "Ruby" },
//     { first_name: "Erpso", last_name: "Loal" },
//     { first_name: "Demors", last_name: "Poet" },
//     { first_name: "Aleos", last_name: "Lkeu" },
// ]
// function mix(){
//     return{
//         ...obj,
//     }
// }
// a=names.map(name => {
//     return {
//         ...name,
//         full_name:'${name.first_name} ${name.last_name}'
//     }
// })

// console.log(a);
const names = [
    { first_name: "Handnm", last_name: "L demo" },
    { first_name: "Q Wei", last_name: "Alxezx" },
    { first_name: "Pqwern", last_name: "Ruse" },
    { first_name: "Wiruyn", last_name: "Ruby" },
    { first_name: "Erpso", last_name: "Loal" },
    { first_name: "Demors", last_name: "Poet" },
    { first_name: "Aleos", last_name: "Lkeu" },
];

names.forEach(name => {
    name.full_name = `${name.first_name} ${name.last_name}`;
});

console.log(names);