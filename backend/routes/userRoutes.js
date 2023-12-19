const express = require("express");
const { registerUser, authUser, allUsers } = require("../controllers/userController");

// instance of router
const router = express.Router();

// for register
router.route("/").post(registerUser);
// for login
router.post('/login' , authUser)
// User Searching API
router.route("/").get(allUsers)

module.exports = router;
