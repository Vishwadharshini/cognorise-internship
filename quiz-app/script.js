const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-button');

const questions = [
    {
        question: '1.Which HTML tag is used to define an unordered list?',
        answers: [
            { text: 'a) <ol>', correct: false },
            { text: 'b) <li>', correct: false },
            { text: 'c) <ul>', correct: true },
            { text: 'd) <list>', correct: false }
        ]
    },
    {
        question: '2.How can you center align a block element horizontally in CSS?',
        answers: [
            { text: 'a) text-align: center;', correct: false },
            { text: 'b) align: center;', correct: false },
            { text: 'c) margin: auto;', correct: true },
            { text: 'd) center: horizontal;', correct: false }
        ]
    },
    {
        question: '3.Which CSS property controls the size of text?',
        answers: [
            { text: 'a) font-size', correct: false },
            { text: 'b) text-size', correct: true },
            { text: 'c) font-style', correct: false },
            { text: 'd) text-style', correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = 'none';
    scoreContainer.style.display = 'none';
    questionContainer.style.display = 'block';
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtons.innerHTML = ''; 
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        nextButton.style.display = 'block';
    } else {
        questionContainer.style.display = 'none';
        scoreContainer.style.display = 'block';
        scoreElement.innerText = score;
    }
}

nextButton.addEventListener('click', () => {
    showQuestion(questions[currentQuestionIndex]);
    nextButton.style.display = 'none';
});

restartButton.addEventListener('click', startGame);
startGame();


































