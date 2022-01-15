
/*Flamingo Fact Generator*/


/* Facts from: https://nationalzoo.si.edu/animals/news/why-are-flamingos-pink-and-other-flamingo-facts */

var FlamingoFacts = ["A group of flamingos is called a 'flamboyance'!",
               "Flamingos' pink color comes from their diet!",
               "Flamingo nests are made of mud!",
               "Flamingos are filter feeders and turn their heads upside-down to eat!",
               "Some flamingos live and raise their young in water so corrosive that it would burn human skin!",
               "Flamingos can sleep standing on one leg!",
               "A dead flamingo can still stand on one leg without support!",
               "Flamingos are monogamous!",
               "There are 6 species of flamingo!",
               "Flamingos can drink boiling water!",
               "Baby flamingos are grey or white!",
               "The 'knee' of a flamingo is actually its ankle joint!",
               "Flamingos can fly and typically migrate by night!"];


function randomFact(){
  factNumber = Math.floor(Math.random() * (FlamingoFacts.length));
  document.getElementById("flamingo-fact").innerHTML = FlamingoFacts[factNumber];


}



/* Are You a Flamingo Quiz */

const startButton = document.getElementById('start');
const nextButton = document.getElementById('next');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

var shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    nextQuestion();
});


function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    nextQuestion();
}

function nextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    }
    else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide')
    }
    
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } 
    else {
        element.classList.add('wrong');
    }
}

function clearStatusClass (element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: "How many different species of flamingo are there?",
        answers: [
            { text: "4", correct: false},
            { text: "10", correct: false},
            { text: "6", correct: true},
            { text: "2", correct: false}
        ]
    },
    {
        question: "What is the typical habitat of a flamingo?",
        answers: [
            { text: "Rainforest", correct: false},
            { text: "Freshwater ponds and lakes", correct: false},
            { text: "Oceans and seas", correct: false},
            { text: "Salt lakes", correct: true}
            ]
    },
    {
        question: "How many vertebrae are in a flamingo's neck?",
        answers: [
            { text: "12", correct: false},
            { text: "19", correct: true},
            { text: "7", correct: false},
            { text: "15", correct: false}
            ]
    },
    {
        question: "What do flamingos spend 15-30% of the day doing?",
        answers: [
            { text: "Preening", correct: true},
            { text: "Eating", correct: false},
            { text: "Sleeping", correct: false},
            { text: "Swimming", correct: false}
            ]
    },
    {
        question: "Where can flamingos be found in the wild?",
        answers: [
            { text: "Every continent", correct: false},
            { text: "Every continent except Antarctica", correct: false},
            { text: "Only in North and South America", correct: false},
            { text: "Every continent except Antarctica and Australia", correct: true}
            ]
    }
];


/* Media Scripts */

// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a "loop" variable
var i;

// Full-width images
function one() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "100%";
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "50%";
  }
}

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "25%";
  }
}