// ------------------------------------------------------

// const source = { a: 1 };
// const target = { b: 2 };
// Object.assign(target, source);
// console.log(target);        //  {b: 2, a: 1}

// ------------------------------------------------------

// const obj1 = { a: 12, b: 23 };
// const obj2 = obj1;
// const obj3 = { ...obj1 };
// obj1.c = 23;
// console.log(obj1.c, obj2.c, obj3.c);     // 23 , 23 , undefined

// ------------------------------------------------------

// const obj1 = { a: 12, b: 23 };
// const obj2 = { a: 44, b: 45 };
// const obj3 = Object.assign(obj1, obj2);
// obj2.a = 22;
// console.log(obj1, obj2, obj3);  // only obj2={a:22,b:45}

// ------------------------------------------------------

// const obj1 = { a: 77, b: 67 };
// const obj2 = { a: 90, b: 34 };
// const obj3 = Object.assign(obj1, obj2);
// obj1.a = 22;
// console.log(obj3);

// ------------------------------------------------------

// const obj1 = { a: 77, b: 67 };
// const obj2 = { a: 90, b: 34 };
// const obj3 = Object.assign({}, obj1, obj2);
// obj1.a = 22;
// console.log(obj3);

// ------------------------------------------------------

// const source = { a: { b: 1 } };
// const target = {};
// Object.assign(target, source);
// console.log(target);

// ------------------------------------------------------

// const source = { a: { b: 1 } };
// const target = {};
// Object.assign(target, JSON.parse(JSON.stringify(source)));
// source.a.b = 2;
// console.log(target);

// ------------------------------------------------------

// const source = { a: 1 };
// const target = Object.assign({}, source);
// delete target.a;
// console.log(source);
// console.log(target);

// ------------------------------------------------------

// const target = { a: 1 };
// const source = { b: 2 };
// const result = Object.assign(target, source);
// console.log(result === source);

// ------------------------------------------------------

// const target = { a: 1 };
// const source = { b: 2 };
// const result = Object.assign(target, source);
// console.log(result === { a: 1, b: 2 });

// ------------------------------------------------------

// const target = { a: 1 };
// const source = { b: 2 };
// Object.assign(target, source);
// target.b = 234;
// console.log(source);

// ------------------------------------------------------

// const target = {};
// const source = { a: 1 };
// const result = Object.assign(target, source);
// source.a = 2;
// console.log(result);

// ------------------------------------------------------

// const target = {};
// const source = { a: { b: 1 } };
// const result = Object.assign(target, source);
// result.a.b = 2;
// console.log(source); // 2

// ------------------------------------------------------

// const target = { a: { b: 1 } };
// const source = { a: [2, 3, 4] };
// const result = Object.assign(target, source);
// console.log(result);

// ------------------------------------------------------

// const target = { a: { b: 1 } };
// const source = { a: [2, 3, 4] };
// const result = Object.assign(target, source);
// target.a[2] = 90;
// console.log(result);

// ------------------------------------------------------

// const target = { a: { b: { c: 1 } } };
// const source = { a: { b: { d: 2 } } };
// const result = Object.assign(target, source);
// result.a.b.d = 3;
// console.log(target);

// ------------------------------------------------------

//  Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:

// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
// };
// console.log(Object.entries(student));

// ------------------------------------------------------

// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:

// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
// };
// function deleteProperty(obj,prop) {
//     console.log(obj);
//     delete obj[prop]
//     console.log(obj);
// }
// deleteProperty(student,"rollno")

// ------------------------------------------------------

// function operationObj(obj) {
//   obj = {...obj, c: 12}
// }
// let a = {  x: 34,  y: 56 }
// operationObj(a);
// console.log(a);  // { x: 34, y: 56 }

// ------------------------------------------------------

// function operationObj(obj) {
//   obj.z = {...obj, c: 12}
// }
// let a = {
//   x: 34,
//   y: 56
// }
// operationObj(a);
// console.log(a);    //   { x: 34, y: 56, z: { x: 34, y: 56, c: 12 } }

// ------------------------------------------------------

// const target = { a: { b: { c: 1 } } };
// const source = { a: { b: { d: 2 } } };
// const result = Object.assign(target, source);
// result.a.b.d = 3;
// console.log(source);

// ------------------------------------------------------

// Make a function that works as Object.assign() without using the in-built method. (make only for 2 arguments only)

function objAss(obj1, obj2) {
    for (const val in obj2) {
        let a = val
        let b = obj2[val]
        console.log(a + ':' + b);
    }
}
let obj = {
    a: 'name',
    b: 'surname',
    c: 'fathername'
}
objAss(obj,obj)
// ------------------------------------------------------

// Write a visualization notes on given examples
// let obj1 = { a: 23, b: 45 };
// let arr1 = [{ ...obj1 }];
// let arr2 = arr1;
// arr2[0].c = 5;
// console.log(arr1)

// let obj1 = { a: 23, b: 45, c: { f: 990 } };
// let arr1 = [{ ...obj1 }];
// let arr2 = arr1;
// arr2[0].c = 5;
// obj1.c.f = 30;
// console.log(arr1);

// let obj1 = { a: 23, b: 45, c: { f: 990 } };
// let arr1 = [{ ...obj1 }];
// let arr2 = arr1;
// obj1.c.f = 30;
// console.log(arr1);

// let obj1 = { a: 23, b: 45 };
// let arr1 = Object.assign([], [{ ...obj1 }]);
// let arr2 = arr1;
// arr2[0].c = 5;
// console.log(arr1);

// let obj1 = { a: 23, b: 45 };
// let arr1 = [{ ...obj1 }];
// let arr2 = Object.assign([], arr1);
// arr2[0].c = 5;
// console.log(arr1);  //[ { a: 23, b: 45, c: 5 } ]

// let obj1 = { a: 23, b: 45 };
// let arr1 = [{ ...obj1 }];
// let arr2 = Object.assign([], [{...arr1[0]}]);
// arr2[0].c = 5;
// console.log(arr1);

// let obj1 = { a: 34, b: 56, c: { h: 77, j: 90 } };
// let obj2 = Object.assign({}, obj1);
// let obj3 = Object.assign({ ...obj2 }, { c: { k: 44 } });
// obj2.c.h = 67;
// console.log(obj1, obj2, obj3);
