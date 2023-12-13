///+++++++++ LOOPS = ITERATION ++++++++///

// FOR LOOP //

//syntax

//for (let index = 0; index < array.length; index++) {
//    const element = array[index];
    
//}


for (let index = 0; index < 10; index++){  // you can change the index name to i 
    const element = index;
    console.log(element);
}
//console.log(element); = this will not work here as in element is declared inside the scope{}

//op = 0 1 2 3 4 5 6 7 8 9 here condition less than 10 so 1-9 is the output but if you put <=10 then the output will be from 0-10

for (let a = 0; a <=10; a++){
    const variable = a;
    if(variable == 5){
        console.log("5 is best number");
    }
    console.log(variable);
}
// op = 0 1 2 3 4 ' 5 is the best number' 6 7 8 9 10 = here the if condition was true so when the loop reached to the number 5 then the if condition will be checked which is true so instead of 5 the if condition result console is printed



// Loops inside the loops

for (let i = 1; i <=10; i++) {
    console.log(`Outer loop value: ${i}`);

    for (let j = 1; j <=10; j++) {
        //console.log(`Inner loop value ${j} and inner loop ${i}`); 
        console.log(i + '*' + j + ' = ' + i * j);
        // op = 1 to 10 multiplication table
    }
    
}

// loop on ARRAY

let myArray = ["flash", "batman", "superman", "spiderman", "ironman"]
console.log(myArray.length); // op = 5

for (let index = 0; index < myArray.length; index++) { // if you do not use index++ = index only then the loop will be stuck in first output only which is flash flash flash so ++ is very very important to add
    const element = myArray[index];
    console.log(element); // op = flash batman superman spiderman ironman
    
}


// keywords in loop 

// break and continue


// BREAK;

for (let i = 1; i <=20; i++) {

    if(i == 5){
        console.log(`5 is detected`);
        break; // this will break the loop and the output will be = value os i is 1 to 5 is detected
    }

    console.log(`value of i is ${i}`);       
    
}
// op = value of i is 1 to '5 is detected' will be printed



// CONTINUE 

for (let i = 1; i <=20; i++) {

    if(i == 5){
        console.log(`5 is detected`);
        continue // Here ' ; ' is not used
    }
    console.log(`value of i is ${i}`);
}        
//op = value of i is 1 to ' value of 5 is detected' to value of i is 20 will be printed ..basically the loop will continue even after the value of 5 is detected




// practice

for(let a = 0; a <= 15; a++){
    if(a == 7){
        console.log("7 is detected");
        break;
    }
    console.log(`value of a is ${a}`);
}







