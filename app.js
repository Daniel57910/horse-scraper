const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const mongoose = require('mongoose');
const scraper = require('./src/scraper.js');
const siteSchema = require("./models/siteSchema");
//mongoose.connect('mongodb://localhost:27017/scraper_v1');

var webScraper = new scraper();
console.log(webScraper);

axios.get('http://localhost:9000/')
  .then((response) => {
    webScraper.addData(response.data);
    console.log(webScraper.unformattedString);
    //console.log(webScraper.unformattedString);
  })
  .then(() => {
    webScraper.formatString();
  }) 
  .then(() => {
    webScraper.selectHTML("li");
    console.log(webScraper.savedString);
  })
  

  


/*savedData = new siteSchema({
        siteData: a.text()
      });
      savedData.save(function(err, data) {
         if (err) {
           var error = 'Error in saving data';
           console.log(error);
         } 
         else {
           console.log("SAVED\n" + savedData);
         }
      });
      */

