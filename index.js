const express = require("express");
const app = express();
const mongoose = require('mongoose');

const config =require('./config/database');
const path = require("path");
mongoose.Promise = global.Promise;


mongoose.connect(config.uri,(err)=>{
	if(err){
	console.log('Could NOT connect to database',err);
	}else{
	//console.log(config.secret);
	console.log('connected to database: '+config.db);
	}
}); 
//'mongodb://localhost/test', { useMongoClient: true }


app.use(express.static(__dirname+ '/client/dist'));
// respond with "hello world" when a GET request is made to the homepage
app.get('*', function (req, res) {
 // res.send('<h1>hello world to MEAN Stack Development</h1>');
 res.sendFile(path.join(__dirname+ '/client/dist/index.html'));
});

app.listen(3000, ()=>
{
	console.log("listening to port 3000");
});