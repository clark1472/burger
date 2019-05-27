// Import MySQL connection.
var connection = require("../config/connection");

// turn questionMarks into array into string.
function printQuestionMarks(number) {
  var array = [];
  for(var i = 0; i, number; i++) {
    array.push("?");
  }
  return array.toString();
} //closes printQuestionMarks function.

//helper that will convert a string into an sql readable query.
function translateSql(object) {
  var array = [];
  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if(typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'" ;
      }
      array.push(key + "=" + value)
    }
  }
  return array.toString();
}


// Object for all our SQL statement functions.
var orm = {
  all: function (tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  createOne: function (table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },  //closes createOne function

  updateOne: function (table, objColumnValues, condition, cb) {
    var queryString = "UPDATE " + table + 
    " SET " + translateSql(objColumnValues) + 
    " WHERE " + condition;

    console.log(queryString);
    connection.query(queryString, vals, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    }); 
  }, //closes updateOne statement

  destroy: function (table, condition, cb) {
    var queryString = "DELETE FROM " + table + 
    " WHERE " + condition;

    console.log(queryString);
    connection.query(queryString, vals, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    }); 
  }, //closes deleteOne statement

};  //closes var orm statement

// Export the orm object for the model (controllers.js).
module.exports = orm;
