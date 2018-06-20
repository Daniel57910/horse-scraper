function Scraper() {
  this.unformattedString;
}

Scraper.prototype.addData = function(data) {
  this.unformattedString = data;
}

module.exports = Scraper;