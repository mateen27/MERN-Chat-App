const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique : true
    },
    password: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
      required: true,
      default:
        "https://i.pinimg.com/564x/55/32/21/55322103501339cc4177683e55ad3dec.jpg",
    },
  },
  { timestamps: true }
);

userSchema.methods.matchPassword = async function ( enteredPassword ) {
  return await bcrypt.compare(enteredPassword , this.password)
}

userSchema.pre('save' , async function (next) {
  if(!this.isModified) {
    next()
  }

  // generate a new password
  const salt = await bcrypt.genSalt(15);
  this.password = await bcrypt.hash(this.password , salt);
})

const User = mongoose.model("User", userSchema);

module.exports = User;
