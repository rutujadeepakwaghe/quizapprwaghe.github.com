var correctAnswers = [];

var answers = [];

var score = 0;

var quizWrapper = document.getElementById("quiz-wrapper");

$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/quiz", function (response) {
  for (var i = 0; i < response.length; i++) {
    correctAnswers.push(response[i].answer);
    var options = response[i].options;
    quizWrapper.innerHTML += `<h3>Q${i + 1}:${response[i].question}</h3>`;
    for (var j = 0; j < options.length; j++) {
      quizWrapper.innerHTML += `<input type="radio" name="q${
        response[i].id
      }" value="${j + 1}"/>
        <span>${options[j]}</span><br>`;
    }
    quizWrapper.innerHTML += `<hr>`;
  }
});

function checkResult() {
  var allInputElements = $("input");

  for (let i = 0; i < allInputElements.length; i++) {
    if (allInputElements[i].checked == true) {
      answers.push(allInputElements[i].value);
    }
  }

  for (var i = 0; i < correctAnswers.length; i++) {
    if (correctAnswers[i] == answers[i]) {
      score++;
    }
  }
  document.getElementById("scores").innerHTML = `${score}/5`;
}