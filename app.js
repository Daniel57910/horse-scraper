let axios = require('axios');
let cheerio = require('cheerio');
let fs = require('fs');
var mongoose = require('mongoose');
var siteSchema = require("./models/siteSchema");
console.log(siteSchema);
mongoose.connect('mongodb://localhost:27017/scraper_v1');

axios.get('http://localhost:9000/')
  .then((response) => {
    if (response.status === 200) {
      console.log(response.data);
      let a = cheerio.load(response.data);
      savedData = new siteSchema({
        siteData: a.text()
      });
      savedData.save(function(err, data) {
         if (err) {
           var error = 'User already exist';
           console.log(error);
         } 
         else {
           console.log("SAVED\n" + savedData);
         }
      });
    }
  }
);


