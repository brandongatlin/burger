// const ORM = require("./orm.js");

var userBurger;

// $( "#submit" ).on( "click", function() {
//   userBurger = $( "#burger-input" ).val().trim();
//   console.log( userBurger );
//
// } );

var burger = {
  all: function( cb ) {
    orm.all( "burgers", function( res ) {
      cb( res );
    } );
  }
}


//create the code that will call the ORM functions using burger specific input for the ORM
//export this stuff above