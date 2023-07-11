// let arr = [1, 2, 3, 4]
// // let arr1 = [1, 2, 3, 4]
// // console.log(arr.push(2) + arr.pop());
// // console.log(arr.length);

// let arr1 = arr.map(a => a)
// arr1[2]=12;
// console.log(arr1);
// console.log(arr);

// let acname = 'Sachin'
// let obj = { 'Sachin': "Not Known", Ammoun: 9283 }
// console.log(obj.acname);
// let obj1;
// console.log(obj1 && obj1.acname);

// let obj = { name: "demo", age: 10 }
// const { name, age: year } = obj
// console.log(name);
// console.log(year);
// console.log(age);


console.log(Number('10') * 2);
console.log(parseInt('10') * 2);
console.log(Number('10.4') * 2);
console.log(parseInt('10.4') * 2);
let obj = {
    amt: undefined,
    amt: null,
    amt: '',
    gst: 123
}
console.log(Number(obj.amt) + Number(obj.gst)) // what is output is null,'',undefined
var date = new Date();
var a = date.getFullYear(1960)
console.log(a);