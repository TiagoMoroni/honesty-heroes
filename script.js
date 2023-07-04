const config = {
    homeURL: "./home.html",
    finishURL: "./finish.html"
};

const questionContainer = document.getElementsByClassName('question-container')[0];
const answersContainer = document.getElementsByClassName('answers-container')[0];

let currentSetOfQuestions;
let currentQuestion;
let points = 0;

const questions = [
    [
        {
            id: 1,
            question: "Pergunta 1",
            answers: [
                { answer: "resposta 1 - Pergunta 1", nextQuestionId: 2, points: 10 },
                { answer: "resposta 2 - Pergunta 1", nextQuestionId: 3, points: 10 },
                { answer: "resposta 3 - Pergunta 1", nextQuestionId: 4, points: 10 }
            ]
        },
        {
            id: 2,
            question: "Pergunta 2",
            answers: [
                { answer: "resposta 1 - Pergunta 2", nextQuestionId: 1, points: 10 },
                { answer: "resposta 2 - Pergunta 2", nextQuestionId: 3, points: 10 },
                { answer: "resposta 3 - Pergunta 2", nextQuestionId: 4, points: 10 }
            ]
        },
        {
            id: 3,
            question: "Pergunta 3",
            answers: [
                { answer: "resposta 1 - Pergunta 3", nextQuestionId: 1, points: 10 },
                { answer: "resposta 2 - Pergunta 3", nextQuestionId: 2, points: 10 },
                { answer: "resposta 3 - Pergunta 3", nextQuestionId: 4, points: 10 }
            ]
        },
        {
            id: 4,
            question: "Pergunta 4",
            answers: [
                { answer: "resposta 1 - Pergunta 4", nextQuestionId: 1, points: 10 },
                { answer: "resposta 2 - Pergunta 4", nextQuestionId: 2, points: 10 },
                { answer: "resposta 3 - Pergunta 4", nextQuestionId: undefined, points: 10 }
            ]
        }
    ],
    [
        {
            id: 1,
            question: "Pergunta 1",
            answers: [
                { answer: "resposta 1 - Pergunta 1", nextQuestionId: 2, points: 10 },
                { answer: "resposta 2 - Pergunta 1", nextQuestionId: 3, points: 10 },
                { answer: "resposta 3 - Pergunta 1", nextQuestionId: 4, points: 10 }
            ]
        },
        {
            id: 2,
            question: "Pergunta 2",
            answers: [
                { answer: "resposta 1 - Pergunta 2", nextQuestionId: 1, points: 10 },
                { answer: "resposta 2 - Pergunta 2", nextQuestionId: 3, points: 10 },
                { answer: "resposta 3 - Pergunta 2", nextQuestionId: 4, points: 10 }
            ]
        },
        {
            id: 3,
            question: "Pergunta 3",
            answers: [
                { answer: "resposta 1 - Pergunta 3", nextQuestionId: 1, points: 10 },
                { answer: "resposta 2 - Pergunta 3", nextQuestionId: 2, points: 10 },
                { answer: "resposta 3 - Pergunta 3", nextQuestionId: 4, points: 10 }
            ]
        },
        {
            id: 4,
            question: "Pergunta 4",
            answers: [
                { answer: "resposta 1 - Pergunta 4", nextQuestionId: 1, points: 10 },
                { answer: "resposta 2 - Pergunta 4", nextQuestionId: 2, points: 10 },
                { answer: "resposta 3 - Pergunta 4(Finaliza o Jogo)", nextQuestionId: undefined, points: 10 }
            ]
        }
    ],
    [
        {
            id: 1,
            question: "Pergunta 1",
            answers: [
                { answer: "resposta 1 - Pergunta 1", nextQuestionId: 2, points: 10 },
                { answer: "resposta 2 - Pergunta 1", nextQuestionId: 3, points: 10 },
                { answer: "resposta 3 - Pergunta 1", nextQuestionId: 4, points: 10 }
            ]
        },
        {
            id: 2,
            question: "Pergunta 2",
            answers: [
                { answer: "resposta 1 - Pergunta 2", nextQuestionId: 1, points: 10 },
                { answer: "resposta 2 - Pergunta 2", nextQuestionId: 3, points: 10 },
                { answer: "resposta 3 - Pergunta 2", nextQuestionId: 4, points: 10 }
            ]
        },
        {
            id: 3,
            question: "Pergunta 3",
            answers: [
                { answer: "resposta 1 - Pergunta 3", nextQuestionId: 1, points: 10 },
                { answer: "resposta 2 - Pergunta 3", nextQuestionId: 2, points: 10 },
                { answer: "resposta 3 - Pergunta 3", nextQuestionId: 4, points: 10 }
            ]
        },
        {
            id: 4,
            question: "Pergunta 4",
            answers: [
                { answer: "resposta 1 - Pergunta 4", nextQuestionId: 1, points: 10 },
                { answer: "resposta 2 - Pergunta 4", nextQuestionId: 2, points: 10 },
                { answer: "resposta 3 - Pergunta 4", nextQuestionId: undefined, points: 10 }
            ]
        }
    ],
]

function onInit() {
    const questionSetIndex = new URLSearchParams(window.location.search).get('faixaetaria');
    setCurrentSetOfQuestions(questionSetIndex)
    setCurrentQuestion(1);
    showQuestion();
    showAnswers();
}
onInit()

// Essas funções são responsáveis por exibir a pergunta atual e as respostas correspondentes no HTML. 
// Elas manipulam os elementos do DOM, preenchendo-os com o conteúdo das perguntas e respostas. 
// Você pode personalizar o estilo e o formato da exibição das perguntas e respostas nesses métodos, para atender aos requisitos de design.

function showQuestion() {
    questionContainer.innerHTML = currentQuestion.question;
}

function showAnswers() {
    answersContainer.innerHTML = '';
    currentQuestion.answers.forEach(answer => {
        const answerButton = document.createElement('div');
        answerButton.classList.add("answer")
        answerButton.innerText = answer.answer;
        answerButton.addEventListener('click', () => {
            points += answer.points;
            if (answer.nextQuestionId) {
                setCurrentQuestion(answer.nextQuestionId);
                showQuestion();
                showAnswers();
            }
            else {
                window.location.replace(config.finishURL + "?pontos=" + points);
            }
        });
        answersContainer.appendChild(answerButton);
    });
}

// -------------------------------------------------------------------------------------------------------------------------------------

function setCurrentSetOfQuestions(index) {
    currentSetOfQuestions = questions[index];
}

function setCurrentQuestion(id) {
    currentQuestion = findQuestionById(id)
}

function findQuestionById(id) {
    return currentSetOfQuestions.find(el => el.id == id)
}

function voltar() {
    window.location.replace(config.homeURL);
}