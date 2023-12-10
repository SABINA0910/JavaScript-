// NESTED SCOPE

// we will now try function inside the function

function one(){
    const username = "sabina"

    function  two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two() // op = sabina coz in two we console the username so the username is sabina but if you do not call two() then the output will not be executed but doesnt show the error



}
one()  // this one() must be called as well otherwise the output will not be displayed



// practice

function three(){

    const userNewName = "aawaz"

    function four(){

        const adress = "america"
        console.log(adress);   // here you can call the userNewName only when the line 36 console is not there

    }
    four()
console.log(userNewName);   // here you cannot call the adress here
}
three()
// so the op  =  first america and then aawaz



// if else


if (true){
    const username = "salman"
    if(true){    // you can write here if(true) also
        const website = " youtube"
        console.log(username + website);

    }
    //console.log(website);  this shows error it has no scope outside the {}
}
//console.log(username); this will show error coz it username scope is not here

// finnally output = salman youtube



//// ++++++++++ INTERESTING ++++++++++ ///

// technique 1

console.log(addone(5))   // so op = 6   here you can use the console before the function

function addone(num){
    return num + 1

}

addone(5)  // op doesnot shows coz value has been returned but not called to print yet


// technique 2

//console.log(addTwo(5));  // = so it shows error here you cannot use this here like in technique 1
const addTwo = function(num){
    return num + 2
}
addTwo(5) // still the op has been returned but not called to  print yet

console.log(addTwo(5)); // so the op = 7 has been executed  so the point is you cannot use console before the const addtwo declaration like in technique 1
