const mongoose = require("mongoose");

const trailScema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  mountain: { type: String, required: true },
  location: { type: String, required: true },
  length: { type: String, required: true },
  time: { type: String, required: true },
  imageUrl: { type: String, required: true }
});

module.exports = mongoose.model("Trail", trailScema);