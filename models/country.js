var mongoose = require("mongoose"); 

//MAKE A SCHEMA

var countrySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	}, 
	//another way of writing this mongoose schema type
	flag: {
		type: String, 
	},
	capital: String,
	population: Number, 
});

//MAKE A MODEL

var Country = mongoose.model("Country", countrySchema); 

//EXPORT OUR MODEL

module.exports = Country; 