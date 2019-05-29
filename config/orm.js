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
function translateSql(ob) {
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
  selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (error, res) {
      if (error) {
        throw error;
      }
      cb(res);
    });
  },
  /*
  createOne: function (table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += (vals.length);
    queryString += ") ";
*/
    createOne: function (table, cols, vals, cb) {
    var queryString = 
    "INSERT INTO " + 
    table + 
    " (" + 
    cols.toString() + 
    ") " + 
    "VALUES (" + 
    printQuestionMarks(vals.length) +  
    ") "; 

    console.log(queryString);

    connection.query(queryString, vals, function (error, res) {
      if (error) {
        throw error;
      }

      cb(res);
    });
  },  //closes createOne function

  updateOne: function (table, objColumnValues, condition, cb) {
    var queryString = "UPDATE " + table + 
    " SET " + translateSql(objColumnValues) + 
    " WHERE " + condition;

    console.log(queryString);
    connection.query(queryString, vals, function (error, res) {
      if (error) {
        throw error;
      }

      cb(res);
    }); 
  }, //closes updateOne statement

  // deleteOne on burgers.js/models line 21, 22
  deleteOne: function (table, condition, cb) {
    var queryString = "DELETE FROM " + table + 
    " WHERE " + condition;

    console.log(queryString);
    connection.query(queryString, vals, function (error, res) {
      if (error) {
        throw error;
      }

      cb(res);
    }); 
  }, //closes deleteOne statement

};  //closes var orm statement

// Export the orm object for the model (controllers.js).
module.exports = orm;
