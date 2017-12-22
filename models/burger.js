// const burger = require("./orm.js");

var userBurger;

$("#submit").on("click", function() {
  userBurger = $("#burger-input").val().trim();
  console.log(userBurger);

});


//create the code that will call the ORM functions using burger specific input for the ORM
//export this stuff above