const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const htmlRoutes = require("./routes/htmlroutes.js")

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
  useFindAndModify: false
});
// my routes --------------------------------//
app.use(htmlRoutes);




// app.get('*',)


//-----------------------------------//
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});