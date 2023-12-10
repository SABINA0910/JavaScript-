// SCOPES = {}

//let a = 10
//const b = 20
//var c = 30

//var c = 300  // this is outside the " if " so anything outside the " if " is global scope


// if (true){    
//    let a = 10     // this is inside the " if " so it is called the block scope
//    const b = 20
//    var c = 30 // if you do not use var also and only c then also the problem will be the same
// }

// NOTE : whatever value you write in global scope is avialble in the block scope
// NOTE : BUT THE VALUE YOU WRITE INSIDE THE SCOPE MUST NOT GO OUTSIDE THE BLOCK


//console.log(a); // op = a is not available shows error
//console.log(b); // op = b is not available shows error
//console.log(c);  // op = 30


let a = 300  // here the value of a is totally independent 
if (true){
    let a = 10
    const b = 20
    console.log("INNER:", a);   // if this line is not used then the op will be the value of a =30 
}


console.log(a);  // op =  INNER: 30   and 300 both are printed   


let b = 700
if (true){
    let b = 30
    const  c = 40
    console.log("INNER VALUE:", b)
}
console.log(b);

// op = INNERVALUE: 30 nad 700

let c = 999
if (true){
    let c = 333
    const d = 899
    console.log("INNER OUTPUT:", 79);

}
console.log(c);

let g = 898
if (true){
    let g = 444
    const h = 555

}
console.log(g);  // op = 898 since we already gave global value og g = 898 so the output is fromt the global scope


//for (let i = 0; i < Array.length; i++){
//    const element = array[i];                  // for loop

//}

