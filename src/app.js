const express = require("express");

const app = express();

app.use(express.json());

const texts = [];

app.post("/text", (req, res) => {
  const { text } = req.body;

  texts.push(text);

  res.status(201).json({
    message: "text stored",
    texts,
  });
});

app.get("/text", (req, res) => {
  res.json(texts);
});

module.exports = app;