const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide user name"],
  },
  mob: {
    type: Number,
    required: [true, "Please provide user mobile number"],
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
