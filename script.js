const config = {
  homeURL: "../../index.html",
  finishURL: "../finish/index.html",
  pointAddiction: 10
};


const pointsNumber = document.getElementsByClassName("question-points-counter")[0];
const questionNumber = document.getElementsByClassName("question-number")[0];
const questionContainer = document.getElementsByClassName("question-container")[0];
const answersContainer = document.getElementsByClassName("answers-container")[0];
const questionImage = document.getElementsByClassName("question-img")[0];

let currentSetOfQuestions;
let currentQuestion;
let points = 0;

const questions = [
  [
    {
      "id": 1,
      "img": "../../img/question/1_1.png",
      "question": "Imagine que você encontrou um brinquedo perdido no parquinho. O que você deveria fazer?",
      "answers": [
        { "answer": "Entregar o brinquedo para o responsável do parquinho", "nextQuestionId": 2, "points": config.pointAddiction },
        { "answer": "Levar o brinquedo para casa sem contar a ninguém", "nextQuestionId": 2, "points": 0 },
        { "answer": "Guardar o brinquedo só para você", "nextQuestionId": 2, "points": 0 }
      ]
    },
    {
      "id": 2,
      "img": "../../img/question/1_2.png",
      "question": "Imagine que você tem um amigo novo na escola que está com medo de ir ao banheiro sozinho. O que você poderia fazer para ajudá-lo?",
      "answers": [
        { "answer": "Acompanhá-lo até o banheiro e esperar do lado de fora", "nextQuestionId": 3, "points": config.pointAddiction },
        { "answer": "Ignorar o medo dele e ir embora", "nextQuestionId": 3, "points": 0 },
        { "answer": "Fazer piadas sobre o medo dele", "nextQuestionId": 3, "points": 0 }
      ]
    },
    {
      "id": 3,
      "img": "../../img/question/1_3.png",
      "question": "Você e seu irmão estão brincando juntos, mas ele começa a trapacear no jogo. O que você deveria fazer?",
      "answers": [
        { "answer": "Conversar com seu irmão sobre a importância de ser honesto", "nextQuestionId": 4, "points": config.pointAddiction },
        { "answer": "Trapacear também para ganhar do seu irmão", "nextQuestionId": 4, "points": 0 },
        { "answer": "Ignorar a trapaça e continuar jogando", "nextQuestionId": 4, "points": 0 }
      ]
    },
    {
      "id": 4,
      "img": "../../img/question/1_4.png",
      "question": "Imagine que seu amigo te emprestou um livro muito especial, mas você acidentalmente o danificou. O que você deveria fazer?",
      "answers": [
        { "answer": "Esconder o livro e fingir que nada aconteceu", "nextQuestionId": 5, "points": 0 },
        { "answer": "Contar a verdade para o seu amigo e pedir desculpas", "nextQuestionId": 5, "points": config.pointAddiction },
        { "answer": "Culpar outra pessoa pelo dano ao livro", "nextQuestionId": 5, "points": 0 }
      ]
    },
    {
      "id": 5,
      "img": "../../img/question/1_5.png",
      "question": "Você e sua amiga estão brincando de casinha e ela quer ser sempre a mamãe e dessa vez você também quer. O que você poderia fazer para resolver o conflito?",
      "answers": [
        { "answer": "Conversar com sua amiga e encontrar uma solução em que ambas possam ser mãe e filha em momentos diferentes", "nextQuestionId": 6, "points": config.pointAddiction },
        { "answer": "Gritar e brigar com sua amiga", "nextQuestionId": 6, "points": 0 },
        { "answer": "Ignorar sua amiga e brincar sozinho", "nextQuestionId": 6, "points": 0 }
      ]
    },
    {
      "id": 6,
      "img": "../../img/question/1_6.png",
      "question": "Você está na festa de aniversário de um amigo e vê outra criança pegando um pedaço extra de bolo sem permissão. O que você poderia fazer?",
      "answers": [
        { "answer": "Contar para o responsável da festa sobre o que viu", "nextQuestionId": 7, "points": config.pointAddiction },
        { "answer": "Fazer o mesmo e pegar um pedaço extra de bolo também", "nextQuestionId": 7, "points": 0 },
        { "answer": "Ignorar a situação e continuar se divertindo", "nextQuestionId": 7, "points": 0 }
      ]
    },
    {
      "id": 7,
      "img": "../../img/question/1_7.png",
      "question": "Seu irmão mais novo acidentalmente quebrou o seu brinquedo favorito. O que você poderia fazer?",
      "answers": [
        { "answer": "Ficar bravo com ele e dizer coisas ruins", "nextQuestionId": 8, "points": 0 },
        { "answer": "Explicar para ele que ficou triste, mas que sabe que foi um acidente e que pode ser consertado", "nextQuestionId": 8, "points": config.pointAddiction },
        { "answer": "Esconder o incidente dos adultos", "nextQuestionId": 8, "points": 0 }
      ]
    },
    {
      "id": 8,
      "img": "../..//img/question/1_8.png",
      "question": "Você está em uma loja com sua família e vê uma criança pegando uma guloseima da prateleira e colocando no bolso. O que você poderia fazer?",
      "answers": [
        { "answer": "Contar para o adulto responsável pela criança ou para um funcionário da loja", "nextQuestionId": 9, "points": config.pointAddiction },
        { "answer": "Fazer o mesmo e pegar uma guloseima também", "nextQuestionId": 9, "points": 0 },
        { "answer": "Ignorar a situação e não dizer nada", "nextQuestionId": 9, "points": 0 }
      ]
    },
    {
      "id": 9,
      "img": "../../img/question/1_9.png",
      "question": "Seu amigo está se sentindo excluído porque os outros não o convidaram para brincar. O que você poderia fazer para ajudá-lo?",
      "answers": [
        { "answer": "Convidá-lo para brincar com você e seus amigos", "nextQuestionId": null, "points": config.pointAddiction },
        { "answer": "Rir dele e dizer que ele não é bom o suficiente", "nextQuestionId": null, "points": 0 },
        { "answer": "Ignorar a situação e não se importar com os sentimentos dele", "nextQuestionId": null, "points": 0 }
      ]
    }
  ],

  [
    {
      "id": 1,
      "img": "../../img/question/2_1.png",
      "question": "Seu amigo está triste porque alguém o insultou. O que você poderia fazer para ajudá-lo?",
      "answers": [
        { "answer": "Conversar com ele sobre como ele se sente e oferecer apoio emocional", "nextQuestionId": 2, "points": config.pointAddiction },
        { "answer": "Ignorar a situação e continuar brincando", "nextQuestionId": 2, "points": 0 },
        { "answer": "Fazer piadas sobre o insulto e rir dele", "nextQuestionId": 2, "points": 0 }
      ]
    },
    {
      "id": 2,
      "img": "../../img/question/2_2.png",
      "question": "Você encontrou uma carteira perdida no parquinho. O que você deveria fazer?",
      "answers": [
        { "answer": "Entregar a carteira para um adulto responsável", "nextQuestionId": 3, "points": config.pointAddiction },
        { "answer": "Ficar com a carteira e não contar para ninguém", "nextQuestionId": 3, "points": 0 },
        { "answer": "Pegar o dinheiro da carteira e devolver o resto", "nextQuestionId": 3, "points": 0 }
      ]
    },
    {
      "id": 3,
      "img": "../../img/question/2_3.png",
      "question": "Seu amigo está com ciúmes de outro amigo seu. O que você poderia fazer para ajudar a lidar com os ciúmes?",
      "answers": [
        { "answer": "Conversar com seu amigo sobre como ele se sente e mostrar que você valoriza a amizade dele", "nextQuestionId": 4, "points": config.pointAddiction },
        { "answer": "Ignorar os sentimentos do seu amigo e passar mais tempo com o outro amigo", "nextQuestionId": 4, "points": 0 },
        { "answer": "Fazer piadas sobre os ciúmes do seu amigo e menosprezá-lo", "nextQuestionId": 4, "points": 0 }
      ]
    },
    {
      "id": 4,
      "img": "../../img/question/2_4.png",
      "question": "Você está jogando futebol com seus amigos e um deles faz um gol contra acidentalmente. O que você deveria fazer?",
      "answers": [
        { "answer": "Confortar seu amigo, dizendo que foi apenas um erro e que todos cometem erros às vezes", "nextQuestionId": 5, "points": config.pointAddiction },
        { "answer": "Rir e zombar do seu amigo pelo gol contra", "nextQuestionId": 5, "points": 0 },
        { "answer": "Ignorar a situação e continuar jogando sem mencionar o gol contra", "nextQuestionId": 5, "points": 0 }
      ]
    },
    {
      "id": 5,
      "img": "../../img/question/2_5.png",
      "question": "Seu amigo está com medo de nadar em uma piscina funda. O que você poderia fazer para ajudá-lo?",
      "answers": [
        { "answer": "Acompanhar seu amigo, incentivá-lo e oferecer apoio durante a experiência", "nextQuestionId": 6, "points": config.pointAddiction },
        { "answer": "Zombar do medo do seu amigo e convencê-lo a não entrar na piscina", "nextQuestionId": 6, "points": 0 },
        { "answer": "Ignorar o medo do seu amigo e desfrutar da piscina sozinho", "nextQuestionId": 6, "points": 0 }
      ]
    },
    {
      "id": 6,
      "img": "../../img/question/2_6.png",
      "question": "Você está participando de uma competição de desenho na escola. Seu amigo fez um desenho incrível, mas o seu não é tão bom. O que você poderia fazer?",
      "answers": [
        { "answer": "Parabenizar seu amigo pelo ótimo desenho e continuar fazendo o seu melhor", "nextQuestionId": 7, "points": config.pointAddiction },
        { "answer": "Ficar com ciúmes do desenho do seu amigo e estragar o desenho dele", "nextQuestionId": 7, "points": 0 },
        { "answer": "Ignorar os sentimentos do seu amigo e menosprezá-lo pelo desenho", "nextQuestionId": 7, "points": 0 }
      ]
    },
    {
      "id": 7,
      "img": "../../img/question/2_7.png",
      "question": "Seu amigo te emprestou um livro que você já leu antes. O que você deveria fazer?",
      "answers": [
        { "answer": "Agradecer ao seu amigo pelo empréstimo e cuidar bem do livro", "nextQuestionId": undefined, "points": config.pointAddiction },
        { "answer": "Devolver o livro sem ler e fingir que você o leu", "nextQuestionId": undefined, "points": 0 },
        { "answer": "Esconder o livro e não devolvê-lo ao seu amigo", "nextQuestionId": undefined, "points": 0 }
      ]
    }
  ],

  [
    {
      "id": 1,
      "img": "../../img/question/3_1.png",
      "question": "Como você se sente quando alguém é gentil com você?",
      "answers": [
        { "answer": "Alegre e grato.", "nextQuestionId": 2, "points": config.pointAddiction },
        { "answer": "Desconfiado e preocupado.", "nextQuestionId": 2, "points": 0 },
        { "answer": "Indiferente, não faz diferença.", "nextQuestionId": 2, "points": 0 }
      ]
    },
    {
      "id": 2,
      "img": "../../img/question/3_2.png",
      "question": "O que você pode fazer para ajudar um amigo que está triste?",
      "answers": [
        { "answer": "Ignorar e evitar o amigo triste.", "nextQuestionId": 3, "points": 0 },
        { "answer": "Conversar com o amigo, oferecer apoio e um ombro amigo.", "nextQuestionId": 3, "points": config.pointAddiction },
        { "answer": "Rir e fazer piadas sobre a tristeza do amigo.", "nextQuestionId": 3, "points": 0 }
      ]
    },
    {
      "id": 3,
      "img": "../../img/question/3_3.png",
      "question": "O que você acha que significa ser honesto?",
      "answers": [
        { "answer": "Falar a verdade e ser sincero.", "nextQuestionId": 4, "points": config.pointAddiction },
        { "answer": "Mentir para evitar problemas.", "nextQuestionId": 4, "points": 0 },
        { "answer": "Fazer o que quiser, independentemente dos outros.", "nextQuestionId": 4, "points": 0 }
      ]
    },
    {
      "id": 4,
      "img": "../../img/question/3_4.png",
      "question": "Como você pode expressar gratidão por algo que alguém fez por você?",
      "answers": [
        { "answer": "Agradecendo com palavras e um sorriso.", "nextQuestionId": 5, "points": config.pointAddiction },
        { "answer": "Ignorando e não fazendo nada.", "nextQuestionId": 5, "points": 0 },
        { "answer": "Criticando a pessoa por não ter feito mais.", "nextQuestionId": 5, "points": 0 }
      ]
    },
    {
      "id": 5,
      "img": "../../img/question/3_5.png",
      "question": "O que você pode fazer quando está com raiva para se acalmar?",
      "answers": [
        { "answer": "Gritar e quebrar objetos.", "nextQuestionId": 6, "points": 0 },
        { "answer": "Respirar fundo, contar até 10 e tentar se acalmar antes de reagir.", "nextQuestionId": 6, "points": config.pointAddiction },
        { "answer": "Ignorar a raiva e guardar para si mesmo.", "nextQuestionId": 6, "points": 0 }
      ]
    },
    {
      "id": 6,
      "img": "../../img/question/3_6.png",
      "question": "Por que é importante ouvir os sentimentos dos outros?",
      "answers": [
        { "answer": "Para entender como os outros se sentem e ser mais empático.", "nextQuestionId": 7, "points": config.pointAddiction },
        { "answer": "Porque os sentimentos dos outros não são importantes.", "nextQuestionId": 7, "points": 0 },
        { "answer": "Para usar essa informação contra eles em situações futuras.", "nextQuestionId": 7, "points": 0 }
      ]
    },
    {
      "id": 7,
      "img": "../../img/question/3_7.png",
      "question": "O que você pode fazer para se sentir melhor quando está triste?",
      "answers": [
        { "answer": "Ficar sozinho e não falar com ninguém.", "nextQuestionId": 8, "points": 0 },
        { "answer": "Conversar com alguém próximo sobre seus sentimentos e buscar apoio.", "nextQuestionId": 8, "points": config.pointAddiction },
        { "answer": "Fingir que está tudo bem e ignorar a tristeza.", "nextQuestionId": 8, "points": 0 }
      ]
    },
    {
      "id": 8,
      "img": "../../img/question/3_8.png",
      "question": "Por que é importante dizer a verdade, mesmo quando é difícil?",
      "answers": [
        { "answer": "Porque a verdade é sempre a coisa certa a fazer.", "nextQuestionId": 9, "points": config.pointAddiction },
        { "answer": "Porque mentir é errado e prejudica os relacionamentos.", "nextQuestionId": 9, "points": config.pointAddiction },
        { "answer": "Porque você pode ser punido se mentir.", "nextQuestionId": 9, "points": config.pointAddiction }
      ]
    },
    {
      "id": 9,
      "img": "../../img/question/3_9.png",
      "question": "Como você pode demonstrar empatia por alguém que está passando por um momento difícil?",
      "answers": [
        { "answer": "Ignorando e não se importando com a situação do outro.", "nextQuestionId": config.pointAddiction, "points": 0 },
        { "answer": "Ouvindo com atenção, mostrando compreensão e oferecendo apoio.", "nextQuestionId": config.pointAddiction, "points": config.pointAddiction },
        { "answer": "Fazendo piadas sobre a situação difícil da pessoa.", "nextQuestionId": config.pointAddiction, "points": 0 }
      ]
    },
    {
      "id": 10,
      "img": "../../img/question/3_10.png",
      "question": "O que você pode fazer quando alguém está com medo?",
      "answers": [
        { "answer": "Rir e zombar da pessoa por ser medrosa.", "nextQuestionId": undefined, "points": 0 },
        { "answer": "Oferecer conforto, apoio e ajudar a pessoa a se sentir segura.", "nextQuestionId": undefined, "points": config.pointAddiction },
        { "answer": "Ignorar o medo da pessoa e dizer para ela não se preocupar.", "nextQuestionId": undefined, "points": 0 }
      ]
    }
  ]
]

