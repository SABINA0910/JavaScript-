# Projects related to DOM 

## project link

[Click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js%3AL10,1-colorChanger%2Findex.html)

# Solution code 


## PROJECT 1 

```javascript

console.log("sabina")


const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button){
  console.log(button);
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'red'){
      body.style.backgroundColor = e.target.id
    }
  })
})


```

## project 2

```javascript


const form = document.querySelector('form');
// you cannot use const height or weight outside the form
// this use case will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
  e.preventDefault();
  
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  
  const results = document.querySelector('#results');


  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
  } else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height*height)/1000)).toFixed(2) // toFixed9(2) is written here so that we get the number in 2 decimal not more large numbers
    // show the result
    results.innerHTML = `<span>${bmi}</span>` ;

  }
});

```
# PROJECT 3 = DIGITAL - CLOCK

```javascript 
  
   // TIME DISPLAY
//document.querySelector('#clock')


const clock = document.getElementById('clock')

let date = new Date();
console.log(date.toLocaleTimeString());

// setInterval = this method controls the even in javascript 
// just give the method and tell after  how many intervals  you want to  continuously run and it does so  until the program is running 
// 

// always write the syntax the same way otherwise it wont work 1000= 1sec or 2000 = 2sec
setInterval(function(){
  let date = new Date();
  //console.log(date.toLocaleTimeString()); // so now the values comes after each 1 second 
  clock.innerHTML = date.toLocaleTimeString();
}, 1000); 


```
