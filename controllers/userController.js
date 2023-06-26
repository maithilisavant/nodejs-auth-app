const mongoose = require("mongoose");
const User = mongoose.model("User");
const sha256 = require("js-sha256");
const jwt = require("jwt-then");
const salt = 'qoeldchdshtg';
const secret = 'qhjsdcryhgth';

exports.register = async (req, res) => {
  const {email, password } = req.body;
  if(!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email)) throw "Enter Valid Email!!"
  if (password.length < 6) throw "Password must be atleast 6 characters long.";

  const isExists = await User.findOne({
    email,
  });

  if (isExists) throw "User already exits.";

  const user = new User({
    email,
    password: sha256(password+salt),
  });

  await user.save();

  res.json({
    message: "[" + email + "] you have been registered successfully!",
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    email,
    password: sha256(password+salt),
  });

  if (!user) throw "Incorrect Email and Password.";

  const token = await jwt.sign({ id: user.id }, secret);

  res.json({
    message: "Signin succeccful!",
    token,
  });
};
