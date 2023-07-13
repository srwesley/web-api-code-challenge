// Different elements aside from questions/answers

var containerQuestionEl = document.getElementById("question-container");
var containerStartEl = document.getElementById("starting-container");
var containerEndEl = document.getElementById("quiz-end-container");
var containerScoreEl = document.getElementById("score-board");
var formInitialsEl = document.getElementById("initials-form");
var containerHighScoresEl = document.getElementById("high-score-container");
var viewHighScoreEl = document.getElementById("view-high-scores");
var listHighScoreEl = document.getElementById("high-score-list");
var correctEl = document.getElementById("correct");
var wrongEl = document.getElementById("wrong");

//Buttons

var startBtnEl = document.querySelector("#startBtn");
var goBackBtnEl = document.querySelector("#go-back-btn");
var clearScoresBtnEl = document.querySelector("#clear-high-scores-btn");

// Questions/Answers elements

var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons");
var timerEl = document.querySelector("#timer");
var score = 0;
var timeRemaining;
var gameEnd;
timerEl.innerText = 0;

// Array for High Scores 

var highScores = [];

// Assigns array details for Questions

var arrayShuffledQuestions;
var questionIndex = 0;

// Array of Questions for Quiz

const questions = [
    {
        question: 'Inside which HTML element do we put javascript?',
        answers: [
            { text: '1. <h1>', correct: false },
            { text: '2. <js>', correct: false },
            { text: '3. <script>', correct: true },
            { text: '4. <head>', correct: false },
        ]
    },
    {
        question: 'What syntax would call a function?',
        answers: [
            { text: '1. var function', correct: false },
            { text: '2. function', correct: false },
            { text: '3. call function', correct: false },
            { text: '4. function()', correct: true },
        ]
    },
    {
        question: 'What is getItem commonly used for?',
        answers: [
            { text: '1. adding items', correct: false },
            { text: '2. local storage', correct: true },
            { text: '3. online shopping', correct: false },
            { text: '4. naming a variable', correct: false },
        ]
    },
    {
        question: 'Arrays in Javascript can be used to store...what?',
        answers: [
            { text: '1. numbers', correct: false },
            { text: '2. booleans', correct: false },
            { text: '3. strings', correct: false },
            { text: '4. all of the above', correct: true },
        ]
    },
    {
        question: 'What does DOM stand for?',
        answers: [
            { text: '1. Do Overnight Modules', correct: false },
            { text: '2. Document Object Models', correct: true },
            { text: "3. Don't Own Mowers", correct: false },
            { text: '4. Dance On Mountains', correct: false },
        ]
    },
    {
        question: 'When did javascript first appear?',
        answers: [
            { text: '1. 1995', correct: true },
            { text: '2. 1999', correct: false },
            { text: '3. 2001', correct: false },
            { text: '4. 2005', correct: false },
        ]
    },
    {
        question: 'In the code -- setInterval(time(), 1000) -- what is time()?',
        answers: [
            { text: '1. undefined', correct: true },
            { text: '2. variable', correct: false },
            { text: '3. callback function', correct: false },
            { text: '4. all of the above', correct: false },
        ]
    },
    {
        question: 'The condition of an if/else statement is enclosed by:',
        answers: [
            { text: '1. quotes', correct: false },
            { text: '2. curly brackets', correct: false },
            { text: '3. parentheses', correct: true },
            { text: '4. square brackets', correct: false },
        ]
    },
    {
        question: 'Which method adds a new item to the end of an array and returns the new length?',
        answers: [
            { text: '1. push()', correct: true },
            { text: '2. return()', correct: false },
            { text: '3. shift()', correct: false },
            { text: '4. pop()', correct: false},
        ]
    },
    {
        question: "Which of the following can't be done with client-side javascript?",
        answers: [
            { text: "1. sending a form's contents by email", correct: false },
            { text: '2. validating a form', correct: false },
            { text: "3. storing the form's contents to a database file on the server", correct: true },
            { text: '4. none of the above', correct: false },
        ]
    }
];

// If the Go Back button is hit on the High Score page

var renderStartPage = function() {
    containerHighScoresEl.classList.add('hide');
    containerHighScoresEl.classList.remove('show');
    containerStartEl.classList.remove('hide');
    containerStartEl.classList.add('show');
    containerScoreEl.removeChild(containerScoreEl.lastChild);
    questionIndex = 0;
    gameEnd = "";
    timerEl.textContent = 0;
    score = 0;

    if (correctEl.className = 'show') {
        correctEl.classList.remove('show');
        correctEl.classList.add('hide');
    }
    if (wrongEl.className = 'show') {
        wrongEl.classList.remove('show');
        wrongEl.classList.add('hide');
    }
};

// Every second, checks if game is over is true, or if there is time remaining. Starting time at 100.

var setTime = function () {
    timeRemaining = 100;

    var timerCheck = setInterval(function() {
        timerEl.innerText = timeRemaining;
        timeRemaining--;

        if (gameEnd) {
            clearInterval(timerCheck);
        }

        if (timeRemaining < 0) {
            showScore();
            timerEl.innerText = 0;
            clearInterval(timerCheck);
        }
    }, 1000);
};

var startGame = function() {
    // Adds classes to show/hide start and quiz screens
    containerStartEl.classList.add('hide');
    containerStartEl.classList.remove('show');
    containerQuestionEl.classList.remove('hide');
    containerQuestionEl.classList.add('show');
    // Shuffles the questions so they show in a random order
    arrayShuffledQuestions = questions.sort(() => Math.random() - .5);
    setTime();
    setQuestion();
};

