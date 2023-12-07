const marvel_heros = [ "thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// what happens if we directly push dc heros to marvel heros
// push will push the values in the existing arrays
//marvel_heros.push(dc_heros)
//console.log(marvel_heros);
// op = ['thor', 'ironman', 'spiderman', ['superman', 'falsh', 'batman'] ]

// so here the output has generated the arrays on arrays
// means here in the output is total 4 element thor=1 ironman=2 spiderman=3 and[s f b]= 4
// so what it did was it counts the whole dc element to single 

// now if you take the 3rd index no  then it will show the whole dc element as in the index count starts from 0 in array\

//console.log(marvel_heros[3]); // op = ['superman', 'falsh', 'batman']

//console.log(marvel_heros[3][1]); // op = flash 
// so what it did was it gave the 1st index of 3rd element 

//const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros); // op = ['thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman']
// what concat does is it  puts all the element in a single box and makes the index number 0-5
// while in what push did was it added the dc heros as  a single index

// more than concat there is another similar method and that is spread(...) spread is used more than concat

const all_new_heros = [...marvel_heros, ...dc_heros] // since you use ... here it is no more array its each element is individual
console.log(all_new_heros);
// op = ['thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman']

const another_array = [1, 2 ,3, [4, 5 ,6], 7, [6, 7], [4, 5]] // this is array on array on array

// now we use flat to get all in one single array
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
// op = [
    1,2,3,4,5,
    6,7,6,7,4,
    5
// ]  so here all arrays has been made the single array


console.log(Array.isArray("sabina")); // op = false 

console.log(Array.from("sabina")); // op = ['s', 'a', 'b', 'i', 'n', 'a'] // so here the form converted the string to the array

console.log(Array.from({name:"aawaz"})); // op = [] empty array 
// so here it showed the empty array because there is keys =name and value="aawaz" together and it cannot made the array so to get the array you must give either key or value toi get the array

// here i gave key to convert to array
console.log(Array.from('name')); // op = ['n', 'a', 'm', 'e']

// here  i gave value to conver to array
console.log(Array.from("aawaz")); // op = ['a', 'a', 'w', 'a', 'z']

// IMPORTANT NOTE : YOU CANNOT GIVE BOTH KEYS AND VALUE AT ONCE TO CONVERT IT TO THE SINGLE ARRAY
// IF YOU GIVE BOTH KEY AND VALUE TOGETHER THEN THE OUTPUT = [] EMPTY ARRAY
// SO YOU HAVE TO SPECIFY THE KEY OR VALUE 

let score1 = 100
let score2 = 200
let score3 = 300 
// so here you convert the multiple variable into the arrays

console.log(Array.of(score1, score2, score3)); // op = [100, 200, 300]



