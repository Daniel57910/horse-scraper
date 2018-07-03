function oddsSelector() {
  this.oddsData = [];
  oddsArray = [];
}

oddsSelector.prototype.findOdds = function (data, htmlClass, htmlTag) {
  console.log("ODDS FOR HORSES = ")
  this.oddsData = data(htmlClass);
  for (let i = 0; i < this.oddsData.length; i++) {
    getTheOdds(this.oddsData[i]);
  }
  console.log(oddsArray);
}


function getTheOdds(element) {
  currentData = [];
  for (let i = 0; i < 23; i++) {
    currentData.push(element.children[i].next.attribs["data-o"]);
  }
  oddsArray.push(currentData);
}

module.exports = oddsSelector;