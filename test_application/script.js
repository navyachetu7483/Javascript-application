const quizData = [
    {
        question: "What is the capital of Japan?",
        options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
        answer: 2,
    },
    {
        question: "What is the smallest country in the world?",
        options: ["Monaco", "Vatican City", "San Marino", "Malta"],
        answer: 1,
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Osmium", "Oxygen", "Gold", "Silver"],
        answer: 1,
    },
    {
        question: "Which organ is responsible for pumping blood in the human body?",
        options: ["Liver", "Brain", "Heart", "Lungs"],
        answer: 2,
    },
    {
        question: "What is the largest planet in our Solar System?",
        options: ["Earth", "Jupiter", "Saturn", "Mars"],
        answer: 1,
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElements = document.querySelectorAll(".option");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");
const submitButton = document.getElementById("submit");
const resultElement = document.getElementById("result");
const finalScoreElement = document.getElementById("final-score");
const totalQuestionsElement = document.getElementById("total-questions");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElements.forEach((option, index) => {
        option.nextElementSibling.textContent = currentQuestion.options[index];
        option.checked = false; 
    });

    feedbackElement.classList.add("feedback-hidden");
}

submitButton.addEventListener("click", () => {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    
    if (selectedOption) {
        const answer = parseInt(selectedOption.value);
        if (answer === quizData[currentQuestionIndex].answer) {
            score++;
            feedbackElement.textContent = "Correct! ";
        } else {
            feedbackElement.textContent = "Wrong! ";
        }

        feedbackElement.classList.remove("feedback-hidden");
        scoreElement.textContent = score;

        currentQuestionIndex++;

        if (currentQuestionIndex < quizData.length) {
            setTimeout(loadQuestion, 2000); 
        } else {
            setTimeout(showResult, 2000); 
        }
    } else {
        alert("Please select an answer!");
    }
});

function showResult() {
    document.getElementById("quiz").style.display = "none";
    resultElement.classList.remove("result-hidden");
    finalScoreElement.textContent = score;
    totalQuestionsElement.textContent = quizData.length;
}

loadQuestion();
