const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "Please enter your Name",
    },
    email: {
      type: String,
      required: "Please enter your Email Id",
    },
    password: {
      type: String,
      required: "Please enter your Password",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
