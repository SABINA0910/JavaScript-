

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// add 10 in all numbers

//const newNums = myNumbers.map((num) => num + 10)   // op = [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const newNums = myNumbers.map((num) => {  // when you use {} scope always use return
    return num + 10 })


console.log(newNums);
// op = [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]/


// forEach

const myVal = [1, 2, 3, 4, 5]

myVal.forEach ((num) => {
   console.log( num + 10 );
})

// op = 11 12 13 14 15 


/// CHAINNING = you can use two three method at once

const myNumber =  [ 1, 2, 3, 4, 5]

const newNumbs = myNumber.map((num) => num * 10) // here num = 1 2 3 4 5 // 
                .map((num) => num + 1) //  here num = num*10 which is 10 20 30 40 50 and then it will be num + 1 = 11  21 31 41 51
                .filter((num) => num >=30)// op = [31, 41, 51]  // filter is either true or false

console.log(newNumbs);   

// op = [ 11, 21, 31, 41, 51]