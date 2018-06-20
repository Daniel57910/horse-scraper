let axios = require('axios');
let cheerio = require('cheerio');
let fs = require('fs');


axios.get('http://localhost:9000/')
  .then((response) => {
    if (response.status === 200) {
      console.log(response.data);
      a = cheerio.load(response.data);
      console.log(a.text());
    }
  }
);


