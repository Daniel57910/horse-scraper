const cheerio = require('cheerio');
const htmlSelector = require('./htmlSelector.js');

function Scraper() {
  this.unformattedString;
  this.formattedString;
  this.savedString = [];
}

Scraper.prototype.addData = function(data) {
  this.unformattedString = data;
}

Scraper.prototype.formatString = function() {
  this.formattedString = this._loadHTML();
}

Scraper.prototype._loadHTML = function() {
  return cheerio.load(this.unformattedString);
}

Scraper.prototype.selectHTML = function(data) {
  this.formattedString(data).each((i, el) => {
    console.log("EL IS");
    console.log(el.children[0].data);
    this.savedString.push(el.children[0].data);
  });
}

module.exports = Scraper;