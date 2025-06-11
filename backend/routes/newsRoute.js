const express = require("express");
const router = express.Router();
const { getAndStoreNews, getLatestNews } = require("../controller/newsController");

router.get("/fetch", getAndStoreNews);
router.get("/latest", getLatestNews);

module.exports = router;
