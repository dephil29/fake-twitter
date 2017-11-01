const express = require("express");
const app = express();
const things = require("./things.js")

//Set view engine to ejs-first
app.set("view engine", "ejs");

// console.log(things);

//index.page
const tagLine = "Like the real one but greyer...";
app.get("/", function(req, res){


  res.render("pages/index", {
    things: things,
    tagLine: tagLine
  });
});

app.get("/about", function(req, res){
  res.render("pages/about");
});

app.listen(8080, function(){
  console.log("Serving ejs magick on 8080!");
});
