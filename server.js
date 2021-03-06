// Dependencies
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// connect to database
mongoose.connect(
	process.env.DATABASE_URI || "mongodb://localhost/workout-trakcer",
	{ useNewUrlParser: true, useUnifiedTopology: true }
);

require("./models");

const app = express();

// Set our port to 8080
const PORT = process.env.PORT || 3000;

// expose the static  asset folder
app.use(express.static("public"));
app.use(bodyParser.urlencoded()); // parse body for form data type
app.use(bodyParser.json()); // parse body for json data type

// app.set("views", "./views");
// app.set("view engine", "pug");

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Starts our server
app.listen(PORT, function () {
	console.log("Server is listening on PORT: " + PORT);
});
