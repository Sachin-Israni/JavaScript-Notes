// using thus keyword for returning the object values

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     // fullName : function() {
//     //   return this.firstName + " " + this.lastName;
//     // }
//     // fullName : function() {
//     //   return person.firstName + " " + person.lastName;
//     // }
//     // fullName: function () {
//     //     return person.firstName + " " + this.lastName;
//     // }
//     // fullName: function () {
//     //     return this.firstName + " " + person.lastName;
//     // }
// };

// console.log(person.fullName());

// ---------------------------------------------------


// let x = new String("John");  // x is an object
// let y = new String("John");  // y is an object
// console.log(x==y);

// ---------------------- Length

// let x="Sachin"
// console.log(x);
// console.log(x.length);

// ---------------------- slice()

// let x="Sachin,100,Coder"              // ---- string length is also count spaces  
// console.log(x);
// console.log(x.slice(0,6));            // ---- starts with 0
// console.log(x.slice(11,15));
// console.log(x.slice(-16,-10));        // ---- slice also takes value in minus(-)
// console.log(x.length);

// ---------------------- substring()

// let x= "Sachin,Coder,hobby"
// console.log(x.substring(0,12)); 
// console.log(x.substring(-12,0)); // never takes values in minus(-)

// ---------------------- match()

// const paragraph = 'The quick Brown fox jumps over the lazy dog. It barked.';
// const a = /[A-T]/;
// const a = /[A-T]/gi;
// const b = /[A-Z]/g;
// const found = paragraph.match(a);
// const fox = paragraph.match(b);
// const fox = paragraph.match([A-Z]);

// console.log(found);
// console.log(fox);

// ---------------------- match()  doubt

// const str = "For more information, see Chapter 3.4.5.1";
// const re = /see (chapter \d+(\.\d)*)/i;
// const found = str.match(re);

// console.log(found);
// [
//   'see Chapter 3.4.5.1',
//   'Chapter 3.4.5.1',
//   '.1',
//   index: 22,
//   input: 'For more information, see Chapter 3.4.5.1',
//   groups: undefined
// ]

//-----------------------

// const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";

// const capturingRegex = /(?<animal>fox|cat) jumps over/;
// const found = paragraph.match(capturingRegex);
// console.log(found.groups); // {animal: "fox"}

// ---------------------- replace()

// let x="Sachin is"
// console.log(x);
// console.log(x.replace("Sachin","Vansh"));

// ---------------------- replaceall()

// let x="Sachin is a good boy.Sachin is 19 years old.sachin is working as software engineer"
// console.log(x);
// x=x.replaceAll("Sachin", "Pujan")
// x=x.replaceAll("sachin", "pujan")
// console.log(x);

// ---------------------- toUpperCase()

// let x="Sachin"
// console.log(x.toUpperCase());

// ---------------------- toLowerCase()

// let x="SachIN"
// console.log(x.toLowerCase());

// ---------------------- concat()

// let x="Sachin"
// let y=" K"
// console.log(x.concat("",y," Israni"));
