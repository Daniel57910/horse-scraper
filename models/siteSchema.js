var mongoose = require('mongoose');

var siteSchema = mongoose.Schema({
  siteData: { type: String,}
});

var siteData = mongoose.model("sample_site", siteSchema);
module.exports = siteData;