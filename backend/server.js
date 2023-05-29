const express = require("express");

const db = require("./db");

const food = require("./models/FOOD_SCHEMA");
const user = require("./models/USER_SCHEMA");
const restaurant = require("./models/RESTAURANT_SCHEMA");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server working");
});

const port = process.env.PORT || 8000;

app.listen(port, () => "server running on port 8000");
