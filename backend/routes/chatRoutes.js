const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const { accessChat, fetchChats } = require("../controllers/chatControllers");

const router = express.Router();

// for accessing the chat and creating the chat
router.route("/").post(protect, accessChat);
router.route('/').get(protect , fetchChats);

// for creation of the group
// router.route('/group').post(protect , createGroupChat);

// for renaming a group
// router.route('/rename').put(protect , renameGroup);

// for removing a person from a group
// router.route('/groupremove').put(protect , removeFromGroup);

// for adding someone to a group
// router.route('groupadd').put(protect , addToGroup);

module.exports = router;
