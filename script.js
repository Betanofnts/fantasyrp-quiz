let current = 0;
let score = 0;

function loadQuestion() {
  let q = questions[current];

  document.getElementById("question").innerText = q.question;

  let answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach((a, index) => {
    let div = document.createElement("div");
    div.classList.add("answer");
    div.innerText = a.text;

    div.onclick = () => selectAnswer(div, a.correct);

    answersDiv.appendChild(div);
  });
}

function selectAnswer(element, correct) {
  let answers = document.querySelectorAll(".answer");

  answers.forEach(a => a.onclick = null);

  if (correct) {
    element.classList.add("correct");
    score++;
  } else {
    element.classList.add("wrong");
    answers.forEach(a => {
      if (a.innerText === getCorrectAnswer()) {
        a.classList.add("correct");
      }
    });
  }

  document.getElementById("score").innerText = "Scor: " + score;
}

function getCorrectAnswer() {
  return questions[current].answers.find(a => a.correct).text;
}

function nextQuestion() {
  current++;
  if (current >= questions.length) {
    alert("Test terminat! Scor: " + score + "/" + questions.length);
    current = 0;
    score = 0;
  }
  loadQuestion();
}

loadQuestion();
