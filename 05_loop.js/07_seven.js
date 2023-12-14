/// ++++++  REDUCE METHOD ++++++ ////


const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3+ 4
const initialValue = 0; // this is letting know the accumulator the first current value is 0

const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log(sumWithInitial);

// op = 10 so how we got 10 here is;
// first loop runs where  accumaltor current value is 0(which we const initialvalue=0) and then accumulator= accumulator + current value = 0 + 1(current value) 1 is first current value from the array list [1, 2, 3, 4]
// second loop runs then 1 goes to accumulator then accumulator = 1 + 2(current value) = 3
// third loop runs then again 3 is accumulator then accumulator = 3 + 3(current value) = 6
// 4th loop runs again 6 is accumulator then accumulator = 6 + 4(current value ) = 10

// so the final output = 10 is the result as in there is no current value left



// practice

const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, cv){
    console.log(`accumulator: ${acc} and currentvalue: ${cv}`);
    return acc + cv
}, 0) // here you can pass any value to the accumulator 0 or 1 or 2 or 3 and so on

console.log(myTotal);  // op = 6 

// bewlow will also come in output

// accumulator 0 and currentvalue 1 
// accumulator 1 and currentvalue 2
// accumulator 3 and currentvalue 3

// suppose accumulation initial value was 3 instead of 0 then the output will be

// accumulator 3 and the current value 1 (3+1) = 4 goes to accumulator
// accumulator 4 and the current value 2 (4+2) = 6 goes to accumulator
// accumulator 6 and the current value 3 (6+3) = 9 will be op coz no initial value left
 // final output = 6+3 = 9



 /// now we write in ARROW function

const myNUMS = [1, 2, 3]

const newValue = myNUMS.reduce( (acc, cv) => acc + cv, 5 )

console.log(newValue); // op = 11

// acc 5 and cv 1 ( 5 + 1 ) = 6
// acc 6 and cv 2 ( 6 + 2 ) = 8
// acc 8 and cv 3 ( 8 + 3 ) = 11 and thats the final output


// example

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "ruby course",
        price: 5999
    },
    {
        itemName: "data course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price, 0)
console.log(priceToPay);

// op = 22996

// acc = 0 ,   cv = 2999 
// acc = 2999 , cv  = 999
// acc = 3998 , cv = 5999
//acc = 9997 , cv = 12999

// total output = 22996