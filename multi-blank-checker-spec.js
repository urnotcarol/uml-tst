describe("MultiBlankChecker", function(){
  describe("checkAnswer", function() {
    var theMultiBlankChecker;
    beforeEach(function() {
      var key = [{
        name: "Q1-2",
        value: ["封装性", "继承性", "多态性"],
        point: 3}];
        theMultiBlankChecker = new MultiBlankChecker(key);
    });

    it("should return correct score", function(){
      var answer = {
        type: "text",
        name: "Q1-2",
        value: ["多态性", "封装性", "封装性"]
      };
      var result = theMultiBlankChecker.checkAnswer(answer);
      expect(result).toBe(2);
    });

    it("should return correct score", function(){
      var answer = {
        type: "text",
        name: "Q1-2",
        value: ["封装性"]
      };
      var result = theMultiBlankChecker.checkAnswer(answer);
      expect(result).toBe(1);
    });

  });
});
