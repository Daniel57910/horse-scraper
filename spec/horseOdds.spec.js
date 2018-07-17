var oddsAggregator = require("../src/horseOdds");

describe("Horse Odds", () => {
  beforeEach(() => {
    var horses = ["billy the kid", "jackson 13", "Henry XV"];
    var odds = [[6, 4, 3, 1], [8, 1, 2, 3, 5], [9, 3, 5, 7]];
    combinedOdds = new oddsAggregator(horses, odds);
  });
  it("first converts any white space to an underscore", () => {
    expect(combinedOdds.allHorses[0]).toEqual("billy_the_kid");
  });
  it("combines the odds and horses into an array of odds objects", () => {
    let testOdd = combinedOdds.compileOdds()[0];
    expect(testOdd.name).toEqual("billy_the_kid")
  })
})
