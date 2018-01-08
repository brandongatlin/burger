const connection = require("./connection.js");

function selectAll() {

  connection.query("SELECT * FROM burgers;", function(err, results) {

    if (err) {
      throw (err);
    }

  }); //end connection . query select all

} // end selectAll function








function insertOne() {}








function updateOne() {}

// module.exports = //this object above;