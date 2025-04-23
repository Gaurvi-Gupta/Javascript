function add(num1, num2)
{
    return num1+num2;
}
const result = add(3, 4)
// console.log(`Result: ${result}`)

function userlogin(username)
{
    if(!username)
    {
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
// console.log(userlogin())

function calculateCartPrice(...num1)
{
    return num1
}
// console.log(calculateCartPrice(45, 56, 100, 200, 300))

const user = {
    username: "gaurvi",
    price: "199"
}

function handleObject(anyobject)
{
    return `Username is ${anyobject.username} and the price is ${anyobject.price}`
}

// console.log(handleObject(user))

const arr = [100, 200, 300];
function returnsecondvalue(getarr)
{
    return getarr[1];
}
// console.log(returnsecondvalue(arr))

console.log(addone(5)) //doesn't cause error
function addone(num)
{
    return num+1;
}

addTwo(5) // error 
const addTwo = function(num)
{
    return num+2;
}

