const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide admin email"],
  },
  password: {
    type: Number,
    required: [true, "Please provide admin password"],
  },
});

const Admin = mongoose.model("admin", adminSchema);

module.exports = Admin;
