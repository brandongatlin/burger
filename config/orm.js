const connection = require("./connection.js");

var orm = {
  all: function(cb) {
    connection.query("SELECT * FROM burgers;", function(err, res) {
      if (err) {
        throw (err);
      }
      cb(res);
    }); //end connection . query select all
  }, // end find all function

  insertOne: function(table, cols, vals, cb) {

    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    // Perform the database query
    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      // Return results in callback
      cb(result);
    });
  },
}; // end orm

module.exports = orm;