function FormAnalyser() {
  this.answers = [];
}

FormAnalyser.prototype.getAnswers = function(form) {
  var that = this;
  [].forEach.call(form[0], function(elem) {
    if (((elem.type === "checkbox") || (elem.type === "radio")) && (elem.checked === false)) {}
    else {
      var existName = that.answers.filter(function(item){
        return elem.name === item.name;
      });

      if (existName.length === 0) {
        that.answers.push({
          type: elem.type,
          name: elem.name,
          value: [elem.value]
        });
      }
      else {
        that.answers.forEach(function(item) {
          if (item.name === elem.name) {
            item.value.push(elem.value);
          }
        });
      }
    }
  });
  this.answers.forEach(function(elem) {
    if (elem.type === "checkbox") {
      elem.value = [elem.value.join("")];
      }
    });
  return this.answers;
};
