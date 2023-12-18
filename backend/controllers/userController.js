const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");

// Registeration API
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  // throw error if not given by user
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the fields!");
  }

  // checking if the user exist in database or not
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists!");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create the User");
  }
});


// Login API
const authUser = asyncHandler(async ( req , res ) => {
    const { email , password } = req.body

    const user = await User.findOne({ email })

    // if user exists and the password matches with what they entered!
    if ( user && (await user.matchPassword(password)) ) {
        res.json({
            _id : user._id , 
            name : user.name , 
            email : user.email , 
            pic : user.pic , 
            token : generateToken(user._id)
        })
    }   else {
        res.status(401);
        throw new Error("Invalid Email or Password");
    }
})

module.exports = { registerUser , authUser };
