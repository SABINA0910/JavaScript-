///++++++  Immediately Invoked Function Expressions ( IFFE ) ++++++++////
// IFFE helps to execute the function immediately
// BUT WHY IFFE IS USES?
// ANS = iiffe is the function which is immediately excuted
// and sometimes problem arises due to the global scope pollution so to remove the pollution from the global scope variable or declaration IFFE is used





//function chai(){
//    console.log(`DB CONNECTED`);
//}
//chai()  // op = DB CONNECTED


// another way 

//(function chai(){
//    console.log(`DB CONNECTED`);
//})()
// op = DB CONNECTED


// IFFE 1
( function code(){
    // this is NAMED IFFE coz it has function name here
    console.log(`DB DISCONNECTED`);
})();// this semi colum " ; " is sued here to write the two iffe and run both the iff 2 AND iffe 2 


// always remember  when you write the two iffi at once you must give semi colum in the first iffi


// unnamed IFFE where we pass the parameter also

//IFFE 2
( (name) => {
    console.log(`DB CONNEECTED TWO ${name}`);
} ) ('name');

// so we write another iffe program below so we must use semi column " ; " to run the program so always give semi column at last and then write another program


// IFFE 3

(() => {
    console.log(`HELLO WORLD`);
}) () 
// op = HELLO WORLD 