function onInit() {
  const questionSetIndex = new URLSearchParams(window.location.search).get(
    "faixaetaria"
  );
  setCurrentSetOfQuestions(questionSetIndex);
  setCurrentQuestion(1);
  showQuestion();
  showAnswers();
}
onInit();

// Essas funções são responsáveis por exibir a pergunta atual e as respostas correspondentes no HTML.
// Elas manipulam os elementos do DOM, preenchendo-os com o conteúdo das perguntas e respostas.
// Você pode personalizar o estilo e o formato da exibição das perguntas e respostas nesses métodos, para atender aos requisitos de design.

function showQuestion(points = 0) {
  questionNumber.innerHTML = "Pergunta Nº" + currentQuestion.id;
  questionImage.src= currentQuestion.img;
  pointsNumber.innerHTML = `${points}/${currentSetOfQuestions.length * config.pointAddiction}`;
  questionContainer.innerHTML = currentQuestion.question;
}

function showAnswers() {
  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const answerButton = document.createElement("button");
    answerButton.classList.add("answer");
    answerButton.innerText = answer.answer;
    answerButton.addEventListener("click", () => {
      points += answer.points;
      
      if (answer.nextQuestionId) {
        setCurrentQuestion(answer.nextQuestionId);
        showQuestion(points);
        showAnswers();
      } else {
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
  currentQuestion = findQuestionById(id);
}

function findQuestionById(id) {
  return currentSetOfQuestions.find((el) => el.id == id);
}

function voltar() {
  window.location.replace(config.homeURL);
}
