const cheerio = require('cheerio');

function Scraper() {
  this.unformattedString;
  this.formattedString;
}

Scraper.prototype.addData = function(data) {
  this.unformattedString = data;
}

Scraper.prototype.formatString = function() {
  this.formattedString = cheerio.load(this.unformattedString).text();
}

module.exports = Scraper;