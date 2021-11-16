const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const User = require("./models/workout");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbExample", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
// my routes --------------------------------//
//app.use
// app.get('*',)

app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});
//-----------------------------------//
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});