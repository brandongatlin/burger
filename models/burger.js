const orm = require("../config/orm.js");

// $( "#submit" ).on( "click", function() {
//   userBurger = $( "#burger-input" ).val().trim();
//   console.log( userBurger );
//
// } );
var burger = {
  all: function(cb) {
    orm.all(function(res) {
      // console.log("res:", res);

      cb(res);
    });

  }
  // The variables cols and vals are arrays.
  //   create: function(cols, vals, cb) {
  //     orm.create("cats", cols, vals, function(res) {
  //       cb(res);
  //     });
  //   },
  //   update: function(objColVals, condition, cb) {
  //     orm.update("cats", objColVals, condition, function(res) {
  //       cb(res);
  //     });
  //   },
  //   delete: function(condition, cb) {
  //     orm.delete("cats", condition, function(res) {
  //       cb(res);
  //     });
  //   }
};

module.exports = burger;


//create the code that will call the ORM functions using burger specific input for the ORM
//export this stuff above