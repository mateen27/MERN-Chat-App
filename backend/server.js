const express = require('express');
const { chats } = require('./data/data');
require('dotenv').config()

const app = express();

app.get('/' , (req , res) => {
    res.send("ApI is running");
})

app.get('/api/chat' , (req , res) => {
    res.send(chats)
})

app.get('/api/chat/:id' , (req , res) => {
    // finding the chat from the requested paramas by the user
    const singleChat = chats.find( c => c._id === req.params.id )
    res.send(singleChat)
})

const PORT = process.env.PORT || 8081

app.listen(PORT , console.log(`Server started on ${PORT} Port`))