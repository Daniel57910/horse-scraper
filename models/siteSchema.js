var mongoose = require('mongoose');

var siteSchema = mongoose.Schema({
  horseName: { type: String },
  horseOdds: { type: String },

});

var siteData = mongoose.model("all_horses", siteSchema);
module.exports = siteData;