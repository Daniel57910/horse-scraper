function dataSelector() {
  this.savedString = [];
}

dataSelector.prototype.selectHTML = function(data, htmlType) {
  "use strict";
  this.savedString = data(".top-row").find("a");
  console.log(this.savedString);
}

module.exports = dataSelector;