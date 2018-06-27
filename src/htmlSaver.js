const siteSchema = require("../models/siteSchema");

function htmlSaver() {
}

htmlSaver.prototype.saveToDatabase = function(parsedDataArray) {
  let data = JSON.stringify(parsedDataArray);
  this._saveStringifiedData(data);
} 

htmlSaver.prototype._saveStringifiedData = function(dataForSaving) {
  siteSaver = new siteSchema({
    siteData: dataForSaving
  });
  siteSaver.save(function(error, data) {
    error ? console.log(error) : console.log("DATA SUCCESSFULLY SAVED == " + data)
  });
}

module.exports = htmlSaver;