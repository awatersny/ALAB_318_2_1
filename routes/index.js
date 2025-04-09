const sthChars = require("../models/data")
const express = require("express")
// const characterRoutes = require("/characters")
const router = express.Router()

router.route("/").get((req, res) => {
  const options = {
    title: "Welcome",
    content:
      "Now I am using ejs",
    link: "Here is a list of Sonic characters."
  };

  res.render("index", options);
});

router.route("/characters").get((req, res) => {
  const options = {
    title: "Sonic Characters",
    characters: sthChars
  };

  res.render("characters", options);
});

module.exports = router;