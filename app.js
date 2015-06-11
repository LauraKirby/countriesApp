//REQUIRE 
var express = require("express"),
	app = express(),
	methodOverride = require('method-override'), 
	bodyParser = require("body-parser"), 
	morgan = require("morgan"), 
	db = require("./models"); //you have to specify the path bc it is not in the mondules app




//SET SOME MIDDLEWARE
app.set("view engine", "ejs");  //mkdir views 

app.use(morgan('tiny')); //server-side debugger
app.use(express.static(__dirname + '/public')); 
app.use(bodyParser.urlencoded({extended:true})); 
app.use(methodOverride('_method')); 

//**** Country Routes ******//

//INDEX 
app.get('/countries', function(req, res){
	db.Country.find({}, function(err, countries){
		//handle errors in development
		if (err){
			console.log("ERROR", err);
		}
		console.log(countries); 
		res.render("countries/index", {countries:countries});
	});
});

//NEW - BEFORE SHOW, since we have :id for show, /countries/new would run this function.
app.get('/countries/new', function(req,res){
	res.render("countries/new"); 
});



app.listen(3000, function(){
	console.log("Server is running on port 3000")
})