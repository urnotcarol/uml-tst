function FormAnalyser() {}

FormAnalyser.prototype.getAnswers = function(form) {
  var answers = [];
  [].forEach.call(form[0], function(elem) {
    if ((elem.type === "text") || (elem.type === "textarea") || (elem.checked === true)) {
      var existName = answers.filter(function(item) {
        return elem.name === item.name;
      });

      if (existName.length === 0) {
        answers.push({
          type: elem.type,
          name: elem.name,
          value: [elem.value]
        });
      } else {
        answers.forEach(function(item) {
          if (item.name === elem.name) {
            item.value.push(elem.value);
          }
        });
      }
    }
  });
  answers.forEach(function(elem) {
    if (elem.type === "checkbox") {
      elem.value = [elem.value.join("")];
    }
    if (elem.value.length === 1) {
      elem.value = elem.value[0];
    }
  });
  return answers;
};