require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.on("error", (err) => {
  console.log("Mongoose Connection ERROR: " + err.message);
});

mongoose.connection.once("open", () => {
  console.log("MongoDB Connected!");
});

require("./models/User");

const app = require("./app");

const server = app.listen(8080, () => {
  console.log("Server listening on port 8080");
});

const jwt = require("jwt-then");

const User = mongoose.model("User");