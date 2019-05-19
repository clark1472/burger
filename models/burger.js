// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.create("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };
  $(".delete-burger").on("click"), function(event) {
    var id = $(this).data("id");
  
    //Send the DELETE request.
    $.ajax("api/burgers/" + id, {
      type: "DELETE"
    }).then
      function() {
        console.log("deleted burger", id);
        //Reload the page to get the updated list
        location.reload();
      };
    update: function(objColVals, condition, callback) {
      orm.update("burgers",objColVals, condition, function(res) {
        callback(res);
      });
    };
  
    delete: functions(condition, callback) {
      orm.delete("burgers", condition, function(res) {
        callback(res);
      });
    }
  };
  
  // Export the database functions for the controller (burgers_controller.js).
  module.exports = burger;
  