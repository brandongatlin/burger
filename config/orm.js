const connection = require("./connection.js");

var orm = {
  all: function(cb) {
    connection.query("SELECT * FROM burgers;", function(err, res) {
      if (err) {
        throw (err);
      }

      cb(res);

      // return res;
    }); //end connection . query select all
  }, // end find all function

  insertOne: function(table, cols, vals, cb) {
    // Construct the query string that inserts a single row into the target table
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    // console.log(queryString);

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