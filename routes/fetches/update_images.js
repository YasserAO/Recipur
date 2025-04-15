require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");

const APP_ID = process.env.APP_ID;
const APP_KEY = process.env.APP_KEY;

router.post("/update", (req, res) => {
  const { uris } = req.body;
  const query = uris.map((uri) => `uri=${encodeURIComponent(uri)}`).join("&");
  console.log(query);

  if (query !== "") {
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2/by-uri?${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      )
      .then((ress) => {
        hit = ress.data.hits;
        res.send(hit);
      })
      .catch((err) => {
        console.log(err.message);
        res.sendStatus(404);
      });
  }
});

module.exports = router;
