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
  horses.map(horse => horse.replace(" ", "_"))
}


module.exports = OddsAggregator;