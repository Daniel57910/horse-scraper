function dataSelector() {
  this.savedString = [];
  this.savedData = [];
}

dataSelector.prototype.selectHTML = function(data, htmlClass, htmlTag) {
  "use strict";
  this.savedString = data(htmlClass).find(htmlTag);
  for (let i = 0; i < this.savedString.length; i++) {
   this.savedData.push(this.savedString[i].children[0].data);
  }

  return this.savedData;
}

dataSelector.prototype.findOdds = function(data, htmlClass, htmlTag) {
  "use strict";
  var fs = require('fs');
  console.log("ODDS FOR HORSES = ")
  this.oddsData = data(htmlClass);
  console.log(this.oddsData[0]);
  console.log(this.sampleData);
  debugger;
}

module.exports = dataSelector;