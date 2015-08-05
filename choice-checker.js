function ChoiceChecker(key) {
  this.key = key;
}

ChoiceChecker.prototype.checkAnswers = function(answer) {
  var neededKey = key.filter(function(elem) {
    return elem.name === answer.name;
  })[0];
  var score = 0;

  if ((answer.value.length === neededKey.value.length) &&
    (answer.value === neededKey.value)) {
    score = neededKey.point;
  }

  if (answer.value.length < neededKey.value.length) {
    var count = 0;
    [].forEach.call(answer.value, function(letter) {
      if (neededKey.value.indexOf(letter) > -1) {
        count++;
      }
    });
    if (count === answer.value.length) {
      score = neededKey.point / 2;
    }
  }
  return score;
};
