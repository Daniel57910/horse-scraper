const Scraper = require("../src/scraper");

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
    it("parses the string data for the html", function() {
      testScraper.formatString();
      expect(testScraper.formattedString).toEqual(formattedString);
    });
  }); 
});

describe("Selecting HTML Based On The Data Type", function() {
  beforeEach(function() {
    testScraper = new Scraper();
    testString;
    for (i = 0; i < 10; i++) {
      testString += "<li>Hello " + i + "</li>";
    }
    //testScraper.addData(testString);
    //testScraper.formatString();
  });
  it("selects the HTML type based on the argument sent to the function", function() {
  testString+="<p>IGNORE ME</p>";
   console.log(testString);
  });

});

