// Primitive (Call by value)

// 7 types : String , Number, Boolean, null , undefined , Symbol , BigInt

const score = 110.3; // typeof number
const isLoggedIn = true;
const outsideTemp = null; // typeof object

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId) //false

const bigNumber = 34524532435224n; // type bigInt
// console.log(typeof score)

//------------------------------------------------------------------------

// Non - Primitive (Call by Reference)

// Array , Objects , Functions

const heros = ["shaktimaan", "naagraj", "doga"] // object

let myObj = {
    name: "gaurvi",
    age: 21,
}   // typeof Oject

const myfunction = function(){
    console.log("Hello World") // typeof function
}

console.log(typeof heros)

