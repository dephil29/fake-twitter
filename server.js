const express = require("express");
const app = express();

//Set view engine to ejs-first
app.set("view engine", "ejs");

//index.page
app.get("/", function(req, res){
  const things = [
  {
    "created_at": "Thu Jun 22 21:00:00 +0000 2017",
    "id": 1,
    "text":
      "Creating a Grocery List Manager Using Angular, Part 1: https://t.co/xFox78juL1",
    "user": {
      "id": 1,
      "name": "SitePoint JavaScript",
      "screen_name": "SitePointJS",
      "location": "Melbourne, Australia",
      "description": "Keep up with JavaScript tutorials, tips, tricks and articles at SitePoint.",
      "followers_count": 2145,
      "friends_count": 18,
      "listed_count": 328,
      "created_at": "Wed Aug 22 02:06:33 +0000 2012",
      "favourites_count": 57,
      "utc_offset": 43200,
      "time_zone": "Wellington"
    }
  }
]

  const tagLine = "Like the real one but greyer...";

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
