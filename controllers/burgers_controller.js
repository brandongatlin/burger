const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function(req, res) {
  console.log("route is getting hit");
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    // res.render(hbsObject);
    console.log("hbs object is", hbsObject);
    res.render("index", hbsObject);
  });
});

module.exports = router;