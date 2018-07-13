var oddsObject = require("../src/oddsObject");

describe("oddsObject", () => {
  beforeEach(() => {
    horseName = "bohe_space"
    horseOdds = [1, 2, 3, 4, 5]
    odds = new oddsObject(horseName, horseOdds);
  })
  it("stores the name & the odds in object variables", () => {
    expect(odds.name).toEqual(horseName)
    expect(odds.odds).toEqual(horseOdds)
  }) 

})