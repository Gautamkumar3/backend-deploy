const mongoose = require("mongoose");
require("dotenv").config();

const Connect = () => {
  return mongoose.connect(`${process.env.URL}`);
};

module.exports = Connect;
