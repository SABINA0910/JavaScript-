// memory are of tyo types STACK and HEAP
// STACK = all primitive datatype
// HEAP = all non primitive types



// primitve datatype

let myYoutubename = "sabina_09"

let anothername = myYoutubename
anothername = "aawaz_11"

console.log(myYoutubename);
console.log(anothername);

//non primitive 

// in non primitve type all the output will be 
// reference to the heap 

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne 

userTwo.email = "sabina@google.com"

console.log(userOne.email);
console.log(userTwo.email);

// here both output will be same = sabina@google.com
