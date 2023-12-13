// FOR OF LOOP //

// this is mostly array specific loop
// ["", "", ""]
// [{}, {}, {}]



// FOR OF LOOP

const arr = [ 1, 2, 3, 4, 5]

for (const i of arr) {
    console.log(i);  
}
// op = 1 2 3 4 5

const list = ["nepal", "usa", "canada", "spain"]

for (const a of list){
    
    console.log(a);

}
// op  nepal usa canada spain


// we can use string also

const greetings = " hello world!"

for(const greet of greetings){
    console.log(`Each character is ${greet}`);
}


// MAPS = map is an object which holds the key value pair .. this will print the same order as its given
// there is no duplicate values here all the values ar unique


const map =  new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India") // so this wont be printed coz maps is known for unique values it does not give duplicate values


console.log(map);

for (const [key, value] of map){

    console.log(key, ':-', value);
}
// op = IN :- India  USA :- United states of America  FR :- France


// for of loop in an OBJECT

//const myObject = {
//    'Game1': 'NFS',
//    'Game2': 'GTA',
//    'Game3': 'CANDY CRUSH'  
//}
//for (const [key, value] of myObject){
//   console.log(key, ':-', value);
//}

// op  shows error coz here object is not iterable like map ... i mean the process that worked to iterate 
// map can not be worked in an object with the same way
// there is different wasy to iterate the object
// for of loop doest not work for an object to iterate

// correct way to iterate an object
// to iterate an object we use the for in loop


const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift:'swift by apple'
}

for (const key in myObject){

   // console.log(key);// op = js cpp rb swift = so the keys has been printed but we need object too
   //console.log(myObject[key]); op = javascript c++ ruby swift so onlyvalues is printed soto need both key and value

   console.log(`${key} value is for ${myObject[key]}`);
   //op = js value is for javascript
   //op = cpp value is fro c++
   //op = rb value is for ruby
   //op = swift value is for swift by apple

}



/// for in loops for an ARRAY ///


const programming = ["js", "ruby", "python", "java", "cpp"]

for (const key in programming){

    //console.log(key); // op = 0 1 2 3 4 so the output is the index no

    console.log(programming[key]); // op = js ruby python java cpp 


}


//// for in loop in MAPS ////



//const map =  new Map()
//map.set('IN', "India")
//map.set('USA', "United States of America")
//map.set('FR', "France")
//map.set('IN', "India")

//for (const key in map){
//    console.log(key);
//}
// op =  nothing is executed coz MAP is not iterable
