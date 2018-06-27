const siteSchema = require("../models/siteSchema");
const mongoose = require('mongoose');

function htmlSaver() {
}

htmlSaver.prototype.saveToDatabase = function(parsedDataArray) {
  this.stringified = JSON.stringify(parsedDataArray);
} 

module.exports = htmlSaver;