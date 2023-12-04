// OPERATIONS
// in operations we do add or subtract etc

let value = 3
let negValue = -value
console.log(negValue);
// here we first gave the value 3 and then assigned the negative value 
// so the output will be -3


//console.log(2+2); output = 4
//console.log(2-2); output= 0
//console.log(2*2); output = 4
//console.log(2**2); output = 2 power 2 = 4
//console.log(2/2); output = 1
//console.log(2%3);output = 2

let str1 = "hello"
let str2 = " sabina"

let str3 = str1 + str2 // only add no subtract
console.log(str3);

console.log("1" + 2); // output = 12
console.log(1 + "2"); // output = 12
console.log("1" + "2"); // output = 12
console.log("1" + 2 + 2); // output = 122
// here im above all the operation is not converted but just kept to 
// each other not added
console.log(1 + 2 + "2"); // output = 32
// in above case if there is string "" at first "1"+2 then the output will
// just keep the last number together
// but if the string is at last 1+2+"2" so in this case the first
// it will add and keep the last string together i:e = 1+2 = 3+"2"=32

//console.log((3 +4) * 5 % 3); // output = 2

// trickey conversion
console.log(+true);  // output = 1  but true+ is wrong code
console.log(+""); // its empty so output= 0

// assignment operator

let num1, num2, num3
num1 = num2 = num3 = 2 + 2 
console.log(num1);  // output = 4

let gameCounter = 100
gameCounter++; // this is post fix operator
console.log(gameCounter); // ouput = 101
// ++gameCounter; then output = 101 it is pre fix operator
// in this case there is no changes in the output
// in pre-fix = value is increment  before the usage
// in post-fix = here the value increment is after the usage


//PRE-FIX INCREMENT

let x = 3
const y = ++x;

console.log(`x:${x}, y:${y}`);
// x=4 and y= 4

// POST FIX 

let a = 3
const b = a++;

console.log(`a:${a}, b:${b}`);
// a = 4 b = 3

// link for pre and post
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

// link to study operators = https://tc39.es/ecma262/#sec-toprimitive