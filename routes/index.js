const express = require("express")
const router = express.Router()

router.use((req, res, next) => {
  console.log("User Request Time: ", Date.now())
  next()
})

router.route("/").get((req, res) => {
  const options = {
    title: "Welcome",
    content:
      "Now I am using ejs"
  };

  res.render("index", options);
});

module.exports = router;