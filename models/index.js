var mongoose = require("mongoose"); 

//in mongo you write: use country_dev
mongoose.connect("mongodb://localhost/country_dev"); 
mongoose.set("debug", true); 

module.exports.Country = require("./country"); 