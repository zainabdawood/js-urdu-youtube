const accountId =156328
let accountEmail = "zainab@gmail.com"
var accountPass = "12345"
accountCity = "lahore"

// accountID = 2  not Allowed
console.log(accountId);
accountEmail ="hc@hc.com"
accountPss ="212121"
accountCity = "karachi"
let accountState;

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPass,accountCity,accountState])