// TRUTHY OR FALSY 

const userEmail = "h@sabina.ai"

if (userEmail){
    console.log("Got user email");
} else{
    console.log("Dont have user email");
}

// op = got user email but here we did not check the condition and dint mention true or false 
// but still code is executed and gave the output coz we assumed here the string "email" is true


// suppsoe if there was no value just the empty string ""

const userId = ""

if (userId){
    console.log("Got user ID");
} else{
    console.log("Dont have user ID");
}

// op = dont have user id coz since we did not gave anything but empty string 
// so it is assumed as false and gave the output as dont have the user id

// suppose if it has empty array []

const userDB = []

if(userDB){
    console.log("yes user has DB");
} else{
    console.log("No user do not have DB");
}

// op = yes the user have DB but here the empty array [ ] is assumed to be true wheraeas the empty "" string was assumed false

// so there are certain rules on truthy and falsy values


// +++++ FALSY VALUES +++++ //

// * = false is also the falsy value
// * = 0 zero or -0 negative zero is also the falsy value
// * = BigInt 0n (zero n) is also the falsy value
// * = "" empty string
// * = null 
// * = undefined
// * = NaN 


/// +++++ TRUTHY VALUES +++++ ///

// * = [] empty array or paranthesis
// * =  "0" then it is truthy value ..if there is zero insdie the string then it is a truthy value'
// * = 'false' this is also inside the string so it is aslo truthy value
// * = " " when space given inside the string then it is a string value
// * = {} empty object is also a truthy value
// * = function(){} = if the empty function is declare=d then it is also a truthy value


// how to check   array [] .. we used [] in userDB so we check from that

if (userDB.length === 0){
    console.log("Array is empty");
}
// op = array is empty

// how to check the empty object {}

// first we convert the object to array using (Object.keys(emptyObj)) = now its array and to check array we use .length === 0 

const emptyObj = {}

if(Object.keys(emptyObj).length === 0 ){
    console.log("now we convet the object to array ")
}
// op = now we convert the object to array


/// +++++ NULLISH COALESCING OPERATOR (??) +++///

// this method is made for null or undefined only . 


let val1;
//val1 = 5 ?? 10 // op = 5 this case will give the first one as output
//val1 = null ?? 10 // op = 10 
//val1 = undefined ?? 15 // op = 15

val1 = null ?? 10 ?? 20 // op = 10 in this case whichevr value assigned first comes as the ouptut which is 10

console.log(val1); 


/// +++++  TERNIARY OPERATOR =  it is just the samll syntax of if else ++++ ////


//condition ? true : false

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")
// op = less than 80 true case

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
// op = more than 80 false case