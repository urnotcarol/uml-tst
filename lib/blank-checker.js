function group(answer) { 
  var result = [];
  answer.value.forEach(function(elem) {
    var existValue = result.filter(function(item) {
      return item === elem;
    });
    if (existValue.length === 0) {
      result.push(elem);
    }
  });
  return result;
}

function BlankChecker(key) {
  this.key = key;
}

BlankChecker.prototype.getSubScore = function(answer) {
  var neededKey = this.key.filter(function(elem) {
    return elem.name === answer.name;
  })[0];

  var subScore = 0;
  var groupedValue = [];

  if (answer.value instanceof Array) {
    groupedValue = group(answer);
  } else {
    groupedValue.push(answer.value);
    neededKey.value = [neededKey.value];
  }

  groupedValue.forEach(function(elem) {
    if (neededKey.value.indexOf(elem) > -1) {
      subScore += (neededKey.point / neededKey.value.length);
    }
  });
  return subScore;
};
