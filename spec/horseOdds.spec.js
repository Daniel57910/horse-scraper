var oddsAggregator = require("../src/horseOdds");
var td = require('testdouble');

describe("Horse Odds", () => {
  beforeEach(() => {
    var horses = ["billy the kid", "jackson 13", "Henry XV"];
    var odds = [[6, 4, 3, 1], [8, 1, 2, 3, 5], [9, 3, 5, 7]];
    combinedOdds = new oddsAggregator(horses, odds);
  });
  it("first converts any white space to an underscore", function() {
    expect(combinedOdds.horseNames()[0]).toEqual("billy_the_kid");
  });
});
