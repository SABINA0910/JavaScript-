// ARROW FUNCTION

// THIS keyword tells about the current context

// object = we can be able to use this key in object

const user ={

    username: "sabina",
    price: 999,

    welcomeMessage: function(){

        console.log(`${this.username} ,  welcome to the website`);
        //console.log(this); // nthg will be executed if we use this here

    }


}
//user.welcomeMessage // op is not been executed

user.welcomeMessage()  // op = sabina , welcome to the website

// suppose if we change the username

user.username = "sam"
user.welcomeMessage()  // op = sam , welcome to the website

//onsole.log(this);  // so op = {} empty here in the node it is empty object but when you open this in inspect browser it will shwo the window

// the global object inside the browser is the window object so that you can capture all  the events like capture form submit etc



// function  = we are not able to use the this keyword to execute in the function in the function 

//function chai(){
//    let username = "kamal"
//    console.log(this.username);  // says undefined so here we are not able to use this inside the function
//}
//chai() 


////++++++  ANOTHER WAY TO DECLARE FUNCTIONS THROUGH ARROW FUNCTIONS  ++++++ ///

//const chai = function(){
//    let username  = "himesh"
//   console.log(this.username);
//}
//chai() // op = undefined


//const chai = () => {
//    let username = " kamlesh "
//   console.log(this.username);
//}
//chai() // op = undefined


const chai = () => {
    let username = " kamlesh "
    console.log(this);
}
chai()   // op = {} empty


///++++++++++++   ARROW FUNCTION  +++++++++++/////
// syntax of arrow function = () => {}


//basic arrow function

const addTwo = (num1, num2) => {
    return num1 + num2  // here we return the num1 and will add the num2 
}
console.log(addTwo(3,4));  // op = 7 

// IMPLICIT RETURN = this means you do not have to use {} and write any return keyword but when you use the {} curly bracket you must write the return keyword

const addThree = (num1, num2, num3) => num1 + num2 + num3
console.log(addThree(3,4,5)); // op = 12 

const addone = (num1, num2) => (num1 + num2) //  if you use in () bracket the you dont have to write the return keyword but when you use {} bracket you must write the return keyword
console.log(addone(6,7)); // op = 13

// suppose now if you have to return the object 

//const addme = (num1, num2) => {username: "hitesh"}
//console.log(addme(5,8)); // op = undefined coz you have to wrap it in paranthesis () as below

const addme = (num1, num2) => ({username: "hitesh"}) // to return the object you must use {} and () both bracket
console.log(addme(5,8));
// op = username: "hitesh"


// example 

//const myArray = [2, 5, 3, 7, 8]

//myArray.forEach(() => {})