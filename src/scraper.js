let cheerio = require('cheerio');

function Scraper() {
  this.unformattedString;
  this.cheerio = require('cheerio');
}

Scraper.prototype.addData = function(data) {
  this.unformattedString = data;
}

Scraper.prototype.formatString = function() {
  return this.unformattedString.text();
}

module.exports = Scraper;