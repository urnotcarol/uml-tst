document.getElementById("student-number").addEventListener('keydown', function(evt) {
  console.log(evt.keyCode);
  if (evt.keyCode !== 8) {
    if (evt.keyCode < 48 || evt.keyCode > 57) {
      evt.preventDefault();
    }
  }
});

function showChoices(str) {
  var question = document.getElementsByName(str);

  function getResult() {
    var result = [];
    result = [].filter.call(question, function(elem) {
      return (elem.checked);
    }).map(function(elem) {
      return elem.value;
    });
    return result.join("");
  }

  [].forEach.call(question, function(elem) {
    elem.addEventListener("click", function() {
      document.getElementById(str + "-0").innerHTML = getResult();
    });
  });
}

showChoices("Q2-1");
showChoices("Q2-2");
showChoices("Q3-1");
showChoices("Q3-2");

document.getElementById("submit").addEventListener("click", function() {
  var theAnalyser = new FormAnalyser();
  var theCalculator = new Calculator();
  var form = document.getElementsByTagName('form');
  var result = theCalculator.getTotalScore(theAnalyser.getAnswers(form));
  document.getElementById('score').value = result;
});
