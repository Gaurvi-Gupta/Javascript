let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toJSON())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())

// console.log(typeof myDate)

// const mycreatedate = new Date(2023,0,23)
// // console.log(mycreatedate.toString())
// console.log(mycreatedate.toDateString())

// const mycreatedate = new Date(2023,0,23, 5, 3)
// console.log(mycreatedate.toLocaleString())

const myCreatedDate = new Date("12-04-2025")
// console.log(myCreatedDate.toLocaleString())

const myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now()/1000))


const newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth() + 1)
// console.log(newDate.getDay())

// `${newDate.getDay()} is the day.`

newDate.toLocaleString('default', {
    weekday: 'long',
    
})
