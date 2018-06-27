const dataSaver = require("../src/htmlSaver");
describe("Function for saving data to the database", function() {
  describe("Checking the database saver dependency", function() {
    beforeEach(function() {
      testData = [1, 2, 3, 4, 5, 6];
      testSaver = new dataSaver();
    });
    it("converts the array into a JSON string & saves it to the database", function() {
      spyOn(JSON, "stringify");
      spyOn(testSaver, "_saveStringifiedData");
      testSaver.saveToDatabase(testData);
      expect(JSON.stringify).toHaveBeenCalledWith(testData);
      expect(testSaver._saveStringifiedData).toHaveBeenCalled();
    });
  });
}); 