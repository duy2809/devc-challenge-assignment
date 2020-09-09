let randomValue = Math.floor(Math.random() * 100) + 1;
console.log(`Random value: ${randomValue}`);
let count = 10;

let button = document.getElementById("guessButton");
button.addEventListener("click", function () {
  let userGuess = parseInt(document.getElementById("number").value);
  let message = document.getElementById("message");
  if (userGuess === randomValue) {
    message.innerHTML = "Congratulations!! You guessed correctly.";
    message.style.backgroundColor = "lightgreen";
    button.innerHTML = "Play again";
    button.addEventListener("click", function () {
      location.reload();
    });
  } else {
    count--;
    if (!count) {
      alert(`You lose. Answer is ${randomValue}. Please try again`);
      location.reload();
    }
    message.style.backgroundColor = "red";
    if (userGuess < randomValue)
      message.innerHTML = `Your guess was too low, guess higher. You have ${count} guesses left`;
    else
      message.innerHTML = `Your guess was too high, guess lower. You have ${count} guesses left`;
    document.getElementById("past").innerHTML += ` ${userGuess}`;
  }
});
