const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://Gangadevi:Gangz98@cluster0.gzjkv6r.mongodb.net/FoodZone";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log("Database connected successfully");
});

db.on("error", () => {
  console.log("Database connection failed");
});

module.exports = mongoose;
