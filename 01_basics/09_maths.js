// MATHS

const score = 200
console.log(score);

console.log(Math);

console.log(Math.abs(-4)); // op = 4
// you can only make minus to positive
// you cant give 4 and get -4

console.log(Math.round(4.3)); // op = 4
// it rounds off the value
// if you give 4.5 or above 4.6 or 4.7 then output will be in round off to = 5

console.log(Math.ceil(4.2));//op=5
// ceil means more than 4 will be 5 even if 4.1

console.log(Math.floor(4.6)); // op = 4
// floor means the lower round up value
// no matter what it will give the low value i:e 4

console.log(Math.min(4,3,6,8)); // op = 3
console.log(Math.max(4,3,6,8)); // op = 8

// mostly you will use the math.random

console.log(Math.random()); // op = 0.9 again changes
// so basically the random gives the random output everytime
 
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1); 

// trick to define min and max and formula

const min = 10
const max = 20  
// want the value in between 10 - 20

console.log(Math.random() * (max-min + 1)); // op = 3.0539

// now we dont want decimal but want the round up single number then use floor
console.log(Math.floor(Math.random() * (max-min + 1))); 
// op = 3 or if you try again it gives random diff number
// but it will give the single number not the decimal

console.log(Math.floor(Math.random() * (max-min + 1)) + min);
// so here the min value will be added 


// NOTE:

// math.random  gives the random value from 0-1
// values can be 0.1 , 0.2 , 0.4 or etc
// so you multiply the value with *10 
// sometimes value is 0.1 then math.floor will give outout = 0
// to avoid that case we add + 1 in the end ..want the value more than 1
// now it will give the value from 1-9

// sometimes you have to define the min also and max also 

// in that case we use math.random and do max - min so that we get the range and + 1 added to avoid the 0 case
// but the output value is same as above means likely in decimal
// so to avoid that case we did (max - min + 1) + min at the last
