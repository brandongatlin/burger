const express = require("express");

const app = express();

const burger = require("./burger.js");

//routes here
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));

app.set("view engine", "handlebars");

var mysql = require("mysql");

app.get("/", function(req, res) {
  connection.query("SELECT * FROM burgers", [req.body.burgers], function(err, result) {
    if (err) {
      return res.status(500).end();
    }

    res.render("index.html", {
      burgers: data
    });
  });
});