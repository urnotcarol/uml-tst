describe("FormAnalyser", function() {
  describe("getAnswers", function() {
    var form;
    var testContainer = document.createElement("div");

    beforeEach(function() {
      testContainer.innerHTML = "<form>" +
      "<input type='text' name='Q1-1' value='封装' />" +
      "<input type='text' name='Q1-1' value='继承' />" +
      "<input type='text' name='Q1-1' value='多态' />" +
      "<input type='radio' name='Q2-1' value='A' />" +
      "<input type='radio' name='Q2-1' value='B' />" +
      "<input type='radio' name='Q2-1' value='C' checked />" +
      "<input type='radio' name='Q2-1' value='D' />" +
      "<input type='checkbox' name='Q3-1' value='A' checked />" +
      "<input type='checkbox' name='Q3-1' value='B' checked/>" +
      "<input type='checkbox' name='Q3-1' value='C' />" +
      "<input type='checkbox' name='Q3-1' value='D' />" +
      "<textarea name='Q4-1'>模型的表现形式</textarea>" +
      "</form>"; 
      form = testContainer.getElementsByTagName("form");
    });

    it("should return type and name and value as object", function() {
      var analyser1 = new FormAnalyser();
      var answers = analyser1.getAnswers(form);
      expect(answers).toEqual([
      {type: 'text', name: 'Q1-1', value:['封装', '继承', '多态']},
      {type: 'radio', name: 'Q2-1', value:'C'},
      {type: 'checkbox', name: 'Q3-1', value:'AB'},
      {type: 'textarea', name: 'Q4-1', value:'模型的表现形式'}
      ]);
    });
  });
});
