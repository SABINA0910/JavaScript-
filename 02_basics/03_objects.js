// OBJECTS 
// objects is defined with two temrs 1. Literals and 2. Constructor
// singleton = its a single object
// Literals do not form singleton only when you use constructor singleton is formed
//IN OBJECT THERE IS KEYS AND VALUES METHOD


//  TOPIC 1= OBJECTS LITERALS


// IMPORTANT QUESTION  declare symbol in object

// ans = first we have to declare the symbol varibale in key value pair
// and then add the key value in the object list 
// while adding make sure the key is is inside the square box [ ] otherwise your symbol wont be declared
// fianlly console.log and see the full list there you can see symbol has been declared
// [symbol(key1)]:'mykey1  = symbol has been declared

const mySym = Symbol("key1")

// nowto use symbol as a key or want to declare the symbol in the object

const JsUser = {
    name: "Sabina",
    "full name": "Sabina Shrestha",
    [mySym]: "mykey1", // [mySym] ALWAYS USE THE [] this is the correct syntax to declare symbol
    age: 30,
    location: "kathmandu",
    email: "sabinahchc.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// how to access object

console.log(JsUser.email); // op = sabianhchc.com

console.log(JsUser["email"]); // op = sbinahchc.com

// note = when you give as a dot then .email no need of "" but if you give as [] then "email" must be there
// if you give just[email] then it shows the error


//console.log(JsUser.full name); // you cannot use this as in it is wrong syntax
//console.log(JsUser("full name")); // this is also the wrong syntax

console.log(JsUser["full name"]); // this is the right syntax you must use in []
// op = Sabina Shretha

console.log(JsUser[mySym]); // op = mykey1
console.log(typeof JsUser[mySym]); // op = string

// now we change 

JsUser.email = "sabina.123@gmail.com"
console.log(JsUser.email);
console.log(JsUser); // op so the changed email has been updated

// now we can lock also so that no one can change the values

//Object.freeze(JsUser);
// now if youmake the changes it wont be re directed

//JsUser.email = "12345@google.com"
//console.log(JsUser);  // op = sabina.123@gmail.com  is still there so here the changes has not been implemented


// now we add function the object

JsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(JsUser.greeting); // op = [function (anonymous)] 
console.log(JsUser.greeting()); // op =  Hello JS user

// now we refer the name=sabina onto the function
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());  // op = Hello JS user
console.log(JsUser.greetingTwo()); // name = sabina value has been added in the ouput
// op = Hello JS user, Sabina 



