# PROJECT " Guess the Number"  = SOLUTION CODE

```javascript


let randomNumber = (parseInt(Math.random() * 100 + 1));

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

// prevGuess = here we create array where we store value perviously submited by the user and show them so that they do not guess the same number again
let prevGuess = []

// now we show the user how many attempt has been made already
let numGuess = 1

let playGame = true;

// first we check if we are available to play game or not using if

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess);
    validateGuess(guess);
  });
}


function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number')
  }else if (guess < 1){
    alert('Please enter a number more than 1')
  }else if (guess > 100){
    alert('Please enter a number less than 100')
  }else{
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${randomNumber}`)
      endGame()
    } else {
      displayGuess(guess)
      checkGuess(guess)
    }

  }
  // here we check if the user have guessed the valid number or not what if a b c given instead of number 
  // whether the values is given negative or less than 1 or more than 100 coz our game is designed for 1-100
  // here the values are only validated not printed
  
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You guessed it right`)
   endGame()
  }else if (guess < randomNumber){
    displayMessage(`Number is too low`)
  }else if (guess > randomNumber){
    displayMessage(`Number is too high`)
  }
// here the values will be printed if the values are correct or not
// or value is low or high etc


}
//clean up  guess
function displayGuess(guess){
  userInput.value = '' 
  guessSlot.innerHTML += `${guess}    `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
  // it clean the values and all the array guess will be updated and guess remaining will be update
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`;


  // user input values will be made empty again for next guess and IN our innerHTML we ask the message from the user and print and make the number less so all the dom manupulation will happen in display message 
}

function endGame(){
  // to end the game we must make the button and first clear all input

  userInput.value = '' // value is cleaned now
  userInput.setAttribute('disabled', '') // now user can't add more value in input
  p.classList.add('button') // now start button is added
  p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`;
  startOver.appendChild(p)
  playGame = false
  newGame();
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [] // prev value is reset here and now its empty
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHMTL = `${11- numGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

    playGame = true

  });

}


```