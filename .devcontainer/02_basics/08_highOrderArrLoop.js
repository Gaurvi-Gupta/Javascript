//for of 

const arr = [1, 2, 3, 4, 5]

for (let num of arr)
{
    // console.log(num)
}

const greetings = "Hello World!"

for(const greet of greetings)
{
    if(greet == " ")
        continue
    // console.log(`Each char is ${greet}`)
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

// console.log(map)

for(const [key, value] of map)
{
    // console.log(key, ':-', value)
} 

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'Spiderman'
// }

// for(const [key, value] of myObject)
// {
//     console.log(key, ':-', value);   //myObject is not iterable , we cannot use for of for iterating the objects
// }

const myObject = {
    js: "javascript",
    py: "python",
    cpp: "C++"
}

for(const key in myObject)
{
//     console.log(`${key} is the shortcut for ${myObject[key]}`)
 }

 const programming = ["js", "rb", "py", "cpp"]

for(const key in programming)
{
    // console.log(programming[key])
}


// for (const key in map)
// {
//     console.log(key);  // we cannot iterate through forin in map
// }

const coding = ["javascript", "C++", "python", "ruby"]

// coding.forEach(function (val){
//     console.log(val)
// })

// coding.forEach((item) => {
//     console.log(item)
// })

// function printMe(item)
// {
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr)
// })

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName)
})