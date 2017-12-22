const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
// const connection = require("connection");

const app = express();

const port = 3000;

app.listen(port);

console.log("listening on port:", port);