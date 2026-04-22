const jwt = require("jsonwebtoken");
const util = require("util");
require("dotenv").config();

const SECRET = process.env.JWT_SECRET;

const signRaw = util.promisify(jwt.sign);
const verifyRaw = util.promisify(jwt.verify);

exports.sign = (payload) => signRaw(payload, SECRET, { expiresIn: "7d" });
exports.verify = (token) => verifyRaw(token, SECRET);
