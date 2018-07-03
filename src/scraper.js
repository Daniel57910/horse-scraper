const cheerio = require('cheerio');
const htmlSelector = require('./htmlSelector.js');
const oddsSelector = require('./oddsSelector.js'); 
let htmlParser = new htmlSelector();


function Scraper() {
  this.unformattedString;
  this.formattedString;
  this.savedString = [];
  this.allOdds = [];
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

Scraper.prototype.selectHTML = function(data, type) {
  this.savedString = htmlParser.selectHTML(this.formattedString, data, type);
}

Scraper.prototype.findOdds = function(data, type) {
  this.allOdds = htmlParser.findOdds(this.formattedString, data, type);
}

module.exports = Scraper;