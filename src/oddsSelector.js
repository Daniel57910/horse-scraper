class oddsSelector {

  constructor() {
    this.oddsData = [];
  }

  findOdds (data, htmlClass, htmlTag) {
    var oddsArray = [];
    this.oddsData = data(htmlClass);
    for (let i = 0; i < this.oddsData.length; i++) {
      getTheOdds(this.oddsData[i], oddsArray);
    }
    return oddsArray;
  }

}

function getTheOdds(element, oddsArray) {
  currentData = [];
  for (let i = 0; i < 23; i++) {
    currentData.push(element.children[i].next.attribs["data-o"]);
  }
  oddsArray.push(currentData);
}


module.exports = oddsSelector;