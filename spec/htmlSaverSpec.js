const dataSaver = require("../src/htmlSaver");
describe("Function for saving data to the database", function() {
  describe("Checking the database saver dependency", function() {
    beforeEach(function() {
      testData = [1, 2, 3, 4, 5, 6];
      testSaver = new dataSaver();
    });
    it("converts the array into a JSON string", function() {
      spyOn(JSON, "stringify").and.callThrough();
      testSaver.saveToDatabase(testData);
      expect(JSON.stringify).toHaveBeenCalledWith(testData);
    });
  });
});