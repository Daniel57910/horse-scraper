class dataSelector {

  constructor() {
    this.savedString = [];
    this.savedData = [];
  }

  selectHTML(data, htmlClass, htmlTag) {
    "use strict";
    this.savedString = data(htmlClass).find(htmlTag);
    for (let i = 0; i < this.savedString.length; i++) {
      this.savedData.push(this.savedString[i].children[0].data);
    }
    return this.savedData;
  }
  
}

module.exports = dataSelector;