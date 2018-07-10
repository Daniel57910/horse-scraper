const siteSchema = require("../models/siteSchema");

class htmlSaver {
  saveToDatabase (parsedDataArray) {
    saveStringifiedData(JSON.stringify(parsedDataArray));
  } 
}

function saveStringifiedData(dataForSaving) {
  let siteSaver = new siteSchema({
    siteData: dataForSaving
  });
  siteSaver.save(function (error, data) {
    error ? console.log(error) : console.log("DATA SUCCESSFULLY SAVED == " + data)
  });
}

module.exports = htmlSaver;

