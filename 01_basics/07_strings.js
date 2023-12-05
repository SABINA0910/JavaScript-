const name = "sabina"
const repoCount = 50

// console.log(name + repoCount + "Value ");
// output = sabina50 Value 
// this is old syntax now we use new syntax to write code

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// output = Hello my name is sabina and my repo count is 50

const gameName = new String('sabinahc')
// above will be akey value paair like'
// 0=s 1=a 2=b 3=i 4=n 5=a 6=h 7=c

console.log(gameName[7]);
// here we give the key 7 so the output will be c
// console.log(gameName[s]); output = error 
// you can only give the key here 
console.log(gameName[5]); // output = a

// we can also access the prototype

console.log(gameName.__proto__ ); // output = {} object
// {} this is empty but it

console.log(gameName.length); // length = 8
console.log(gameName.toUpperCase()); // output= SABINAHC
console.log(gameName.toLowerCase()); // output = sabinahc
// uppercase output comes in CAPITAL letter
// lowercase output comes in small letters

// to know at which index the character is 

console.log(gameName.charAt(2)); // here we put number
// so in the 2nd positin there is b 
// s=0 a=1 b=2

// to know the index

console.log(gameName.indexOf('n')); // here we put letter
// output = 4
// s=0 a=1 b=2 i=3 n=4

const newString = gameName.substring(0,4)
console.log(newString);
// output = sabi (0,4) start from zero and ends in 3 
// if you give (0,8) strat from 0 and end in 7
// in substring you cannot give the negative value

const anotherString = gameName.slice(-7,4)
console.log(anotherString);
// output = abi  its in minus so it starts from last
// you can give the neagtive value in the slice

// trim and replace method

const newStringOne= "   sabina   "
// here we remove the space
console.log(newStringOne); //output=   sabina  (space inc)
console.log(newStringOne.trim());// output=sabina (no space)
// there is trimStart and trimEnd but mostly we use trim
// trimStart will trim the starting space
// trimEnd will trim the End spaces


// replace

const url = "http://salman.com/salman%20khan"

url.replace('%20', '-')
console.log(url.replace('%20', '-'));
// output= http://salman.com/salman-khan
// %20 has been replaced with the - 

console.log(url.includes('salman')); //output = true
console.log(url.includes('sabina')); // output = false

// you can aslo convert the string ("sabinahc") to the array

console.log(gameName.split('-'));
// if we give 'sabinahc' then output = 'sabinahc'
// if we give 'sab-in-aha-hc' output = 'sab' 'in' 'aha' 'hc'
// so basically it splits the - logo included only