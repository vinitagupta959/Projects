const questionElement = document.getElementById('question');
const optionsElements = document.querySelectorAll('.quiz-option');
const correctScore= document.getElementById('correct-score');
const totalQuestion= document.getElementById('total-question');

async function loadQuestion() {
    const API_URL = 'https://opentdb.com/api.php?amount=1';
    const result = await fetch(API_URL);
    const data = await result.json();
    showQuestion(data.results[0]);
}

function showQuestion(data) {
    let correctAnswer = data.correct_answer;
    let incorrectAnswers = data.incorrect_answers;

    // Incorrect answers mein correct answer ko random position pe add karna
    let optionList = [...incorrectAnswers];
    optionList.splice(Math.floor(Math.random() * (incorrectAnswers.length + 1)), 0, correctAnswer);

    // Question text set karna
    questionElement.innerHTML = data.question;

    // Options text set karna
    optionsElements.forEach((optionElement, index) => {
        optionElement.textContent = optionList[index];
    });
}

loadQuestion();
