function dataSelector() {
  this.savedString = [];
}

dataSelector.prototype.selectHTML = function(data, htmlType) {
  data(htmlType).each((i, el) => {
    console.log("EL IS");
    console.log(el.children[0].data);
    this.savedString.push(el.children[0].data);
  });
}

module.exports = dataSelector;