// COMPARISIONS

// simple comparisions
//console.log(2 > 1); // output = true
//console.log(2 >= 1); // output = true
//console.log(2 < 1);  // output = false
//console.log(2 <= 1); // output = false
//console.log(2 == 1); // output = false
//console.log(2 != 1); // output = true

// it has no problem in the same datatype as in 2 and 1 both are number

// now suppose if the comparison is between the string "" and number
// here java auto converted the string to number and think 2 is big no

console.log("2" > 1); // output = true
console.log("02" > 1); // output = true
// when you compare make sure the data type is same so that you are
// sure abt the output ans not confused

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined == 0); // false
console.log(undefined >= 0); // false
// in undefned everything is false

// strict check means triple === 

// console/log("2" === 2); = it cant be done as java now think
// one is string and other is no so comaprison is not possible



