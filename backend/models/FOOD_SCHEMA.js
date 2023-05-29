const mongoose = require("mongoose");

// Defining the schema for food
const foodSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stars: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

//Create the food model
const food = mongoose.model("foods", foodSchema);

module.exports = food;
