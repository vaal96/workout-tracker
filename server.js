const express = require("express");
const mongoose = require("mongoose");
const htmlRoutes = require("./routes/htmlroutes.js")
const path = require("path");
const router = express();
const PORT = process.env.PORT || 3000;
//-----------//
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.use(express.static("public"));
//-----------//
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbExample", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});
// my routes --------------------------------//
router.use(htmlRoutes);

router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/stats.html'));
});
//-----------//
router.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});