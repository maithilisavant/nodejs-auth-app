
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/maithiligoal", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.on("error", (err) => {
  console.log("Connection error in Mongoose: " + err.message);
});

mongoose.connection.once("open", () => {
  console.log("Connection error in MongoDB");
});

require("./models/User");

const app = require("./app");

const server = app.listen(8080, () => {
  console.log("Server listening on port 8080");
});

const jwt = require("jwt-then");

const User = mongoose.model("User");