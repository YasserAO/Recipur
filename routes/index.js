const express = require("express");
const router = express.Router();

const homeRouter = require("./route_home.js");
const aboutRouter = require("./route_about.js");
const browseRouter = require("./route_browse.js");
const planRouter = require("./route_favorite.js");
const SearchQuery = require("./fetches/route_search.js");
const notfound = require("./notfound.js");

router.use(homeRouter);
router.use(aboutRouter);
router.use(browseRouter);
router.use(planRouter);
router.use(SearchQuery);
router.use(notfound);

module.exports = router;
