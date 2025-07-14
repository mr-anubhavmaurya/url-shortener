const express = require("express");
const router = express.Router();
const {
  generateNewShortURL,
  getRedirectedURL,
  getAnalytics,
} = require("../controllers/url");

router.post("/", generateNewShortURL);
router.get("/:shortId", getRedirectedURL);
router.get("/analytics/:shortId", getAnalytics);

module.exports = router;
