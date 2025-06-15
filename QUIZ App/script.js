// const quizquestions=[
//     {
//         question: "What is the capital of France?",
//         options: ["Berlin", "Madrid", "Paris", "Rome"],
//         answer: "Paris"
//     },
//     {
//         question: "What is the largest planet in our solar system?",
//         options: ["Earth", "Jupiter", "Mars", "Saturn"],
//         answer: "Jupiter"
//     },
//     {
//         question: "What is the chemical symbol for gold?",
//         options: ["Au", "Ag", "Pb", "Fe"],
//         answer: "Au"
//     },
//     {
//         question: "Who wrote 'Romeo and Juliet'?",
//         options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
//         answer: "William Shakespeare"
//     },
//     {
//         question: "What is the smallest prime number?",
//         options: ["0", "1", "2", "3"],
//         answer: "2"
//     }
// ]

// const questionelement=document.getElementById("question");
// const answerbutton=document.getElementById("answer-buttons");
// const nextbutton=document.getElementById("next-btn");

// let currentquestionindex=0;
// let score=0;

// function startquiz(){
//     currentquestionindex=0;
//     score=0;
//     nextbutton.innerHTML="Next";
//     showquestion();
// }

// function showquestion(){
//     let currentquestion=quizquestions[currentquestionindex];
//     let questionno=currentquestionindex + 1;
//     questionelement.innerHTML=questionno+". "+currentquestion.question;


//     //probable error
//     currentquestion.options.forEach(option => {
//         const button=document.createElement("button");
//         button.innerHTML=option;
//         button.classList.add("btn");
//         answerbutton.appendChild(button);
        
//     });
// }

// startquiz();


// next question,index,score,show question,reset state,select answer,show score,handle next button

const quizquestions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Mars", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Pb", "Fe"],
        answer: "Au"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: "2"
    }
];

const questionElement = document.getElementById("question"); // Correct ID
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = quizquestions[currentQuestionIndex];
    questionElement.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerHTML = option;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        button.addEventListener("click", () => selectAnswer(button, currentQuestion.answer));
    });
}


function resetState() {
    nextButton.style.display = "none";
    answerButtons.innerHTML = "";
}

function selectAnswer(selectedButton, correctAnswer) {
    const selectedAnswer = selectedButton.innerHTML;

    if (selectedAnswer === correctAnswer) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
    }

    // Disable all buttons and highlight the correct one
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.innerHTML === correctAnswer) {
            button.classList.add("correct");
        }
    });

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${quizquestions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizquestions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < quizquestions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
