// Singleton
// Object.create()

//Object literal

const mySym = Symbol("key1")

const Jsuser = {
    name: "gaurvi", 
    "full name": "Gaurvi Gupta",
    [mySym]: "key1",
    age: 21,
    location: "Kota",
    email: "gaurvi@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"],
}

// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["full name"])

Jsuser.email = "gaurvi@chatgpt.com"
// Object.freeze(Jsuser)
Jsuser.email = "gaurvi@microsoft.com"

// console.log(Jsuser)

Jsuser.greeting = function()
{
    console.log("Hello Js user");
}

Jsuser.greetingTwo = function()
{
    console.log(`Hello Js user, ${this.name}`);
}

console.log(Jsuser.greeting())
console.log(Jsuser.greetingTwo())