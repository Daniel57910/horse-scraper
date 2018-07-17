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
    return createOddsObject(this.allHorses, this.allOdds)
  }
  
}

function createOddsObject(allHorses, allOdds) {
  let compiledOdds = []
  for (let i in allHorses) {
    this.compiledOdds.push(new oddsObject(allHorses[i], allOdds[i]))
  }
  return compiledOdds
}


function changeWhiteSpace(horses) {
  return ( horses.map(horse => horse.replace(/ /g, "_")) )
}


module.exports = OddsAggregator;

