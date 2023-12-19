const asyncHandler = require("express-async-handler");
const Chat = require("../models/chatModel");
const User = require("../models/userModel");

// responsible for creating and fetching one - one chat
const accessChat = asyncHandler(async (req, res) => {
  // user sent the userID for checking if chat exists
  const { userId } = req.body;

  // userID not sent
  if (!userId) {
    console.log("UserId param not sent with request");
    return res.sendStatus(400);
  }

  // checking if the chat exists with the user
  var isChat = await Chat.find({
    isGroupChat: false,
    $and: [
      { users: { $elemMatch: { $eq: req.user._id } } },
      { users: { $elemMatch: { $eq: userId } } },
    ],
  })
    .populate("users", "-password")
    .populate("latestMessage");

    isChat = await User.populate(isChat , {
        path : 'latestMessage.sender' , 
        select : "name pic email"
    })

    if( isChat.length > 0 ) {
        res.send( isChat[0] );
    }   else {
        // create a new Chat of the users
        var chatData = {
            chatName : "sender" , 
            isGroupChat : false , 
            users : [ req.user._id , userId ]
        }

        // query and saving it into the database
        try {
            const createdChat = await Chat.create(chatData);

            const FullChat = await Chat.findOne({ _id : createdChat._id }).populate("users" , "-password");

            res.status(200).send(FullChat);
        } catch (error) {
            res.status(400);
            throw new Error(error.message);
        }
    }
});

module.exports = { accessChat };