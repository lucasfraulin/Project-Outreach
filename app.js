const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// about us
app.get("/about-us", function(req,res){
  res.render("about-us");
})


// root route
app.get("/", function(req,res){
  res.render("home");
});


// listening on local host port 3000
app.listen(3000, function(){
  console.log("Server running on port 3000");
});
