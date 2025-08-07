const express = require("express");
const router = express.Router();

// Import the auth controller
const { login, logout, signup } = require("../controllers/auth.controllers");

// Define the login route
router.get("/login", login);
router.get("/logout", logout);
router.get("/signup", signup);

module.exports = router;
