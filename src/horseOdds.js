class OddsAggregator {
  constructor(horses, odds) {
    this.allHorses = changeWhiteSpace(horses);
    this.allOdds = odds
  }

  horseNames() {
    return this.allHorses;
  }
}

function changeWhiteSpace(horses) {
  return (horses.map(n => n.replace(/ /g, "_")))
}


module.exports = OddsAggregator;