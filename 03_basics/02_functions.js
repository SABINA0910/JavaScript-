// shopping cart case where customer keeps on adding the item in the cart 
// and we do not know how many arguments are passed so we have to make parameters acordingly


function calculateCartPrice(val1, val2, ...num1){
    return num1

}

//console.log(calculateCartPrice(2))  // op = 2

// suppose more number is added in the cart

//console.log(calculateCartPrice(200, 400, 500)) // op = 200 only so to get all the output we use rest operator = ... 3 dot

// now we used ... 
console.log(calculateCartPrice(200, 400, 500, 600, 700)) // op = [500,600,700] array output
// here the val1 took 200 and val2 took 400 so the left value has come as output in an array box []


// now we pass object in the functions

const user = {
    username: "sabina",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
handleObject(user)  // op = username is sabina and price is 199



// you can directly also pass the object also here
handleObject({
    username: "sam",
    price: 399
})
// op = username is sam and price is 399

handleObject({
    username: "aawaz",
    price: 1999
})
// op = username is aawaz and price is 1999



// you can also pass arrays in the functions

const myNewArray = [200, 400, 100, 600]
// now we define the funtion which accept the array and return the second value

function returnSecondValue(getArray){   // remember here you give getArray as parameter not the myNewArray
    return getArray[3] // 3 here is the index number
}
console.log(returnSecondValue(myNewArray)); // op = 600 
// here the 3rd index value is 600
// index starts from 0 
// 0 index = 200
// 1 index = 400
// 2 index = 100
// 3 index = 600

// you can directly pass the array also

console.log(returnSecondValue([200, 400, 100, 600]));  // op = 600