  /*describe("Selecting numeric data that has multiple html classes", function () {
    beforeAll(function () {
      testScraper = new Scraper();
      console.log("TEST SCRAPER IS ");
      console.log(testScraper.savedString);
      numericString = "<div class = find_numbers space>"
      for (i = 1; i <= 10; i++) {
        numericString += ` <p>${i * i}</p>`;
      }
      numericString += `</div>`;
    });
    it("selects the string data if the class has a name in it", function () {
      testScraper.addData(numericString);
      testScraper.formatString();
      testScraper.selectHTML(".find_numbers", "p");
      console.log(testScraper.savedString);
      //expect(testScraper.savedString.join()).toEqual("1,4,9,16,25,36,49,64,81,100")
    });
  })'
*/