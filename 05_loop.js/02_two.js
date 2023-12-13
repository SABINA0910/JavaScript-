/// +++++++ WHILE LOOP ++++++///


let i = 0
while(i <= 10 ){
    console.log(`value of i is ${i}`);
    i = i + 2
}
// op = value of i is 0 , value of i is 2, value of i is 4 = since here made increment of +2 so the output is 0 2 4


// ARRAY in while loop

let myArray = ["flash", "batman", "superman", "spiderman"]
let a = 0

console.log(myArray.length); // op = length = 4

while(a < myArray.length){
    console.log(`value is ${myArray[a]}`);
    a = a + 1
}



/// ++++++++  DO WHILE LOOP +++++++///

let s = 1 // suppose s = 11 then op = score is 11 coz here do is at first so it does it work as giving the output and while condition is checked at last

do {
    console.log(`score is ${s}`);
    s ++

} while (s <= 10);
