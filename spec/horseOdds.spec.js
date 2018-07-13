var oddsAggregator = require("../src/horseOdds");
jest.mock('../src/horseOdds')

describe("Horse Odds", () => {
  beforeEach(() => {
    var horses = ["billy the kid", "jackson 13", "Henry XV"];
    var odds = [[6, 4, 3, 1], [8, 1, 2, 3, 5], [9, 3, 5, 7]];
    combinedOdds = new oddsAggregator(horses, odds);
  });
  it("first converts any white space to an underscore", () => {
    expect(combinedOdds.horseNames()[0]).toEqual("billy_the_kid");
  });
});

describe("Compiling The Odds Into Horse Object", () => {
  beforeEach(() => {
    combinedOdds = new oddsAggregator(horses, odds);
    combinedOdds.mockImplementation(() => {
    return {
      compileOdds: () => {return 100},
      }
    })
  })
  
  it("compiles the odds into objects holding each name & odd", () => {
    expect(combinedOdds.compileOdds()).toEqual(100)
  })
})
