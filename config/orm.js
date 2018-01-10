const connection = require("./connection.js");

var orm = {
  all: function(cb) {
    connection.query("SELECT * FROM burgers;", function(err, res) {
      if (err) {
        throw (err);
      }
      console.log("query is", res);

      cb(res);

      // return res;
    }); //end connection . query select all
  } // end find all function
}; // end orm

module.exports = orm;