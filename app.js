require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

let port = process.env.PORT || 3000
const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/rain", (req, res) => {
  res.render("rain");
});

app.get("/fireflies", (req, res) => {
  res.render("fireflies");
});

app.get("/snow", (req, res) => {
  res.render("snow");
});


app.listen(port, function() {
  console.log("Server started on port 3000.");
});
