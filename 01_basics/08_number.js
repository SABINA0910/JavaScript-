const score = 400
console.log(score); // op = 400

const balance = new Number(100)
console.log(balance); // op = Number:100

//ex

console.log(balance.toString().length); //op=3 coz 100 is 3 character
console.log(typeof balance); // op = object
console.log(balance.toFixed(2)); // op = 100.00 if (1) op = 100.0

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3));
// precison just round off the value before decimal
// suppose if number = 123.8966 then op = 124 
// it tries to give the precised value 

const hundreds = 1000000
console.log(hundreds.toLocaleString()); //op= 1,000,000
//it putted the comas acc to the us standards

console.log(hundreds.toLocaleString('en-In'));//op=10,00,000
// it puts the comas acc to the indian standards




