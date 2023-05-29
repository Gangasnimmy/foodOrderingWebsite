const mongoose = require("mongoose");

// Defining the schema for restaurant details
const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  openingTime: {
    type: String,
    required: true,
  },
  closingTime: {
    type: String,
    required: true,
  },
});

// Create the restaurant model
const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
