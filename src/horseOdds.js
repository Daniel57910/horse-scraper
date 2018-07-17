var oddsObject = require("./oddsObject")

class OddsAggregator {
  constructor(horses, odds) {
    this.allHorses = changeWhiteSpace(horses);
    this.allOdds = odds
  }

  horseNames() {
    return this.allHorses;
  }

  compileOdds() {
    return (createOddsArray(this.allHorses, this.allOdds))
  }
  
}

function createOddsArray(allHorses, allOdds) {
  let compiledOdds = []
  for (i = 0; i < allHorses.length; i++) {
    compiledOdds[i] = new oddsObject(allHorses[i], allOdds[i])
  }
  return compiledOdds
}


function changeWhiteSpace(horses) {
  return ( horses.map(horse => horse.replace(/ /g, "_")) )
}


module.exports = OddsAggregator;

