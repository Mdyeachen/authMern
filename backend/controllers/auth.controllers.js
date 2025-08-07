const User = require("../models/auth.model");
const asyncWrap = require("../middleware/asyncWrap");
const { BadRequest } = require("../errors");
const bcript = require("bcryptjs");

const login = asyncWrap(async (req, res) => {
  // Handle login logic
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequest("Email and password are required for login.");
  }

  const userExits = await User.findOne({ email });
  if (!userExits) {
    throw new BadRequest("User does not exist with this email.");
  }
});

const logout = asyncWrap((req, res) => {
  // Handle logout logic
  res.send("Logout route");
});

const signup = asyncWrap(async (req, res) => {
  // Handle signup logic
  const { email, username, password, name } = req.body;
  if (!email || !username || !password || !name) {
    throw new BadRequest("All fields are required for signup.");
  }

  const userExits = await User.findOne({ email });
  if (userExits) {
    throw new BadRequest("User already exists with this email.");
  }
  const hashedPassword = await bcript.hash(password, 25);
  const user = await User({
    email,
    username,
    name,
    password,
  });
});

module.exports = {
  login,
  logout,
  signup,
};
