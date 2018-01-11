const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const routes = require("./controllers/burgers_controller.js")
const path = require("path");
const app = express();

var exphbs = require("express-handlebars");

const port = 3000;

//this makes my handlbars.index not show up; my css does show up though
app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));

app.set("view engine", "handlebars");

app.use("/", routes);

app.listen(port);

console.log("listening on port:", port);