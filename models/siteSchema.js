var mongoose = require('mongoose');

var siteSchema = mongoose.Schema({
  siteData: { type: String },
});

var siteData = mongoose.model("the_horses", siteSchema);
module.exports = siteData;