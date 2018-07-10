var oddsAggregator = require("../src/horseOdds");

describe("Horse Odds", function () {
  beforeEach(function() {
    var horses = ["billy the kid", "jackson 13", "Henry XV"];
    var odds = [[6, 4, 3, 1], [8, 1, 2, 3, 5], [9, 3, 5, 7]];
    combinedOdds = new oddsAggregator();
    combinedOdds.combine(horses, odds);
  });
  it("first converts any whitespace to underscore so horse names can be looked up", function() {
    allNames = [];
    for (i in combinedOdds.returnedOdds()) {
      allNames.push(i);
    }
    expect(allNames[0]).toEqual("billy_the_kid");  
  });
});
