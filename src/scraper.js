const cheerio = require('cheerio');

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
  return cheerio.load(this.unformattedString).text();
}

Scraper.prototype.selectHTML = function(data) {
  /*this.formattedString(data).each(function(el, index) {
    this.savedString.push(el);
  });*/
  console.log(this.formattedString);
}

module.exports = Scraper;