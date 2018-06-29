const axios = require('axios');
const mongoose = require('mongoose');
const scraper = require('./src/scraper.js');
const htmlSaver = require('./src/htmlSaver.js');

var webScraper = new scraper();
var databaseSaver = new htmlSaver();
var env = process.env.NODE_ENV || "test";

mongoose.connect(databaseSetup(env));

axios.get('https://www.oddschecker.com/horse-racing/ante-post-racing/national-hunt/summer-cup/winner')
  .then((response)=> {
    webScraper.addData(response.data);
  })
  .then(() => {
    webScraper.formatString();
  })
  .then(() => {
    webScraper.selectHTML(".top-row")
  })
  .then(() => {
    console.log(webScraper.savedString);
    databaseSaver.saveToDatabase(webScraper.savedString);
  })

  function databaseSetup(env) {
    console.log(env);
    return env === 'test' ? "mongodb://localhost:27017/scraper_v1_test" : "mongodb://localhost:27017/scraper_v1";
  }
  

  


