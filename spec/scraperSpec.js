const Scraper = require("../src/scraper");
console.log(Scraper);

describe("The Basic Web Scraper", function() {
  describe("adding new html to the web scraper", function() {
    beforeEach(function () {
      testScraper = new Scraper();
      testString = "<h1>Hello World</h1>";
      formattedString = "Hello World";
    });
    it("adds the unformatted HTML as an argument", function() {
      testScraper.addData(testString);
      expect(testScraper.unformattedString).toEqual(testString);
    });
    
  });
})