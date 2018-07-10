const cheerio = require('cheerio');
const htmlSelector = require('./htmlSelector.js');
const oddsSelector = require('./oddsSelector.js'); 
let htmlParser = new htmlSelector();
let oddsParser = new oddsSelector();

class Scraper {
  constructor() {
    this.unformattedString;
    this.formattedString;
    this.savedString = [];
    this.allOdds = [];
  }

  addData(data) {
    this.unformattedString = data;
  }

  formatString () {
    this.formattedString = this._loadHTML();
  }

  _loadHTML() {
    return cheerio.load(this.unformattedString);
  }

  selectHTML (data, type) {
    this.savedString = htmlParser.selectHTML(this.formattedString, data, type);
  }

  findOdds (data, type) {
    this.allOdds = oddsParser.findOdds(this.formattedString, data, type);
  }

}


module.exports = Scraper;