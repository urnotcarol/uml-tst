describe("StrategyFactory", function() {
  describe("getCheckerType", function() {
    var key = [
      {name: "Q1-1", value: "统一建模语言", point: 1},
      {name: "Q1-2", value: ["封装性", "继承性", "多态性"], point: 3},
      {name: "Q2-1", value: "", point: 1},
      {name: "Q2-2", value: "", point: 1},
      {name: "Q3-1", value: "ABD", point: 2},
      {name: "Q3-2", value: "ABC", point: 2},
      {name: "Q4-1", value: "X", point: 2},
      {name: "Q4-2", value: "V", point: 2},
    ];
    StrategyFactory.loadKey(key);
    var theFactory;
    beforeEach(function() {
      theFactory = new StrategyFactory();
    });

    it("should return correct checker type", function() {
      var result = theFactory.getCheckerType("radio");
      expect(result instanceof ChoiceChecker).toBe(true);
    });

    it("should return correct checker type", function() {
      var result = theFactory.getCheckerType("text");
      expect(result instanceof BlankChecker).toBe(true);
    });
  });
});
