const cheerio = require('cheerio');
var htmlSelector = require('./htmlSelector.js');

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
  htmlParser = new htmlSelector();
  this.savedString = htmlParser.selectHTML(this.formattedString, data);
}

module.exports = Scraper;