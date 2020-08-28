const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// about us
app.get("/about-us", function(req,res){
  res.sendFile(__dirname + "/public/about-us.html");
})

// contact us
app.get("/contact-us", function(req,res){
  res.sendFile(__dirname + "/public/contact-us.html");
})

// get involved
app.get("/get-involved", function(req,res){
  res.sendFile(__dirname + "/public/get-involved.html");
})

// projects
app.get("/projects", function(req,res){
  res.sendFile(__dirname + "/public/projects.html");
})

// home page or root route
app.get("/", function(req,res){
  res.sendFile(__dirname + "/public/index.html");
});


// listening on local host port 3000
app.listen(3000, function(){
  console.log("Server running on port 3000");
});
