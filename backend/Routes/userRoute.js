const express = require("express");
const { registerUser, login, logout } = require("../Controller/userController");
const { isAuthenticated } = require("../middleware/auth");
const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(login);
router.route("/logout").post(logout);

module.exports = router;