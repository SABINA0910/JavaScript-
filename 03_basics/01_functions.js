// FUNCTIONS


//console.log("S");
//console.log("A");
//console.log("B");
//console.log("I");
//console.log("N");
//console.log("A"); 

// now to put all these in one get the output as one we use the functions

// function definition below
function sayMyName(){    
    console.log("S");
console.log("A");
console.log("B");    // these all console are the syntax
console.log("I");
console.log("N");
console.log("A");
}

sayMyName()  // sayMyName is the reference  and when you use () then it is executed

/// add two number in functions

//function addTwoNumbers(number1, number2){   // here (number1, number2) = is called the parameters in function
//   console.log(number1 + number2);

//}
addTwoNumbers()  /// opo = NaN not a number coz we dint gave any argument so do not forget to give the arguement

addTwoNumbers(3, 4) // op = 7  // here (3,4 ) = this is called the arguments in the functions
addTwoNumbers(3, "4")  // op = 34 coz one is string and other is just a number so it just put up them together
addTwoNumbers(3, "a") // op = 3a
addTwoNumbers(3, null) // op = 3


//const result = addTwoNumbers(3,4)
//console.log("Results:", result); // op = 7, undefined // here output is 7 but it says undefined
// but the result 7 here is not the return value coz we did not use the syntax return

// we can also try another method in functions

function addTwoNumbers(number1, number2){

    let result = number1 + number2 
    // console.log("sabina");   if you write this syntax before the return the it will be executed
    return result
    console.log("sabina")  // here "sabina" wont be excuted cox once you use the return result by default the function will stop working
}

const result = addTwoNumbers(3,4)
console.log("Results:", result);  // op = results:7 so finally the result 7 is as the return value



// subtract

function minTwoNumbers(number3, number4){
    console.log(number3 - number4);
}

minTwoNumbers(9, 3)  // op = 6

// divide

function divTwoNumbers(num1, num2){
    //console.log(num1 / num2); this is also right but we can use another method also
    return num1 / num2 

}
// divTwoNumbers(15,3)  so if we used console.log method then we must use this line 
const divide = divTwoNumbers(15,3)
console.log("output:", divide);  // op = output: 5

// so here when we use we get the output only
// but when we use the return we can store the output value in the variable here variable is output: 5


function loginUserMessage(username){
    if(username === undefined){  // this line will run  only if your situation is true
        console.log("please enter the username");
        return // once we use return here 
    }
    return `${username} just logged in` // this line will never be executed
}

//loginUserMessage("sabina") = here the ouptut  will not be shown coz we have executed the function but not called to print or store in a variable 

// now we give the print syntax now the output will be shown
console.log(loginUserMessage("sabina")) //  op = sabina just logged in


// when you give the empty string as argument
console.log(loginUserMessage(" ")) // op = just logged in

// when you give nothing or no value in the argument then
console.log(loginUserMessage()) // op = undefined just logged in

//we can check if that value is available or not by using the if else statement
// so the op= please enter the username 
// undefined


// if (!username){
//    console.log("please enter a username");
//    return
//}

// sometimes this above kind of code is written instead of username === undefined 
// !username will just give the same output as the username === undefined
// which is = please enter the username undefined


// sometimes you can also give the default value also when user do not pass any value or the value is undefined

function newUserMessage(username = "sam"){
    if(!username){
        console.log("enter the new message");
        return
    }
    return `${username} just logged in`
}
console.log(newUserMessage())  // op = sam just logged in
// since we gave the default username value = sam so the output will never be undefined

// suppose you give the value then the output will overrite th default value
console.log(newUserMessage("AAWAZ"))
// op = AAWAZ just logged in