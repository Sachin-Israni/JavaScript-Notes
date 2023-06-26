// ------------------------------------ replace()

// let a= " My name is sachin "

// console.log(a.replace("My name","My friend"));
// console.log(a.replace("is sachin","is not vansh"));
// console.log(a.replace(a,"My name is not vansh"));

// ------------------------------------ 

// let a= " My name is sachin "
// b="you know"
// let a= `My name ${b} is sachin ` 
// console.log(a);

// ------------------------------------ Concatenating strings

// let a=["sachin" +"sachin" +"sachin" +"sachin" ].join()
// console.log(a);

// let b=  "sachin" + "Israni"
// var c=b;
// console.log(b.trim());
// console.log(b.trim);

// console.log("a"<"b");
// console.log("a">"b");

// var ab={a:10,b:25};
// var a=15;
// console.log(a);
// var {a:newA,b}={ab}
// console.log(a)

// let x="amndskas jhdoskjdfop q miofjsdaopi"
// // console.log(x.substring("sac",5));
// // console.log(x.substring(-5,5));
// console.log(x.substring("sa","-5"));

// Object.assign()
// let str="";
// str.substring();

// ---------------------- mix two strings with different method

// var sa="Sachin"
// var who="Vansh.who"
// s= sa.concat(""+who)
// s= sa.concat("",who)
// // console.log(sa+who);
// // console.log(sa,who);
// console.log(s);

// let a="java is a language and java is a good programming language"
// let a="javascript is"
// b=("java")
// c=a.split(" ")
// console.log(a.match(b));
// console.log(...a.matchAll(b));
// // console.log(a.replaceAll("java", "ecma"));
// console.log(b);
// console.log(c);



// const message = "Hello, World!";   // Question 11
// console.log(message.length);

// const str = "HelloWorld";          // Question 12
// console.log(str.toLowerCase());

// const sentence = "I love JavaScript!";  // Question 13
// console.log(sentence.indexOf("JavaScript"));

// const name = "John";                    // Question 14
// const greeting = `Hello, ${name}!`;
// console.log(greeting);

// const text = "Hello, World!";           // Question 15
// console.log(text.substring(7));

// const message = "Hello, World!";        // Question 16
// console.log(message.replace("World", "Universe"));

// const words = "apple, banana, orange";     // Question 17
// const fruits = words.split(", ");
// console.log(fruits); 

// const text = "   Hello, World!   ";        // Question 18
// console.log(text.trim());

// const sentence = "The quick brown fox jumps over the lazy dog.";     // Question 19
// console.log(sentence.includes("dog"));

// const str = "Hello, World!";             // Question 20
// console.log(str.endsWith("!"));

// const sentence = "JavaScript is fun!";      // Question 21
// console.log(sentence.charAt(4));

// const str1 = "Hello";                       // Question 22
// const str2 = "World";
// console.log(str1.concat(", ", str2));

// const sentence = "JavaScript is awesome!";      // Question 23
// console.log(sentence.slice(0, 10));


// const text = "Hello, World!";                   // Question 24
// console.log(text.repeat(3));

// const sentence = "The quick brown fox";            // Question 25
// console.log(sentence.split(" "));

// const str = "Hello, World!";                       // Question 26
// console.log(str.indexOf("o"));

// const sentence = "JavaScript is fun!";              // Question 27
// console.log(sentence.substring(4, 10));

// const text = "Hello, World!";                       // Question 28
// console.log(text.charAt(7));

// const sentence = "I love JavaScript!";                  // Question 29
// console.log(sentence.split("o"));

// const str = "Hello, World!";                            // Question 30
// console.log(str.includes("World"));

// const sentence = "JavaScript is cool!";                     // Question 31
// console.log(sentence.lastIndexOf("o"));

// const text = "Hello, World!";                               // Question 32
// console.log(text.startsWith("Hello"));

// const str = "Hello, World!";                                // Question 33
// console.log(str.toUpperCase());

// const sentence = "JavaScript is awesome!";                  // Question 34
// console.log(sentence.toLowerCase());

// const str = "Hello, World!";                                // Question 35
// console.log(str.charAt(13));

// const sentence = "JavaScript is fun!";                         // Question 36
// console.log(sentence.substr(4, 10));

// const str = "Hello, World!";                                // Question 39
// console.log(str.charCodeAt(4));

// const sentence = "JavaScript is powerful!";                 // Question 40
// console.log(sentence.split("").length);

// const text = "Hello, World!";                           // Question 41
// console.log(text.substring(0,5));

// const sentence = "JavaScript is dynamic!";              // Question 42
// console.log(sentence.slice(-7));

// const str = "Hello, World!";                        // Question 43
// console.log(str.concat(" Goodbye!"));

// const sentence = "JavaScript is flexible!";             // Question 44
// console.log(sentence.charAt(sentence.length - 1));

// const sentence = "JavaScript is versatile!";               // Question 47
// console.log(sentence.split(" ").reverse().join(" "));


// const sentence = "JavaScript is amazing!";
// console.log(sentence.lastIndexOf("a", 12));
// const text = "Hello, World!";
// console.log(text.substring(7, 2));
// const sentence = "JavaScript is cool!";
// console.log(sentence.concat(" I love it!"));
// const str = "Hello, World!";
// console.log(str.toUpperCase().charAt(7));
// const sentence = "JavaScript is amazing!";
// console.log(sentence.replace("amazing", "awesome").toUpperCase());






// let a="Sachin";
// console.log(c);
// b=[1]
// if(a==typeof(c)){
//     console.log(true);
// }
// else console.log(false);
// console.log(a);
// console.log(b);


// function is_string(input) {                                           // Question 60
//     if (typeof input === 'string') {
//         return true;
//     }
//     else return false
// }
// console.log(is_string("sachin"))

// console.log(is_string('w3resource')); // true
// console.log(is_string([1, 2, 4, 0])); // false


function is_Blank(str) {                                                // Question 61
    if(str.trim()===''){
        
        return true;
    }
    else return false;
}

console.log(is_Blank('')); // true
console.log(is_Blank('abc')); // false


function string_to_array(input) {                                   // Question 62
    return (input.split(" "))
}

console.log(string_to_array("Robin Singh")); // ["Robin", "Singh"]




// Question 32



// let a="Sachin"
// let b="Israni"
// let c="@example.com"
// console.log(a.replace("...",));