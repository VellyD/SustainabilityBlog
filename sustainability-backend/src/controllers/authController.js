const authService = require("../services/authService");

async function register(req, res) {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = await authService.register({
      firstName,
      lastName,
      email,
      password,
    });
    const token = await authService.generateToken(user);
    res.status(201).json({ token, user: { id: user._id, email: user.email } });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    res.json({ token });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
}

async function logout(req, res) {
  res.json({ message: "Logged out successfully" });
}

module.exports = { register, login, logout };
