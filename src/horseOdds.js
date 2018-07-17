var oddsObject = require("./oddsObject")

class OddsAggregator {
  constructor(horses, odds) {
    this.allHorses = changeWhiteSpace(horses);
    this.allOdds = odds
    this.compiledOdds = []
  }

  horseNames() {
    return this.allHorses;
  }

  compileOdds() {
    return ( this.allHorses.map(horseName => new oddsObject(horseName, 100)) )
  }
}

function changeWhiteSpace(horses) {
  return ( horses.map(horse => horse.replace(/ /g, "_")) )
}


module.exports = OddsAggregator;

