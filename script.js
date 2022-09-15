const quizData = [
  {
    question: "When was Javascript released?",
    a: "2002",
    b: "1995",
    c: "1999",
    d: "2005",
    correct: "b",
  },
  {
    question: "What is the most popular used programming language?",
    a: "Python",
    b: "java",
    c: "JavaScript",
    d: "SQL",
    correct: "c",
  },
  {
    question: "In what language do you think this content created?",
    a: "Python",
    b: "Php",
    c: "Java",
    d: "javaScript",
    correct: "d",
  },
  {
    question: "Who is the president of Turkey?",
    a: "Recep Tayyip Erdoğan",
    b: "Kemal Kılıçdaroğlu",
    c: "Burak Polat",
    d: "Alex De Souza",
    correct: "a",
  },
  {
    question: "What does CSS stand for?",
    a: "Cascading Style Sheet",
    b: "Cascading Sting Style",
    c: "Cast Styling System",
    d: "Custom Styling Service",
    correct: "a",
  },
  {
    question: "What does HTML stand for?",
    a: "HyperText Markup Language",
    b: "HyperTime Makingup Language",
    c: "Hype Type Making Language",
    d: "High Typical Marking Language",
    correct: "a",
  },
];
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const aText = document.getElementById("a-text");
const bText = document.getElementById("b-text");
const cText = document.getElementById("c-text");
const dText = document.getElementById("d-text");
const submitEl = document.getElementById("submit");
const answerEls = document.querySelectorAll(".answer");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswer();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  aText.innerText = currentQuizData.a;
  bText.innerText = currentQuizData.b;
  cText.innerText = currentQuizData.c;
  dText.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswer() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitEl.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