// Sets next question for quiz

var setQuestion = function() {
    resetAnswers();
    displayQuestion(arrayShuffledQuestions[questionIndex]);
};
;
// Removes answer buttons

var resetAnswers = function() {
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild);
    }
};

// Display question information (including answer buttons)

var displayQuestion = function(index) {
    questionEl.innerText = index.question;
    for (var i = 0; i < index.answers.length; i++) {
        var answerButton = document.createElement('button');
        answerButton.innerText = index.answers[i].text;
        answerButton.classList.add('btn');
        answerButton.classList.add('answerBtn');
        answerButton.addEventListener("click", answerCheck);
        answerButtonsEl.appendChild(answerButton);
    }
};

// Display correct! on screen

var answerCorrect = function() {
    if (correctEl.className = 'hide') {
        correctEl.classList.remove('hide');
        correctEl.classList.add('banner');
        wrongEl.classList.remove('banner');
        wrongEl.classList.add('hide');
    }
};

// Display wrong! on screen

var answerWrong = function() {
    if (wrongEl.className = 'hide') {
        wrongEl.classList.remove('hide');
        wrongEl.classList.add('banner');
        correctEl.classList.remove('banner');
        correctEl.classList.add('hide');
    }
};

// Checks if the answer is correct 

var answerCheck = function(event) {
    var selectedAnswer = event.target;
    if (arrayShuffledQuestions[questionIndex].answers === selectedAnswer.innerText) {
        answerCorrect();
        score = score + 10;
    } else {
        answerWrong();
        score = score - 10;
        timeRemaining = timeRemaining - 7;
    }

         // Goes to the next question, checks if there are more questions

        questionIndex++
        if  (arrayShuffledQuestions.length > questionIndex + 1) {
            setQuestion();
        }   
        else {
           gameEnd = "true";
           showScore();
            }
};

// Display total score screen at the end of the game
       
var showScore = function() {
    containerQuestionEl.classList.add('hide');
    containerEndEl.classList.remove('hide');
    containerEndEl.classList.add('add');

    var scoreDisplay = document.createElement('p');
    scoreDisplay.innerText = ("Your final score is " + score + "!");
    containerScoreEl.appendChild(scoreDisplay);
};

// Creates high score values

var createHighScore = function(event) {
    event.preventDefault();
    var initials = document.querySelector("#initials").value;
    if (!initials) {
        alert("Enter your initials!");
        return;
    }

    formInitialsEl.reset();

    var highScore = {
        initials: initials,
        score: score
    };

    // Push and sort scores

    highScores.push(highScore);
    highScores.sort((a, b) => {return b.score-a.score});      
    
    // Clear visibile list to resort

    while(listHighScoreEl.firstChild) {
        listHighScoreEl.removeChild(listHighScoreEl.firstChild);
    }
    // Create elements in order of high scores
    for (var i = 0; i < highScores.length; i++) {
        var highScoreEl = document.createElement('li');
        highScoreEl.className = "high-score";
        highScoreEl.innerHMTL = highScores[i].initials + " - " + highScores[i].score;
        listHighScoreEl.appendChild(highScoreEl);
    }

    saveHighScore();
    displayHighScores();
    
}
        
// Saves high score

var saveHighScore = function() {
    localStorage.setItem("highScores", JSON.stringify(highScores));
};       

// Loads values / called on page load

var loadHighScore = function() {
    var loadedHighScores = localStorage.getItem("highScores");
    if (!loadedHighScores) {
        return false;
    }

    loadedHighScores = JSON.parse(loadedHighScores);
    loadedHighScores.sort((a, b) => {return b.score-a.score});

    for (var i = 0; i < loadedHighScores.length; i++) {
        var highScoreEl = document.createElement('li');
        highScoreEl.className = "high-score";
        highScoreEl.innerText = loadHighScores[i].initials + " - " + loadedHighScores[i].score;
        listHighScoreEl.appendChild(highScoreEl);

        highScores.push(loadedHighScores[i]);
    }
};
    
// Display high score screen from link or when intiials entered

var displayHighScores = function() {
    containerHighScoresEl.classList.remove('hide');
    containerHighScoresEl.classList.add('show');
    gameEnd = "true";

    if (containerEndEl.className = "show") {
        containerEndEl.classList.remove('show');
        containerEndEl.classList.add('hide');
    }
    if (containerStartEl.className = "show") {
        containerStartEl.classList.remove('show');
        containerStartEl.classList.add('hide');
    }

    if (containerQuestionEl.className = "show") {
        containerQuestionEl.classList.remove('show');
        containerQuestionEl.classList.add('hide');
    }

    if (correctEl.className = "show") {
        correctEl.classList.remove('show');
        correctEl.classList.add('hide');
    }
    if (wrongEl.className = "show") {
        wrongEl.classList.remove('show');
        wrongEl.classList.add('hide');
    }
};

// Clears high scores

var clearScores = function() {
    highScores = [];

    while (listHighScoreEl.firstChild) {
        listHighScoreEl.removeChild(listHighScoreEl.firstChild);
    }

    localStorage.clear(highScores);
};

loadHighScore();

// On start click, start game

startBtnEl.addEventListener("click", startGame);

// On submit button -- enter or click

formInitialsEl.addEventListener("submit", createHighScore);

// When view high-scores is clicked

viewHighScoreEl.addEventListener("click", displayHighScores);

// Go back button from high-scores page to main page

goBackBtnEl.addEventListener("click", renderStartPage);

// Clears scores button

clearScoresBtnEl.addEventListener("click", clearScores);