const express = require("express");
const { registerUser, authUser } = require("../controllers/userController");

// instance of router
const router = express.Router();

// for register
router.route("/").post(registerUser);
// for login
router.post('/login' , authUser)

module.exports = router;
