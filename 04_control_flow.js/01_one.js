///++++++ CONTROL FLOW / LOGIC FLOW  +++++++//////

// IF STATEMENT

//if (true){
                // you can directly write true but the condition must be true always to run the if statement
//}

// if (false) then your code will not be executed

// sometimes you can check the condition also

// const isUserLoggedIn = true

// if (isUserLoggedIn){
                        // this condition is true so the code will be executed
//}

// if (2==2){} this is also true so the code will be executed
// if (4>2) {} this also true
// if (5<9) {} this is also true
// if (3 != 2) this conditon is true

// < , > , <= , >= , == , != , === , !==(this checks the negative)

/// === triple equal cheks the type 

if ( 2 == "2"){      // but if you use === here the program wont show any result
    console.log("executed");
} // op  = executed 


// ans must  be true whether you check the value negative or positive

// so basically the condition where its all true then only the IF STATEMENT will execute the code

const temperature = 41

if (temperature < 50){
    console.log("less than 50")
}
console.log("temperature is greater than 50");
// op = less than 50 
// op = temperature is greater than 50 = this also came as output coz it is outsie the if statement {} so it will be excuted any how


const weather =  41

if (weather === 40){
    console.log("less than 50")
} else{
    console.log("weather is greater than 50")
}
console.log("its outsie of the if so it will be executed anyhow");


const score  = 200

if(score > 100){
    const power = "fly"   // but when you use (var power = "fly") then the code will be executed but we should not use the var 
    console.log(`user power: ${power}`);
}
// op = user power: fly 
//console.log(`user power: ${power}`); = this will show error will not be excuted coz it is a scope where only the code inside the {} is executed outside the scope{} it shows error


// short hand notation 

const balance = 1000
if (balance > 500) console.log("test"); // op = test
// IMPLICIT SCOPE = here we assume there is scope // it is executed in single line or you can do
// if (balance > 500) console.log("test"),
// console.log("test2"); = but do not use this type of code its not good

// NESTING = checking the multiple condition

const amount = 1000

if (amount < 500){
    console.log("less than 500"); // false coz 1000 > 500

} else if (amount < 750){
    console.log(" less than 750"); // false coz 1000 > 750

} else if (amount < 900){
    console.log(" less than 900"); // false coz 1000 > 900

} else {
    console.log("less than 1200") // so above all is false so the output is less than 1200 which is true
}
// op =  less than 1200


// >

const netAmount = 1500

if (netAmount > 500){
    console.log("it is greater than 500");  // it is true = this will be the output 

} else if (netAmount > 600){
    console.log("it is greater than 600"); // it is true

} else if (netAmount > 900){
    console.log("it is greater than 900") // it is true 

} else {
    console.log("it is less than 1000")
}
// when all the condtion is true then the first one will come as the output


// advance if statement = online shopping website

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// you can use && two times only and most important all the condition must be true
if (userLoggedIn && debitCard && 2==2){   // here && = checks both the condition if the user is logged in or not and if the user has debit card or not but both the condition must be true
    console.log("Allowed to buy course");
}
// op = allowed to buy course

//   " || "  = this pipe sign is used to test the multiple condition  more than two

if (loggedInFromGoogle || loggedInFromEmail){  // so any of the condition is true then user can log in
    console.log("user logged in");
}
// op = user logged in


// && operator = here both the condition must be true

// || OR operator = here any one condition is true then the code will be be executed