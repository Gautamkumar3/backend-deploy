const mongoose = require("mongoose");

const mediaSchema = mongoose.Schema({
  facebook: {
    type: String,
    required: [true, "Please provide the companies facebook url."],
  },
  linkdin: {
    type: String,
    required: [true, "Please provide the companies linkdin url."],
  },
  twitter: {
    type: String,
    required: [true, "Please provide the companies twitter url."],
  },
  instagram: {
    type: String,
    required: [true, "Please provide the companies instagram url."],
  },
});

const Media = mongoose.model("media", mediaSchema);

module.exports = Media;
