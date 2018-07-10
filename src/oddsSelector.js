class oddsSelector  {

  constructor() {
    this.oddsData = [];
    this.oddsArray = [];
  }

  findOdds (data, htmlClass, htmlTag) {
    this.oddsData = data(htmlClass);
    for (let i = 0; i < this.oddsData.length; i++) {
      getTheOdds(this.oddsData[i], this.oddsArray);
    }
    return this.oddsArray;
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