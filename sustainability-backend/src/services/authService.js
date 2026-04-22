const User = require("../models/User");
const jwt = require("../utils/jwt");

async function register(userData) {
  const existing = await User.findOne({ email: userData.email });
  if (existing) throw new Error("Email already in use");
  return User.create(userData);
}

async function login(email, password) {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid email or password");

  const isValid = await user.validatePassword(password);
  if (!isValid) throw new Error("Invalid email or password");

  return generateToken(user);
}

async function generateToken(user) {
  return jwt.sign({
    id: user._id,
    email: user.email,
  });
}

module.exports = { register, login, generateToken };
