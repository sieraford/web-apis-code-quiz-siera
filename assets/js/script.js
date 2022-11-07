var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");
var responseElement = document.querySelector("#response");
var finalScoreElement = document.querySelector(".final-score");
var initialsInput = document.querySelector("#initials");
var highScoresList = document.querySelector("#high-scores-list");

var timer;
var timerCount;
var isCorrect = false;
var finalScore;
var highScores = [];


// The startGame function is called when the start button is clicked
function startGame() {
    timerCount = 75;
    startTimer()
    toggleVisibility("start-text");
    toggleVisibility("question-one");
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
        toggleVisibility("quiz")
        toggleVisibility("done-text")
        }
}, 1000);
}

function toggleVisibility(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function checkQuestionOneAnswer(event){
    event.stopPropagation();
    var element = event.target;
    if (element.matches('.answer') && element.matches('.q1')) {
        if(element.matches('.correct')) {
            isCorrect = true;
            responseElement.textContent = "Correct!";
        } else {
            isCorrect = false;
            responseElement.textContent = "Wrong!";
            timerCount = timerCount - 10;
            timerElement.textContent = timerCount;
        }
        toggleVisibility("question-one");
        toggleVisibility("response");
        toggleVisibility("question-two");
    }
}

function checkQuestionTwoAnswer(event){
    event.stopPropagation();
    var element = event.target;
    if (element.matches('.answer') && element.matches('.q2')) {
        if(element.matches('.correct')) {
            isCorrect = true;
            responseElement.textContent = "Correct!";
        } else {
            isCorrect = false;
            responseElement.textContent = "Wrong!";
            timerCount = timerCount - 10;
            timerElement.textContent = timerCount;
        }
        toggleVisibility("question-two");
        toggleVisibility("question-three");
    }
}

function checkQuestionThreeAnswer(event){
    event.stopPropagation();
    var element = event.target;
    if (element.matches('.answer') && element.matches('.q3')) {
        if(element.matches('.correct')) {
            isCorrect = true;
            responseElement.textContent = "Correct!";
        } else {
            isCorrect = false;
            responseElement.textContent = "Wrong!";
            timerCount = timerCount - 10;
            timerElement.textContent = timerCount;
        }
        toggleVisibility("question-three");
        toggleVisibility("question-four");
    }
}

function checkQuestionFourAnswer(event){
    event.stopPropagation();
    var element = event.target;
    if (element.matches('.answer') && element.matches('.q4')) {
        if(element.matches('.correct')) {
            isCorrect = true;
            responseElement.textContent = "Correct!";
        } else {
            isCorrect = false;
            responseElement.textContent = "Wrong!";
            timerCount = timerCount - 10;
            timerElement.textContent = timerCount;
        }
        toggleVisibility("question-four");
        toggleVisibility("question-five");
    }
}

function checkQuestionFiveAnswer(event){
    event.stopPropagation();
    var element = event.target;
    if (element.matches('.answer') && element.matches('.q5')) {
        if(element.matches('.correct')) {
            isCorrect = true;
            responseElement.textContent = "Correct!";
        } else {
            isCorrect = false;
            responseElement.textContent = "Wrong!";
            timerCount = timerCount - 10;
            timerElement.textContent = timerCount;
        }
        clearInterval(timer);
        var finalScore = timerCount;
        finalScoreElement.textContent = finalScore;
        toggleVisibility("question-five");
        toggleVisibility("done-text");
    }
}

function setHighScore(event) {
    event.preventDefault();
    var element = event.target;
    if(element.matches("#submit")) {
        toggleVisibility("response")
        var highScore = {
            initials: initialsInput.value.trim(),
            score: timerCount
        }
        highScores.push(highScore)
        console.log(highScores)
        storeHighScores();
        renderHighScores();

        toggleVisibility("done-text")
        toggleVisibility("high-scores")
    }  
  }

// The following function renders items in a todo list as <li> elements
function renderHighScores() {
  
    // Render a new li for each todo
    for (var i = 0; i < highScores.length; i++) {
  
        var li = document.createElement("li");
        li.textContent = highScores[i].initials + " - " + highScores[i].score;

        highScoresList.appendChild(li);
    }
  }

// This function is being called below and will run when the page loads.
function init() {
    // Get stored high scores from localStorage
    var storedHighScores = JSON.parse(localStorage.getItem("highScores"));

      // If todos were retrieved from localStorage, update the todos array to it
  if (storedHighScores !== null) {
    highScores = storedHighScores;
  }

    renderHighScores();
  }

  function storeHighScores() {
    // Stringify and set key in localStorage to high scores array
    localStorage.setItem("highScores", JSON.stringify(highScores));
  }


startButton.addEventListener("click", startGame);
document.addEventListener('click', checkQuestionOneAnswer);
document.addEventListener('click', checkQuestionTwoAnswer);
document.addEventListener('click', checkQuestionThreeAnswer);
document.addEventListener('click', checkQuestionFourAnswer);
document.addEventListener('click', checkQuestionFiveAnswer);
document.addEventListener('click', setHighScore);

init();
