// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm");

//export burger, callback all our orm's
var burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    createOne: function(cols, vals, cb) {
      orm.all("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.all("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    },
    deleteOne: function(condition, cb) {
      orm.all("burgers", condition, function(res) {
        cb(res);
      });
    },
  };
  
  // Export the database functions for the controller (burgers_controller.js).
  module.exports = burger;
  