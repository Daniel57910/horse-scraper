const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const mongoose = require('mongoose');
const scraper = require('./src/scraper.js');
const htmlSaver = require('./src/htmlSaver.js');
var webScraper = new scraper();
var databaseSaver = new htmlSaver();
mongoose.connect("mongodb://localhost:27017/scraper_v1");

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
  .then(()=> {
    databaseSaver.saveToDatabase(webScraper.savedString);
  })
  
  


