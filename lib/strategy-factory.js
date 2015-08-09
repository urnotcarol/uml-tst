var theKey = loadKey();

var theChoiceChecker = new ChoiceChecker(theKey);
var theBlankChecker = new BlankChecker(theKey);
var theTextareaChecker = new TextareaChecker();

function StrategyFactory() {}
 
StrategyFactory.prototype.getCheckerType = function(type) {
  var theChecker;

  switch (type) {
    case "radio":
    case "checkbox":
      theChecker = theChoiceChecker;
      break;
    case "text":
      theChecker = theBlankChecker;
      break;
    case "textarea":
      theChecker = theTextareaChecker;
      break;
  }

  return theChecker;
};
