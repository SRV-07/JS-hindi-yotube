// primitive

// 7 types : string, number, boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 56356544225366n

// reference (non primitive)

// Array, object, functions

const heroes = ["ironman", "thor", "hulk"]
let myobj = 
{
    name : "sourav",
    age: 25,

}

const myFunction = function(){
console.log("hello world");

}

console.log(typeof scoreValue);  

// *********************************************************

//stack (primitive), heap (non-primitive)

let myYotubename = "souravdot.com"

let anothername = myYotubename
anothername = "codewithsourav"

console.log(myYotubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    Upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "sourav@google.com"

console.log(userOne.email);
console.log(userTwo.email);
