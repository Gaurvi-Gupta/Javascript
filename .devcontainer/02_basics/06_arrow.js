const user = {
    username: "gaurvi",
    price: 100,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`)
        // console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this)

// function chai()
// {
//     let username = "Gaurvi"
//     // console.log(this.username) // undefined , this will not work in function
// }
// chai()

// const chai = () => {
//     let username = "Gaurvi"
//     console.log(this.username)
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1+num2
// }
// console.log(addTwo(3, 4))

// const addTwo = (num1, num2) => num1+num2
// console.log(addTwo(3, 4))

// const addTwo = (num1, num2) => (num1+num2)
// console.log(addTwo(3, 4))

const addTwo = (num1, num2) => ({name: "gaurvi"})
console.log(addTwo(3, 4))

