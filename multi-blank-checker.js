function MultiBlankChecker (key) {
  this.key = key;
}

MultiBlankChecker.prototype.checkAnswer = function(answer) {
  var neededKey = this.key.filter(function(elem) {
    return elem.name === answer.name;
  })[0];
  var score = 0;
  var groupedValue = [];
  answer.value.forEach(function(elem) {
    var existValue = groupedValue.filter(function(item) {
      return item === elem;
    });
    if (existValue.length === 0) {
      groupedValue.push(elem);
    }
  });
  groupedValue.forEach(function(elem) {
    if (neededKey.value.indexOf(elem) > -1) {
      score += (neededKey.point / neededKey.value.length);
    }
  });
  return score;
};
