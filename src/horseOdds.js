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
    for (let i = 0; i < this.allHorses.length; i++) {
      this.compiledOdds.push(new oddsObject(this.allHorses[i], this.allOdds[i]))
    }
    return this.compiledOdds;
  }
}


function changeWhiteSpace(horses) {
  return ( horses.map(horse => horse.replace(/ /g, "_")) )
}


module.exports = OddsAggregator;

