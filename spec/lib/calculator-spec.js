describe("Calculator", function() {
  describe("getTotalScore", function() {
    var theCalculator;
    beforeEach(function() {
      theCalculator = new Calculator();
    });

    it("should return correct total score", function() {
      var answers = [ 
      {type: 'text', name: 'Q1-2', value:["封装性", "继承性"]}, //2
      {type: 'radio', name: 'Q2-1', value:'C'},               //0
      {type: 'checkbox', name: 'Q3-1', value:'ABD'},          //2
      {type: 'checkbox', name: 'Q3-2', value:'AC'},           //1
      {type: 'textarea', name: 'Q4-1', value:'模型的表现形式'}  //0
    ];
      var result = theCalculator.getTotalScore(answers);
      expect(result).toBe(5);
    });
  });
});
