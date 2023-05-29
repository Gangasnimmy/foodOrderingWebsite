const express = require("express");

const db = require("./db");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server working");
});

const port = process.env.PORT || 8000;

app.listen(port, () => "server running on port 8000");
