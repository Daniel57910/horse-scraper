const siteSchema = require("../models/siteSchema");

class htmlSaver {
  saveToDatabase (arrayOfHorses) {
    for (i = 0; i < arrayOfHorses.length; i++) {
      saveStringifiedData(arrayOfHorses[i])
    }
  } 
}

function saveStringifiedData(dataForSaving) {
  let siteSaver = new siteSchema({
    horseName: dataForSaving.name,
    horseOdds: JSON.stringify(dataForSaving.odds)
  });
  siteSaver.save(function (error, data) {
    error ? console.log(error) : console.log("DATA SUCCESSFULLY SAVED == " + data)
  });
}

module.exports = htmlSaver;

