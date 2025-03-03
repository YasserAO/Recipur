const express = require("express");
const router = express.Router();

router.get("*", (req, res) => {
  res.render("./pages/index.ejs", {
    pageTitle: "Recipur 404",
    content: "notfound.ejs",
  });
});

router.get("/home", (req, res) => {
  res.redirect("/");
});

module.exports = router;
