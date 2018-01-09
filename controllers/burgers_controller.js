const express = require( "express" );

const router = express.Router();

// const burger = require( "../models/burger.js" );


router.get( "/", function( req, res ) {
  console.log( "route is getting hit" );
  res.send( "getting hit" );
  // res.render( "index", {
  // data
  //   } );
} );

module.exports = router;