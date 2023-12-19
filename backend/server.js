const express = require("express");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");

// connecting to database
connectDB();

const app = express();

// for accepting JSON Data
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

// Error Handling API
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 8081;

app.listen(PORT, console.log(`Server started on ${PORT} Port`.yellow.bold));
