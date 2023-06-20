let a= prompt("Hey , Enter your age:");
a= Number.parseInt(a);  // Converting string into number

if(a=null){
    alert("You are not eligible for voting")
}
else if(a<0){
    alert("You are not eligible for voting")
}
else if(a<9){
    alert("You are a kid , Go to school")
}
else if(a<18 && a>9){
    alert("You can vote only in dreams")
}
else if(a>=18){
    alert("You are a adult , But you want voter id card for voting")
}
else{
    alert("You can vote")
}

console.log("You can " , a>=18?"vote":"not vote" );

const sda= 0||1
console.log(sda)