const express = require("express");
const mongoose = require("mongoose");
const htmlRoutes = require("./routes/htmlroutes.js");
const workoutApi = require("./routes/workoutApi.js");
const router = express();
const PORT = process.env.PORT || 3000;
//-----------//
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.use(express.static("public"));
//-----------//
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});
// my routes --------------------------------//
router.use(workoutApi);
router.use(htmlRoutes);

//-----------//
router.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});