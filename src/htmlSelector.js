function dataSelector() {
  this.savedString = [];
}

dataSelector.prototype.selectHTML = function(data, htmlType) {
  data(htmlType).each((i, el) => {
    this.savedString.push(el.children[0].data);
  });
  return this.savedString;
}

module.exports = dataSelector;