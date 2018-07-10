const siteSchema = require("../models/siteSchema");

class htmlSaver {

  saveToDatabase (parsedDataArray) {
    let data = JSON.stringify(parsedDataArray);
    saveStringifiedData(data);
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

