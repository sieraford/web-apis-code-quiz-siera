var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");

var timer;
var timerCount;
var isWin = false;


// The startGame function is called when the start button is clicked
function startGame() {
    timerCount = 75;
    startTimer()
  }

  function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
      }
    }, 1000);
  }




startButton.addEventListener("click", startGame);