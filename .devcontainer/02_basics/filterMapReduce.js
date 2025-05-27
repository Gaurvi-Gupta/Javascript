const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num) => {
//     return num>4
// })
// console.log(newNums)

// const newNums = []

// myNums.forEach((num) => {
//     if(num > 4)
//     {
//         newNums.push(num)
//     }
// })
// console.log(newNums);

// const newNums = myNums.map((num) => {
//     return num+10;
// })

// console.log(newNums);

// const newNumbers = [];

// myNums.forEach((item) => {
//     newNumbers.push(item+10)
// })
// console.log(newNumbers);

// const newNums = myNums
//                     .map((num)=>{return num*10})
//                     .map((num)=>{return num+1})
//                     .filter((num)=>{return num>40})
// console.log(newNums)


// const myTotal = myNums.reduce(function(acc, currval)
// {
//     console.log(`acc : ${acc} and currval : ${currval}`)
//     return acc + currval;
// }, 0)

const myTotal = myNums.reduce((acc, currval)=>(acc + currval), 0)

console.log(myTotal)

const shoppingCart = [
    {
        itemsName: "js course",
        price: 1999
    },
    {
        itemsName: "py course",
        price: 999
    },
    {
        itemsName: "mobile dev course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item)=>(acc + item.price), 0);
console.log(priceToPay)
