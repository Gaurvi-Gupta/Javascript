// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sunny"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularuser = {
    email: "user@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sunny",
            lastname: "Goyal"
        }
    }
}
// console.log(regularuser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const user = [
    {
        id: 1,
        email: "user@gmail.com"
    },
    {
        id: 1,
        email: "user@gmail.com"
    },
    {
        id: 1,
        email: "user@gmail.com"
    }
]
user[1].email

// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    coursename: "javascript",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor: instructor} = course
console.log(instructor)

//json
// {
//     "name": "gaurvi",
//     "price": "999",
//     "course": "javascript"
// }