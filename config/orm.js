const connection = require( "./connection.js" );

// function selectAll() {
//
//   connection.query( "SELECT * FROM burgers;", function( err, results ) {
//
//     if ( err ) {
//       throw ( err );
//     }
//
//   } ); //end connection . query select all
//
// } // end selectAll function




var orm = {

  findOne: function() {
    connection.query( "SELECT * FROM burgers;", function( err, results ) {

      if ( err ) {
        throw ( err );
      }
    } ); //end connection . query select all
  } // end find one function
} // end orm
module.exports = orm;