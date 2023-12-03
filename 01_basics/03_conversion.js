// CONVERSION OPERATION 
let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

let isLoggedIn = "sabina"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
// 1 == true in boolean 0 = false in boolean 
// "" = false 
// "sabina" = true 

let someNumber = 45 

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// if 33 written then is says number
// if "33" its a string
// "sabina" is given then it wont be convert to number so the output will be NaN
// if you put the true boolean then the output will be 1 and if false then ouput will be 0
// if you put the undefined then the output will be NaN
// if you put null then the output will be 0
// if you keep the 33 only then the output will be the number 
// but if you put the 33ab then the ouput will be NaN not a number


// conversion
// "33"== 33
// "33abc" == NaN
// true == 1; false == 0
 
