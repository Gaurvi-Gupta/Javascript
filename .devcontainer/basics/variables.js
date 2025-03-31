const accountId = 14432
let accountEmail = "abc123@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 3 // not allowed

accountEmail = "gg@gmail.com"
accountPassword = "345"
accountCity = "kota"

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])