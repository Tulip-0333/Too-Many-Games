const guessButton = document.getElementById("guessButton");
const guessInput = document.getElementById("guessInput");
const result = document.getElementById("result");
let targetNumber = Math.floor(Math.random() * 100) + 1;

guessButton.addEventListener("click", function(){
  let guess = guessInput.value;
  if(guess == targetNumber){
    result.innerHTML = "Congratulations! You guessed the number! <br>Releod to try again.";
  }
  else if(guess > targetNumber){
    result.innerHTML = "Too high. Try again.";
  }
  else{
    result.innerHTML = "Too low. Try again.";
  }
});
