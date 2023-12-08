// OBJECTS CONSTRUCTOR = singleton

//const tinderUser = new Object() = this is singleton object
//console.log(tinderUser);  // op = {} empty object

// const tinderUser = {}  // = this is non singleton object but both the output are same
// console.log(tinderUser);  // = op ={} empty object


const tinderUser = {}  

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false



//console.log(tinderUser);  

// now we add object on object

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "sabina",
            lastname: "stha"

        }
    }
}
//console.log(regularUser.fullname); // op = {userfullname: {firstname:'sabina',lastname:'stha'}}
// so the output  is full object store which is nested or if you want to open more nested

console.log(regularUser.fullname.userfullname); // op = {firstname: 'sabina', lastname: 'stha'}
console.log(regularUser.fullname.userfullname.firstname); // op = sabina
console.log(regularUser.fullname.userfullname.lastname); // op = stha

// now we merge/ combine the objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

//const obj3 = { obj1, obj2}
// console.log(obj3); // op = {obj1:{1:a, 2:b}}, obj2: {3: c ,4: d}

//const obj3 = Object.assign(obj1,obj2)  //  this syntax is also okay but use the below syntax
//console.log(obj3); // op = {1:a, 2:b, 3:c, 4:d}

//const obj4 = Object.assign({}, obj1, obj2, obj3)  // so use this syntax is correct because when you use {} this will  combine all the values and get the guaranted result
//console.log(obj4);
// op = {1:a, 2:b, 3:c, 4:d, 5:"e", 6:"f"}   // this also gives the same output but alwaz remember to use the empty parenthesis {} 
 // {} = target and "obj1,obj2,obj3" = source

 // you can also use the spread ... to combine the objects

const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);
// op = {1:a, 2:b, 3:c, 4:d, 5:"e", 6:"f"}   so the output is same so 90% of the time we use this syntax 

// suppose when you get value from the database like users
// when users is given then it will always have the arrays of objects


const users = [
    {
        id: 1,
        email: "hchc@google.com"

    },
    {
        id:1,
        email: "hchc@google.com"
    
    },
    {
        id:1,
        email: "hchc@google.com"
    },
]

users[1].email
console.log(tinderUser);  // op = {id: '123abc', name: 'sammy', isLogged in: false}

console.log(Object.keys(tinderUser)); 
// op = [ 'id', 'name', 'isLoggedIn']  so here output is array
console.log(Object.values(tinderUser));
// op = ['123abc', 'sammy', false]
console.log(Object.entries(tinderUser));
// op =  ['id', '123abc'], ['name', 'sammy'], ['isLoggedIn', false] so here the output is array on array


// you can also ask questions like do you have any value named isLoggedIn?

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // op = true
console.log(tinderUser.hasOwnProperty('isLogged')); // op = false

//console.log(tinderUser.propertyIsEnumerable('tinderUser')); // op = false
//console.log(tinderUser.propertyIsEnumerable('obj4'));  // op = false
