"use strict";

// Basic express setup:

const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


// The in-memory database of tweets. It's a basic object with an array in it.
const db = require("./lib/in-memory-db");


const DataHelpers = require("./lib/data-helpers.js")(db);


require("./lib/date-adjust")();

// The `tweets-routes` module works similarly: we pass it the `DataHelpers` object
// so it can define routes that use it to interact with the data layer.
const tweetsRoutes = require("./routes/tweets")(DataHelpers);

// This mounts the tweets routes after the "/tweets" path prefix:
app.use("/tweets", tweetsRoutes);


app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
