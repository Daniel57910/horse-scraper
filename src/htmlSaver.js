const siteSchema = require("../models/siteSchema");
const mongoose = require('mongoose');

function htmlSaver() {
}

htmlSaver.prototype.saveToDatabase = function(parsedDataArray) {
  console.log("SAVE ME TO DATABASE");
} 

module.exports = htmlSaver;