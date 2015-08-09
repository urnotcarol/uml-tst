function Calculator() {} 

Calculator.prototype.getTotalScore = function(answers) {
  var totalScore = 0;

  var theFactory = new StrategyFactory();
  var theChecker;

  answers.forEach(function(elem) {
    theChecker = theFactory.getCheckerType(elem.type);
    totalScore += theChecker.getSubScore(elem);
  });

  return totalScore;
};
