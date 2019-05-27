var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

// Parse request body as JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//set up express-handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//setting up routes
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);
//app.use("/update", routes);
//app.use("/create", routes);

 // Start our server so that it can begin listening to client requests.
 app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});


