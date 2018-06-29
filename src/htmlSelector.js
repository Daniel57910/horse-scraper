function dataSelector() {
  this.savedString = [];
  this.savedData = [];
}

dataSelector.prototype.selectHTML = function(data, htmlType) {
  "use strict";
  this.savedString = data(".top-row").find("a");
  for (let i = 0; i < this.savedString.length; i++) {
   this.savedData.push(this.savedString[i].children[0].data);
  }

  return this.savedData;
}

module.exports = dataSelector;