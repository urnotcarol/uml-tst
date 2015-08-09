describe("BlankChecker", function() {
  describe("getSubScore", function() {
    var theBlankChecker;
    beforeEach(function() {
      var key = [{
        name: "Q1-1",
        value: "统一建模语言",
        point: 1
      }, {
        name: "Q1-2",
        value: ["封装性", "继承性", "多态性"],
        point: 3
      }];
      theBlankChecker = new BlankChecker(key);
    });

    it("should return correct score of single blank", function() {
      var answer = {
        type: "text",
        name: "Q1-1",
        value: "统一建模语言"
      };
      var result = theBlankChecker.getSubScore(answer);
      expect(result).toBe(1);
    });

    it("should return correct score of multiple blank", function() {
      var answer = {
        type: "text",
        name: "Q1-2",
        value: ["封装性", "继承性", "继承性"]
      };
      var result = theBlankChecker.getSubScore(answer);
      expect(result).toBe(2);
    });
  });
});
