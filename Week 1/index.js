let randomValue = Math.floor(Math.random() * 100) + 1;
console.log(`Random value: ${randomValue}`);
let count = 10;

let button = document.getElementById("guessButton");
button.addEventListener("click", function () {
  let input = document.getElementById("number");
  let userGuess = Number(input.value);
  if (userGuess < 1 || userGuess > 100 || !Number.isInteger(userGuess)) alert("Your input is invalid!");
  else {
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
        let time = 4;
        button.disabled = true;
        let noti = document.getElementById("noti");
        noti.innerHTML = `You lose. Answer is ${randomValue}. Reload page in 5s`;
        setInterval(function(){
          noti.innerHTML = `You lose. Answer is ${randomValue}. Reload page in ${time}s`;
          if (time === 0) location.reload();
          else time--;
        }, 1000); 
      }
      message.style.backgroundColor = "red";
      if (userGuess < randomValue)
        message.innerHTML = `Your guess was too low, guess higher. You have ${count} guesses left`;
      else
        message.innerHTML = `Your guess was too high, guess lower. You have ${count} guesses left`;
      document.getElementById("past").innerHTML += ` ${userGuess}`;
      input.value = "";
    }
  }
});