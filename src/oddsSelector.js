function oddsSelector() {
  this.oddsData = [];

}

oddsSelector.prototype.findOdds = function (data, htmlClass, htmlTag) {
  "use strict";
  var fs = require('fs');
  console.log("ODDS FOR HORSES = ")
  this.oddsData = data(htmlClass);
  console.log(this.oddsData[0]);
  console.log(this.sampleData);
  debugger;
}

module.exports = oddsSelector;