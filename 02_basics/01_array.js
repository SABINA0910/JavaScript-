// ARRAYs = non primitive datatypes
// JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
// JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

// ARRAYS IS ALWAYS WRITTEN IN SQUARE BRACKETS []
// in arrays there are also the prototype by inspect and also get the length by .length

// arrays can be numbers also strings or mix
// elements inside the [] can be all. at once also
//const myArr = [0, 1, 2, 3, 4, 5, true, "sabina"]

const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr[0]); // op = 0
console.log(myArr[3]);  // op = 3
// in arrays the index starts with 0

const myHeros = ["ironman", "shaktiman", "thor"] // here the index is 0 1 2
console.log(myHeros[2]); // op = thor // since i gave 2 index so the op is thor
console.log(myHeros[4]);  // op =undefined as in there is not index 4 element

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr2[0]); // op = 1 // here the index starts from 0 so 0 index = 1 and 1 index = 2 and 2 index = 3 and 3 index = 4
console.log(myArr2[1]); // op = 2
console.log(myArr2[2]); // op = 3
console.log(myArr2[3]); // op = 4
console.log(myArr2[4]); // op = undefined as in there is no element for the 4th index

// arrays methods

myArr2.push(5)
console.log(myArr2); // basically push adds the element in the array []
// op = [ 1, 2, 3, 4, 5]

// again add one more value
myArr2.push(6)
console.log(myArr2); // op = [1,2,3,4,5,6,]

// pop = this will remove the last value

myArr2.pop()
console.log(myArr2); // op = [1,2,3,4,5,] so here 6 is gone

myArr2.unshift(0)
console.log(myArr2); // op = [0,1,2,3,4,5] so here 0 is added but what unshift does is it adds value in the starting point any value

myArr2.unshift(9)
console.log(myArr2); // [9,0,1,2,3,4,5,] so here 9 is added in the front

myArr2.shift()
console.log(myArr2); // op = [0,1,2,3,4,5] so here the shift removed the 9 // shif automatically removes the first item so you do not haev to put the value

// methods
// In include method you get  get ans in true or false

console.log(myArr2.includes(9)); // op = false obvio there is no 9 in the array2 [0,1,2,3,4,5]
console.log(myArr2.includes(4)); // op = true
console.log(myArr2.indexOf(9)); // op = -1 whenever you put the value that does not exist it will show the -1 as op 
console.log(myArr2.indexOf(4)); // op = 4 so here 4 exist so it showed the as as index of 4 = 4

const newArr = myArr2.join()
console.log(myArr2); // op = [0,1,2,3,4,5]
console.log(newArr); // op = 0, 1, 2, 3, 4, 5
// so the type has been changed
console.log(typeof myArr2); // op = object
console.log(typeof newArr); // op = string

// slice or splice method

console.log("A", myArr2); // op = A [ 0,1,2,3,4,5]

const myn1 = myArr2.slice(1,3) // OP = [ 1,2] FROM 1-3 we get 1 2 always remember if you wan to get from 1-9 then you get 1-8 result one less than the last number 
console.log(myn1); // op = [1,2]
console.log("B", myArr2); // op = B [0,1,2,3,4,5]

const myn2 = myArr2.splice(1,3)
console.log("C", myArr2);  // op = [0,4,5]
console.log(myn2);  // op = [1,2,3]

// so most common question is diff between the slice and splice

// ans = first what slice does is gives the value from the range a less than the last value like if its 1-9 range then it gives the output upto 8
// and the most important it does not change the orignal value 
// what splice does is it gives the range output to the end suppose from 1-5 it gives all 1 2 3 4 5 but
// but the splice manipulates the orignal value and cuts down the element 
// so the main diff between slice and splice is slice gives the range output without manipulating the orignal value
// and splice manipulates the orignal value