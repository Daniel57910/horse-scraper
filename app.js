const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const mongoose = require('mongoose');
const scraper = require('./src/scraper.js');
const htmlSaver = require('./src/htmlSaver.js');
const siteSchema = require("./models/siteSchema");
var webScraper = new scraper();
var databaseSaver = new htmlSaver();
console.log(databaseSaver);

console.log("RUNNING ON DOCKER");
axios.get('https://cryptic-spire-74200.herokuapp.com/')
  .then((response) => {
    webScraper.addData(response.data);
  })
  .then(() => {
    webScraper.formatString();
  }) 
  .then(() => {
    webScraper.selectHTML("li");
    console.log(webScraper.savedString);
  })
  
  


