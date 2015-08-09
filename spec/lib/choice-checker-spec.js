describe("ChoiceChecker", function() {
  describe("getSubScore", function() {
    var theChoiceChecker;

    beforeEach(function() {
      var key = [{
        name: "Q2-1",
        value: "B",
        point: 1
      }, {
        name: "Q3-2",
        value: "ABD",
        point: 2
      }];
      theChoiceChecker = new ChoiceChecker(key);
    }); 

    it("should return correct score of single choice", function() {
      var answer = {
        type: 'radio',
        name: 'Q2-1',
        value: 'B'
      };
      var result = theChoiceChecker.getSubScore(answer);
      expect(result).toBe(1);
    });

    it("if answer's length is greater than key's, return 0", function() {
      var answer = {
        type: 'checkbox',
        name: 'Q3-2',
        value: 'ABCD'
      };
      var result = theChoiceChecker.getSubScore(answer);
      expect(result).toBe(0);
    });

    it("if answer's length equals to key's, return correct score", function() {
      var answer = {
        type: 'checkbox',
        name: 'Q3-2',
        value: 'ABD'
      };
      var result = theChoiceChecker.getSubScore(answer);
      expect(result).toBe(2);
    });

    it("if answer's length is smaller than key's but doesn't include wrong options, return correct score", function() {
      var answer = {
        type: 'checkbox',
        name: 'Q3-2',
        value: 'AD'
      };
      var result = theChoiceChecker.getSubScore(answer);
      expect(result).toBe(1);
    });

    it("if answer's length is smaller than key's and includes wrong options, return correct score", function() {
      var answer = {
        type: 'checkbox',
        name: 'Q3-2',
        value: 'CD'
      };
      var result = theChoiceChecker.getSubScore(answer);
      expect(result).toBe(0);
    });
  });
});
