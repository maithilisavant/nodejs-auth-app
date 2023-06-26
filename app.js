const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Setup Cross Origin
app.use(require("cors")());

//Bring in the routes
app.use("/user", require("./routes/user"));

//Setup Error Handlers
const errorHandlers = require("./handlers/errorHandlers");
app.use(errorHandlers.notFound);
app.use(errorHandlers.mongoseErrors);
app.use(errorHandlers.globalErrors);

module.exports = app;
