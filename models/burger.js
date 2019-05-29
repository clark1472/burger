// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

//export burger, callback all our orm's
var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables columns and values are arrays.
    createOne: function(cols, vals, cb) {
      orm.createOne("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColumnValues, condition, cb) {
      orm.updateOne("burgers", objColumnValues, condition, function(res) {
        cb(res);
      });
    },
    deleteOne: function(condition, cb) {
      orm.deleteOne("burgers", condition, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (burgers_controller.js).
  module.exports = burger;
  