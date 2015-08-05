describe("ChoiceChecker", function() {
  describe("checkAnswers", function() {

    var theChoiceChecker;
    beforeEach(function() {
      var key = [{
        name: "Q3-1",
        value: "AB",
        point: 2
      }, {
        name: "Q3-2",
        value: "ABD",
        point: 2
      }];
      theChoiceChecker = new ChoiceChecker(key);
    });

    it("if answer's length is greater than key's, return 0", function() {
      var answer = {
        type: 'checkbox',
        name: 'Q3-1',
        value: 'ABC'
      };
      var result = theChoiceChecker.checkAnswers(answer);
      expect(result).toBe(0);
    });

    it("if answer's length equals to key's, return correct score", function() {
      var answer = {
        type: 'checkbox',
        name: 'Q3-2',
        value: 'ABD'
      };
      var result = theChoiceChecker.checkAnswers(answer);
      expect(result).toBe(2);
    });

    it("if answer's length is smaller than key's but doesn't include wrong options, return correct score", function() {
      var answer = {
        type: 'checkbox',
        name: 'Q3-2',
        value: 'AD'
      };
      var result = theChoiceChecker.checkAnswers(answer);
      expect(result).toBe(1);
    });

    it("if answer's length is smaller than key's and includes wrong options, return correct score", function() {
      var answer = {
        type: 'checkbox',
        name: 'Q3-2',
        value: 'CD'
      };
      var result = theChoiceChecker.checkAnswers(answer);
      expect(result).toBe(0);
    });
  });
});
