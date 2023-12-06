// DATES

let myDate = new Date()
console.log(myDate); // op = 2023-12-06T11:49;49.811Z not readable

// now we do conversion so that date is more readable and simple

// convert the date to the string
console.log(myDate.toString()); // OP = wed dec 06 2023 11:53:23 GMT+0000
console.log(myDate.toISOString()); // OP = 2023-12-06T11:56:36.511Z
console.log(myDate.toDateString()); // OP = WED DEC 06 2023
console.log(myDate.toJSON());       // OP = 2023-12-06T11:56:36.511Z
console.log(myDate.toLocaleString()); // OP = 12/6/2023, 11:56:36 AM 
console.log(myDate.toLocaleTimeString());  // OP = 11:56:36 AM

// above output are the current time base when you run the program again the op will be different

console.log(typeof myDate);
// date is an OBJECT 


// now if you want to declare the specific date 

let myCreatedDate = new Date(2023, 0, 23) // note: in javascript month is started with 0 
console.log(myCreatedDate);  // op = 2023-01-23T00:00.000z .
// since date output has come but we do not know which so to know that we use .toDateString

console.log(myCreatedDate.toDateString()); // op = mon jan 23 2023
// so using the method(.toDateString or we can use any other) we can do the conversion

// we can declare date with other ways too

let myChooseDate = new Date(2023, 0, 23, 5, 3)
console.log(myChooseDate.toLocaleString()); // op = 1/23/2023, 5:03:00 AM 

// below is yy-mm-dd
let myPickDate = new Date("2023-01-14") // this is year and 00 is month ..in javascript month starts with the 0 but when you use - then it starts with 01
// op = 1/14/2023, 12:00:00 am
console.log(myPickDate.toLocaleString());

//now we do mm-dd-yy month date year

let iDate = new Date("01-14-2023")
console.log(iDate.toLocaleString()); // op = 1/14/2023, 12:00:00 am

// TIME STAMP

let myTimeStamp = Date.now()
console.log(myTimeStamp); // op = 1701865654656 is mili seconnd

// now to get the milisecond of the iDate 

console.log(iDate.getTime()); // now we get two values of mili second and wecan compare 

// you can conver to seconds also

console.log(Date.now()); // op will be in millisecond
// but i want in second

console.log(Date.now()/1000); // op = 1701865960.803 comes in decimal but we do not want in decimal for that we use math.floor
console.log(Math.floor(Date.now()/1000));// op =1701865960 second

let newDate = new Date()
console.log(newDate); // op = 2023-12-06T12:36:32.102Z 
// but now if you want to know the month or date or year then we use .get date or get day or get full year

console.log(newDate.getMonth()); // op = 11
console.log(newDate.getDay());   // op = 3
console.log(newDate.getFullYear()); // op = 2023
console.log(newDate.getMinutes()); // op =  40
console.log(newDate.getSeconds()); // op = 30
console.log(newDate.getMonth() + 1);


// sometimes using these syntax complex date program is done , suppose to get the full time and day 
// they use string interpolation(`` ${}) format

console.log(`${newDate.getDay()} and the time is ${newDate.getTime()}`); // op = 3 and the time is in 1701867318712

console.log(`${newDate.getFullYear()} and the month is ${newDate.getMonth()} and the date is ${newDate.getDate()}`);
// op = 2023 and the month is 11 and the date is 6

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}));
// op = wednesday ..since we use long so it show wednesday instead of wed

console.log(newDate.toLocaleString('default', {
    year: "numeric"
}));
 // op = 2023 