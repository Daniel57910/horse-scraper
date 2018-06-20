const Scraper = require("../src/scraper");
console.log(Scraper);

describe("The Basic Web Scraper", function() {
  describe("adding new html to the web scraper", function() {
    beforeEach(function () {
      testScraper = new Scraper();
      testString = "<h1>Hello World</h1>";
      formattedString = "Hello World";
      testScraper.addData(testString);
    });
    it("adds the unformatted HTML as an argument", function() {
      expect(testScraper.unformattedString).toEqual(testString);
    });
    it("calls the formatted string function and formats the string", function() {
      var array;
      spyOn(testScraper, "formatString").and.callFake(function() {
        
      });
      console.log(testScraper.formatString());
    });

    });
    
  });
